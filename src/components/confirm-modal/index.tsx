import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { FaTimes } from 'react-icons/fa';

const ConfirmModal: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Container showModal={showModal}>
            <div className="modal">
                <header className="top">
                    <h3 className="title">Title</h3>
                    <button type="button">
                        <FaTimes size={14} color="9a3333" />
                    </button>
                </header>

                <div className="content">
                    <p>Texto</p>

                    <div className="buttons">
                        <button type="button" className="cancel">Cancel</button>
                        <button type="button" className="delete">Delete</button>
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default ConfirmModal;