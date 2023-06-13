import React from 'react';
import ReactDOM  from 'react-dom';
import {useSelector} from 'react-redux';

export function Coin() {
  const {coin} = useSelector((state)=>state.counter);
  return (
    <div style={{paddingTop: '200px'}}>
      <b><big className="value">Coins: {coin}</big></b>
    </div>
  );
};











