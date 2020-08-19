import React from 'react';
import './card-style.css';

const Card = ({monster}) => (

    <div className='card'>
                <div>
                    <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h2 key={monster.id}>{monster.name}</h2>
            <p>{monster.email}</p>
            <p>{monster.name}</p>
                </div>
        </div>
);

export default Card;