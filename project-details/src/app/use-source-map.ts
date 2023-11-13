import { useState, useEffect } from 'react';

const useSourceMap = () => {
  const [sourceMap, setSourceMap] = useState(null);

  useEffect(() => {
    const fetchSourceMap = async () => {
      try {
        const response = await fetch('../assets/sample-source-map.json');
        const data = await response.json();
        setSourceMap(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSourceMap();
  }, []);

  return sourceMap;
};

export default useSourceMap;
