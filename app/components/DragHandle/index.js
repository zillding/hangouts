/**
*
* DragHandle
*
*/

import React from 'react';

import IconButton from 'material-ui/IconButton';
import DragHandleIcon from 'material-ui/svg-icons/editor/drag-handle';

const iconStyle = {
  width: 20,
  height: 20,
};

const style = {
  cursor: 'move',
  position: 'absolute',
  top: 0,
  left: 0,
  padding: 0,
  width: 30,
  height: 30,
  zIndex: 9999,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
};

const DragHandle = () => (
  <IconButton
    tooltip="Drag Me!"
    tooltipPosition="top-right"
    className="drag handle"
    iconStyle={iconStyle}
    style={style}
    disableTouchRipple
  >
    <DragHandleIcon />
  </IconButton>
);

export default DragHandle;
