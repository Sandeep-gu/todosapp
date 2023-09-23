import React, { useState, useContext } from "react";
import "./style.css";
import { GlobalContext } from "../../App";
import { AiOutlinePlus } from "react-icons/ai";

//create a new todo for given content
const createTodo = (content) => {
	return { id: new Date().toISOString(), content: content, complete: false };
};
function TodoForm() {
	const [inputitem, setInputItem] = useState("");
	const [error,setError] = useState(false);

	//using global context of stored state
	const { items, setItems } = useContext(GlobalContext);
	//to add data in the localstorage
	const addTodo = (e) => {
		e.preventDefault();

		if (inputitem.length>=2) {
			localStorage.setItem(
				"todos",
				JSON.stringify([...items, createTodo(inputitem)])
			);
			setItems([...items, createTodo(inputitem)]);
			setInputItem("");
			setError(false)
		}
		else{
			setError(true)
		}
	};

	return (
		<>
			<div className="form-wrapper">
				<form className="form-container" onSubmit={addTodo}>
					
					<input
						className="input-form"
						type="text"
						value={inputitem}
						onChange={(e) => setInputItem(e.target.value)}
						placeholder="Enter your data"
						required
					/>
					<button className="form-btn" type="Submit">
					
						<AiOutlinePlus />
					</button>
					
				</form>
				{
					error?<span className="error">Please Enter the Data</span>:null
				}
				
			</div>
		</>
	);
}

export default TodoForm;
