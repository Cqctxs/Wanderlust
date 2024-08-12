"use client"

import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    console.log(startDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Search Term:', searchTerm);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center rounded-lg shadow-md">
      <div className="flex-row h-[5vh]">
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border-none rounded-l-md h-full"
        />
        <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            className="border-none h-full date-input-wrapper"
        />
        <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            className="border-none rounded-r-md h-full"
        />
        <button
            type="submit"
            className="ml-[4vw] h-full bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
            Search
        </button>
      </div>
    </form>
  );
};

export default Search;
