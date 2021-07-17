import React, { useState } from "react";
import { login } from '../utils/index';
import axios from 'axios';

async function GetUser(event, name, password) {
  event.preventDefault();
  const url = `http://209.250.229.174:3001/api/auth/login`;
  const payload = { name, password };
  const { data } = await axios.post(url, payload);
  const { token, success } = data;
  login(token);
}

export default function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  return (
    <div class="w-full max-w-xs">
      <form onSubmit={(event) => GetUser(event, username, password)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username}
            onChange={(e) => setUserName(e.target.value)}></input>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={!validateForm()}>
            Sign In
          </button>
        </div>
      </form>
    </div >



  );
}