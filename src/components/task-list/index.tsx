import React from 'react';
import { Container } from './styles';

const Tasklist: React.FC = () => {

    return (
        <Container>
            <h2>Tasks</h2>

            <label htmlFor="hideCompleted">
                Hide completed
                <input type="checkbox" name="hideCompleted" id="hideCompleted" value="true" />
            </label>
        </Container>
    )
};

export default Tasklist;