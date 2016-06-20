/**
*
* DragHandle
*
*/

import React from 'react';

import IconButton from 'material-ui/IconButton';
import DragHandleIcon from 'material-ui/svg-icons/editor/drag-handle';

const style = {
  cursor: 'move',
  position: 'absolute',
  top: -10,
  left: -10,
  zIndex: 9999,
  opacity: 0.4,
};

const handleMouseEnter = e => e.target.style.opacity = 0.9; // eslint-disable-line
const handleMouseLeave = e => e.target.style.opacity = 0.4; // eslint-disable-line

const DragHandle = () => (
  <IconButton
    tooltip="Drag Me!"
    tooltipPosition="top-right"
    className="drag handle"
    style={style}
    disableTouchRipple
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <DragHandleIcon />
  </IconButton>
);

export default DragHandle;
