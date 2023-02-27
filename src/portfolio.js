const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://superlative-cascaron-5ff0c5.netlify.app/',
  title: 'Akash Kesharwani',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Akash Kesharwani',
  role: 'Aspiring Web Developer',
  description:
    'My Name is Akash Kesharwani.I have completed B.tech from Dr. Ambedkar institute of technology for handicapped.I am good at coding and passionate about writing  code.I am also keen interest in web development and made a lot of project using react  js, html5 ,css3 and javascript.',
  resume: 'https://drive.google.com/drive/u/0/recent',
  social: {
    linkedin: 'https://www.linkedin.com/in/akash-kesharwani-8b0190225/',
    github: 'https://github.com/Akki9519',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Todo List App',
    description:
      'Web application where we can store the data and update the list of item ',
    stack: [ 'React','HTML','CSS','JavaScript'],
    sourceCode: 'https://github.com/Akki9519',
    
  },
  {
    name: 'Weather Forecasting',
    description:
      'Web Application where we can search the forecasting of weather and updation. Search the News as per your requirement',
    stack: ['javascript', 'css', 'React','html'],
    sourceCode: 'https://github.com/Akki9519',
    
  },
  {
    name: 'News Api forecasting',
    description:
      'Web Application where we can read the news of all over the world.',
    stack: ['javascript', 'css', 'React','html'],
    sourceCode: 'https://github.com/Akki9519',
  
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'C++',
  'C',
  'React',
  'Data Structure and Algorithm',
  'Computer Network',
  'Operating System',
  'Git',
  'DBMS',
  'SQL'
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kesharwaniatul@gmail.com',
}

export { header, about, projects, skills, contact }
