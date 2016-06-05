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

  componentWillReceiveProps({ isCurrentPlayingItem }) {
    if (isCurrentPlayingItem !== this.props.isCurrentPlayingItem) {
      this.setState({ isSelecting: false });
    }
  }

  getControl() {
    const {
      disableControl,
      isCurrentPlayingItem,
    } = this.props;
    const { isSelecting, isDeleting } = this.state;

    return (
      <ListItemControl>
        {
          isCurrentPlayingItem ?
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
    const { index, onDelete } = this.props;
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
  index: PropTypes.number.isRequired,
  isCurrentPlayingItem: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlaylistItem);
