import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@material-ui/core';

import { Save, Delete } from '@material-ui/icons';
import ButtonComponent from './components/ButtonComponent';
import CheckBoxComponent from './components/CheckBoxComponent';
import TextFieldComponent from './components/TextFieldComponent';
import StyledButtonComponent from './components/StyledButtonComponent';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Container, Paper, Grid } from '@material-ui/core';
import '@fontsource/roboto';

import { AppBar,Toolbar,IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2884f0'
    },
    secondary: {
      main: '#40d50a'
    },
    white: {
      main: '#fff'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <AppBar>
            <Toolbar>
              <IconButton>
                <Menu color="secondary"></Menu>
              </IconButton>
              <Typography variant="h6">
                MUI Styling
              </Typography>
              <Button color="inherit">
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h2" style={{marginTop:60}}>
            Welcome to Material UI
          </Typography>

          <Typography variant="subtitle1">
            Learn how to use MUI
          </Typography>


          <ButtonComponent />
          <CheckBoxComponent />

          <Grid container spacing={3} justifyContent='center'>
            <Grid item xs={12} sm={6}>
              <Paper style={{ width:'100%', height: 75,backgroundColor:'dodgerblue'}} />
            </Grid>

            <Grid item>
              <Paper style={{ width: 50, height: 75 }} />
            </Grid>

            <Grid item>
              <Paper style={{ width: 50, height: 75 }} />
            </Grid>

            <Grid item>
              <Paper style={{ width: 50, height: 75 }} />
            </Grid>
          </Grid>

          <TextFieldComponent />
          <StyledButtonComponent />

        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
