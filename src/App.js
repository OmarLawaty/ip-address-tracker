import { useEffect, useState } from 'react';
import axios from 'axios';

import { GeoLocationKey } from './api/Key';
import { Map, Search } from './components/Index';

const App = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [ISP, setISP] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  useEffect(() => {
    const search = async () => {
      const {
        data: {
          ip,
          isp,
          location: { city, region, timezone, lat, lng }
        }
      } = await axios.get(`https://geo.ipify.org/api/v2/country,city?`, {
        params: {
          apiKey: GeoLocationKey,
          ipAddress: ipAddress
        }
      });

      setIpAddress(ipAddress !== '' ? ipAddress : ip);
      setLocation(`${city}, ${region}`);
      setTimeZone(timezone);
      setISP(isp);
      setLat(lat);
      setLng(lng);
    };

    search();
  }, [ipAddress]);

  return (
    <div className="App">
      <Search action={setIpAddress} ip={ipAddress} />
      <div>
        <div>{ipAddress}</div>
        <div>{location}</div>
        <div>{timeZone}</div>
        <div>{ISP}</div>
      </div>
      <Map coordinates={{ lat, lng }} />
    </div>
  );
};

export default App;
