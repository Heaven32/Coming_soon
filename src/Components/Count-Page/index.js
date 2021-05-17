import React from 'react';
import {useState, useEffect, useRef} from 'react';

function computeInitialCounter() {
    return Math.trunc(Math.random() * 20);
}

function CountPage() {
    const [counter, setCounter] = useState(() => computeInitialCounter());
    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now(),
    });
    const [type, setType] = useState('users');
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])

    function increment() {
        setCounter(prev => prev + 1);
    };

    function decrement() {
        setCounter(counter - 1);
    };

    function change() {
        setState(prev => {
            return {
                ...prev,
                title: 'change title now'
            }
        })
    };

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={increment} className='btn btn-success'>Add</button>
            <button onClick={decrement} className='btn btn-danger'>Remove</button>
            <button onClick={change} className='btn btn-dark'>Change title</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>

            <h1>Resurs: {type} </h1>
            <button  onClick={() => setType('users')}>Users</button>
            <button onClick={() => setType('todos')}>Todos</button>
            <button onClick={() => setType('posts')}>Posts</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        </div>
    )
}

export default CountPage;