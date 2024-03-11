import React, {useState} from "react";

const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [hover, setHover] = useState(null);

    const onPressEnter = (e) => {
        if (e.key === "Enter") {
            setTodoList(todoList.concat(e.target.value));
            setInputValue("");
        };
    };

    return(
        <div className="principal">
            <p className="fw-lighter">todos</p>
            <div className="tarjeta">
                <input
                    type="text"
                    placeholder="What needs to be done?" 
                    onChange={(e) => setInputValue(e.target.value)} 
                    onKeyDown={onPressEnter} 
                    value={inputValue}
                />
                <ul>
                    {todoList.length > 0 ? todoList.map((elem, index) => (
                        <li 
                            key={index}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(null)}
                        >
                            {elem} 
                                <i className={`fas fa-times icono ${index === hover ? "hover" : "" }`}
                                    onClick={() => setTodoList(todoList.filter((elem, i) => index !== i)) }>
                                </i>
                        </li>
                    )) : (
                        <li className="agregarTarea">No hay tareas, añadir tareas</li>
                    )}
                </ul>    
                <div className="contador">
                    {todoList.length} item left
                </div>
            </div>
            <div className="tarjeta2"></div>
            <div className="tarjeta3"></div>
        </div>
    );
};

export default TodoList;