import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    align-items: center;

    input {
        width: 100%;
        height: 40px;
        border: 1px solid #9a3333;
        padding: 10px;
        border-radius: 5px;
        flex-grow: 1;
    }

    button {
        width: 100px;
        height: 40px;
        background-color: #9a3333;
        border: 0;
        color: #fff;
        margin-left: 15px;
        flex-grow: 0;
        border-radius: 5px;

        &:hover {
            background-color: ${shade(0.2, '#9a3333')};
        }
    }
`;
