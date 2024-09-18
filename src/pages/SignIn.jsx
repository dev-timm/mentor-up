import styles from '../styles/SignIn.module.css';
import appStyles from '../styles/App.module.css';
import formStyles from '../styles/Form.module.css';
import btnStyles from '../styles/Button.module.css';

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signed in!!');
  };

  return (
    <main className={styles.signInContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className={styles.formItem}>
          <h5>Username</h5>
          <input type="text" placeholder="Enter username" required />
        </div>
        <div className={styles.formItem}>
          <h5>Password</h5>
          <input type="password" placeholder="Enter username" required />
        </div>
        <button type="submit" className={btnStyles.btnPrimaryLarge}>
          Sign In
        </button>
      </form>
    </main>
  );
};
export default SignIn;
