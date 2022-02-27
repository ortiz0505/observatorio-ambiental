import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex py-4 first:pt-0 last:pb-0 my-5">
        <img className="h-10 w-10 rounded-full" src={user.picture} alt={user.name} />
        <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-slate-900">{user.name}</p>
            <p className="text-sm text-slate-500 truncate">{user.email}</p>
        </div>
      </div>
    )
  );
};