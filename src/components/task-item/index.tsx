import React from 'react';
import { Container } from './styles';
import { FiEdit, FiTrash } from 'react-icons/fi';

const TaskItem: React.FC = () => {

    return (
        <Container>
            <div>
                <label htmlFor="conpleteTask">
                    <input type="checkbox" name="conpleteTask" id="conpleteTask" value="true" />
                    Task name
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