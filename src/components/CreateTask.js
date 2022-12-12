
import { useState } from "react"
const CreateTask = ({onCreate}) => {

  const [text,setText] = useState('')
  const [day,setDay] = useState('')
  const [reminder,setReminder] = useState(false)
 
  const onSubmit =(e)=>{
    e.preventDefault()
    if(!text){
        alert('Plese add a Task')
        return
    }
    if(!day){
        alert('Plese add a Date')
        return
    }
    onCreate({text, day,reminder})
    setText("")
    setDay("")
    setReminder(false)

  }

  return (
   <form className='add-form' onSubmit={onSubmit}>
     <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)}/>
     </div>
     <div className='form-control'>
        <label>Day</label>
        <input type="date" placeholder='Add Date' value={day} onChange={(e)=>setDay(e.target.value)}/>
     </div>
     <div className='form-control form-control-check'  >
        <label>Set Reminder</label>
        <input type="checkbox"  checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
     </div>
     <div className='form-control'>
        <input type="submit" className='btn btn-block' placeholder='Add Task'/>
     </div>
   </form>
  )
}

export default CreateTask