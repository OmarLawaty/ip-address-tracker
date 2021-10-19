import React from 'react';

import '../stylesheets/IPDetails.scss';

const IPDetails = ({ ipInfo: { ip, isp, location }, className }) => (
  <div className={className}>
    <div className="ip-detail">
      <h2>IP Address</h2>
      <p>{ip}</p>
    </div>

    <div className="ip-detail">
      <h2>location</h2>
      <p>{`${location.city}, ${location.region}`}</p>
    </div>

    <div className="ip-detail">
      <h2>Timezone</h2>
      <p>{`UTC ${location.timezone}`}</p>
    </div>

    <div className="ip-detail">
      <h2>ISP</h2>
      <p>{isp}</p>
    </div>
  </div>
);

export default IPDetails;
