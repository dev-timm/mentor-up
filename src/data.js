import logoAdobe from './assets/logos/logo-adobe.svg';
import logoAmazon from './assets/logos/logo-amazon.svg';
import logoAtlassian from './assets/logos/logo-atlassian.svg';
import logoGoogle from './assets/logos/logo-google.svg';
import logoMicrosoft from './assets/logos/logo-microsoft.svg';
import logoNetflix from './assets/logos/logo-netflix.svg';
import logoYouTube from './assets/logos/logo-youtube.svg';

import careerDevelopment from './assets/illustrations/career-development.svg';
import creativeArtsAndDesign from './assets/illustrations/creative-arts-and-design.svg';
import financeAndInvestment from './assets/illustrations/finance-and-investment.svg';
import healthcareAndWellness from './assets/illustrations/healthcare-and-wellness.svg';
import leadershipAndManagement from './assets/illustrations/leadership-and-management.svg';
import marketingAndSales from './assets/illustrations/marketing-and-sales.svg';
import personalGrowth from './assets/illustrations/personal-growth.svg';
import techAndEngineering from './assets/illustrations/tech-and-engineering.svg';

import aClarke from './assets/mentors/mentor-alexandra-clarke.png';
import dTurner from './assets/mentors/mentor-david-turner.png';
import eCarter from './assets/mentors/mentor-emily-carter.png';
import rBaker from './assets/mentors/mentor-robert-baker.png';
import dRodriguez from './assets/mentees/mentee-daniel-rodriguez.png';
import eCollins from './assets/mentees/mentee-emma-collins.png';
import lDavis from './assets/mentees/mentee-liam-davis.png';
import oMartinez from './assets/mentees/mentee-olivia-martinez.png';

export const navLinks = [
  {
    id: 1,
    url: '/find-mentor',
    text: ' Find Mentor',
  },
  {
    id: 2,
    url: '/become-mentor',
    text: 'Become Mentor',
  },
];

export const logos = [
  {
    id: 1,
    name: 'adobe',
    image: logoAdobe,
  },
  {
    id: 2,
    name: 'amazon',
    image: logoAmazon,
  },
  {
    id: 3,
    name: 'atlassian',
    image: logoAtlassian,
  },
  {
    id: 4,
    name: 'google',
    image: logoGoogle,
  },
  {
    id: 5,
    name: 'microsoft',
    image: logoMicrosoft,
  },
  {
    id: 6,
    name: 'netflix',
    image: logoNetflix,
  },
  {
    id: 7,
    name: 'youtube',
    image: logoYouTube,
  },
];

export const topCategories = [
  {
    id: 1,
    name: 'Career Development',
    image: careerDevelopment,
  },
  {
    id: 2,
    name: 'Creative Arts And Design',
    image: creativeArtsAndDesign,
  },
  {
    id: 3,
    name: 'Finance & Investment',
    image: financeAndInvestment,
  },
  {
    id: 4,
    name: 'Healthcare & Wellness',
    image: healthcareAndWellness,
  },
  {
    id: 5,
    name: 'Leadership & Mgmt.',
    image: leadershipAndManagement,
  },
  {
    id: 6,
    name: 'Marketing & Sales',
    image: marketingAndSales,
  },
  {
    id: 7,
    name: 'Personal Growth',
    image: personalGrowth,
  },
  {
    id: 8,
    name: 'Tech & Engineering',
    image: techAndEngineering,
  },
];

export const mentorList = [
  {
    id: 1,
    name: `Alexandra Clark`,
    position: 'Senior Marketing Strategist',
    experience:
      'Jane has over 15 years of experience in digital marketing, specializing in brand development and strategic campaigns for Fortune 500 companies.',
    reason:
      'I’m passionate about helping others navigate the complexities of marketing and achieve their career goals. Seeing my mentees succeed is incredibly rewarding.',
    image: aClarke,
  },
  {
    id: 2,
    name: `David Turner`,
    position: 'Data Science Expert',
    experience:
      'David has over 10 years of experience in data science and machine learning, leading projects for top tech companies and mentoring professionals transitioning into the field.',
    reason:
      'I love sharing my knowledge and helping others build the technical skills needed to succeed in data science. Watching my mentees grow gives me great satisfaction.',
    image: dTurner,
  },
  {
    id: 3,
    name: `Emily Carter`,
    position: 'Leadership Development Coach',
    experience:
      'With over 12 years of experience in corporate leadership training, Emily has coached executives and managers across industries to enhance their leadership skills and team performance.',
    reason:
      'I’m passionate about helping leaders unlock their full potential. Watching my mentees grow into confident, capable leaders is the most fulfilling part of mentoring.',
    image: eCarter,
  },
  {
    id: 4,
    name: `Robert Baker `,
    position: 'Product Management Expert',
    experience:
      'Robert has over 8 years of experience in product management, leading successful product launches at both tech startups and large corporations.',
    reason:
      'I mentor because I believe in sharing practical knowledge that helps aspiring product managers build successful careers and impactful products.',
    image: rBaker,
  },
];

