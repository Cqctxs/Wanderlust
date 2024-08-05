'use client'

import React from 'react'
import { QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Plan = () => {

  const {data, isPending, isError, error} = useQuery({
    queryKey: ["location"],
    queryFn: async () => {
      const {data} = await axios.get("http://localhost:8080/api/generate", {
        "country": "United States",
        "startDate": "2024-10-10",
        "endDate": "2024-10-15",
        "sub": "asdfadfadf"
      }).then((res) => console.log(res))
      .catch((error) => console.log(error));
      return data;
    },
  });

  if (isPending) return <div>Loading tasks...</div>;
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className="flex-col items-center h-full justify-center align-center">
        <h1 className="flex justify-center">{JSON.stringify(data, null, 2)}</h1>
    </div>
  )
}

export default Plan;