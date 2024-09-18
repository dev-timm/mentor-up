import styles from '../styles/SignUp.module.css';
import appStyles from '../styles/App.module.css';
import formStyles from '../styles/Form.module.css';
import btnStyles from '../styles/Button.module.css';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signed up!!');
  };

  return (
    <main className={styles.signUpContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className={styles.formItem}>
          <h5>Username</h5>
          <input type="text" placeholder="Enter username" required />
        </div>
        <div className={styles.formItem}>
          <h5>Username</h5>
          <input type="password" placeholder="Enter username" required />
        </div>
        <div className={styles.formItem}>
          <h5>Username</h5>
          <input type="password" placeholder="Enter username" required />
        </div>
        <button type="submit" className={btnStyles.btnPrimaryLarge}>
          Sign Up
        </button>
      </form>
    </main>
  );
};
export default SignUp;
