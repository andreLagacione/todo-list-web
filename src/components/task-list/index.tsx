import React from 'react';
import TaskItem from '../task-item';
import { Container } from './styles';
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';

const Tasklist: React.FC = () => {

    return (
        <Container>
            <h2>
                Tasks

                <FaSortAlphaDown size={14} className="icon" />
                <FaSortAlphaDownAlt size={14} className="icon" />
            </h2>

            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />

            <label htmlFor="hideCompleted">
                Hide completed
                <input type="checkbox" name="hideCompleted" id="hideCompleted" value="true" />
            </label>
        </Container>
    )
};

export default Tasklist;