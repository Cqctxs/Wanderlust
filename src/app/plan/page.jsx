import React from 'react'
import { QueryClient, useQuery } from '@tanstack/react-query'

const Plan = () => {

  const {} = useQuery({
    queryKey: ["location"],
    queryFn: async () => {
      const { data } = await axios.get("localhost:8080/api/generate", {
        params: {
          
          country: "United States",
          startDate: "2024-10-10",
          endDate: "2024-10-15",
          sub: "asdfadfadf" 
        }
      });
    },
  });

  return (
    <div className="flex-col items-center h-full justify-center align-center">
        <h1 className="flex justify-center">Where do you want to visit?</h1>
        <form action="localhost:8080/api/generate" method="GET">
        
        </form>
    </div>
  )
}

export default Plan;