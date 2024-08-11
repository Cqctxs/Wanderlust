'use client';
import { Frame } from "@/components/ui/navbar/frame";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ProfileClient() {
  const { user, isLoading } = useUser();

  const fetchPreviousGenerations = async (sub) => {
    const res = await axios.post("http://localhost:8080/api/user", {
      sub
    }, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; // Return the data from the response
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["previousGenerations"],
    queryFn: () => fetchPreviousGenerations(user.sub),
    enabled: !!user
  });

  if (!user) return <div className="text-gray-700 text-center mt-4">No user</div>;
  if (isLoading) return <div className="text-gray-700 text-center mt-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-4">{error.message}</div>;

  return (
    <div>
      <Frame />
      <div className="bg-[#FF6128] flex items-center justify-center px-6 py-24">
          <div className="grid grid-cols-4 gap-4 w-full h-[calc(100vh-8rem)]">
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
                  <h2 className="text-5xl font-semibold text-center text-[#252221] mt-4">{user.name}</h2>
                  <p className="text-center text-gray-800 mt-2">{user.email}</p>
                </div>
              </div>

              {/* Additional User Information Box */}
              <div className="bg-[#F7F5F2] rounded-lg shadow-md overflow-hidden p-6 flex flex-col h-full">
                <h2 className="text-xl font-semibold text-center text-[#252221] mb-4">Additional Information</h2>
                <p className="text-gray-600">
                  You can add more details here about the user. Consider including:
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
              <h2 className="text-2xl font-semibold text-center text-[#252221] mb-4">Miscellaneous Information</h2>
              <div className="space-y-4 flex-grow">
              {isPending ? <p className="text-gray-600">Loading...</p> : <p className="text-gray-600">{data}</p>}
                <ul className="list-disc list-inside text-gray-600">
                  <li>Recent Activity</li>
                  <li>Favorite Destinations</li>
                  <li>Upcoming Trips</li>
                  <li>Contact Information</li>
                  <li>Achievements or Badges</li>
                  <li>Social Media Links</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}