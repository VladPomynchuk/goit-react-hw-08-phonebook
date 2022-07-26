import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { Container } from '@mui/system';
import { Button, Modal, Box } from '@mui/material';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';

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
        <Container component="div" maxWidth="sm">
          <Filter />
          <ContactsList />
        </Container>
        <Box sx={{ position: 'fixed', bottom: '5%', right: '5%' }}>
          <Button size="large" onClick={handleOpen}>
            <AddCircleIcon fontSize="large" />
          </Button>
        </Box>
        <Modal
          open={open}
          onClose={(_, reason) => {
            if (reason !== 'backdropClick') {
              handleClose();
            }
          }}
        >
          <Box sx={style}>
            <ContactForm />
            <Button
              sx={{
                minWidth: '40px',
                minHeight: '40px',
                borderRadius: '50%',
                position: 'absolute',
                top: '5%',
                right: '5%',
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </Button>
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default ContactsView;
