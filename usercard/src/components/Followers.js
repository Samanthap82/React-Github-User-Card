import React from "react";

export default function Followers(followers) {
  return (
    <div>
      {followers.map((follower) => (
        <img
          key={followers.id}
          src={follower.avatar_url}
          alt={follower.login}
          width="200"
        />
      ))}
    </div>
  );
}
