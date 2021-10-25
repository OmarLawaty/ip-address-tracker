import React from 'react';

import '../stylesheets/err.scss';

const Err = ({ apiErr: { code: status, messages: errMessage } }) => (
  <div className="ui message red">
    <div className="header">Error</div>
    <p>
      {status}: {errMessage}
    </p>
  </div>
);

export default Err;
