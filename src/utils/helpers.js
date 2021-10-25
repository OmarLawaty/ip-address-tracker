// Check for valid ip address
export const ipCheck = isIP => {
  const reg =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return reg.test(isIP);
};

// Check if inserted value has a number
export const checkForNumbers = str =>
  [...str]
    .map(item => (!isNaN(Number(item)) || item === '.' ? item : ''))
    .join('');
