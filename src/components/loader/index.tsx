import React from 'react';
import { Container } from './styles';
import { FaSpinner } from 'react-icons/fa';

const Loader: React.FC = () => {

    return (
        <Container>
            <FaSpinner size={35} className="spinner" />
        </Container>
    )
};

export default Loader;