/*
 *
 * YoutubeSearchItem actions
 *
 */

import { sendAddVideoItem } from 'containers/Youtube/actions';

export default dispatch => ({
  onAdd: data => dispatch(sendAddVideoItem(data)),
});
