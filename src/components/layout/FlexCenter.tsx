import styled from 'styled-components';

const FlexCenter = styled.div<{
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
}>`
    display: flex;
    flex-direction: ${({direction}) => direction ?? 'row'};
    justify-content: center;
`;

export default FlexCenter;
