import './App.css'
import { useSelector , useDispatch } from 'react-redux';
import { add, remove } from './redux/types/types';

function App() {
  const variable = useSelector((state) => state.reducer.x)
  const dis = useDispatch();
  const addone = () =>{
    dis(add())
  }
  const removeone = () =>{
    dis(remove())
  }
  return (
    <div className='App'>
        <p>{variable}</p>
        <button onClick={addone}>add</button>
        <button onClick={removeone}>remove</button>
    </div>
  )
}

export default App
