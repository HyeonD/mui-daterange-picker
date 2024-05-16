import {createTheme, Theme, ThemeOptions} from "@mui/material";
import {THEME, ThemeConfig} from "./constants";
import merge from "lodash/merge";

export const baseOptions: ThemeOptions = {
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  },
};
const themesOptions: Record<string, ThemeOptions> = {
  [THEME.LIGHT]: {
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
  },
  [THEME.DARK]: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  },
};

export const createCustomTheme = (config: ThemeConfig = {}): Theme => {
  let themeOptions: ThemeOptions = themesOptions[config.theme || THEME.SYSTEM];
  if (!themeOptions) {
    themeOptions = themesOptions[THEME.LIGHT];
  }
  return createTheme(merge({}, baseOptions, themeOptions));
}
