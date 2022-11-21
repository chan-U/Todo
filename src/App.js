// import logo from './logo.svg';
// import './App.css';
// import Todo from "./Components/Todo";
// import TaskInput from "./Components/TaskInput";
import React, { useState } from "react";

function App() {
  const [taskInputValue, settaskInputValue] = useState("");
  const [todoTask, settodoTask] = useState([
    {
      id: 1,
      title: 'Task-1',
      status: false
    },
    {
      id: 2,
      title: 'Task-2',
      status: false
    },
    {
      id: 3,
      title: 'Task-3',
      status: false
    }
])

const handleAddTask = () => {
  if(taskInputValue.length) {
    let num = todoTask.length + 1;
    let newTask = {
      id: num,
      title: taskInputValue,
      status: false
    }
    settodoTask([...todoTask, newTask]);
    settaskInputValue('')
  }
}

const handleDeleteTask = (id) => {
  let deletableTask = todoTask.filter(task => task.id !== id);
  settodoTask(deletableTask)
}

const [updatedVal, setupdatedVal] = useState('')
const handleUpdateVal = (e) => {
  let updatedTask = {
    id: updatedVal.id,
    title: e.target.value,
    status: updatedVal.status ? true : false
  }
  setupdatedVal(updatedTask);
}

const updateTask = () => {
  if(updatedVal.title.length > 1) {
    let filteredTasks = todoTask.filter(task => task.id !== updatedVal.id);
    let updatedTasksFinal = [...filteredTasks, updatedVal];
    settodoTask(updatedTasksFinal)
    setupdatedVal('')
  }
  else {
    window.alert('task is empty')
  }
}

const handleStatusTask = (id) => {
  let statusTask = todoTask.map(task => {
    if(task.id === id) {
      return ({...task, status: !task.status})
    }
    return task
  })
  settodoTask(statusTask)
}


  return (
    <div className="App p-5">

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="todo-wrapper">
              <h4 className="text-center mb-3">Todo App</h4>

                <div className='form-group mb-3'>
                    <div className='custom-input-group d-flex align-items-stretch gap-2'>
                        <input className='form-control' placeholder='Enter Task' value={taskInputValue} onChange={(e)=> settaskInputValue(e.target.value)} />
                        <button className='btn btn-primary min-w-fit-content' onClick={handleAddTask}>Add Task</button>
                    </div>
                </div>

                <ul className='list-unstyled todo-list-main mb-0'>  
                  {todoTask && todoTask.length ? "" : "Task List Empty"}
                  {todoTask && todoTask
                  .map((task, index) => {
                      return(
                          <React.Fragment key={task.id}>
                              <li className={`task-item d-flex align-items-center justify-content-between ${task.status ? 'done' : '' }`}>
                                  <label className="flex-grow-1 d-flex align-items-center gap-2" htmlFor={task.id}>
                                      <span className="status-controls"></span>
                                      <input className="form-check-input d-none" type="checkbox" id={task.id} onChange={()=>handleStatusTask(task.id)} />
                                      <span className="task-title">{task.title}</span>
                                  </label>
                                  <div className='min-w-fit-content d-flex gap-2'>
                                      <a href='#updateTaskModal' className="task-controls" data-bs-toggle="modal" onClick={()=>setupdatedVal({
                                        id: task.id,
                                        title: task.title,
                                        status: task.status ? true : false
                                      })}><i className='bi bi-pencil-fill'></i></a>
                                      <a href='#0' className="task-controls" onClick={()=>handleDeleteTask(task.id)}><i className='bi bi-trash-fill'></i></a>
                                  </div>
                              </li>
                          </React.Fragment>
                        )
                    })}
                </ul>
                
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="updateTaskModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-group">
                <div className="custom-input-group d-flex align-items-stretch gap-2">
                  <input className="form-control" value={updatedVal && updatedVal.title} onChange={(e) => handleUpdateVal(e)} />
                  <button className="btn btn-success min-w-fit-content" onClick={updateTask} data-bs-dismiss="modal">Update</button>
                  <button className="btn btn-light min-w-fit-content" data-bs-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
