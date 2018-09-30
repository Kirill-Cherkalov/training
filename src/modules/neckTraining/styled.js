import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import neck11 from './img/neck1_1.png';
import neck12 from './img/neck1_2.png';

import neck21 from './img/neck2_1.png';
import neck22 from './img/neck2_2.png';
import neck23 from './img/neck2_3.png';

const arr = [neck21, neck22, neck23];

const getImgEx1 = numb => (numb % 2 === 0 ? neck12 : neck11);
const getImgEx2 = numb => arr[numb];

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100vw - 400px);
  height: calc(100vh - 100px);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const StyledTypography = styled(({ ...rest }) => (
  <Typography {...rest} />
))`
  && {
    font-size: 28px;
    line-height: 36px;
    color: ${({ theme }) => theme.mono.dark};
  }
`;

export const StyledPaper = styled(({ ...rest }) => (
  <Paper {...rest} />
))`
  && {
    width: 400px;
    text-align: justify;
    font-size: 22px;
    line-height: 26px;
    padding: 25px;
    color: ${({ theme }) => theme.mono.dark};
    margin-right: 150px;
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 15px;
  height: 440px;
  width: 400px;
  background-image: url(${({ numb, modif }) => (modif === 1 ? getImgEx1(numb) : getImgEx2(numb))});
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  background-repeat: no-repeat;
  background-size: cover;
`;
