"use client";

import React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useQuery } from "@tanstack/react-query";
import { Frame } from "@/components/ui/navbar/frame";
import axios from "axios";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { CityParallax } from "../../components/ui/city_parallax.jsx";

const Plan = () => {
  const { user, isLoading } = useUser();

  /*
  const fetchItinerary = async (country, startDate, endDate, sub) => {
    const res = await axios.post("http://localhost:8080/api/generate", {
      country,
      startDate,
      endDate,
      sub,
    }, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; // Return the data from the response
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["itinerary"],
    queryFn: () => fetchItinerary("China", "2024-10-10", "2024-10-15", user.sub),
  });
  */

  const getInnerContent = () => {

    const items = [ { id: 1, name: 'Afghanistan' }, { id: 2, name: 'Albania' }, { id: 3, name: 'Algeria' }, { id: 4, name: 'Andorra' }, { id: 5, name: 'Angola' }, { id: 6, name: 'Antigua and Barbuda' }, { id: 7, name: 'Argentina' }, { id: 8, name: 'Armenia' }, { id: 9, name: 'Australia' }, { id: 10, name: 'Austria' }, { id: 11, name: 'Azerbaijan' }, { id: 12, name: 'The Bahamas' }, { id: 13, name: 'Bahrain' }, { id: 14, name: 'Bangladesh' }, { id: 15, name: 'Barbados' }, { id: 16, name: 'Belarus' }, { id: 17, name: 'Belgium' }, { id: 18, name: 'Belize' }, { id: 19, name: 'Benin' }, { id: 20, name: 'Bhutan' }, { id: 21, name: 'Bolivia' }, { id: 22, name: 'Bosnia and Herzegovina' }, { id: 23, name: 'Botswana' }, { id: 24, name: 'Brazil' }, { id: 25, name: 'Brunei' }, { id: 26, name: 'Bulgaria' }, { id: 27, name: 'Burkina Faso' }, { id: 28, name: 'Burundi' }, { id: 29, name: 'Cabo Verde' }, { id: 30, name: 'Cambodia' }, { id: 31, name: 'Cameroon' }, { id: 32, name: 'Canada' }, { id: 33, name: 'Central African Republic' }, { id: 34, name: 'Chad' }, { id: 35, name: 'Chile' }, { id: 36, name: 'China' }, { id: 37, name: 'Colombia' }, { id: 38, name: 'Comoros' }, { id: 39, name: 'Congo, Democratic Republic of the' }, { id: 40, name: 'Congo, Republic of the' }, { id: 41, name: 'Costa Rica' }, { id: 42, name: 'Côte d\'Ivoire' }, { id: 43, name: 'Croatia' }, { id: 44, name: 'Cuba' }, { id: 45, name: 'Cyprus' }, { id: 46, name: 'Czech Republic' }, { id: 47, name: 'Denmark' }, { id: 48, name: 'Djibouti' }, { id: 49, name: 'Dominica' }, { id: 50, name: 'Dominican Republic' }, { id: 51, name: 'East Timor (Timor-Leste)' }, { id: 52, name: 'Ecuador' }, { id: 53, name: 'Egypt' }, { id: 54, name: 'El Salvador' }, { id: 55, name: 'Equatorial Guinea' }, { id: 56, name: 'Eritrea' }, { id: 57, name: 'Estonia' }, { id: 58, name: 'Eswatini' }, { id: 59, name: 'Ethiopia' }, { id: 60, name: 'Fiji' }, { id: 61, name: 'Finland' }, { id: 62, name: 'France' }, { id: 63, name: 'Gabon' }, { id: 64, name: 'The Gambia' }, { id: 65, name: 'Georgia' }, { id: 66, name: 'Germany' }, { id: 67, name: 'Ghana' }, { id: 68, name: 'Greece' }, { id: 69, name: 'Grenada' }, { id: 70, name: 'Guatemala' }, { id: 71, name: 'Guinea' }, { id: 72, name: 'Guinea-Bissau' }, { id: 73, name: 'Guyana' }, { id: 74, name: 'Haiti' }, { id: 75, name: 'Honduras' }, { id: 76, name: 'Hungary' }, { id: 77, name: 'Iceland' }, { id: 78, name: 'India' }, { id: 79, name: 'Indonesia' }, { id: 80, name: 'Iran' }, { id: 81, name: 'Iraq' }, { id: 82, name: 'Ireland' }, { id: 83, name: 'Israel' }, { id: 84, name: 'Italy' }, { id: 85, name: 'Jamaica' }, { id: 86, name: 'Japan' }, { id: 87, name: 'Jordan' }, { id: 88, name: 'Kazakhstan' }, { id: 89, name: 'Kenya' }, { id: 90, name: 'Kiribati' }, { id: 91, name: 'Korea, North' }, { id: 92, name: 'Korea, South' }, { id: 93, name: 'Kosovo' }, { id: 94, name: 'Kuwait' }, { id: 95, name: 'Kyrgyzstan' }, { id: 96, name: 'Laos' }, { id: 97, name: 'Latvia' }, { id: 98, name: 'Lebanon' }, { id: 99, name: 'Lesotho' }, { id: 100, name: 'Liberia' }, { id: 101, name: 'Libya' }, { id: 102, name: 'Liechtenstein' }, { id: 103, name: 'Lithuania' }, { id: 104, name: 'Luxembourg' }, { id: 105, name: 'Madagascar' }, { id: 106, name: 'Malawi' }, { id: 107, name: 'Malaysia' }, { id: 108, name: 'Maldives' }, { id: 109, name: 'Mali' }, { id: 110, name: 'Malta' }, { id: 111, name: 'Marshall Islands' }, { id: 112, name: 'Mauritania' }, { id: 113, name: 'Mauritius' }, { id: 114, name: 'Mexico' }, { id: 115, name: 'Micronesia, Federated States of' }, { id: 116, name: 'Moldova' }, { id: 117, name: 'Monaco' }, { id: 118, name: 'Mongolia' }, { id: 119, name: 'Montenegro' }, { id: 120, name: 'Morocco' }, { id: 121, name: 'Mozambique' }, { id: 122, name: 'Myanmar (Burma)' }, { id: 123, name: 'Namibia' }, { id: 124, name: 'Nauru' }, { id: 125, name: 'Nepal' }, { id: 126, name: 'Netherlands' }, { id: 127, name: 'New Zealand' }, { id: 128, name: 'Nicaragua' }, { id: 129, name: 'Niger' }, { id: 130, name: 'Nigeria' }, { id: 131, name: 'North Macedonia' }, { id: 132, name: 'Norway' }, { id: 133, name: 'Oman' }, { id: 134, name: 'Pakistan' }, { id: 135, name: 'Palau' }, { id: 136, name: 'Panama' }, { id: 137, name: 'Papua New Guinea' }, { id: 138, name: 'Paraguay' }, { id: 139, name: 'Peru' }, { id: 140, name: 'Philippines' }, { id: 141, name: 'Poland' }, { id: 142, name: 'Portugal' }, { id: 143, name: 'Qatar' }, { id: 144, name: 'Romania' }, { id: 145, name: 'Russia' }, { id: 146, name: 'Rwanda' }, { id: 147, name: 'Saint Kitts and Nevis' }, { id: 148, name: 'Saint Lucia' }, { id: 149, name: 'Saint Vincent and the Grenadines' }, { id: 150, name: 'Samoa' }, { id: 151, name: 'San Marino' }, { id: 152, name: 'Sao Tome and Principe' }, { id: 153, name: 'Saudi Arabia' }, { id: 154, name: 'Senegal' }, { id: 155, name: 'Serbia' }, { id: 156, name: 'Seychelles' }, { id: 157, name: 'Sierra Leone' }, { id: 158, name: 'Singapore' }, { id: 159, name: 'Slovakia' }, { id: 160, name: 'Slovenia' }, { id: 161, name: 'Solomon Islands' }, { id: 162, name: 'Somalia' }, { id: 163, name: 'South Africa' }, { id: 164, name: 'Spain' }, { id: 165, name: 'Sri Lanka' }, { id: 166, name: 'Sudan' }, { id: 167, name: 'Sudan, South' }, { id: 168, name: 'Suriname' }, { id: 169, name: 'Sweden' }, { id: 170, name: 'Switzerland' }, { id: 171, name: 'Syria' }, { id: 172, name: 'Taiwan' }, { id: 173, name: 'Tajikistan' }, { id: 174, name: 'Tanzania' }, { id: 175, name: 'Thailand' }, { id: 176, name: 'Togo' }, { id: 177, name: 'Tonga' }, { id: 178, name: 'Trinidad and Tobago' }, { id: 179, name: 'Tunisia' }, { id: 180, name: 'Turkey' }, { id: 181, name: 'Turkmenistan' }, { id: 182, name: 'Tuvalu' }, { id: 183, name: 'Uganda' }, { id: 184, name: 'Ukraine' }, { id: 185, name: 'United Arab Emirates' }, { id: 186, name: 'United Kingdom' }, { id: 187, name: 'United States' }, { id: 188, name: 'Uruguay' }, { id: 189, name: 'Uzbekistan' }, { id: 190, name: 'Vanuatu' }, { id: 191, name: 'Vatican City' }, { id: 192, name: 'Venezuela' }, { id: 193, name: 'Vietnam' }, { id: 194, name: 'Yemen' }, { id: 195, name: 'Zambia' }, { id: 196, name: 'Zimbabwe' }]
    
    const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
      console.log(string, results)
    }
  
    const handleOnHover = (result) => {
      // the item hovered
      console.log(result)
    }
  
    const handleOnSelect = (item) => {
      // the item selected
      console.log(item)
    }
  
    const handleOnFocus = () => {
      console.log('Focused')
    }
  
    const formatResult = (item) => {
      return (
        <>
          <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
        </>
      )
    }

    return (
      <CityParallax
      hasLogo={false}
      searchValue={
        <div className="z-20 animation_layer parallax flex justify-center w-full">
        <ReactSearchAutocomplete className="mt-[40vh] w-[50vw]"
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
        />
        </div>
      }
      everything_after={
        <div className="h-full bg-[#252221]">
            <div className="pt-20 w-full">
                <div className="flex rounded-xl drop-shadow-xl items-center justify-evenly mt-8 ml-32 mr-32 bg-[#353130]" data-aos="fade-right">
                    <p className="text-4xl font-sans text-wh w-2/5 pr-4 text-left ml-20  leading-tight">
                        Powered by <a className="text-blu gradient-text" href="https://gemini.google.com/">Gemini AI</a>, 
                        Wanderlust uses a large database of popular tourism destinations to tailor your travel itinerary. <br /><br />
                        <div className="flex  rounded-lg bg-blu justify-center py-6 mr-24">
                          <a href="/plan">
                            <h1 className="font-sans text-wh font-extrabold text-5xl">Get started     </h1>
                          </a>
                        </div>
                    </p>
                    <img className="w-[55%] rounded-r-xl ml-10 h-max" src="/assets/tripexample.png" alt="Trip Example"></img>
                </div>
            </div>
          </div>
      }
      ></CityParallax>
    );
  }

  return (
    <>
      <Frame />
      {getInnerContent()}
    </>
  )
};

export default Plan;