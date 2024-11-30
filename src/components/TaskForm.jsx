import { useState } from 'react'
import MyButton from './UI/button/MyButton.jsx'
import MyInput from './UI/input/MyInput.jsx'

const TaskForm = ({ create }) => {
	const [task, setTask] = useState({ title: '', description: '' })
	
	const addNewTask = (e) => {
		e.preventDefault()
		const newTask = {
			...task,
			id: Date.now()
		}
		create(newTask)
		setTask({ title: '', description: '' })
	}
	
	return (
		<div>
			<form className='add__new__task'>
				<MyInput onChange={(e) => setTask({ ...task, title: e.target.value })} placeholder='Введите название задачи:'
				         type='text'
				         value={task.title} />
				<MyInput onChange={(e) => setTask({ ...task, description: e.target.value })}
				         placeholder='Введите описание задачи:'
				         type='text'
				         value={task.description}
				/>
				<MyButton onClick={addNewTask}>Добавить задачу</MyButton>
			</form>
		</div>
	)
}


export default TaskForm