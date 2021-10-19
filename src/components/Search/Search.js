import React, { useEffect, useState } from 'react';

import { checkForNumbers, ipCheck } from '../../utils/helpers';
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

  const onInputChange = ({ target, nativeEvent: { data: keyPress } }) => {
    // check if pasted value is a number
    if (typeof keyPress === 'string') {
      const checkedNum = checkForNumbers(keyPress);

      setValue(checkedNum === '' ? value : checkedNum);
    }

    if ((0 <= keyPress && keyPress <= 9) || keyPress === '.') {
      setValue(target.value);
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (value === '' || ipCheck(value)) {
      setIsValid(true);

      action(prevValue => prevValue);
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
