import React, {useState} from 'react'

function TodoForm(props) {
const [input, setInput] = useState('');

const handleChange = e => {
    setInput(e.target.value);
};

const handleSumbmit = e => {
    e.preventDefault();

    props.onSumbit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

    setInput('');
};
    return (
        <form className = "todo-form" onSumbit = {handleSumbmit}>
          <input 
           type = "text"
           placeholder = "Add a todo" 
           value = {input} name = "text" 
           className = "todo-input"
           onChange = {handleChange}
           /> 
           <button className = "todo-button">Add todo</button>
        </form>
    )
}

export default TodoForm

