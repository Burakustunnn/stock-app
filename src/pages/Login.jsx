import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import LoginForm from "../components/LoginForm";
import { useState } from "react";

const Login = () => {
  const [Login, setLogin] = useState([]);
  const loginSchema = () => {};

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, actions) => {
                setLogin({ ...values, password2: values.password });
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <LoginForm {...props} />}
            ></Formik>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" top={"/"}>
                Your Website
              </Link>
              {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
