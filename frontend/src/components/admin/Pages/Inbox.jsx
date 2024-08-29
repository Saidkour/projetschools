import React, { useState, useEffect } from 'react';
import axiosClient from '../../../api/axios';

const Inbox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = sessionStorage.getItem('token');
        await axiosClient.get('/sanctum/csrf-cookie');
        const response = await axiosClient.get('/api/inbox', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(response.data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Inbox</h1>
      <div className="bg-white p-4 rounded-md shadow-md">
        {messages.length === 0 ? (
          <p className="text-gray-600">No messages found.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {messages.map((message) => (
              <li key={message.id} className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={message.sender.profile_picture}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {message.sender.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">{message.subject}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Inbox;
