import {
  sendPlayYoutube,
  sendDeleteVideoItem,
} from 'containers/Youtube/actions';

export default {
  onSelect: sendPlayYoutube,
  onDelete: sendDeleteVideoItem,
};
