import { useDeleteContactMutation } from 'redux/contactsApi';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Button, ListItem, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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
    <ListItem>
      <Typography
        color="#fff"
        component="p"
        variant="body1"
        noWrap={true}
        mr={'auto'}
      >{`${name}:`}</Typography>
      <Typography
        color="#fff"
        component="p"
        variant="body1"
        sx={{ whiteSpace: 'pre' }}
      >{`${number}`}</Typography>

      <Button onClick={handleClick}>
        {isLoading && <TailSpin color="#16aee0" height="12" width="12" />}
        <DeleteOutlineIcon />
      </Button>
    </ListItem>
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
