import React, { useEffect, useRef, useState } from 'react'
import MainLayout from './layout/MainLayout'

const App = () => {
  const moves = {
    "rock": "👊",
    "paper": "✋",
    "scissor": "✌️"
  }
  const [playerMove, setPlayerMove] = useState(moves.rock);
  const [computerMove, setComputerMove] = useState(moves.rock);
  const player = useRef(null);
  const comp = useRef(null);
  const buttonClasses = 'text-[10rem] hover:bg-green-400 hover:cursor-pointer rounded button';
  const handleButtonClick = (e) => {
    player.current.classList.remove('animate-bounce');
    comp.current.classList.remove("animate-bounce");
    setPlayerMove(() => moves[e.target.id]);
    const compMove = moves[Object.entries(moves)[Math.floor(Math.random() * 3)][0]];
    setComputerMove(() => compMove);
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
      <main className='flex flex-col gap-10'>
        <h2 className='m-auto text-2xl text-slate-700 font-mono font-semibold'>And The Winner is : </h2>
        <span className='blur-lg shadow block text-2xl m-auto mb-5 font-bold font-mono'>blurred thing</span>
        <div className="game w-2xl m-auto h-[15rem] flex justify-between items-center">
          <div ref={comp} className="computer text-[10rem] hover:bg-slate-400 hover:cursor-pointer animate-bounce rounded">{computerMove}</div>
          <div className="countdown text-8xl">1</div>
          <div ref={player} className={`player animate-bounce ${playerMove ? "text-[10rem]" : "text-2xl"} hover:bg-slate-400 hover:cursor-pointer rounded`}>{playerMove}</div>
        </div>
        <h2 className='m-auto text-2xl text-slate-700 font-mono font-semibold'>Choose Your move</h2>
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