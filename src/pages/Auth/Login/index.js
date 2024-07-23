import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import './login.scss';
import { Brightness4, Brightness7 } from "@mui/icons-material";

export const Login = () => {
  const [mode, setMode] = useState('light');
  const theme = useTheme();
  const handleTheme = () =>{

  }
  return (
      <Container
        component="main"
        maxWidth="xs"
        className="login-page-wrapper"
      >
        <Grid container>
          <IconButton onClick={handleTheme}>
            <Brightness4/>
          </IconButton>
        </Grid>
        <Box>
          <Typography component="h1" variant="h5" className="text-align-center">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
};
