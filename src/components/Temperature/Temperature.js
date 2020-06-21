import React, { useState } from 'react';
import './Temperature.css';
import TempValues from './TempValues';

const url =
  'http://api.openweathermap.org/data/2.5/weather?id=1275339&units=metric&limit=10&APPID=';

const Temperature = () => {
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [updateCounter, setUpdateCounter] = useState(0);

  useEffect(() => {
    const effect = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setMaxTemp(data.main.temp_max);
      setMinTemp(data.main.temp_min);
    }
    effect();
    const update = setTimeout(
      () => setUpdateCounter(pS => pS++),
      15 * 60 * 60 * 1000
    );
    return () => clearTimeout(update)
  }, [updateCounter])

  if (!minTemp || !maxTemp) return <p>Loading Temperatures...</p>

  return <TempValues max={maxTemp} min={minTemp} />
}

export default Temperature
