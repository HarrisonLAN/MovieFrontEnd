import React, { useState } from "react";
import { login } from '../utils/index'
import logo from '../imgs/RIMDB-logos_transparent.png';
import axios from 'axios'

async function CreateUser(event, name, email, password) {
  event.preventDefault();
  const url = `http://209.250.229.174:3001/api/auth/register`;
  const payload = { name, email, password };
  const { data } = await axios.post(url, payload);
  const { token, success } = data;
  login(token);
}

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
<div class="max-w-md w-full space-y-8">
  <div>
    <img class=" mx-auto h-auto w-auto" src={logo} alt="Workflow" />
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Register a new account
    </h2>
  </div>
  <form class="mt-8 space-y-6" action="#" method="POST">
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="username" class="sr-only">Username</label>
        <input id="username" name="username" type="text" autocomplete="username" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" value={username}
        onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div>
        <label for="email" class="sr-only">Email</label>
        <input id="email" name="email" type="text" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email Address" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"  value={password}
        onChange={(e) => setPassword(e.target.value)} />
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>
    </div>

    <div>
      <button type="submit" disabled={!validateForm()} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Sign in
      </button>
    </div>
  </form>
</div>
</div>

);
}