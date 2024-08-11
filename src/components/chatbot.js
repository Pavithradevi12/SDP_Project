import React from "react";
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

const Chatbot = () => {

    const steps = [
        {
            id: 'Greet',
            message: 'Hello, Welcome to NebulaReads!',
            trigger: 'AskHelp',
        },
        {
            id: 'AskHelp',
            message: 'How can I help you today?',
            trigger: 'waiting1',
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Response',
        },
        {
            id: 'Response',
            message: 'You can explore our website to find books according to your taste.',
            trigger: 'AskGenre',
        },
        {
            id: 'AskGenre',
            message: 'Would you like to explore a specific genre?',
            trigger: 'genre',
        },
        {
            id: 'genre',
            options: [
                { value: 'Romance', label: 'Romance', trigger: 'Romance' },
                { value: 'Thriller', label: 'Thriller', trigger: 'Thriller' },
                // Uncomment these if you want to add more genres:
                // { value: 'Fiction', label: 'Fiction', trigger: 'Fiction' },
                // { value: 'Adventure', label: 'Adventure', trigger: 'Adventure' },
            ],
        },
        {
            id: 'Romance',
            message: 'We have plenty of Romance books you can explore on our site.',
            end: true,
        },
        {
            id: 'Thriller',
            message: 'We have plenty of Thriller books you can explore on our site.',
            end: true,
        },
        // Add other genres as needed
    ];

    return (
        <Segment floated="right">
            <ChatBot steps={steps} />
        </Segment>
    );
}

export default Chatbot;
