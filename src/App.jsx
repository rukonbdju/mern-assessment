
import ReducerProvider from '../context/ReducerProvider'
import './App.css'
import Reservation from './components/Reservation/Reservation'


function App() {
  return (
    <div>
      <ReducerProvider>
        <Reservation></Reservation>
      </ReducerProvider>
    </div>
  )
}

export default App
