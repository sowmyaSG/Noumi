import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'You enjoy vibrant social events with lots of people.',
			answerOptions: [
				{ answerText: 'AGREE', isCorrect: true },
				{ answerText: 'NEUTRAL', isCorrect: false },
				{ answerText: 'DISAGREE', isCorrect: false },
				
			],
		},
		{
			questionText: 'People can rarely upset you.',
			answerOptions: [
				{ answerText: 'AGREE', isCorrect: false },
				{ answerText: 'NEUTRAL', isCorrect: false },
				{ answerText: 'DISAGREE', isCorrect: true },
				
			],
		},
		{
			questionText: 'You rarely worry if you made a good impression on someone you met.',
			answerOptions: [
				{ answerText: 'AGREE', isCorrect: false },
				{ answerText: 'NEUTRAL', isCorrect: true },
				{ answerText: 'DISAGREEn', isCorrect: false },
				
			],
		},
		{
			questionText: 'It would be a challenge for you to spend the whole weekend all by yourself without feeling bored.',
			answerOptions: [
				{ answerText: 'AGREE', isCorrect: true },
				{ answerText: 'NEUTRAL', isCorrect: false },
				{ answerText: 'DISAGREE', isCorrect: false },
				
			],
		},
		{
			questionText: 'You have a careful and methodical approach to life.',
			answerOptions: [
				{ answerText: 'AGREE', isCorrect: true },
				{ answerText: 'NEUTRAL', isCorrect: false },
				{ answerText: 'DISAGREE', isCorrect: false },
				
			],
		},
		{
			questionText: 'You can stay calm under a lot of pressure.',
			answerOptions: [
				{ answerText: 'AGREE', isCorrect: false },
				{ answerText: 'NEUTRAL', isCorrect: false },
				{ answerText: 'DISAGREE', isCorrect: true },
				
			],
		},
		{
			questionText: 'When in a group of people you do not know, you have no problem jumping right into their conversation.',
			answerOptions: [
				{ answerText: 'AGREE', isCorrect: true },
				{ answerText: 'NEUTRAL', isCorrect: false },
				{ answerText: 'DISAGREE', isCorrect: false },
				
			],
		},
		{
			questionText: 'You are dedicated and focused on your goals, only rarely getting sidetracked.',
			answerOptions: [
				{ answerText: 'AGREE', isCorrect: false},
				{ answerText: 'NEUTRAL', isCorrect: true },
				{ answerText: 'DISAGREE', isCorrect: false },
				
			],
		},
		{
			questionText: 'You would never let yourself cry in front of others.',
			answerOptions: [
				{ answerText: 'AGREE', isCorrect: false },
				{ answerText: 'NEUTRAL', isCorrect: false },
				{ answerText: 'DISAGREE', isCorrect: true },
				
			],
		},
		{
			questionText: 'The time you spend by yourself often ends up being more interesting and satisfying than the time you spend with other people.',
			answerOptions: [
				{ answerText: 'AGREE', isCorrect: false },
				{ answerText: 'NEUTRAL', isCorrect: false },
				{ answerText: 'DISAGREE', isCorrect: true },
				
			],
		},
		
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [status,showstatus] = useState(true); 
    const sta='Score Range: 1-5 Adventurer Happy to Be Who They Are,Meaning Is in Every Expression of Life  5-10 Executive  Personality:Anyone Worth Their Salt Sticks Up for What They Believe Is Right......But Still Better Are Those Who Acknowledge When They Are in Error';
   
    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 10);

		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (

		<div className='app'>
			{showScore ? (
					<div className='score-section'>
					     Your Result   :   {score}%
					        
				  </div>
				  ) 
			:  (
				<>
                      
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
