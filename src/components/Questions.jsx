import styles from '../styles/Questions.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import SingleQuestion from './SingleQuestion';

const Questions = ({ questions }) => {
  return (
    <section className={`${appStyles.container} ${styles.questions}`}>
      <h2>Frequently Asked Questions</h2>
      {questions.map((question) => {
        return (
          <>
            <SingleQuestion key={question.id} {...question} />
            <div className={styles.divider}></div>
          </>
        );
      })}
    </section>
  );
};
export default Questions;
