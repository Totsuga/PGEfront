import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const Link = styled.a`
  color: #0263b0;
  font-weight: 700;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
`;

export const Form = styled.form`
  max-width: 60%;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
    color: #333;
    font-size: 14px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: bold;
    margin-bottom: 4px;
`;
