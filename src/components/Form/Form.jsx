import { useEffect, useState } from 'react';
import { useTelegram } from '../hooks/useTelegram';
import './Form.css';

const Form = () => {
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [subject, setSubject] = useState('');
const {tg} =useTelegram()
    useEffect(()=>{
tg.MainButton.setParams({
    text:"Malumotlarni yuborish"
})
},[])

useEffect(()=>{
    if(!city || !country){

        tg.MainButton.hide()
    }else{
        tg.MainButton.show()

    }
    },[country ,city])
	const onChangeCountry = (e) => {
		e.preventDefault();
		setCountry(e.target.value);
	};
    const onChangeCity = (e) => {
		e.preventDefault();
		setCity(e.target.value);
	};
    const onChangeSubject= (e) => {
		e.preventDefault();
		setSubject(e.target.value);
	};
	return (
		<div className='form'>
			<h2>Malumotlaringizni kiriting</h2>
			<input type='text' className='input' value={country} placeholder='Davlat' onChange={onChangeCountry} />
			<input type='text' className='input' value={city} placeholder="Ko'cha" onChange={onChangeCity} />

			<select className='select' value={subject}  onChange={onChangeSubject}>
				<option value='Nmadir'>Nmadir</option>
				<option value='Nmadir2'>Nmadir2</option>
				<option value='Nmadir3'>Nmadir3</option>
			</select>
		</div>
	);
};

export default Form;
