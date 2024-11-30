import TaskItem from './TaskItem.jsx'

const TasksList = ({ tasks, removeTask }) => {
	return (
		<div className='tasks__list'>
			{tasks.map((task, index) =>
				<TaskItem task={task} number={index + 1} removeTask={removeTask} />
			)}
		</div>
	)
}

export default TasksList