import React, { useState } from "react";
import Input from "../components/Input";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saveLoginInfo, setSaveLoginInfo] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here using email and password values
    console.log("Submitted:", email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Log in!</div>
        <Input
          label="Email:"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password:"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <input
            type="checkbox"
            id="saveLoginInfo"
            checked={saveLoginInfo}
            onChange={(e) => setSaveLoginInfo(e.target.checked)}
          />
          <label htmlFor="saveLoginInfo">Save my login info</label>
        </div>
        <div>
          {" "}
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
