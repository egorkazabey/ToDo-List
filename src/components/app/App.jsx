import { useState } from 'react'
import TaskForm from '../TaskForm.jsx'
import TasksList from '../TasksList.jsx'
import './App.scss'

const App = () => {
	
	const [tasks, setTasks] = useState([
		{ id: 1, title: 'Task 1', content: 'Task 1' }
	])
	
	const createTask = (newTask) => {
		setTasks([...tasks, newTask])
	}
	
	const removeTask = (task) => {
		setTasks(tasks.filter((t) => t.id !== task.id))
		console.log('Задание номер', task.id, 'было удалено.')
	}
	
	
	return (
		<div className='App'>
			<div className='container'>
				<h1 style={{ margin: '15px 0' }}>Список заданий</h1>
				
				<TaskForm create={createTask} />
				
				{
					tasks.length !== 0 ? (
						<TasksList tasks={tasks} removeTask={removeTask} />
					) : (
						<h2 style={{ textAlign: 'center', margin: '50px ' }}>На данный момент нету ни одного задания.</h2>
					)
				}
			</div>
		</div>
	)
}

export default App