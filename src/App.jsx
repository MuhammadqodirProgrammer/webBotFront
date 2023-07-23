
import { useEffect } from 'react';
import './App.css'
import { useTelegram } from './components/hooks/useTelegram';

function App() {
const {tg ,onToggle} =useTelegram()
  useEffect(() => {
tg.ready()
  }, []);

  return (
    <>
    <div>
      <h1>hello my bot</h1>
    <button onClick={onToggle}>toggle</button>
    </div>
    </>
  )
}

export default App
