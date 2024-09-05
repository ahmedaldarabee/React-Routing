import { Routes, Route, useNavigate } from 'react-router-dom';
import { Service } from './services';
import { AboutMe } from './about';
import { Contact } from './contactus';
import { useState } from 'react';

export default function Show() {
    const [inputValue, setInputValue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();

    const handleSend = (page) => () => {
        if (inputValue !== '') {
            setIsSubmitted(true);
            navigate(`/${page}`);
        }
    };

    return (
        <>
            {!isSubmitted && (
                <div className='get-data'>
                
                    <label htmlFor="name" className="bg-slate-500 w-fit p-1 font-bold capitalize rounded text-red-50 cursor-pointer">hello, add your name here: </label>
                    <input id="name" type='text' className='input-label m-2 rounded p-1' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                    
                    <div className='pages'>
                        <button onClick={handleSend('services')} className='capitalize bg-slate-500 rounded p-1  text-red-50 m-2'> go services page </button>
                        <button onClick={handleSend('about')} className='capitalize bg-slate-500 rounded p-1  text-red-50 m-2'> go about us page </button>
                        <button onClick={handleSend('contactus')} className='capitalize bg-slate-500 rounded p-1  text-red-50 m-2'> go contact us page</button>
                    </div>                    
                </div>
            )}

            <Routes>
                <Route path='/services' element={<Service name={inputValue} />} />
                <Route path='/about' element={<AboutMe name={inputValue} />} />
                <Route path='/contactus' element={<Contact name={inputValue} />} />
            </Routes>
        </>
    );
}
