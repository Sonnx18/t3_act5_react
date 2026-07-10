function TaskList() {
  const tareas = [
    'Terminar tarea de conmutación',
    'Terminar de ver el video',
    'Terminar de configurar el proyecto de React',
    'Subir tarea de programación web'
  ]

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTareas