import { useState, useEffect } from 'react'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'
import Feedback from './components/Feedback/Feedback'

function App() {
  
  const [feedback, setFeedback] = useState(() => {
    const feedbackValue = localStorage.getItem('feedback-value');
    if (feedbackValue) {
      return JSON.parse(feedbackValue);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback-value', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  }
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  }

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

  return (
    <>
      <Description />
      <Options 
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}  />
        {totalFeedback > 0 
        ? <Feedback
        good={feedback.good} 
        neutral={feedback.neutral} 
        bad={feedback.bad}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}/> 
        : <Notification />}
    </>
  )
}

export default App
