import React from 'react';
import './weather.css';

const Weather = ({weather}) => {

    return(
        <>
        {/* look into conditionally showing table only when weather has data */}
            {weather.length > 0 &&
                <table className="margin-top-10 margin-left-20">
                    <thead>
                        <tr className="background-sky-blue">
                            <th>Date</th>
                            <th>Weather</th>
                            <th>Temperature</th>
                            <th>Min. Temperature</th>
                            <th>Max. Temperature</th>
                            <th>Humidity</th>
                            <th>Wind</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weather.map((el) => 
                            <tr key={el.id} className="background-steel-blue">
                                <td>
                                    {el.applicable_date}
                                </td>
                                <td>
                                    {el.weather_state_name}
                                </td>
                                <td>
                                    {(el.the_temp).toFixed(2)} &#8451;
                                </td>
                                <td>
                                    {(el.min_temp).toFixed(2)} &#8451;
                                </td>
                                <td>
                                    {(el.max_temp).toFixed(2)} &#8451;
                                </td>
                                <td>
                                    {el.humidity}%
                                </td>
                                <td>
                                    {el.wind_direction_compass} at {(el.wind_speed).toFixed(2)} mph
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            }
            {/* <tr>
                <td>
                    {weather.applicable_date}
                </td>
                <td>
                    {weather.weather_state_name}
                </td>
                <td>
                    {weather.the_temp} &#8451;
                </td>
                <td>
                    {weather.min_temp} &#8451;
                </td>
                <td>
                    {weather.max_temp} &#8451;
                </td>
                <td>
                    {weather.humidity}%
                </td>
                <td>
                    {weather.wind_direction_compass} at {weather.wind_speed} mph
                </td>
            </tr> */}
        </>
    )

};

export default Weather;