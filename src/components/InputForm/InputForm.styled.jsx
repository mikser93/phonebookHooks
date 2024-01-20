import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #000;
  width: 300px;
  padding: 10px;
  gap: 15px;

  input {
    width: 250px;
    height: 25px;
  }

  button {
    width: 100px;
    height: 25px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
