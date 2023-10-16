import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { CSSProperties, useContext, useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

interface MessageType {
  author: string;
  text: string;
  date: Timestamp | Date;
}

function Chat() {
  const chatStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const messageStyle: CSSProperties = {
    outline: "solid black 1px",
  };

  // import user from the context
  const { user } = useContext(AuthContext);

  //2.Store documents in a variable (a state variable)
  const [chatMessages, setChatMessages] = useState<MessageType[] | null>(null);

  // 5. Store message when we type
  const [textMsg, setTextMsg] = useState("");

  //6. create function to store typed text in textMsg variable
  //in this example this is being done directly in the input. Otherwise, create a function.

  //1. Get documents from our Database
  const getMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "chat"));
    console.log("querySnapshot :>> ", querySnapshot);
    const messagesArray: MessageType[] = [];
    querySnapshot.forEach((doc) => {
      console.log("message object :>> ", doc.data());
      console.log(`${doc.id} => ${doc.data()}`);
      // const messageObject = doc.data()
      messagesArray.push(doc.data() as MessageType);
    });
    console.log("messagesArray :>> ", messagesArray);
    setChatMessages(messagesArray);
  };

  const formatDate = (date: Timestamp | Date): string => {
    // console.log("date :>> ", typeof date);
    // console.log("right now :>> ", new Date());
    // parameter date is a number in SECONDS, we need to convert it to miliseconds, therefore we multiply by 1000

    if (date instanceof Timestamp) {
      const formatedDate = new Date(date.seconds * 1000).toLocaleString();
      return formatedDate;
    } else {
      const formatedDate = new Date(date).toLocaleString();
      return formatedDate;
    }
  };

  // 7- Create a funtion to send messages to the Database
  const submitMessage = async () => {
    // console.log("textMsg :>> ", textMsg);
    const newChatMsg: MessageType = {
      author: user!.email!,
      text: textMsg,
      date: new Date(),
    };

    console.log("newChatMsg :>> ", newChatMsg);
    // store the newChatMsg in my Database
    try {
      const docRef = await addDoc(collection(db, "chat"), newChatMsg);
      console.log("docRef :>> ", docRef);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  //  get messages with live update
  const getMessagesLiveUpdate = () => {
    const q = query(collection(db, "chat"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesArray: MessageType[] = [];
      querySnapshot.forEach((doc) => {
        messagesArray.push(doc.data() as MessageType);
      });
      console.log("messagesArray :>> ", messagesArray);
      setChatMessages(messagesArray);
    });
  };

  useEffect(() => {
    // getMessages();
    getMessagesLiveUpdate();
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      {/* 4- create input to write message */}
      <div>
        <input
          type="text"
          onChange={(e) => {
            setTextMsg(e.target.value);
          }}
        />
        <Button onClick={submitMessage}>📤</Button>
      </div>

      {/*3- Display documents here */}
      <div style={chatStyle}>
        {chatMessages &&
          chatMessages.map((msg, index) => {
            return (
              <div key={index} style={messageStyle}>
                <p>{msg.author}</p>
                <p>{msg.text}</p>
                <p>{formatDate(msg.date)}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Chat;
