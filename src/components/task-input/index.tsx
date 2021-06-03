import React, { FormEvent, useState } from 'react';
import { useTask } from '../../hooks/task';
import { Container } from './styles';

const TaskInput: React.FC = () => {
    const [taskName, setTaskName] = useState<string>('');
    const { createTask } = useTask();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const value = taskName.trim();
        if (value) {
            createTask(value);
            setTaskName('');
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="taskName"
                    id="taskName"
                    value={taskName}
                    onChange={(e: any) => setTaskName(e.target.value)}
                />

                <button type="submit" disabled={!taskName}>Create</button>
            </form>
        </Container>
    )
};

export default TaskInput;