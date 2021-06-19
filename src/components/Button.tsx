import styled from 'styled-components';

const VARIANT_STYLES = {
    primary: {
        background: '#3994ff',
        hoverBackground: '#2c78d1',
    },
    secondary: {
        background: '#4f545c',
        hoverBackground: '#3a3e44',
    },
};

const Button = styled.a<{variant: 'primary' | 'secondary'}>`
    display: inline-block;
    background: ${({variant}) => VARIANT_STYLES[variant].background};
    border-radius: 8px;
    padding: 16px 40px;
    color: #ffffff;
    text-decoration: none;

    &:hover {
        background: ${({variant}) => VARIANT_STYLES[variant].hoverBackground};
        transition: all 0.2s ease-in-out;
    }
`;

export default Button;
