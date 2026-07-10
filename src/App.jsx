import Cabecera from './components/Cabecera'
import CartaPerfil from './components/ProfileCard'
import Contador from './components/Countador'
import ListaTareas from './components/ListaTareas'

function App() {
  return (
    <div>
      <Cabecera />
      <br />
      <CartaPerfil
        nombre="Noel López Herrera"
        carrera="Ingeniería en Sistemas Computacionales"
        semestre="Noveno semestre"
      />
      <br />
      <Contador />
      <br />
      <br />
      <ListaTareas />
    </div>
  )
}

export default App