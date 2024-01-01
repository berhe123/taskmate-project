
export const AddTask = ({tasklist, settTasklist,task, setTask}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.id){
      const date = new Date();
      const updateTasklist = tasklist.map((todo) =>(
        todo.id ===task.id ? {id: task.id, name:task.name,time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} :todo
      ));
      settTasklist(updateTasklist);
      setTask({});
    } else{
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      settTasklist([...tasklist, newTask])
       setTask({});

    }
   
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value ={task.name || ""} autoComplete="off" placeholder="add task" maxLength="25" onChange={e => setTask({...task, name:e.target.value})}/>
        <button tyepe="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}
