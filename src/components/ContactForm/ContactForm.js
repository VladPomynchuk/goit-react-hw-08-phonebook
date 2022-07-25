import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Label, Div, ErrorText, AddBtn } from './ContactForm.styled';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import { toast } from 'react-hot-toast';
import formatPhoneNumber from 'helpers/formatPhoneNumber';
import { TailSpin } from 'react-loader-spinner';

export const initialValues = {
  name: '',
  number: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
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
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = (value, { resetForm }) => {
    const { name } = value;
    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      return toast.error(`${name} is already in contacts`);
    }
    try {
      addContact({ name: value.name, number: formatPhoneNumber(value.number) });
      resetForm();
      toast.success('Contact added');
    } catch (error) {
      toast.error('Error when adding material');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Label htmlFor="name">Name</Label>
        <Div>
          <Field type="text" name="name" placeholder="Full name"></Field>
          <FormError name="name" />
        </Div>

        <Label htmlFor="number">Number</Label>
        <Div>
          <Field
            type="text"
            name="number"
            placeholder="Phone number"
            maxLength="10"
          ></Field>
          <FormError name="number" />
        </Div>
        <AddBtn type="submit">
          {isLoading && <TailSpin color="#16aee0" height="20" width="20" />}
          Add contact
        </AddBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
