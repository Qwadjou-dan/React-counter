import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <form className="h-screen flex flex-col gap-10 justify-center items-center">
        <h1>Complete This Form</h1>
        <div className="w-72">
          <Input label="name" type="name" value={name} onChange={handleName} />
        </div>
        <div className="w-72">
          <Input
            label="email"
            type="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="w-72">
          <Input
            label="password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          <Button onClick={submitForm}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
