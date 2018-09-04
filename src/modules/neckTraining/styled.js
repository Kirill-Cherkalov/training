import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextWrapper = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.mono.dark};
`;
