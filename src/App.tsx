import { useEffect, useState } from "react";
import "./App.css";
import VaasApi from "./VaasApi";

// create the client
const client = new VaasApi("https://api.variableasaservice.com");

const your_variable_id = 9;
const your_api_key = "your_api_key";

// authenticate with your api key
client.authenticate(your_api_key);

function App() {
  const [entered, setEntered] = useState(false);
  const [username, setUsername] = useState("");

  const enterChatroom = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(username);
    setEntered(true);
  };

  const [message, setMessage] = useState("");

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    // get most up to date value of the variable
    const res = await client.getVariable(your_variable_id);
    if (!res.success) {
      console.error(res.reason);
      return;
    }

    // create the new messages array
    const messages = JSON.parse(res.data.value);
    const newMessages = [...messages, { message, user: username, time: Date.now() }];

    // update the variable
    const updateRes = await client.updateVariable(your_variable_id, {
      value: JSON.stringify(newMessages),
    });

    if (!updateRes.success) {
      console.error(updateRes.reason);
      return;
    }

    // update the messages
    setMessages(newMessages);

    // clear the message input
    setMessage("");
  };

  const [messages, setMessages] = useState([] as { message: string; user: string; time: number }[]);
  const pollingInterval = 3000; // The interval in milliseconds to poll for new messages

  // listen for messages
  useEffect(() => {
    if (entered) {
      const interval = setInterval(async () => {
        // get the variable
        const res = await client.getVariable(your_variable_id);

        // check if the request was successful
        if (!res.success) {
          console.error(res.reason);
          return;
        }

        // update messages
        setMessages(JSON.parse(res.data.value));
      }, pollingInterval);

      return () => clearInterval(interval);
    }
  }, [entered]);

  return (
    <main>
      {/* not entered */}
      {!entered && (
        <form onSubmit={enterChatroom}>
          <h2>Pick a username to enter the chatroom</h2>

          <input
            name="username"
            type="text"
            required
            placeholder="Enter your username"
            maxLength={16}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button type="submit">Enter</button>
        </form>
      )}

      {/* entered */}
      {entered && (
        <div>
          {/* message list */}
          <ul>
            {messages.map((msg, i) => (
              <li key={i}>
                <strong>{msg.user}</strong>: "{msg.message}" sent at {new Date(msg.time).toUTCString()}
              </li>
            ))}
          </ul>

          {/* message form */}
          <form onSubmit={sendMessage}>
            <input
              name="message"
              type="text"
              required
              placeholder="Enter your message"
              maxLength={64}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </main>
  );
}

export default App;
