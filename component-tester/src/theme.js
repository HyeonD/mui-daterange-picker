/**
 * @filename theme.js
 * @file
 * @author Hyeon Deok Yang <hdyang@catenoid.net> (5/14/24)
 * @description
 *
 **/
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
