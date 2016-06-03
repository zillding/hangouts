import {
  sendPlayYoutube,
  sendDeleteVideoItem,
} from 'containers/Youtube/actions';

export default dispatch => ({
  onSelect: videoId => dispatch(sendPlayYoutube(videoId)),
  onDelete: index => dispatch(sendDeleteVideoItem(index)),
});
