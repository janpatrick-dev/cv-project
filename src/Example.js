import { v4 as uuidv4 } from 'uuid';

const Example = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phoneNumber: '+639178881234',
  jobTitle: 'Software Engineer',
  introduction: 'Proident sint consequat mollit cupidatat do occaecat. Nulla proident irure ea amet ex Lorem. Pariatur ullamco voluptate cupidatat esse ipsum et. Non dolor occaecat exercitation Lorem id fugiat officia in Lorem eu eiusmod ipsum anim. Ad anim cillum incididunt pariatur veniam eiusmod qui mollit exercitation irure laborum.',
  urlAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  urlLinkedIn: 'https://linkedin.com/in/johndoe123',
  urlPortfolio: 'https://www.johndoe.com',
  experiences: [
    {
      id: uuidv4(),
      jobTitle: 'Software Engineer',
      jobDescription: 'Ipsum id in irure eu fugiat cupidatat ex incididunt eu. Culpa et laborum cupidatat aliquip in. Irure do consectetur cillum laborum sit nisi sunt ad incididunt do velit sint. \n - Nisi nostrud amet sit adipisicing esse. \n - Commodo et consectetur laborum sit ea ex amet Lorem ipsum consectetur duis. \n - Quis incididunt esse labore excepteur ad nulla sunt est quis labore aliquip ipsum elit pariatur.',
      companyName: 'The Example Company 3',
      startYear: 2021,
      endYear: 2022,
    },        
    {
      id: uuidv4(),
      jobTitle: 'Software Engineer',
      jobDescription: 'Ipsum id in irure eu fugiat cupidatat ex incididunt eu. Culpa et laborum cupidatat aliquip in. Irure do consectetur cillum laborum sit nisi sunt ad incididunt do velit sint. \n - Nisi nostrud amet sit adipisicing esse. \n - Commodo et consectetur laborum sit ea ex amet Lorem ipsum consectetur duis. \n - Quis incididunt esse labore excepteur ad nulla sunt est quis labore aliquip ipsum elit pariatur.',
      companyName: 'The Example Company 2',
      startYear: 2015,
      endYear: 2021,
    },
    {
      id: uuidv4(),
      jobTitle: 'Software Engineer',
      jobDescription: 'Ipsum id in irure eu fugiat cupidatat ex incididunt eu. Culpa et laborum cupidatat aliquip in. Irure do consectetur cillum laborum sit nisi sunt ad incididunt do velit sint. \n - Nisi nostrud amet sit adipisicing esse. \n - Commodo et consectetur laborum sit ea ex amet Lorem ipsum consectetur duis. \n - Quis incididunt esse labore excepteur ad nulla sunt est quis labore aliquip ipsum elit pariatur.',
      companyName: 'The Example Company 1',
      startYear: 2005,
      endYear: 2015,
    }
  ],
  educations: [
    {
      id: uuidv4(),
      degreeTitle: 'Master of Science in Computer Science',
      schoolName: 'University of Example',
      startYear: 2021,
      endYear: 2022,
    },        
    {
      id: uuidv4(),
      degreeTitle: 'Bachelor of Science in Information Technology',
      schoolName: 'University of Example',
      startYear: 2015,
      endYear: 2021,
    },
    {
      id: uuidv4(),
      degreeTitle: 'High School',
      schoolName: 'Example High School',
      startYear: 2011,
      endYear: 2015,
    }
  ]
}

export default Example;