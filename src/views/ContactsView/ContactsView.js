import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { Container } from '@mui/system';
import { Button, Modal, Box } from '@mui/material';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ContactsView = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container>
        <Container component="main" maxWidth="sm">
          <Filter />
          <ContactsList />
        </Container>
        <Box sx={{ position: 'fixed', bottom: '5%', right: '15%' }}>
          <Button size="large" onClick={handleOpen}>
            <AddCircleIcon fontSize="large" sx={{ mr: '8px' }} /> Add new
            contact
          </Button>
        </Box>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <ContactForm />
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default ContactsView;
