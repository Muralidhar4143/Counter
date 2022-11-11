import React from 'react'
import {useState} from 'react'
import Carlos from './Carlos';
import Dawn from './Dawn';
import Emre from './Emre';
import './Style.css';


const Barbara = (props) => {

    const [count, setCount] = useState(0);
  return (
    <div>
            <Dawn onClick={() => setCount(count+1)}/>
            <Carlos count={count}/>
            <Emre onClick={() => {if(count>0){setCount(count-1)}else{setCount(0)}}}/>
            <h5 className='counter'>{props.text}</h5>
    </div>
  )
}

export default Barbara