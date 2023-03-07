import TaskItem from './TaskItem';
//import styles from './TaskList.modules.css';

const TaskList = ({tasks}) => {
    return (
        <div>
            <h2>Task List</h2>
            <ul className={styles.tasks}>
                {tasks.map(task => {
                    <TaskItem 
                    key={task.id}
                    task={task}
                    />
                })
                }
            </ul>
        </div>
    )
}

export default TaskList;