import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './styles/index.scss'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
