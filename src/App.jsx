import React, { useEffect, useState } from 'react'
import MainLayout from './layout/MainLayout'

const App = () => {
  const moves = {
    "rock": "👊",
    "paper": "✋",
    "scissor": "✌️"
  }
  const [playerMove, setPlayerMove] = useState(moves.rock);
  const [computerMove, setComputerMove] = useState(moves.rock);
  const buttonClasses = 'text-[10rem] hover:bg-green-400 hover:cursor-pointer rounded button';
  const handleButtonClick = (e) => {
    setPlayerMove(() => moves[e.target.id]);
    setComputerMove(() => {

      return moves[Object.entries(moves)[Math.floor(Math.random() * 3)][0]];
    });
  }
  useEffect(() => {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick)
    })
    return (() => {
      buttons.forEach((button) => removeEventListener("click", button));
    }
    )
  }, [])


  return (
    <MainLayout>
      <header className='w-full h-24 shadow flex justify-center items-center mb-30'>
        <h1 className='text-4xl text-slate-500 font-bold'>Rock Paper Scissors Game</h1>
      </header>
      <main className='flex flex-col gap-20'>
        <div className="game w-2xl m-auto h-[15rem] flex justify-between items-center">
          <div className="computer text-[10rem] hover:bg-slate-400 hover:cursor-pointer rounded">{computerMove}</div>
          <div className="countdown text-8xl">1</div>
          <div className={`player ${playerMove ? "text-[10rem]" : "text-2xl"} hover:bg-slate-400 hover:cursor-pointer rounded`}>{playerMove}</div>
        </div>
        <div className='flex justify-center gap-5'>
          <span id='rock' className={buttonClasses}>{moves.rock}</span>
          <span id='paper' className={buttonClasses}>{moves.paper}</span>
          <span id='scissor' className={buttonClasses}>{moves.scissor}</span>
        </div>
      </main>
    </MainLayout>

  )
}

export default App