import axios from 'axios';

const GeoIPFiyapi = (
  setIPInfo,
  IPAddress,
  setIPAddress,
  setIsLoading,
  setApiErr
) => {
  axios
    .get(`https://geo.ipify.org/api/v2/country,city?`, {
      params: { apiKey: process.env.REACT_APP_KEY, ipAddress: IPAddress }
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
};

export default GeoIPFiyapi;
