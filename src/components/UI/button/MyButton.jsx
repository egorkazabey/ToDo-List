import classes from './MyButton.module.scss'

const MyButton = (props) => {
	return (
		<button className={classes.MyBtn} {...props} />
	)
}

export default MyButton