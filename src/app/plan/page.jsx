import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Plan = () => {
  return (
    <div className="flex-col items-center h-full justify-center align-center">
        <h1 className="flex justify-center">Where do you want to visit?</h1>
        <form action="localhost:8080/api/generate" method="GET">
        
        </form>
    </div>
  )
}

export default Plan;