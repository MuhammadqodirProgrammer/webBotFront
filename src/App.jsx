import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './components/hooks/useTelegram';

function App() {
	const { tg, onToggle } = useTelegram();
	useEffect(() => {
		tg.ready();
	}, []);

	return (
		<>
			<div>
				<Header />
				<button onClick={onToggle}>toggle</button>
			</div>
		</>
	);
}

export default App;
