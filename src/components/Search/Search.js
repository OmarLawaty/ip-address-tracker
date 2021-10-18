import React, { useState } from 'react';

import { checkForNumber } from '../../utils/helpers';
import { arrowIcon } from '../../assets';

const Search = ({ action }) => {
  const [value, setValue] = useState('');

  const onInputChange = ({
    target: { value: eValue },
    nativeEvent: { data }
  }) => {
    if (typeof data === 'string')
      setValue(checkForNumber(data) === '' ? value : checkForNumber(data));

    if ((0 <= data && data <= 9) || data === '.') setValue(eValue);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    action(value);
  };

  return (
    <form onSubmit={e => onFormSubmit(e)}>
      <input value={value} onChange={e => onInputChange(e)} />
      <button type="submit">
        <span>
          <img src={arrowIcon} alt="arrow icon" />
        </span>
      </button>
    </form>
  );
};

export default Search;
