import { useEffect, useState } from 'react';

import { Map, Search, IPDetails } from './components';
import './stylesheets/App.scss';
import api from './utils/api';

const App = () => {
  const [ipInfo, setIPInfo] = useState({
    ip: '',
    isp: '',
    location: {
      city: '',
      region: '',
      timezone: '',
      lat: '',
      lng: ''
    }
  });
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    const search = async () => {
      const { data } = await api.get(`api/v2/country,city?`, {
        params: {
          ipAddress: ipAddress
        }
      });

      setIPInfo(data);
      setIPAddress(ipAddress !== '' ? ipAddress : data.ip);
    };

    search();
  }, [ipAddress]);

  return (
    <div className="App">
      <div className="ip-info">
        <h1>IP Address Tracker</h1>

        <Search action={setIPAddress} ip={ipAddress} className="search-bar" />

        <IPDetails ipInfo={ipInfo} className="ip-details" />
      </div>

      <Map
        coordinates={{ lat: ipInfo.location.lat, lng: ipInfo.location.lng }}
        className="map-box"
      />
    </div>
  );
};

export default App;
