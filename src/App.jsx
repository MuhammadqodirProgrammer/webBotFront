
import { useEffect } from 'react';
import './App.css'
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
tg.ready()
  }, []);
const onClose =()=>{
tg.close()
}
  return (
    <>
    <div>
      <h1>hello my bot</h1>
      <button onClick={onClose}>Close</button>
    </div>
    </>
  )
}

export default App
