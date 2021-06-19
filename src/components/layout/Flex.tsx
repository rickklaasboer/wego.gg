import styled from 'styled-components';

const Flex = styled.div<{
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}>`
    display: flex;
    flex-direction: ${({direction}) => direction ?? 'row'};
    justify-content: ${({justify}) => justify ?? ''};
    align-items: ${({alignItems}) => alignItems ?? ''};
`;

export default Flex;
