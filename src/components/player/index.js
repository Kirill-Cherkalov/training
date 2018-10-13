import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

import * as S from './styled';
import './styles.css';

const musicUrls = [
  'https://soundcloud.com/giorgioiannelli/yann_tiersen-amelie_piano_version',
  'https://soundcloud.com/kygo/piano-jam',
  'https://soundcloud.com/kygo/piano-jam-2',
  'https://soundcloud.com/awfulpianosound/yiruma-river-flows-in-you',
  'https://soundcloud.com/reynah_3/let-it-go',
];

class Player extends Component {
  state = {
    currentTrack: 0,
    url: musicUrls,
    volume: 0.8,
    played: 0,
    loaded: 0,
    seeking: false,
    playing: false,
    showPlayer: false,
  }

  onSeekMouseDown = () => {
    this.setState({ seeking: true });
  }

  onSeekChange = (event, value) => {
    this.setState({ played: value });
    this.player.seekTo(parseFloat(value));
  }

  onSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  }

    onProgress = (state) => {
      if (!this.state.seeking) {
        this.setState(state);
      }
    }

  setVolume = (e, value) => {
    this.setState({ volume: value });
  }

  playPause = () => {
    this.setState(prevState => ({ playing: !prevState.playing }));
  }

  stop = () => {
    this.setState({
      currentTrack: 0, playing: false, loaded: 0, played: 0, seeking: false,
    });
    this.player.seekTo(parseFloat(0));
  }

  ref = (player) => {
    this.player = player;
  }

  load = (url) => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
    });
  }

  handlePlayer = (value) => {
    this.setState({
      showPlayer: value,
    });
  }

  nextTrack = () => {
    const { currentTrack, url } = this.state;
    if ((currentTrack + 1) === url.length) {
      return this.setState({ currentTrack: 0 });
    }
    return this.setState(prevState => ({ currentTrack: prevState.currentTrack + 1 }));
  }

  prevTrack = () => {
    const { currentTrack } = this.state;
    if (currentTrack === 0) {
      return this.setState({ currentTrack: 0 });
    }
    return this.setState(prevState => ({ currentTrack: prevState.currentTrack - 1 }));
  }

  render() {
    const {
      url, volume, playing, played, loaded, currentTrack, showPlayer,
    } = this.state;
    return (
      <S.Wrapper
        onMouseEnter={() => this.handlePlayer(true)}
        onMouseLeave={() => this.handlePlayer(false)}
      >
        <ReactPlayer
          controls
          url={url[currentTrack]}
          playing={playing}
          volume={volume}
          ref={this.ref}
          className="react-player"
          onProgress={this.onProgress}
          onEnded={() => this.setState({ currentTrack: currentTrack + 1 })}
        />
        <S.BtnWrapper>
          <IconButton
            onClick={this.prevTrack}
          >
            <S.StyledPrev />
          </IconButton>
          <IconButton onClick={this.stop}>
            <S.StyledStop />
          </IconButton>
          <IconButton onClick={this.playPause}>
            {playing ? <S.StyledPause /> : <S.StyledPlay />}
          </IconButton>
          <IconButton
            onClick={this.nextTrack}
          >
            <S.StyledNext />
          </IconButton>
          <S.SlyderWrapper top={showPlayer ? '0' : '-500px'}>
            <S.Slider>
              <Typography id="label-seek">Seek</Typography>
              <Slider
                value={played}
                aria-labelledby="label-seek"
                onChange={this.onSeekChange}
                min={0}
                max={1}
              />
            </S.Slider>
            <S.Slider>
              <Typography id="label-volume">Volume</Typography>
              <Slider
                value={volume}
                aria-labelledby="label-volume"
                onChange={this.setVolume}
                min={0}
                max={1}
              />
            </S.Slider>
            <S.Slider>
              <Typography id="label-loaded">Loaded</Typography>
              <S.StyledLinearProgress
                value={loaded * 100}
                aria-labelledby="label-loaded"
                variant="determinate"
              />
            </S.Slider>
            <p style={{ color: 'black', textAlign: 'center' }}>{currentTrack + 1} track  of {url.length}</p>
          </S.SlyderWrapper>
        </S.BtnWrapper>
        {/* <progress max={1} value={loaded} /> */}
      </S.Wrapper>
    );
  }
}

export default Player;
