import chevronUp from '../assets/icons/chevron-up.svg';
import chevronDown from '../assets/icons/chevron-down.svg';
import { useState } from 'react';

import styles from '../styles/SingleQuestion.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className={styles.question}>
      <header
        className={styles.questionHeader}
        onClick={() => setShowInfo(!showInfo)}
      >
        <p className={appStyles.p2}>{title}</p>
        <button className={btnStyles.iconBtnSmallTransparent}>
          {showInfo ? (
            <img src={chevronUp} alt="chevron up" />
          ) : (
            <img src={chevronDown} alt="chevron down" />
          )}
        </button>
      </header>
      {showInfo && <p className={appStyles.p2}>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
