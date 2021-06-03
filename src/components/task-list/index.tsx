import React, { useEffect } from 'react';
import TaskItem from '../task-item';
import { Container } from './styles';
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import Loader from '../loader';
import { useTask } from '../../hooks/task';

const Tasklist: React.FC = () => {
    const { tasks } = useTask();

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    return (
        <Container>
            <h2>
                Tasks

                <FaSortAlphaDown size={14} className="icon" />
                <FaSortAlphaDownAlt size={14} className="icon" />
            </h2>

            {/* <Loader /> */}

            {
                tasks.map((task, index) => (
                    <TaskItem task={task} lastTask={tasks.length === index + 1} />
                ))
            }

            <label htmlFor="hideCompleted">
                Hide completed
                <input type="checkbox" name="hideCompleted" id="hideCompleted" value="true" />
            </label>
        </Container>
    )
};

export default Tasklist;