import React from 'react';
import './style.css';

function Card(props) {
    return (
        <div className='card'>
            <img className='card-img-top' src={props.image} alt={`Employee: ${props.firstName} ${props.lastName}`}></img>
            <div className='card-body information'>
                <h5 className='card-title'>{`${props.firstName} ${props.lastName}`}</h5>
                <p className='card-text'>Email: {props.email} </p>
                <p className='card-text'>Phone: {props.phoneNum} </p>
                <p className='card-text'>Age: {props.age}</p>
            </div>

        </div>
    )
}

export default Card;