import axios from 'axios';

const GeoIPFiyApi = (setIPInfo, IPAddress, setIPAddress, setIsLoading, setApiErr) => {
  axios
    .get(`https://ipwho.is/${IPAddress}`)
    .then(({ data }) => {
      console.log(IPAddress);
      console.log(data);

      if (data.success) {
        // Set IP values
        setIPInfo({
          ip: data.ip,
          isp: data.connection.isp,
          locationInfo: {
            location: `${data.country}, ${data.city}`,
            UTCTimezone: `UTC ${data.timezone.utc}`,
            lat: data.latitude,
            lng: data.longitude
          }
        });
        setIPAddress(pervValue => (pervValue !== '' ? pervValue : data.ip));
      }

      if (!data.success) {
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
        setIPAddress(pervValue => (pervValue !== '' ? pervValue : data.ip));
      }

      // Stop the loading component
      setIsLoading(false);
    })
    .catch(error => {
      // Activate err message
      if (error.response) setApiErr(error.response.data);
    });
};

export default GeoIPFiyApi;
