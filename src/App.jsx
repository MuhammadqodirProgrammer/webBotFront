import { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { useTelegram } from './components/hooks/useTelegram';
import ProductList from './components/ProductList/ProductList';

function App() {
	const { tg } = useTelegram();
	useEffect(() => {
		tg.ready();
	}, []);

	return (
		<>
			<div>
				<Header />
<Routes>
  <Route index path='/' element={<ProductList/>}  />
  <Route index path='/form' element={<Form/>}  />
</Routes>
<Outlet/>
			</div>
		</>
	);
}

export default App;
