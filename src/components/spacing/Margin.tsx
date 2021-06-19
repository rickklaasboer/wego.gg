import styled from 'styled-components';

const Margin = styled.div<{margin: string}>`
    margin: ${({margin}) => margin};
`;

export default Margin;
