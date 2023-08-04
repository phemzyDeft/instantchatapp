import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../../firebase';


const Chatbox = () => {
    const messageRef = useRef();
    const [messages, setMessages] = useState([]);

    const scrollToButtom = () => {
        messageRef.current.scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => {
        scrollToButtom()
    }, [messages])

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy('createdAt'), limit(50));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages)
        });
        // console.log(unsubscribe)
        return unsubscribe
    }, [])

    return (
        <div className="containerWrapper pb-44 pt-20">
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
            <div ref={messageRef}></div>
        </div>
    )
}

export default Chatbox