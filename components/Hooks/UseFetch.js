import axios from 'axios';
import { useEffect, useState } from 'react';

function UseFetch(url) {
  const [list, setlist] = useState('');

  const FetchData = async () => {
    const response = await axios.get(url);
    setlist(response.data);
  };

  useEffect(() => {
    return () => {
      FetchData();
    };
  });

  return list;
}
export default UseFetch;
