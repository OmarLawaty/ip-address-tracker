import React, { useEffect, useState } from 'react';

import { checkForNumber, ipCheck } from '../../utils/helpers';
import { arrowIcon } from '../../assets';

const Search = ({ action, ip }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (ip !== '') {
      setValue(ip);
    }
  }, [ip]);

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
    if (value === '' || ipCheck(value)) {
      setIsValid(true);
      action(value);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form
      onSubmit={e => onFormSubmit(e)}
      className={`search${isValid === false ? ' invalid' : ''}`}
    >
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
