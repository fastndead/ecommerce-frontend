import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import './Dropdown.scss';

function Dropdown({ placeholder, options, smallSize }) {
  const [selected, setSelected] = React.useState('');

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <FormControl className={smallSize ? 'dropdown small-font' : 'dropdown'}>
      <Select
        value={selected}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>{placeholder}</em>
        </MenuItem>
        {options.map(({ value, label }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