export const menteeList = [
  {
    id: 1,
    name: `Olivia Martinez`,
    mentorship:
      'Leadership Development, Team Management, Strategic Decision-Making',
    background:
      'Olivia is an experienced HR professional stepping into a leadership role. She sought mentorship to develop her leadership style and effectively manage cross-functional teams.',
    reason:
      '"Stepping into a leadership position was challenging, and I needed support in refining my management skills. The mentorship has been a game-changer for my confidence and effectiveness as a leader."',
    image: oMartinez,
  },
  {
    id: 2,
    name: `Liam Davis`,
    mentorship: 'Data Science, Machine Learning, Big Data Analytics',
    background:
      'Liam is an entry-level data analyst passionate about transitioning into data science. He sought mentorship to gain expertise in machine learning and advance his career in the tech industry.',
    reason:
      '"I was looking for a mentor who could help me bridge the gap between data analysis and machine learning. The hands-on guidance I’ve received has accelerated my progress."',
    image: lDavis,
  },
  {
    id: 3,
    name: `Emma Collins`,
    mentorship: 'Entrepreneurship, Business Strategy, Marketing',
    background:
      'Emma is a small business owner looking to expand her company. She sought mentorship to refine her business strategy and marketing approach for scaling her operations.',
    reason:
      '"As an entrepreneur, I needed a mentor who could help me take my business to the next level. The mentorship has provided invaluable insights and practical advice for growth."',
    image: eCollins,
  },
  {
    id: 4,
    name: `Daniel Rodriguez`,
    mentorship: 'Software Engineering, Coding Best Practices, Career Growth',
    background:
      'Daniel is a self-taught developer looking to advance his career in software engineering. With a solid foundation in programming, he sought mentorship to improve his coding practices and navigate the tech industry.',
    reason:
      '"I needed guidance from someone with real-world experience to refine my skills and progress faster. My mentor has been instrumental in helping me grow technically and professionally."',
    image: dRodriguez,
  },
];

export const customerQuestions = [
  {
    id: 1,
    title: 'How do I choose the right mentor?',
    info: 'Start by identifying your goals and areas of interest. Then, browse our mentor profiles, focusing on their expertise, experience, and reviews from other mentees to find the best match for your needs.',
  },
  {
    id: 2,
    title: 'What can I expect from a mentorship session?',
    info: 'During a session, you can expect personalized guidance, actionable advice, and support tailored to your goals. Sessions typically focus on problem-solving, skill development, and career strategy.',
  },
  {
    id: 3,
    title: 'How often can I schedule mentorship sessions?',
    info: `The frequency of sessions depends on your mentor's availability and your personal needs. Some mentees opt for weekly sessions, while others prefer bi-weekly or monthly meetings.`,
  },
  {
    id: 4,
    title: 'Are the mentorship sessions conducted online?',
    info: 'Yes, all sessions are conducted online through video calls, allowing you to connect with your mentor from anywhere in the world at a time that works best for you.',
  },
  {
    id: 5,
    title: 'What if I’m not satisfied with my mentor?',
    info: `If you're not fully satisfied, you can request to switch mentors at any time. Our goal is to ensure you have the best possible experience, so we're here to help you find the right fit.`,
  },
];

export const mentorQuestions = [
  {
    id: 1,
    title: 'How much time do I need to commit as a mentor?',
    info: 'The time commitment is flexible and depends on your availability. You can set your own schedule and decide how many mentees you would like to take on.',
  },
  {
    id: 2,
    title: 'Do I get compensated for mentoring',
    info: 'Yes, mentors typically receive compensation for their time, with rates varying based on experience and expertise. You can set your own rates.',
  },
  {
    id: 3,
    title: 'What kind of support will I receive as a mentor?',
    info: `You'll have access to resources, tools, and a support team to help manage mentee relationships, schedule sessions, and track progress.`,
  },
  {
    id: 4,
    title: 'How are mentees matched with mentors?',
    info: 'Mentees select mentors based on their needs, goals, and the mentor’s expertise. Your profile will highlight your experience and skills to help mentees find the right match.',
  },
  {
    id: 5,
    title: 'Can I choose which mentees I work with?',
    info: `Yes, you have full control over accepting or declining mentees based on their goals, needs, and your availability.`,
  },
];
