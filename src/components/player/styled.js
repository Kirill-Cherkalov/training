import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import LinearProgress from '@material-ui/core/LinearProgress';

import SvgIcon from '@material-ui/core/SvgIcon';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
`;


const StyledSvgIcon = styled(SvgIcon)`
  && {
    height: 24px;
    width: 24px;
  }
`;

export const StyledPlay = () => (
  <StyledSvgIcon viewBox="0 0 24 24" fill="#000">
    <path d="M8 5v14l11-7z" fill="#fff" />
  </StyledSvgIcon>
);


export const StyledStop = () => (
  <StyledSvgIcon viewBox="0 0 24 24" fill="#000">
    <path d="M6 6h12v12H6z" fill="#fff" />
  </StyledSvgIcon>
);


export const StyledNext = () => (
  <StyledSvgIcon viewBox="0 0 24 24" fill="#000">
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" fill="#fff" />
  </StyledSvgIcon>
);


export const StyledPrev = () => (
  <StyledSvgIcon viewBox="0 0 24 24" fill="#000">
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" fill="#fff" />
  </StyledSvgIcon>
);


export const StyledPause = () => (
  <StyledSvgIcon viewBox="0 0 24 24" fill="#000">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="#fff" />
  </StyledSvgIcon>
);

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
