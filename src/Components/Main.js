import { useState } from 'react'; 
import Barbara from './Barbara.js';
import Button from './AddButt';

function Main() { 
  
  const [value, setValue] = useState([]); 
  const [num, setNum] = useState(1)


  function addValue() { 
    setNum (num+1)
    setValue([...value, num ]) 

  } 
  return ( 
    
    <div> 
  
      <Button onClick={addValue}/> 
      {value.map((item, i) => ( <Barbara key={item.toString()} text={"Counter "+item}/> ))}

    </div> 
    
  ) 
  
} 

export default Main;