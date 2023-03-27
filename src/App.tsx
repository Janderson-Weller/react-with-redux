import { useState } from 'react';
import './App.css';
import { Button } from './compoents/Button';

function App() {
    const [value, setValue] = useState<number>(0);
    const handleClick = () => setValue(value + 1);

    return (
        <div className="App">
            <div className="card">
                <div className="card-title">
                    <h1>Valores</h1>
                    <span>{value}</span>
                </div>
                <Button text="Incrementar" onClick={handleClick} />                
            </div>
        </div>
    );
}

export default App;
