import axios from 'axios';

const GeoIPFiyApi = (setIPInfo, IPAddress, setIPAddress, setIsLoading, setApiErr) => {
  axios
    .get(`http://ip-api.com/json/${IPAddress}`)
    .then(
      ({
        data
        // : { query: ip, isp, country, city, timezone, lat, lon }
      }) => {
        console.log(data);

        if (data.status === 'success') {
          // Set IP values
          setIPInfo({
            ip: data.query,
            isp: data.isp,
            locationInfo: {
              location: `${data.country}, ${data.city}`,
              UTCTimezone: `${data.timezone}`,
              lat: data.lat,
              lng: data.lon
            }
          });
          setIPAddress(pervValue => (pervValue !== '' ? pervValue : data.query));
        }

        if (data.status === 'fail') {
          // Set IP values
          setIPInfo({
            ip: IPAddress,
            isp: 'unknown',
            locationInfo: {
              location: 'unknown',
              UTCTimezone: 'unknown',
              lat: 0,
              lng: 0
            }
          });
          setIPAddress(pervValue => (pervValue !== '' ? pervValue : data.query));
        }

        // Stop the loading component
        setIsLoading(false);
      }
    )
    .catch(error => {
      // Activate err message
      if (error.response) setApiErr(error.response.data);
    });
};

export default GeoIPFiyApi;
