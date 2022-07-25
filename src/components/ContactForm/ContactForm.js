import * as yup from 'yup';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import { toast } from 'react-hot-toast';
import formatPhoneNumber from 'helpers/formatPhoneNumber';
import { TailSpin } from 'react-loader-spinner';
import { useFormik } from 'formik';
import { Container } from '@mui/system';
import { TextField, Button, Box, Typography } from '@mui/material';

export const initialValues = {
  name: '',
  number: '',
};

const phoneValid =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object({
  name: yup.string().required(),
  number: yup
    .string()
    .min(10)
    .required()
    .matches(phoneValid, 'Phone number is not valid'),
});

const ContactForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (value, { resetForm }) => {
      const { name } = value;
      if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
        return toast.error(`${name} is already in contacts`);
      }
      try {
        addContact({
          name: value.name,
          number: formatPhoneNumber(value.number),
        });
        resetForm();
        toast.success('Contact added');
      } catch (error) {
        toast.error('Error when adding material');
      }
    },
  });

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography color="#fff" component="h3" variant="h5">
            Add new contact
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
              id="name"
              name="name"
              label="Full name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              inputProps={{ maxLength: 10 }}
              margin="normal"
              fullWidth
              id="number"
              name="number"
              label="Phone"
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoading && <TailSpin color="#16aee0" height="20" width="20" />}
              Add contact
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ContactForm;
