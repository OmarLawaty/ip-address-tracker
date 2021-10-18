import { useEffect, useState } from 'react';
import axios from 'axios';

import { GeoLocationKey } from './api/Key';
import { Map, Search } from './components/Index';
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
    const search = async () => {
      const { data } = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?`,
        {
          params: {
            apiKey: GeoLocationKey,
            ipAddress: ipAddress
          }
        }
      );

      setIpInfo(data);
      setIpAddress(ipAddress !== '' ? ipAddress : data.ip);
    };

    search();
  }, [ipAddress]);

  return (
    <div className="App">
      <div className="ip-info">
        <h1>IP Address Tracker</h1>

        <Search action={setIpAddress} ip={ipAddress} className="search-bar" />

        <div className="details">
          <div>
            <h2>Ip Address</h2>
            <p>{ipAddress}</p>
          </div>

          <div>
            <h2>location</h2>
            <p>{`${ipInfo.location.city}, ${ipInfo.location.region}`}</p>
          </div>

          <div>
            <h2>Timezone</h2>
            <p>{ipInfo.location.timezone}</p>
          </div>

          <div>
            <h2>ISP</h2>
            <p>{ipInfo.isp}</p>
          </div>
        </div>
      </div>

      <Map
        coordinates={{ lat: ipInfo.location.lat, lng: ipInfo.location.lng }}
        className="map-box"
      />
    </div>
  );
};

export default App;
