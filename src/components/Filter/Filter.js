import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, getFilterValue } from 'redux/filterSlice';
import { TextField } from '@mui/material';

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        variant="standard"
        label="Filter contacts by name"
        margin="normal"
        fullWidth
        type="search"
        name="filter"
        onChange={e => {
          dispatch(updateFilter(e.currentTarget.value));
        }}
        value={filter}
      />
    </>
  );
};

export default Filter;
