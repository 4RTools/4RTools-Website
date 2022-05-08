import React from 'react';
import styled from 'styled-components';
import theme from '@theme'

interface ButtonProps {
    label?: string,
}

const SButton = styled.button`
    border-radius: 10px;
    padding: 30px;
    margin: 5px;
    cursor: pointer;
    background-color: ${theme.primaryColor};
    color: #fff;
    font-size: 1.25rem;
    border-style:none;

    &:hover {
        background-color: ${theme.primaryColorDark};
    }
`

const Button = (props: ButtonProps) => {

    return <SButton onClick={() => alert("oi")}>{props.label}</SButton>
}

export default Button