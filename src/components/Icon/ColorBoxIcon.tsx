import React from 'react';
import { SvgIcon } from '@mui/material';

export const ColorBoxIcon = ({ fill = '#24B39E' }) => {
  return (
    <SvgIcon>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="ColorBox Icon">
          <circle id="Ellipse 2209" cx="8" cy="8" r="6" fill={fill} />
        </g>
      </svg>
    </SvgIcon>
  );
};
