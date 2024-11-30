import MyButton from './UI/button/MyButton.jsx'

const TaskItem = (props) => {
	return (
		<>
			<div className='task'>
				<div className='task__content'>
					<strong>{props.number}. {props.task.title}</strong>
					<div>
						{props.task.description}
					</div>
				</div>
				<div className='task__btns'>
					<MyButton onClick={() => props.removeTask(props.task)}>Удалить задачу</MyButton>
				</div>
			</div>
		</>
	)
}

export default TaskItem