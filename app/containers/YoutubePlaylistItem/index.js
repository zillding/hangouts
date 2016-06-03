/*
 *
 * YoutubePlaylistItem
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from './actions';
import mapStateToProps from './selectors';

import ListItem from 'components/ListItem';
import ListItemControl from 'components/ListItemControl';
import PlaylistDeleteButton from 'components/PlaylistDeleteButton';
import PlaylistPlayButton from 'components/PlaylistPlayButton';
import YoutubeVideoInfo from 'components/YoutubeVideoInfo';

class YoutubePlaylistItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelecting: false,
      isDeleting: false,
    };
  }

  componentWillReceiveProps({ getIsCurrentPlayingItem }) {
    if (getIsCurrentPlayingItem !== this.props.getIsCurrentPlayingItem) {
      this.setState({ isSelecting: false });
    }
  }

  getControl() {
    const {
      data: { id: { videoId } },
      disableControl,
      getIsCurrentPlayingItem,
    } = this.props;
    const { isSelecting, isDeleting } = this.state;

    return (
      <ListItemControl>
        {
          getIsCurrentPlayingItem(videoId) ?
            null :
            <PlaylistPlayButton
              loading={isSelecting}
              disabled={disableControl}
              onClick={this.handlePlayClick}
            />
        }
        <PlaylistDeleteButton
          loading={isDeleting}
          disabled={disableControl}
          onClick={this.handleDeleteClick}
        />
      </ListItemControl>
    );
  }

  handlePlayClick = () => {
    const { data: { id: { videoId } }, onSelect } = this.props;
    this.setState({ isSelecting: true });
    onSelect(videoId);
  }

  handleDeleteClick = () => {
    const { data: { id: { videoId } }, getIndex, onDelete } = this.props;
    const index = getIndex(videoId);
    this.setState({ isDeleting: true });
    onDelete(index);
  }

  render() {
    return (
      <ListItem>
        <YoutubeVideoInfo data={this.props.data} />
        {this.getControl()}
      </ListItem>
    );
  }
}

YoutubePlaylistItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  disableControl: PropTypes.bool.isRequired,
  getIndex: PropTypes.func.isRequired,
  getIsCurrentPlayingItem: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlaylistItem);
