import Cabecera from './components/Cabecera'
import CartaPerfil from './components/CartaPerfil'
import Contador from './components/Contador'
import ListaTareas from './components/ListaTareas'

function App() {
  return (
    <div className="App"  >
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