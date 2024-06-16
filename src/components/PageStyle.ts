import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    margin-bottom: 20px;
    text-align: center;
`;

export const Label = styled.label`
    margin-bottom: 10px;
    font-size: 1.2em;
`;

export const Input = styled.input`
    margin-bottom: 20px;
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const Select = styled.select`
    margin-bottom: 20px;
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
    padding: 10px;
    font-size: 1.2em;
    border-radius: 5px;
    border: none;
    background: #007BFF;
    color: #fff;
    cursor: pointer;
`;

export const LinksContainer = styled.div`
    margin-top: 20px;
    text-align: center;
`;

export const Link = styled.a`
    margin-right: 10px;
    color: #007BFF;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &:last-child {
        margin-right: 0;
    }
`;
