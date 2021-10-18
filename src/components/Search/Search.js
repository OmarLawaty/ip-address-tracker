import React, { useEffect, useState } from 'react';

import { checkForNumber, ipCheck } from '../../utils/helpers';
import { arrowIcon } from '../../assets';
import '../../stylesheets/search.scss';

const Search = ({ action, ip, className }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (ip !== '') {
      setValue(ip);
    }
  }, [ip]);

  const onInputChange = ({
    target: { value: elementValue },
    nativeEvent: { data }
  }) => {
    if (typeof data === 'string')
      setValue(checkForNumber(data) === '' ? value : checkForNumber(data));

    if ((0 <= data && data <= 9) || data === '.') setValue(elementValue);
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
      className={`${className}${isValid === false ? ' invalid' : ''}`}
    >
      <input
        value={value}
        onChange={e => onInputChange(e)}
        placeholder="Search for any IP address or domain"
      />
      <button type="submit" className="submit-button">
        <span>
          <img src={arrowIcon} alt="arrow icon" />
        </span>
      </button>
    </form>
  );
};

export default Search;
