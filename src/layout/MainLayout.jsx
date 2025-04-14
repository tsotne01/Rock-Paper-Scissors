import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='flex justify-center flex-col h-full w-full'>
        {children}
    </div>
  )
}

export default MainLayout