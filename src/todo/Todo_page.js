import React, { useEffect, useState } from 'react'
import './todo.css';

function Todo_page() {
const [message, setMessage] = useState('');
const [error, setError] = useState();
const [getdata, setGetdata] = useState()
const [btn, setBtn] = useState("Start")
// const user = JSON.parse(localStorage.getItem('userData'));
// console.log(user);


  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = async () => {
      await fetch('http://localhost:5000/todos',{
      method:"POST",
      body:JSON.stringify({
        Activity:message
      }),
      headers:{"content-type":"application/json"}
    })
    .then((res)=>res.json())
    .then((data)=>setError(data))
  }
  
  useEffect(()=>{
    fetch('http://localhost:5000/todos',{
        method:"GET",
    })
    .then((res)=>res.json())
    .then((data)=>setGetdata(data))
  })
//   console.log(btn);


  return (
    <div>
        <div className='username'>user:name</div>
        <div className='todo_box'>
            <div className='history_div'>
                <p>ToDo History</p><button>Logout</button>
            </div>
            <div className='table_div'>
            <input type="text"  onChange={handleChange} value={message} />
                <button onClick={handleClick}>Add new Activity</button>
                <div className=''>
                    <table>
                        <tr>
                            <th>Activity</th>
                            <th>Status</th>
                            <th>Time taken</th>
                            <th>Action</th>
                        </tr>
                        {getdata==undefined?"":getdata.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.Activity}</td>
                                    <td>{item.Status}</td>
                                    <td>time</td>
                                    <td>{btn === "Start"?<button onClick={(e)=>setBtn(e.target.value)}>Pause</button>:<button onClick={(e)=>setBtn(e.target.value)}>Start</button>}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo_page