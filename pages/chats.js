import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";


const ChatEngine = dynamic(()=>
  import("react-chat-engine").then((module) => module.ChatEngine)
);


const MessageFormSocial = dynamic(()=>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);


export default function Chats() {
  const {username, secret} = useContext(Context);
  const {showChat, setShowChat} = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null){
      setShowChat(true);
    }
  });

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height= 'calc(100vh - 200px)'
          projectID='3302b316-017f-471e-a573-9f01c092af4a'
          userName={username}
          userSecret={secret}
        />
      </div>
    </div>
    
  );
}
