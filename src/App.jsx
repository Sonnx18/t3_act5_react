import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Counter from './components/Counter'
import TaskList from './components/TaskList'

function App() {
  return (
    <div>
      <Header />
      <br />
      <ProfileCard
        nombre="Noel López Herrera"
        carrera="Ingeniería en Sistemas Computacionales"
        semestre="Noveno semestre"
      />
      <br />
      <Counter />
      <br />
      <br />
      <TaskList />
    </div>
  )
}

export default App