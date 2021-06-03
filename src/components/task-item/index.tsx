import React from 'react';
import { Container } from './styles';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Task } from '../../hooks/task';

interface TaskItem {
    task: Task;
    lastTask: boolean;
}

const TaskItem: React.FC<TaskItem> = ({ task, lastTask }) => {

    return (
        <Container lastTask={lastTask}>
            <div>
                <label htmlFor="conpleteTask">
                    <input type="checkbox" name="conpleteTask" id="conpleteTask" value="true" />
                    {task.title}
                </label>
            </div>

            <div>
                <button type="button" className="edit">
                    <FiEdit size={14} color="fff" />
                </button>
                <button type="button" className="delete">
                    <FiTrash size={14} color="fff" />
                </button>
            </div>
        </Container>
    )
};

export default TaskItem;