import { useDeleteContactMutation } from 'redux/contactsApi';
import { TailSpin } from 'react-loader-spinner';
import { Item, RemoveBtn } from './ContactsListItem.styled';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

const ContactsListItem = ({ data }) => {
  const { name, number, id } = data;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleClick = () => {
    try {
      deleteContact(id);
      toast.success('Contact deleted');
    } catch (error) {
      toast.error('Something went wrong, try later');
      console.log(error);
    }
  };

  return (
    <Item>
      {`${name}: ${number}`}
      <RemoveBtn onClick={handleClick}>
        {isLoading && <TailSpin color="#16aee0" height="12" width="12" />}
        Delete
      </RemoveBtn>
    </Item>
  );
};

ContactsListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsListItem;
