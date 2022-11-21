import React from 'react'

const Todo = (props) => {
    
  return (
   
    <ul className='list-unstyled todo-list-main mb-0'>
        {props.todoTask && props.todoTask.length ? "" : "Task List Empty"}
        {props.todoTask && props.todoTask.map((task, index) => {
            return(
                <React.Fragment key={task.id}>
                    <li className="task-item d-flex align-items-start justify-content-between">
                        
                        <div className="form-check flex-grow-1">
                            <input className="form-check-input" type="checkbox" id={task.id} />
                            <label className="form-check-label" htmlFor={task.id}>{task.title}</label>
                        </div>
                        <div className='min-w-fit-content d-flex gap-3'>
                            <a href='/'><i className='bi bi-pencil-fill'></i></a>
                            <a href='/'><i className='bi bi-trash-fill'></i></a>
                        </div>
                    </li>
                </React.Fragment>
            )
        })}
    </ul>
   
  )
}

export default Todo;