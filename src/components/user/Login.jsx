import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [res, setRes] = useState();
  const [form, setFrom] = useState({
    name: "",
    email: "",
    password: "",
  });

  const client = axios.create({
    baseURL: "http://localhost:8080",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({
      ...form,
      [name]: value,
    });
  };

  const submit = async () => {
    // await client.post("/login", form).then((res) => {
    //   setRes(res.data);
    // });

    try {
      let res = await client.post("login", form).catch((err) => alert(err));
      console.log(res.data);

      let { success, message, data } = res.data;
      if (success) {
        alert(message);
        console.log(data);
        localStorage.setItem("user", true);
        window.location.reload(true);
      } else {
        alert(message);
      }
    } catch (error) {
      alert(error);
    }
    // setFrom("");
  };
  console.log(res);

  return (
    <div>
      <form onSubmit={() => submit} method="post">
        <input
          type="text"
          name="name"
          placeholder="emater name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enater email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
