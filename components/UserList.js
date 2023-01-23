import React from "react";

const userList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <a href={`/userdetails?id=${user.id}`}>
            <p>{user.firstName}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default userList;
