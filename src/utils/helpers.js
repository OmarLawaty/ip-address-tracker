export const ipCheck = isIp => {
  const reg =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return reg.test(isIp);
};

export const checkForNumbers = str => {
  str = [...str];

  return str
    .map(item => {
      if (!isNaN(Number(item)) || item === '.') return item;
      return '';
    })
    .join('');
};
