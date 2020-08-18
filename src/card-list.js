import React from 'react';
import './card-list.style.css';
import Card from './card-comp';

const CardList = props =>{
    return (
        <div className="card-list" >
          { props.monster.map((monster,index) =>{
            return (
             
               <Card key={monster.id} monster={monster} ></Card>
            )
          })}
        </div>
    )
}

export default CardList;