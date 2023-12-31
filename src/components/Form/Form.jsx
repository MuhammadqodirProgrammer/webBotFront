import { useCallback, useEffect, useState } from 'react';
import { useTelegram } from '../hooks/useTelegram';
import './Form.css';

const Form = () => {
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [subject, setSubject] = useState('');
	const { tg } = useTelegram();

	const onSendData = useCallback(() => {
		const data = {
			country,
			city,
			subject,
		};
		console.log(data);

		tg.sendData(JSON.stringify(data));
	}, [country, city, subject]);

	useEffect(() => {
		tg.onEvent('mainButtonClicked', onSendData);

		return () => {
			// tg.offEvnet("mainButtonClicked" ,onSendData)
			window.Telegram?.WebApp?.offEvent('mainButtonClicked', onSendData);
		};
	}, [onSendData]);

	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Malumotlarni yuborish',
		});
	}, []);

	useEffect(() => {
		if (!city || !country) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	}, [country, city, subject]);
	const onChangeCountry = (e) => {
		setCountry(e.target.value);
	};
	const onChangeCity = (e) => {
		setCity(e.target.value);
	};
	const onChangeSubject = (e) => {
		setSubject(e.target.value);
	};
	return (
		<div className='form'>
			<h2>Malumotlaringizni kiriting</h2>
			<input
				type='text'
				className='input'
				value={country}
				placeholder='Davlat'
				onChange={onChangeCountry}
			/>
			<input
				type='text'
				className='input'
				value={city}
				placeholder="Ko'cha"
				onChange={onChangeCity}
			/>

			<select className='select' value={subject} onChange={onChangeSubject}>
				<option value='Nmadir'>Nmadir</option>
				<option value='Nmadir2'>Nmadir2</option>
				<option value='Nmadir3'>Nmadir3</option>
			</select>
		</div>
	);
};

export default Form;
