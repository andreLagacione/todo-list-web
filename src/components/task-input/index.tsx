import React from 'react';
import { Container } from './styles';

const TaskInput: React.FC = () => {

    return (
        <Container>
            <input type="text" name="task-input" id="task-input" />

            <button type="button">Create</button>
        </Container>
    )
};

export default TaskInput;