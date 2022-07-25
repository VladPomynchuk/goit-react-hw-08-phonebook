import { useMemo } from 'react';
import { List } from './ContactsList.styled';
import { getFilterValue } from 'redux/filterSlice';
import { useSelector } from 'react-redux/es/exports';
import { useGetContactsQuery } from 'redux/contactsApi';
import { TailSpin } from 'react-loader-spinner';
import ContactsListItem from 'components/ContactsListItem';

const ContactsList = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  const filter = useSelector(getFilterValue);
  const contacts = useMemo(
    () =>
      data &&
      data.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      ),
    [data, filter]
  );

  return (
    <div>
      {isLoading && <TailSpin color="#16aee0" height="50" width="50" />}
      {error && <p>Ups... Something went wrong, try letter :(</p>}
      <List>
        {contacts &&
          contacts.map(el => {
            return <ContactsListItem key={el.id} data={el}></ContactsListItem>;
          })}
      </List>
    </div>
  );
};

export default ContactsList;
