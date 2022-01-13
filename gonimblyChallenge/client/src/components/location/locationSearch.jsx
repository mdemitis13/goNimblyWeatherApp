import React, {useCallback, useState} from 'react';
import LocationList from './locationList';
import './location.css';

const LocationSearch = () => {
    const [query, setQuery] = useState("");
    const [locations, setLocations] = useState([]);

    const handleChange = useCallback((event) => {
        setQuery(event.target.value);
    }, []);

    const handleSubmit = () => {
        fetch(`/location?query=${query}`)
            .then((res) => res.json())
            .then(
                data => {
                    const newLocations = data.map(({title, woeid}) => ({title, woeid}));
                    setLocations([...newLocations]);
                    if(newLocations.length === 0) {
                        alert('No results were found for ' + query);
                    }
                }
            )
            setQuery("");
    };

    const handleKeyPress = (event) => {
        if(event.code === "Enter" || event.code === "NumpadEnter"){
            handleSubmit();
        }
    };

    return (
        <>
            <label htmlFor="weatherSearch" className="margin-left-20">Enter a location</label>
            <input id="weatherSearch" className="margin-left-20" type="text" value={query} onChange={handleChange} onKeyPress={handleKeyPress}/>
            <button className="margin-left-20" onClick={handleSubmit}>Submit</button>
            <br /><br />
            {locations.length > 0 &&
                <p className="margin-left-20">Click the button(s) below to reveal weather information for that specific location</p>
            }
            {locations.map((location) => <LocationList key={location.woeid} location={location} className="margin-left-20" />)}
        </>
    );
};

export default LocationSearch;