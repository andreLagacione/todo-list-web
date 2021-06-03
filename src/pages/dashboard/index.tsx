import React from 'react';
import Header from '../../components/header';
import TaskInput from '../../components/task-input';
import Tasklist from '../../components/task-list';
import { Container, Content } from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard: React.FC = () => {

    return (
        <>
            <Container>
                <Header />

                <Content>
                    <TaskInput />
                    <Tasklist />
                </Content>
            </Container>

            <ToastContainer />
        </>
    )
};

export default Dashboard;