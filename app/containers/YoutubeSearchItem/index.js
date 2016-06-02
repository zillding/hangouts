/*
 *
 * YoutubeSearchItem
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import mapStateToProps from './selectors';
import mapDispatchToProps from './actions';

import ListItem from 'components/ListItem';
import ListItemControl from 'components/ListItemControl';
import PreviewYoutubePlayer from 'components/PreviewYoutubePlayer';
import YoutubeVideoInfo from 'components/YoutubeVideoInfo';
import SearchPreviewButton from 'components/SearchPreviewButton';
import SearchCancelPreviewButton from 'components/SearchCancelPreviewButton';
import SearchAddLabel from 'components/SearchAddLabel';
import SearchAddButton from 'components/SearchAddButton';

class YoutubeSearchItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peeking: false,
      isAdding: false,
    };
  }

  componentWillReceiveProps({ getIsInPlaylist }) {
    if (getIsInPlaylist(this.props.data)) {
      this.setState({ isAdding: false });
    }
  }

  getMain() {
    const { data } = this.props;

    if (this.state.peeking) {
      return <PreviewYoutubePlayer videoId={data.id.videoId} />;
    }

    return <YoutubeVideoInfo data={data} />;
  }

  getControl() {
    const { peeking, isAdding } = this.state;
    const { data, getIsInPlaylist, disableControl } = this.props;
    const isInPlaylist = getIsInPlaylist(data);

    return (
      <ListItemControl>
        {
          peeking ?
            <SearchCancelPreviewButton onClick={this.handleTogglePeek} /> :
            <SearchPreviewButton onClick={this.handleTogglePeek} />
        }
        {
          isInPlaylist ?
            <SearchAddLabel /> :
            <SearchAddButton
              isAdding={isAdding}
              disabled={disableControl}
              onClick={this.handleAdd}
            />
        }
      </ListItemControl>
    );
  }

  handleTogglePeek = () => this.setState({ peeking: !this.state.peeking })

  handleAdd = () => {
    const { data, onAdd } = this.props;
    this.setState({ isAdding: true });
    onAdd(data);
  }

  render() {
    return (
      <ListItem>
        {this.getMain()}
        {this.getControl()}
      </ListItem>
    );
  }
}

YoutubeSearchItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  disableControl: PropTypes.bool.isRequired,
  getIsInPlaylist: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeSearchItem);
