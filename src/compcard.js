import React from 'react';
import './card-list.style.css';

const CardList = props => (
    <div className='card-list'>
        {
            props.monster.map(monster =>(
                <div>
                    <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h2 key={monster.id}>{monster.name}</h2>
            <p>{monster.email}</p>
                </div>
            ))}
        </div>
);

export default CardList;