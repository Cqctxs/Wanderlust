"use client";

import { Frame } from "@/components/ui/navbar/frame";
import { useUser } from "@auth0/nextjs-auth0/client";
import { UserRoundX } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Footer from "../../components/ui/navbar/footer";
import axios from "axios";

export default function ProfileClient() {
  const { user, isLoading } = useUser();

  const fetchPreviousGenerations = async (sub) => {
    const res = await axios.post(
      "https://portfolio-backend-430914.nn.r.appspot.com/api/user",
      {
        sub,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res.data; // Return the data from the response
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["previousGenerations"],
    queryFn: () => fetchPreviousGenerations(user.sub),
    enabled: !!user,
    onSuccess: (data) => {
      console.log("query succeeded with data: ", data);
    },
    onError: (error) => {
      console.log(`query failed with: ${error}`);
    },
  });

  if (!user)
    return (
      <div>
        <div className="flex bg-or h-screen w-screen justify-center items-center">
          <div className="bg-[#F7F5F2] justify-center items-center mt-12 rounded-xl shadow-md overflow-hidden px-24 pt-24 pb-12 flex flex-col">
            <div className="flex flex-col items-center justify-center h-full">
              <UserRoundX size={128} />
              <h2 className="text-3xl font-semibold text-center text-[#252221] mt-4">
                No user authenicated, please log in first.
              </h2>
              <a
                href="/api/auth/login"
                className="rounded-full mt-8 text-wh text-4xl bg-[#FF6128] px-10 py-5 font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
              >
                Login
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );

  return (
    <div>
      <Frame />
      <div className="bg-[#FF6128] flex items-center justify-center px-6 pt-24 pb-12">
        <div className="grid grid-cols-4 gap-4 w-full mt-3 h-[calc(100vh-8rem)]">
          {/* Left Column with Two Boxes */}
          <div className="col-span-1 flex flex-col gap-4">
            {/* User Profile Picture Box */}
            <div className="bg-[#F7F5F2] rounded-lg shadow-md overflow-hidden p- flex flex-col h-full">
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  className="h-36 w-36 rounded-full border-4 border-[#2176FF]"
                  src={user.picture}
                  alt={user.name}
                />
                <h2 className="text-5xl font-semibold text-center text-[#252221] mt-4">
                  {user.name}
                </h2>
                <p className="text-center text-gray-800 mt-2">{user.email}</p>
              </div>
            </div>

            {/* Additional User Information Box */}
            <div className="bg-[#F7F5F2] rounded-lg shadow-md overflow-hidden p-6 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-center text-[#252221] mb-2">
                Additional Information
              </h2>
              <p className="text-gray-600">
                You can add more details here about the user. Consider
                including:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Recent Activity</li>
                <li>Favorite Destinations</li>
                <li>Upcoming Trips</li>
                <li>Contact Information</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-3 bg-[#F7F5F2] rounded-lg shadow-md overflow-hidden p-6 flex flex-col h-full">
            <h2 className="text-2xl font-semibold text-center text-[#252221] mb-2">
              Miscellaneous Information
            </h2>
            <div className="space-y-4 flex-grow">
              {isPending ? (
                <p className="text-gray-600">Loading...</p>
              ) : error && !data ? (
                <p>Could not find any previous data. Try generating a trip!</p>
              ) : (
                <div className="text-gray-600">
                  {data.previousGenerations.map((travelPlan, index) => (
                    <div key={index} className="mb-4">
                      <h2 className="font-bold">{travelPlan.country}</h2>
                      <p>
                        {travelPlan.itinerary[0].date} to{" "}
                        {
                          travelPlan.itinerary[travelPlan.itinerary.length - 1]
                            .date
                        }
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
