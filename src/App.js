import { useEffect, useState } from 'react';
import axios from 'axios';

import { GeoIpifyKey } from './api/Key';
import { Map, Search, IpDetails } from './components/index';
import './stylesheets/app.scss';

const App = () => {
  const [ipInfo, setIpInfo] = useState({
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
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    if (GeoIpifyKey) {
      const search = async () => {
        const { data } = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?`,
          {
            params: {
              apiKey: GeoIpifyKey,
              ipAddress: ipAddress
            }
          }
        );

        setIpInfo(data);
        setIpAddress(ipAddress !== '' ? ipAddress : data.ip);
      };

      search();
    }
  }, [ipAddress]);

  return (
    <div className="App">
      <div className="ip-info">
        <h1>IP Address Tracker</h1>

        <Search action={setIpAddress} ip={ipAddress} className="search-bar" />

        <IpDetails ipInfo={ipInfo} className="ip-details" />
      </div>

      <Map
        coordinates={{ lat: ipInfo.location.lat, lng: ipInfo.location.lng }}
        className="map-box"
      />
    </div>
  );
};

export default App;
