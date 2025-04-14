import React, { useEffect, useState } from 'react'
import MainLayout from './layout/MainLayout'

const App = () => {
  const [playerMove, setPlayerMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const moves = {
    "rock": "👊",
    "paper": "✋",
    "scissor": "✌️"
  }
  const buttonClasses = 'text-[10rem] hover:bg-green-400 hover:cursor-pointer rounded button';
  const handleButtonClick = (e) => {
    setPlayerMove(() => e.target.textContent);
    setComputerMove(null);
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
      <div className="game w-full h-[15rem] flex justify-center">
        <div className="computer">{computerMove}</div>
        <div className={`player ${playerMove ? "text-[10rem]" : "text-2xl"} hover:bg-slate-400 hover:cursor-pointer rounded button`}>{playerMove !== null ? playerMove : "Choose Move"}</div>
      </div>
      <div className='flex justify-center gap-5'>
        <span className={buttonClasses}>{moves.rock}</span>
        <span className={buttonClasses}>{moves.paper}</span>
        <span className={buttonClasses}>{moves.scissor}</span>
      </div>
    </MainLayout>

  )
}

export default App