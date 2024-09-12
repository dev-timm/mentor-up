import { logos } from '../data';

const LeadingCompanies = () => {
  return (
    <section className="container leading-companies">
      <h4>Mentors from Leading Companies</h4>
      <div className="company-logos">
        {logos.map((logo) => {
          const { id, name, image } = logo;
          return (
            <img className="company-logo" src={image} alt={name} key={id} />
          );
        })}
      </div>
    </section>
  );
};
export default LeadingCompanies;
