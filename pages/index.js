import React, { useContext} from "react";
import { Context } from "../context";
import router, { useRouter } from "next/router";
import axios from "axios";
import { route } from "next/router";

export default function Auth() {

  const{username, secret, setUsername, setSecret} = useContext(Context);

  const router = useRouter();

  function onSubmit(e){
    e.preventDefault();

    if(username.length === 0 || secret.length === 0) return;

    axios.put(
      "https://api.chatengine.io/users/",
      {username, secret},
      {headers: {"Private-key": "efa794e7-38db-4dca-8179-2a2683755066"}}
    )
    .then((r) => router.push("/chats"))
  }

  return( 
  <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
        <div className='input-container'>

          <input 
            placeholder = 'Email'
            className='text-input'
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className='input-container'>
        <input 
            type='password'
            placeholder = 'Password'
            className='text-input'
            onChange={e => setSecret(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-button">
          Login/SignUp
        </button>

      </form>
    </div>
  </div>
  )
}
