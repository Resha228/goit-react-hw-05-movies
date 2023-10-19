import styled from 'styled-components';

export const SearchMoviesWraper = styled.section`
    margin-top: 24px;
    margin-bottom: 10px;
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 14px 0 20px;
`;

export const InputForm = styled.input`
    padding: 8px 10px 8px 40px;
    border-radius: 4px;
    border: none;
    outline: 2px solid white;
    min-width: 360px;
    min-height: 38px;
    transition: 0.3s ease;
    &:hover, 
    &:focus: {
    outline: 2px solid #cacbeb;
    }
    &::placeholder {
    color: #6a6c6e;
    line-height: 1.5;
    font-size: 17px;
    font-weight: 300;
    }
`;

export const FormWraper = styled.div`
    position: relative;
`;

export const IconWraper = styled.span`
    position: absolute;
    top: 9px;
    left: 9px;
`;

export const TitleForm = styled.h2`
    font-size: 36px;
    font-weight: 500;
    margin: 10px 0 12px;
`;

export const ButtonSubmit = styled.button`
    min-width: 80px;
    height: 42px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    background-color: #f0d371;
    color: #010c1f;
    transition: 0.4s ease;
    &:hover, 
    &:focus: {
        border: 1px solid #78621c;
        background-color: #f0ca4d;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
`;