import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import * as S from './styled';

class NeckTraining extends Component {
  state = {
    seconds: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    if (this.state.seconds === 2) {
      this.setState({
        seconds: 0,
      });
      return;
    }
    this.setState(({ seconds }) => ({
      seconds: seconds + 1,
    }));
  }

  render() {
    let header;
    const { location } = this.props;
    let textArr = [];
    if (location.pathname === '/neckTraining/:1') {
      header = 'Упражнение 1';
      textArr = [`Корпус прямой, голову не запрокидываем назад, пдбородок направлен в потолок.
      Тянемся подбородком вверх. Затем движение на секунду останавливаем,
      немного отпускаем напряжение,
      но не расслабляемся и снова тянемся подбородком ввысь.`, 'Делаем несколько таких движений, не забывая про технику безопасности.'];
    } else {
      header = 'Упражнение 2';
      textArr = [`Стоим ровно. Голова прямо, смотрим перед собой.
      Вокруг носа, как вокруг неподвижной опоры, начинаем поворачивать голову вправо.
      Подбородок при этом смещается вправо, чуть вперед и вверх.`, `Вспомните, как это делает маленький щенок,
      когда видит что-то интересное или реагирует на Ваши слова.`, `Это упражнение выполняеем в трех вариантахЖ голова ровно
      (смотрим перед собой), голова опущена (смотрим в пол),
      голова слегка отклонена назад (смотрим в потолок). Будтье осторожны!`];
    }
    const { seconds } = this.state;
    return (
      <S.Wrapper>
        <S.StyledPaper>
          <S.StyledTypography variant="headline" component="h2">
            {header}
          </S.StyledTypography>
          {textArr[0]}
          <br />
          {textArr[1]}
          <br />
          {textArr[2]}
        </S.StyledPaper>
        {
          location.pathname === '/neckTraining/:1' ? <S.ImgWrapper modif={1} numb={seconds} /> : <S.ImgWrapper modif={2} numb={seconds} />
        }
      </S.Wrapper>
    );
  }
}

NeckTraining.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(NeckTraining);
