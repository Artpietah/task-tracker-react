import Task from "./Task"

const Tasks = ({data, onDelete, onToggle}) => {

  return (
    <>
        {
            data.map((task, index)=>( 
            <Task key={index} data={task} onDelete={onDelete} onToggle={onToggle}/>
            ))
        }
    </>
  )
}

export default Tasks