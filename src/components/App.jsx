import { Component } from "react";

import  {Section}  from './Title/Title';
import  {CounterButtons } from './ButtonsGroup/Button';
import {Statistics} from './DataStatistic/Statistics';
import {Notification} from './Notification/Notification'
import { Container } from './App.styled';


export class App extends Component{
   
   state = {
     good: 0,
     neutral: 0,
     bad: 0
   };

   handleIncrement = e => () => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
   };

   countTotalFeedback = () => {
     const { good, neutral, bad } = this.state;
      
     return good + neutral + bad;       
   };

   countPositiveFeedbackPercentage = () => {
        const totalFeedback = this.countTotalFeedback();
        const { good } = this.state;
        return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
    
   };

   render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    
     return (
    <Container>
    <Section title={'Please leave feedback'}>
          <CounterButtons
             options={this.state}
          onLeaveFeedback={this.handleIncrement}
            
      />
        </Section>
         <Section title={'Statistics'}>
           {total ? (
             <Statistics
               good={good}
               neutral={neutral}
               bad={bad}
               total={total}
               positiveFeedback={positiveFeedback}
             />
           ) : (
             <Notification message='No feedback given' />)
           }
        </Section>
         </Container>
  );
   }
     
}


