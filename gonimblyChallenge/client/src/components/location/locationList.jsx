import React, {useState} from 'react';
import Weather from '../weather/weather';

const LocationList = ({location}) => {
    const [weather, setWeather] = useState([]);

    const handleLocationClick = () => {
        fetch(`/weather?query=${location.woeid}`)
            .then((res) => res.json())
            .then(
                data => {
                    setWeather(data);
                }
            )
    };

    return (
        <>
            <button className="location-list" onClick={handleLocationClick}>{location.title}</button>
            <Weather weather={weather} />
        </>
    );
};

export default LocationList;