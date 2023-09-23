import React, { useContext } from "react";
import "./style.css";
import TodoItem from "../TdodItem";
import { GlobalContext } from "../../App";
function TodoList() {
	const { items } = useContext(GlobalContext);
	return (
		<div className="todo-list-wrapper">
			<ul>
				{items.map((item, index) => {
					if (!item.complete) {
						return <TodoItem item={item} key={index} />;
					}
				})}
			</ul>
		</div>
	);
}

export default TodoList;
