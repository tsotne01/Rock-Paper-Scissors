import React, { useEffect, useState } from 'react';
import MainLayout from './layout/MainLayout';

const App = () => {
  const moves = {
    rock: '👊',
    paper: '✋',
    scissor: '✌️',
  };
  const moveNames = Object.keys(moves);

  const [playerChoice, setPlayerChoice] = useState('rock');
  const [computerChoice, setComputerChoice] = useState('rock');
  const [winner, setWinner] = useState('Make your move!');

  const buttonBaseClasses = 'hover:bg-green-400 hover:cursor-pointer rounded button transition-transform transform hover:scale-110';

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return "It's a Tie!";
    }
    if (
      (player === 'rock' && computer === 'scissor') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissor' && computer === 'paper')
    ) {
      return 'Player Wins!';
    }
    return 'Computer Wins!';
  };

  const handleButtonClick = (e) => {
    const currentPlayerChoice = e.target.id;
    if (!moveNames.includes(currentPlayerChoice)) return;

    setPlayerChoice(currentPlayerChoice);

    const randomComputerChoice = moveNames[Math.floor(Math.random() * moveNames.length)];
    setComputerChoice(randomComputerChoice);
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
      if (moveNames.includes(button.id)) {
        button.addEventListener('click', handleButtonClick);
      }
    });

    return () => {
      buttons.forEach((button) => {
        if (moveNames.includes(button.id)) {
          button.removeEventListener('click', handleButtonClick);
        }
      });
    };
  }, [moveNames]);


  useEffect(() => {
    const result = determineWinner(playerChoice, computerChoice);
    setWinner(result);
  }, [playerChoice, computerChoice]);


  return (
    <MainLayout>
      <header className='w-full h-24 shadow flex justify-center items-center mb-10 md:mb-20'>
        <h1 className='text-3xl md:text-4xl text-slate-600 font-bold text-center px-4'>
          Rock Paper Scissors
        </h1>
      </header>
      <main className='flex flex-col gap-8 md:gap-10 px-4'>
        <h2 className='m-auto text-xl md:text-2xl text-slate-700 font-mono font-semibold'>
          Result: <span className='text-blue-600'>{winner}</span>
        </h2>
        <div className="game w-full max-w-2xl m-auto h-auto md:h-[15rem] flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">
          <div className='text-center'>
            <h3 className='text-lg font-semibold mb-2'>Computer</h3>
            {/* ref removed */}
            <div className="text-[8rem] md:text-[10rem] rounded">
              {moves[computerChoice]}
            </div>
          </div>
          <div className='text-4xl md:text-6xl font-bold text-gray-400'>VS</div>
          <div className='text-center'>
            <h3 className='text-lg font-semibold mb-2'>Player</h3>
            {/* ref removed */}
            <div className={`text-[8rem] md:text-[10rem] rounded`}>
              {moves[playerChoice]}
            </div>
          </div>
        </div>
        <h2 className='m-auto text-xl md:text-2xl text-slate-700 font-mono font-semibold mt-4 md:mt-8'>
          Choose Your Move
        </h2>
        <div className='flex justify-center gap-4 md:gap-8'>
          {moveNames.map((moveName) => (
            <span
              key={moveName}
              id={moveName}
              className={`${buttonBaseClasses} text-[8rem] md:text-[10rem]`}
            >
              {moves[moveName]}
            </span>
          ))}
        </div>
      </main>
    </MainLayout>
  );
};

export default App;