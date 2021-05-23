import React, { useEffect, useState } from "react";

let wsChannel: WebSocket;

function createChannel() {
  // @ts-ignore
  wsChannel = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
}
export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

export const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

const Chat: React.FC = () => {
  useEffect(() => {
    createChannel();
    wsChannel.addEventListener("close", () => {});
  }, []);

  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  );
};

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  useEffect(() => {
    wsChannel.addEventListener("message", (e) => {
      let newMessages = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    });
  }, []);

  return (
    <div style={{ height: "350px", overflowY: "auto" }}>
      {messages.map((m, index) => (
        <Message key={index} message={m} />
      ))}
    </div>
  );
};

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <div>
      <img src={message.photo} style={{ width: "50px", borderRadius: "50%" }} />{" "}
      <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  );
};

const AddMessageForm: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isReady, setIsReady] = useState<"pending" | "ready">("pending");

  useEffect(() => {
    wsChannel.addEventListener("open", () => {
      setIsReady("ready");
    });
  }, []);

  const sendMessage = () => {
    if (!message) {
      return;
    }
    wsChannel.send(message);
    setMessage("");
  };

  return (
    <div>
      <div>
        <textarea
          onChange={(e) => e.currentTarget.value}
          value={message}
        ></textarea>
      </div>
      <div>
        <button
          disabled={isReady !== "ready"}
          onClick={sendMessage}
          className="btn btn-success"
        >
          Send
        </button>
      </div>
    </div>
  );
};
