import styled from 'styled-components';

const TextContainer = styled.div`
  font-size: 28px;
  line-height: 36px;
  height: 100%;
  color: ${({ theme }) => theme.mono.dark};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TextContainer;
