
import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h4>Code: {cca3}</h4>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button><br /><br />
            {visited ? '  I Have visited this country' : '  I want to visit this country'}
        </div>
    );
};

export default Country;