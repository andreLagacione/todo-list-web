import React from 'react';
import { Container } from './styles';

const Header: React.FC = () => {

    return (
        <Container>
            <h1>TODO List</h1>

            <a href="#" title="Logout">Logout</a>
        </Container>
    )
};

export default Header;