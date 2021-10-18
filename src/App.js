import { useState } from 'react';
import { Search } from './components/Index';
import { ipCheck } from './utils/helpers';

const App = () => {
  const [ipAddress, setIpAddress] = useState('');

  return (
    <div className="App">
      <Search action={setIpAddress} />
      {`${ipCheck(ipAddress)}`}
    </div>
  );
};

export default App;
