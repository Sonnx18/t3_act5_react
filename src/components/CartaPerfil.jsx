function ProfileCard(props) {
  return (
    <div>
      <h2>Perfil</h2>
      <p>Nombre: {props.nombre}</p>
      <p>Carrera: {props.carrera}</p>
      <p>Semestre: {props.semestre}</p>
    </div>
  )
}

export default ProfileCard