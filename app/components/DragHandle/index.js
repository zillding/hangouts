/**
*
* DragHandle
*
*/

import React from 'react';

import IconButton from 'material-ui/IconButton';
import DragHandleIcon from 'material-ui/svg-icons/editor/drag-handle';

const style = {
  position: 'absolute',
  top: -40,
  left: -10,
};

const DragHandle = () => (
  <IconButton
    tooltip="Drag Handle"
    tooltipPosition="top-right"
    className="drag handle"
    style={style}
  >
    <DragHandleIcon />
  </IconButton>
);

export default DragHandle;
