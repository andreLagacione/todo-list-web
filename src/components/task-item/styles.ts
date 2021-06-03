import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #9a3333;
    border-bottom: 0;

    > div {
        display: flex;
        align-items: center;
    }

    label {
        margin-top: 0;
        display: flex;
        align-items: center;
        font-size: 0.875em;
        cursor: pointer;

        input {
            margin-right: 15px;
        }
    }

    button {
        width: 30px;
        height: 30px;
        border: 0;
        margin-left: 5px;
        border-radius: 5px;

        &.edit {
            background-color: #4a9bed;

            &:hover {
                background-color: ${shade(0.2, '#4a9bed')};
            }
        }

        &.delete {
            background-color: #dd1717;
        
            &:hover {
                background-color: ${shade(0.2, '#dd1717')};
            }
        }
    }
`;
