import styled from "styled-components";
import OutlinedInput from '@mui/material/OutlinedInput';

export const Input = styled(OutlinedInput)`
    color: #555;
    background-color: #efefef;
    border: none;
    height: 42px;
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 4px;
`;

export const Label = styled.label`
    color: #333;
    font-size: 14px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: bold;
    margin-bottom: 4px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 24px 0;
`;