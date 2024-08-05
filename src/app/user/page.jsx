'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (!user) return <div className="text-gray-700 text-center mt-4">No user</div>;
  if (isLoading) return <div className="text-gray-700 text-center mt-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-4">{error.message}</div>;

  return (
    <div className="min-h-screen bg-[#FF6128] flex items-center justify-center">
      {user && (
        <div className="max-w-md bg-[#F7F5F2] rounded-lg shadow-md overflow-hidden p-6">
          <div className="flex justify-center mb-4">
            <img
              className="h-24 w-24 rounded-full border-4 border-[#2176FF]"
              src={user.picture}
              alt={user.name}
            />
          </div>
          <h2 className="text-2xl font-semibold text-center text-[#252221]">{user.name}</h2>
          <p className="text-center text-gray-600">{user.email}</p>
        </div>
      )}
    </div>
  );
}
