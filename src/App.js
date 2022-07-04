import { useEffect, useState } from 'react';

import { Search, IPDetails, Map, Err, Loader } from './components';
import GeoIPFiyApi from './utils/api';

import './stylesheets/app.scss';

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
  const [apiErr, setApiErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GeoIPFiyApi(setIPInfo, IPAddress, setIPAddress, setIsLoading, setApiErr);
  }, [IPAddress]);

  return (
    <div className="App">
      {isLoading && <Loader />}
      {apiErr && <Err apiErr={apiErr} />}
      <div className="ip-info">
        <h1>IP Address Tracker</h1>

        <Search action={setIPAddress} ip={IPAddress} className="search-bar" />

        <IPDetails ipInfo={ipInfo} className="ip-details" />
      </div>

      {!apiErr ? (
        <Map
          coordinates={{
            lat: ipInfo.locationInfo.lat,
            lng: ipInfo.locationInfo.lng
          }}
          className="map-box"
        />
      ) : null}
    </div>
  );
};

export default App;
