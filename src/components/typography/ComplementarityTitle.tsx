import styled from 'styled-components';

const ComplementarityTitle = styled.h6<{margin?: string}>`
    font-size: 0.9rem;
    margin: ${({margin}) => margin ?? '8px 0px'};
`;

export default ComplementarityTitle;
