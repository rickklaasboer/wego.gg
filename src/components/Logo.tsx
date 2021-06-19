import styled from 'styled-components';

const Logo = styled.div<{src: string}>`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 5px solid #272934;
    background-color: #202225;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: rotate(360deg);
        cursor: pointer;
    }
`;

export default Logo;
