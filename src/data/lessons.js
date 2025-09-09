export const lessons = [
  {
    id: 1,
    title: 'Welcome to SOC Operations',
    type: 'video',
    duration: '15:30',
    completed: true,
    content: {
      videoUrl: 'https://example.com/video1.mp4',
      transcript: 'Welcome to the SOC Analyst Training course...',
      resources: ['SOC Overview PDF', 'Quick Reference Guide']
    }
  },
  {
    id: 2,
    title: 'SOC Structure and Roles',
    type: 'video',
    duration: '20:45',
    completed: true,
    content: {
      videoUrl: 'https://example.com/video2.mp4',
      transcript: 'Understanding the organizational structure of a SOC...',
      resources: ['Role Descriptions', 'Team Structure Diagram']
    }
  },
  {
    id: 3,
    title: 'Daily Operations Overview',
    type: 'lecture',
    duration: '18:00',
    completed: false,
    content: {
      text: `
        <h2>Daily SOC Operations</h2>
        <p>A typical day in a Security Operations Center involves several key activities...</p>
        <h3>Morning Briefing</h3>
        <p>The day begins with a team briefing where analysts review overnight alerts...</p>
        <h3>Threat Monitoring</h3>
        <p>Continuous monitoring of security systems and network traffic...</p>
        <h3>Incident Response</h3>
        <p>When threats are detected, the team follows established response procedures...</p>
      `,
      resources: ['Daily Checklist', 'Shift Handover Template']
    }
  },
  {
    id: 4,
    title: 'Understanding Security Threats',
    type: 'video',
    duration: '25:20',
    completed: false,
    content: {
      videoUrl: 'https://example.com/video4.mp4',
      transcript: 'Security threats come in many forms and can originate from various sources...',
      resources: ['Threat Classification Guide', 'Common Attack Vectors']
    }
  },
  {
    id: 5,
    title: 'Module 1 Assessment',
    type: 'quiz',
    duration: '15:00',
    completed: false,
    content: {
      questions: [
        {
          id: 1,
          question: 'What is the primary function of a SOC?',
          options: [
            'Network administration',
            'Security monitoring and incident response',
            'Software development',
            'Database management'
          ],
          correctAnswer: 1,
          explanation: 'A SOC (Security Operations Center) is primarily responsible for monitoring security systems and responding to incidents.'
        },
        {
          id: 2,
          question: 'Which role typically leads the SOC team?',
          options: [
            'SOC Analyst',
            'SOC Manager/Director',
            'Network Engineer',
            'Database Administrator'
          ],
          correctAnswer: 1,
          explanation: 'The SOC Manager or Director leads the team and oversees operations.'
        },
        {
          id: 3,
          question: 'What does SIEM stand for?',
          options: [
            'Security Information and Event Management',
            'System Integration and Event Monitoring',
            'Security Infrastructure and Emergency Management',
            'System Information and Error Management'
          ],
          correctAnswer: 0,
          explanation: 'SIEM stands for Security Information and Event Management.'
        }
      ],
      resources: ['Study Guide', 'Practice Questions']
    }
  }
]

export const getLessonById = (id) => {
  return lessons.find(lesson => lesson.id === parseInt(id))
}

export const getNextLessonId = (currentId) => {
  const currentIndex = lessons.findIndex(lesson => lesson.id === parseInt(currentId))
  if (currentIndex < lessons.length - 1) {
    return lessons[currentIndex + 1].id
  }
  return null
}

export const getPrevLessonId = (currentId) => {
  const currentIndex = lessons.findIndex(lesson => lesson.id === parseInt(currentId))
  if (currentIndex > 0) {
    return lessons[currentIndex - 1].id
  }
  return null
}