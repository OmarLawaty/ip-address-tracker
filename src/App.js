import { useEffect, useState } from 'react';

import { Search, IPDetails, Map, Err, Loader } from './components';
import './stylesheets/app.scss';
import GeoIPFiyapi from './utils/api';

const App = () => {
  const [ipInfo, setIPInfo] = useState({
    ip: 'Loading...',
    isp: 'Loading...',
    locationInfo: {
      location: 'Loading...',
      UTCTimezone: 'Loading...',
      lat: '',
      lng: ''
    }
  });
  const [IPAddress, setIPAddress] = useState('');
  const [apiErr, setApiErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GeoIPFiyapi(setIPInfo, IPAddress, setIPAddress, setIsLoading, setApiErr);
  }, [IPAddress]);

  return (
    <div className="App">
      {isLoading && <Loader />}
      {apiErr && <Err setApiErr={setApiErr} apiErr={apiErr} />}
      <div className="ip-info">
        <h1>IP Address Tracker</h1>

        <Search action={setIPAddress} ip={IPAddress} className="search-bar" />

        <IPDetails ipInfo={ipInfo} className="ip-details" />
      </div>

      <Map
        coordinates={{
          lat: ipInfo.locationInfo.lat,
          lng: ipInfo.locationInfo.lng
        }}
        className="map-box"
      />
    </div>
  );
};

export default App;
