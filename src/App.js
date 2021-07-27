import logo from './logo.svg';
import './App.css';
import { Button,ButtonGroup } from '@material-ui/core';

import { Save,Delete} from '@material-ui/icons';
import ButtonComponent from './components/ButtonComponent';
import CheckBoxComponent from './components/CheckBoxComponent';
import TextFieldComponent from './components/TextFieldComponent';
import StyledButtonComponent from './components/StyledButtonComponent';

import { ThemeProvider,createTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import '@fontsource/roboto';

const theme=createTheme({
  palette:{
    primary:{
      main:'#2884f0'
    },
    secondary:{
      main:'#40d50a'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
    <div className="App">
      <Typography variant="h2">
        Welcome to Material UI
      </Typography>

      <Typography variant="subtitle1">
        Learn how to use MUI
      </Typography>

      
      <ButtonComponent />
      <CheckBoxComponent />
      <TextFieldComponent />
      <StyledButtonComponent />

    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
