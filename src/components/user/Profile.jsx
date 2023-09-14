import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState();

  const client = axios.create({
    baseURL: "http://localhost:8080",
  });

  useEffect(() => {
    client.get("/user").then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div>
      {user?.map((user) => {
        const { id, firstName, lastName } = user;
        return (
          <div key={id}>
            <h1>{firstName}</h1>
            <p>{lastName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
