import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import * as yup from 'yup';
import { TextField, Button, Box, Avatar, Typography } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useFormik } from 'formik';
import { Container } from '@mui/system';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const LoginView = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (value, _) => {
      dispatch(authOperations.logIn(value));
    },
  });

  const dispatch = useDispatch();

  // const handleSubmit = (value, { resetForm }) => {
  //   dispatch(authOperations.logIn(value));
  //   resetForm();
  // };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.dark' }}>
            <LockOpenIcon />
          </Avatar>
          <Typography color="#fff" component="h2" variant="h5">
            Log in
          </Typography>

          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ mt: 1 }}
            autoComplete="off"
          >
            <TextField
              margin="normal"
              autoFocus
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Container>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="email">
            Email:
            <Field type="email" name="email" />
            <FormError name="email" />
          </label>
          <label htmlFor="password">
            Password:
            <Field type="password" name="password" />
            <FormError name="password" />
          </label>

          <button type="submit">Login</button>
        </Form>
      </Formik> */}
    </div>
  );
};

export default LoginView;
