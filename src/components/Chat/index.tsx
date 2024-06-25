import React, { useState } from "react";
import axios from 'axios';
import Prompts from './prompts';
import styles from './styles.module.css';

type ChatProps = {
    id?: string;
}

const Chat: React.FC<ChatProps> = ({ id }) => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const prompts = Prompts[id] || [];

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (input.trim() === "") return;

        // Add user message to the messages list
        setMessages([...messages, { role: 'user', content: input }]);

        // Make a request to the ChatGPT API with the user input
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        ...prompts,
                        ...messages,
                        { role: 'user', content: input },
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer OPEN_AI_API_KEY`,
                    },
                }
            );

            // Update the conversation history with the response from ChatGPT
            setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: response.data.choices[0].message.content }]);
        } catch (error) {
            const msg = error.response.data.error.message || error.message;
            console.error('An error occurred:', error);
            setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: msg }]);
        }

        // Clear the input field
        setInput('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatMessages}>
                {messages.map((message, index) => (
                    <div key={index} className={`${styles.chatMessage} ${styles[message.role]}`}>
                        {message.content}
                    </div>
                ))}
            </div>
            <div className={styles.chatInputContainer}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={handleInputChange} 
                    onKeyPress={handleKeyPress}
                    className={styles.chatInput}
                    placeholder="Ask me anything..."
                />
                <button onClick={handleSendMessage} className={styles.chatSendButton}>Send</button>
            </div>
        </div>
    );
}

export default Chat;
