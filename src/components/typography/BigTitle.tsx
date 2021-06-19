import styled from 'styled-components';

const BigTitle = styled.h1<{margin?: string}>`
    font-size: 4rem;
    margin: ${({margin}) => margin ?? '8px 0px'};
`;

export default BigTitle;
