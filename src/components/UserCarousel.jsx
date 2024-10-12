import { useEffect, useState } from 'react';

import styles from '../styles/UserCarousel.module.css';
import appStyles from '../styles/App.module.css';
import btnStyles from '../styles/Button.module.css';

import chevronRight from '../assets/icons/chevron-right.svg';
import chevronLeft from '../assets/icons/chevron-left.svg';

const UserCarousel = ({ users, title }) => {
  const [currentMentor, setCurrentMentor] = useState(0);

  const prevSLide = () => {
    setCurrentMentor((oldMentor) => {
      const result = (oldMentor - 1 + users.length) % users.length;
      return result;
    });
  };
  const nextSLide = () => {
    setCurrentMentor((oldMentor) => {
      const result = (oldMentor + 1) % users.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSLide();
    }, 10000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentMentor]);

  return (
    <section className={styles.userCarousel}>
      <div className={appStyles.container}>
        <h2 className={appStyles.centerText}>{title}</h2>
        <div className={styles.carouselContainer}>
          {users.map((mentor, mentorIndex) => {
            const { id, name, background, experience, reason, image } = mentor;
            return (
              <article
                className={styles.slide}
                style={{
                  transform: `translateX(${
                    100 * (mentorIndex - currentMentor)
                  }%)`,
                  opacity: mentorIndex === currentMentor ? 1 : 0,
                  visibility:
                    mentorIndex === currentMentor ? 'visible' : 'hidden',
                }}
                key={id}
              >
                <img src={image} alt="user image" />
                <div className={styles.details}>
                  <div className={styles.text}>
                    <h5>Name</h5>
                    <p className={appStyles.p2}>{name}</p>
                  </div>
                  <div className={styles.text}>
                    <h5>Experience</h5>
                    <p className={appStyles.p2}>{experience}</p>
                  </div>
                  <div className={styles.text}>
                    <h5>Background</h5>
                    <p className={appStyles.p2}>{background}</p>
                  </div>
                  <div className={styles.text}>
                    <h5>Why Become a Mentor</h5>
                    <p className={appStyles.p2}>{reason}</p>
                  </div>
                </div>
              </article>
            );
          })}
          <button
            type="button"
            className={`${btnStyles.iconBtnMedium} ${styles.prev}`}
            onClick={prevSLide}
          >
            <img src={chevronLeft} alt="button" />
          </button>
          <button
            type="button"
            className={`${btnStyles.iconBtnMedium} ${styles.next}`}
            onClick={nextSLide}
          >
            <img src={chevronRight} alt="button" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default UserCarousel;
