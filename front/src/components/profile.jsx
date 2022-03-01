import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex first:pt-0 last:pb-0">
        <div className="ml-3 overflow-hidden text-center">
            <p className="text-xs text-white">{user.name}</p>
            <p className="text-xs text-slate-500 truncate">{user.email}</p>
        </div>
      </div>
    )
  );
};