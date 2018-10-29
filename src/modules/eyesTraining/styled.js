import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';

import circle from './img/circle.png';
import sphere from './img/sphere.png';

export const StyledBtn = styled(Button)`
  && {
    margin-left: 25px;
  }
`;

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

export const CirckeWrapper = styled.div`
  display: flex;
  width: 480px;
  height: 270px;
  position: relative;
`;

export const Timer = styled.p`
  font-size: 22px;
  line-height: 24px;
`;

export const StyledPaper = styled(({ ...rest }) => (
  <Paper {...rest} />
))`
  && {
    width: ${({ width }) => (width || '400px')};
    text-align: justify;
    font-size: 22px;
    line-height: 26px;
    padding: 25px;
    color: ${({ theme }) => theme.mono.dark};
    margin-bottom: 20px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 270px;
  display: block;
  background-image: url(${circle});
  background-size: cover;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  
`;

export const Img = styled.div`
  display: block;
  position: absolute;
  z-index: 2;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  height: 100px;
  width: 109px;
  background-image: url(${sphere});
  background-repeat: no-repeat;
  background-size: cover;
`;
