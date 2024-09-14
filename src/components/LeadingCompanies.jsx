import { logos } from '../data';
import styles from '../styles/LeadingCompanies.module.css';

const LeadingCompanies = () => {
  return (
    <section className={['container', styles.leadingCompanies].join(' ')}>
      <h4>Mentors from Leading Companies</h4>
      <div className={styles.companyLogos}>
        {logos.map((logo) => {
          const { id, name, image } = logo;
          return <img src={image} alt={name} key={id} />;
        })}
      </div>
    </section>
  );
};
export default LeadingCompanies;
