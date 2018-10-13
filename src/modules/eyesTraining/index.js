import React, { Component } from 'react';

import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import * as S from './styled';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class EyesTraining extends Component {
  state = {
    excercise: 0,
    top: 20,
    vertivalSkale: 'down',
    horisontalSkale: 'right',
    speed: 5,
    left: 50,
    switch: 'low',
    timer: 15,
    timerMax: 15,
  };

  componentDidMount() {
    this.verticalInterval = setInterval(() => this.verticalTick(), 50);
    this.horisontalInterval = setInterval(() => this.horisontalTick(), 50);
    this.timer = setInterval(() => this.timerTick(), 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ((nextState.excercise === 1 && this.state.excercise === 0)
    || (nextState.excercise === 2 && this.state.excercise === 1)) {
      this.setState({ timer: this.state.timerMax });
      return true;
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.verticalInterval);
    clearInterval(this.horisontalInterval);
    clearInterval(this.timer);
  }

  handleChange = (event) => {
    this.setState({
      switch: event.target.value,
      speed: event.target.value === 'low' ? 5
        : event.target.value === 'medium' ? 8
          : event.target.value === 'hard' ? 10 : 5,
      timer: event.target.value === 'low' ? 15
        : event.target.value === 'medium' ? 20
          : event.target.value === 'hard' ? 25 : 17,
      timerMax: event.target.value === 'low' ? 15
        : event.target.value === 'medium' ? 20
          : event.target.value === 'hard' ? 25 : 17,
    });
  };

  timerTick = () => {
    const { timer, excercise } = this.state;
    if (timer === 0) {
      return this.setState(prevState => ({ excercise: prevState.excercise + 1 }));
    }
    if (excercise === 3) {
      return this.setState({ timer: this.state.timerMax });
    }
    if (excercise > 0 && excercise !== 3) {
      return this.setState(prevState => ({ timer: prevState.timer - 1 }));
    }
    return undefined;
  }

  horisTick = () => {
    this.verticalInterval = setInterval(() => this.horisontalTick(), 50);
  }

  verticalTick = () => {
    const { top, vertivalSkale, speed } = this.state;
    if (vertivalSkale === 'down') {
      if (top > 135) {
        return this.setState({ vertivalSkale: 'up' });
      }
      return this.setState(prevState => ({ top: prevState.top + speed }));
    }
    if (vertivalSkale === 'up') {
      if (top < 30) {
        return this.setState({ vertivalSkale: 'down' });
      }
      return this.setState(prevState => ({ top: prevState.top - speed }));
    }
    return undefined;
  }

  horisontalTick = () => {
    const { left, horisontalSkale, speed } = this.state;
    if (horisontalSkale === 'right') {
      if (left > 350) {
        return this.setState({ horisontalSkale: 'left' });
      }
      return this.setState(prevState => ({ left: prevState.left + speed }));
    }
    if (horisontalSkale === 'left') {
      if (left < 30) {
        return this.setState({ horisontalSkale: 'right' });
      }
      return this.setState(prevState => ({ left: prevState.left - speed }));
    }
    return undefined;
  }


  someFunct = () => {
    const { excercise, top, left } = this.state;
    if (excercise === 0) {
      return (
        <React.Fragment>
          <S.StyledPaper width="1100px">
          А ну-ка, расправьте плечи. Вначале примите "мышечный корсет". Что для этого нужно?
          Правильно! Выпрямить спину и растянуть улыбку до ушей. Затем внутри искусственно
          вызвать положительные эмоции. Как? Вы это уже знаете! Сделали?
            <br />
          А теперь можно начинать выполнять упражнения. Только не забывайте моргать!
          </S.StyledPaper>
          <FormControl component="fieldset" >
            <FormLabel component="legend">Выберите режим тренировки</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender2"
              value={this.state.switch}
              onChange={this.handleChange}
            >
              <FormControlLabel
                value="low"
                control={<Radio color="primary" />}
                label="Low"
                labelPlacement="start"
              />
              <FormControlLabel
                value="medium"
                control={<Radio color="primary" />}
                label="Medium"
                labelPlacement="start"
              />
              <FormControlLabel
                value="hard"
                control={<Radio color="primary" />}
                label="Hard"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
        </React.Fragment>
      );
    }
    if (excercise === 1) {
      return (
        <React.Fragment>
          <S.StyledPaper>
            Голову держите прямо, не запрокидывайте. Взгляд направлен вверх (в потолок),
            а мысленно продолжаем движение
            глаз под череп на макушку, как будто Вы туда посмотрели.
          </S.StyledPaper>
          {
            <S.ImgContainer>
              <S.ImgWrapper>
                <S.Img top={top} left={210} numb={excercise} />
                {/* <Svg modif={'left'}> </Svg>
          <S.Img top={top} modif={'left'} left={210} numb={excercise} />
          <Svg modif={'right'}> </Svg>
          <S.Img top={top}  modif={'right'}left={210} numb={excercise} />
               */}
              </S.ImgWrapper>
              <S.ImgWrapper>
                <S.Img top={top} left={210} numb={excercise} />
              </S.ImgWrapper>
            </S.ImgContainer>
          }
        </React.Fragment>
      );
    }
    if (excercise === 2) {
      return (
        <React.Fragment>
          <S.StyledPaper>
            Посмотрите влево: глаза смотрят на стену, а внимание ушло за левое ухо.
            Посмотрите вправо: глаза смотрят на другую стену, а внимание ушло за правое ухо.
          </S.StyledPaper>
          {
            <S.ImgContainer>
              <S.ImgWrapper>
                <S.Img top={85} left={left} numb={excercise} />
              </S.ImgWrapper>
              <S.ImgWrapper>
                <S.Img top={85} left={left} numb={excercise} />
              </S.ImgWrapper>
            </S.ImgContainer>
          }
        </React.Fragment>
      );
    }
    if (excercise === 3) {
      return (
        <React.Fragment>
          <S.StyledPaper>
            Но, как и во всем, здесь тоже нужно помнить о технике безопасности.
            Не пересердствуйте. Любое
            перенапряжение в работе с глазами приводит к противоположному результату.
          </S.StyledPaper>
        </React.Fragment>
      );
    }
    return null;
  }

  handleClick = () => {
    const { excercise } = this.state;
    if (excercise === 3) {
      return this.setState({ excercise: 0 });
    }
    return this.setState(prevState => ({ excercise: prevState.excercise + 1 }));
  }

  render() {
    const { classes } = this.props;
    return (
      <S.ContentBtn>
        <S.Timer>
          {this.state.timer} seconds
        </S.Timer>
        <S.Wrapper>
          {this.someFunct()}
          <Button variant="fab" color="primary" onClick={this.handleClick}>
            <ArrowForwardIos className={classes.button} />
          </Button>
        </S.Wrapper>
      </S.ContentBtn>
    );
  }
}

export default withStyles(styles)(EyesTraining);
