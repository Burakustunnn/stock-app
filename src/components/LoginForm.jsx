
import { Form } from "formik";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"


const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <Form>
      <Box>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"          
          autoFocus
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          helperText={touched.email && errors.email}
          error={touched.email  && Boolean(errors.email)}
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Form>
  );
};

export default LoginForm;
