import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import upDown from './img/upDown.gif';
import leftRight from './img/leftRight.gif';

const getGif = (numb) => {
  if (numb === 1) {
    return upDown;
  } else if (numb === 2) {
    return leftRight;
  }
  return null;
};

export const ContentBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1100px;
  height: 500px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const StyledPaper = styled(({ ...rest }) => (
  <Paper {...rest} />
))`
  && {
    width: ${({ width }) => (width ? width : '400px')};
    text-align: justify;
    font-size: 22px;
    line-height: 26px;
    padding: 25px;
    color: ${({ theme }) => theme.mono.dark};
    margin-right: ${({ marginRight }) => ( marginRight ? marginRight : '150px')};
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 480px;
  height: 270px;
  display: block;
`;

export const Img = styled.div`
  display: block;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  background-image: url(${({ numb }) => getGif(numb)});
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  background-repeat: no-repeat;
`;