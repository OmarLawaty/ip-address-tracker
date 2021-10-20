import React from 'react';

import '../stylesheets/ipDetails.scss';

const IPDetails = ({ ipInfo: { ip, isp, locationInfo }, className }) => (
  <div className={className}>
    <div className="ip-detail">
      <h2>IP Address</h2>
      <p>{ip}</p>
    </div>

    <div className="ip-detail">
      <h2>location</h2>
      <p>{locationInfo.location}</p>
    </div>

    <div className="ip-detail">
      <h2>Timezone</h2>
      <p>{locationInfo.UTCTimezone}</p>
    </div>

    <div className="ip-detail">
      <h2>ISP</h2>
      <p>{isp}</p>
    </div>
  </div>
);

export default IPDetails;
