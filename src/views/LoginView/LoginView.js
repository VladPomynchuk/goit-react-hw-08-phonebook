import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

const LoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(authOperations.logIn(value));
    resetForm();
  };

  return (
    <div>
      <Formik
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
      </Formik>
    </div>
  );
};

export default LoginView;
