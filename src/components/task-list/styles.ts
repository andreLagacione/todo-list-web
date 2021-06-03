import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    h2 {
        font-size: 1.125em;
        cursor: pointer;

        .icon {
            margin-left: 5px;
        }
    }

    label {
        margin-top: 10px;
        display: flex;
        align-items: center;
        font-size: 0.875em;
        cursor: pointer;

        input {
            margin-left: 5px;
        }
    }
`;
