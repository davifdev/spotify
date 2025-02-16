import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, '0');

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(':');
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

export const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlayning, setIsPlayning] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  const playPause = () => {
    isPlayning ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlayning(!isPlayning);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlayning)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

      progressBar.current.style.setProperty('--_progress', ((audioPlayer.current.currentTime / durationInSeconds) * 100) + "%")
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlayning]);

  return (
    <div className={styles.player}>
      <div className={styles['player__controllers']}>
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon
            className={styles['player__icon']}
            icon={faBackwardStep}
          />
        </Link>

        <FontAwesomeIcon
          icon={isPlayning ? faCirclePause : faCirclePlay}
          className={styles['player__icon--play']}
          onClick={() => playPause()}
        />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon
            className={styles['player__icon']}
            icon={faForwardStep}
          />
        </Link>
      </div>

      <div className={styles['player__progress']}>
        <p>{currentTime}</p>
        <div className={styles['player__bar']}>
          <div
            ref={progressBar}
            className={styles['player__bar-progress']}
          ></div>
        </div>
        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};
