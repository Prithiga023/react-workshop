import {useState} from 'react'

function Counter() {
    const [count,setCount] = useState(9);
    const handleAdd=()=>{
        setCount(count+1);
        console.log(count);
    }

    const handleSub=()=>{
        setCount(count-1);
        console.log(count);
    }

  return (
    <div>
    <h2>Counter</h2>
    <h3>{count}</h3>
    <button onClick={handleSub} style={{padding:8,backgroundColor:"#045590",margin:4,color:"white"}}>-</button>
    <button onClick={handleAdd} style={{padding:8,backgroundColor:"#045590",margin:4,color:"white"}}>+</button>
    </div>
  )
}

export default Counter