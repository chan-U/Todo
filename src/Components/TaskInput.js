import React from 'react'

const TaskInput = (props) => {
    
  return (
    <>
        <div className='form-group mb-3'>
            <div className='custom-input-group d-flex align-items-stretch gap-2'>
                <input className='form-control' placeholder='Enter Task' value={props.taskInputValue} onChange={(e)=> props.settaskInputValue(e.target.value)} />
                <button className='btn btn-primary min-w-fit-content' onClick={props.handleAddTask}>Add Task</button>
            </div>
        </div>
    </>
  )
}

export default TaskInput