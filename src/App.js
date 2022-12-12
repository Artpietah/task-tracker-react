import { Header } from "./components/Header";
import { useState } from 'react'
import { useEffect } from "react";
import Tasks from "./components/Tasks";
import CreateTask from "./components/CreateTask";


function App() {
  const title='My Tasks'
  const [addbutton, setAddbutton]=useState(false)
  const [btntext, setBtntext]=useState('Create')
 
  useEffect(() => {
        const getTasksc= async ()=>{
          const tasksFromServer = await fetchTasks()
          setData(tasksFromServer)
        }
        getTasksc();
  }, []);
    


  const fetchTasks = async()=>{
    const res = await fetch('http://localhost:5000/data');
    const data = await res.json()

    return data
 }

  const [data, setData] = useState(fetchTasks())
  const deleteTask= async  (id)=>{
    await fetch(`http://localhost:5000/data/${id}`,{
      method: 'DELETE'
    })
    setData(data.filter((data)=>data.id!==id))
  }
  const createTask= async (newtask)=>{
     const res = await fetch('http://localhost:5000/data', {
      method: 'POST',
      headers: {
       'Content-type': 'application/json',
      },
      body: JSON.stringify(newtask)
     })
     const dat = await res.json()
     setData([...data, dat])
      //   const id = data.length+1;
      //   const newtask ={id,...task}
      //   setData([...data, newtask])
        console.log(data)
      // // 
  }
  const toggleReminder=(id)=>{
       setData(data.map((data)=>data.id === id?{...data, reminder: !data.reminder}:data))
  }
  const onClick=()=>{
    setAddbutton(!addbutton)
    addbutton? setBtntext('Create'):setBtntext('Close')
    
  }
  return (
    <div className="App">
         <Header title={title} onClick={onClick} btntext ={btntext}/>
        {addbutton && <CreateTask onCreate={createTask} />}
         {!addbutton && (data.length> 0 ? <Tasks data={data} onDelete={deleteTask} onToggle={toggleReminder}  />: 'No tasks'
         )}
    </div>
  );
}

export default App;
