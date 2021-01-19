import React from "react";

export default function UserDetails({ user }) {
  return (
    <div>
      <img src={user.avatar_url} alt={user.name} width="600" />
      <h2>{user.name}</h2>
      <p>Location:{user.location}</p>
      <p>Public Repos: {user.public_repos}</p>
    </div>
  );
}
