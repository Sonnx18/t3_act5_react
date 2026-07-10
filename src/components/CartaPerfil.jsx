function ProfileCard(props) {
  return (
    <div className="CartaPerfil">
      <h2>Perfil</h2>
      <p>Nombre: {props.nombre}</p>
      <p>Carrera: {props.carrera}</p>
      <p>Semestre: {props.semestre}</p>
    </div>
  )
}

export default CartaPerfil