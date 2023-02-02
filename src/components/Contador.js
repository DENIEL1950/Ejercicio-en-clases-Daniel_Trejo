import React from 'react';
import './Contador.css';

export default function Contador(props) {
  return (
    <div className='contador'>{props.valor}</div>
  )
}
