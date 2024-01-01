
export const ShowTask = ({tasklist, settTasklist,task, setTask}) => {

  const handleEdit =(id) =>{
    const selectedTask = tasklist.find(todo => todo.id ===id)
    setTask(selectedTask);
  }
  const handleDelete =(id) =>{
    const updatedTasklist= tasklist.filter(todo =>todo.id !== id)
    settTasklist(updatedTasklist);
  }
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">todo</span>
          <span className="count">{tasklist.length}</span> 
        </div>
        <button onClick={() => settTasklist([])} className="clearAll" > Clear All</button>
      </div>
      <ul>
      {tasklist.map((todo) =>(
        <li key ={todo.id}>
          <p>
            <span className ="task all">{todo.name}</span>
            <span className ="time">{todo.time}</span>
            </p>
          <span onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></span>
          <span onClick={() => handleDelete(todo.id)}className="bi bi-trash"></span>
        </li> 
        
             ))}       
      </ul>
    </section>
  )
}
