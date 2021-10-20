import { useEffect, useState } from 'react';

import { Search, IPDetails, Map, Err, Loader } from './components';
import './stylesheets/app.scss';
import api from './utils/api';

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
    api
      .get(`api/v2/country,city?`, {
        params: {
          ipAddress: IPAddress
        }
      })
      .then(
        ({
          data: {
            ip,
            isp,
            location: { city, region, timezone, lat, lng }
          }
        }) => {
          setIPInfo({
            ip,
            isp,
            locationInfo: {
              location: `${region}, ${city}`,
              UTCTimezone: `UTC ${timezone}`,
              lat,
              lng
            }
          });
          setIPAddress(pervValue => (pervValue !== '' ? pervValue : ip));
          setIsLoading(false);
        }
      )
      .catch(error => {
        if (error.response) setApiErr(error.response.data);
      });
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
