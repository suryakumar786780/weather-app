import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import './themeselect.scss';

const ThemeSelect = () => {
    const [bg, setBg] = useState('white')
    const location = useContext(UserContext);
    const changeTheme = (e) => {
        setBg(e)
        location.setSetting((p) => ({
            ...p,
            icon: e
        }))
    }
    return (
        <select className={`form-select form-select-sm ${bg}`} aria-label=".form-select-sm example" onChange={event => changeTheme(event.target.value)}
            defaultValue={bg}>
            <option value="none">Default</option>
            <option value="skyblue" className='skyblue'>Skyblue</option>
            <option value="yellow" className='yellow'>Yellow</option>
            <option value="pink" className='pink'>Pink</option>
            <option value="green" className='green'>Green</option>
            <option value="red" className='red'>Red</option>
        </select>
    )
}

export default ThemeSelect