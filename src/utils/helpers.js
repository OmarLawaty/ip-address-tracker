export const ipCheck = isIp => {
    const reg = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return reg.test(isIp);
  },
  checkForNumber = str => {
    str = [...str];

    return str
      .map(item => {
        if (!isNaN(Number(item)) || item === '.') return item;
        return '';
      })
      .join('');
  };
