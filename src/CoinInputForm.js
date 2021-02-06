import {useState} from 'react';

export default function CoinInputForm(props) {
    const headings = props.headings;
    const [form, setForm] = useState({});
    const buttonClick = evt => {
        evt.preventDefault(); 
        props.addCoin(form);
    }
    const handleNameChange = evt => {
        setForm(prevForm => ({...prevForm, [evt.target.name]: evt.target.value}));
    }
    return (
        <form onSubmit={buttonClick}>
            {headings.map((o) =>
            <div  key={o.id}>
                <label>{o.title} </label>
                <input id={o.id} name={o.id} value={form.name} onChange={handleNameChange}/>
            </div>
            )}
            <button type="submit">Сохранить</button>
        </form>
    )
}