import React from 'react';
import Header from '../../components/header';
import TaskInput from '../../components/task-input';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {

    return (
        <Container>
            <Header />

            <Content>
                <TaskInput />
            </Content>
        </Container>
    )
};

export default Dashboard;