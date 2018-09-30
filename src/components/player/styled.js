import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import LinearProgress from '@material-ui/core/LinearProgress';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
`;

export const StyledPlayer = styled(({ ref, ...rest }) => (
  <ReactPlayer ref={ref} {...rest} />
))`
  position: absolute;
  left: -15000px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 198px;
  height: 64px;
  align-items: center;
  flex-wrap: wrap;
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  width: 184px;
  align-items: center;
  justify-content: space-between;
`;

export const SlyderWrapper = styled.div`
  position: relative;
  top: ${({ top }) => top};
  padding-top: 25px;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  height: 15px;
  width: 184px;
  border-radius: 5px;
  margin-top: 16px;
`;
