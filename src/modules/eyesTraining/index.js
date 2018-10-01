import React, { Component } from 'react';

import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

import * as S from './styled';

class EyesTraining extends Component {
  state = {
    excercise: 0,
  }
  someFunct = () => {
    const { excercise } = this.state;
    if (excercise === 0) {
      return (
        <S.StyledPaper width="1100px" marginRight="none">
          А ну-ка, расправьте плечи. Вначале примите "мышечный корсет". Что для этого нужно?
          Правильно! Выпрямить спину и растянуть улыбку до ушей. Затем внутри искусственно
          вызвать положительные эмоции. Как? Вы это уже знаете! Сделали?
          <br />
          А теперь можно начинать выполнять упражнения. Только не забывайте моргать!
        </S.StyledPaper>
      );
    }
    if (excercise === 1) {
      return (
        <React.Fragment>
          <S.StyledPaper>
            Голову держите прямо, не запрокидывайте. Взгляд направлен вверх (в потолок), а мысленно продолжаем движение
            глаз под череп на макушку, как будто Вы туда посмотрели.
          </S.StyledPaper>
          {
            <S.ImgWrapper>
              <S.Img numb={1} />
            </S.ImgWrapper>
          }
        </React.Fragment>
      );
    }
  }

  handleClick = () => {
    const { excercise } = this.state;
    if (excercise === 2) {
      return this.setState({ excercise: 0 });
    }
    return this.setState(prevState => ({ excercise: prevState.excercise + 1 }));
  }

  render() {
    return (
      <S.ContentBtn>
        <S.Wrapper>
          {this.someFunct()}
          <IconButton onClick={this.handleClick}>
            <ArrowForwardIos />
          </IconButton>
        </S.Wrapper>
      </S.ContentBtn>
    );
  }
}

export default EyesTraining;
