import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import { createTheme, MuiThemeProvider, Theme as MuiTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['IBM Plex Sans', 'sans-serif'].join(',')
  },
  palette: {
    primary: { main: '#243643' },
    secondary: { main: '#007853' },
    error: { main: '#B00020', light: '#bb172f' }
  }
});

type Props = {
  themeOverride?: MuiTheme;
};

export const Theme: React.FC<Props> = ({ children, themeOverride }) => (
  <MuiThemeProvider theme={themeOverride || theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
