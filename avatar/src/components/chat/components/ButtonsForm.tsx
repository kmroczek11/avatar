import { FormEvent, useState } from 'react';
import { socket } from '../socket';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from "@mui/icons-material/Send";
import Tooltip from '@mui/material/Tooltip';
import { Message } from '../models/Message';
import { Chat } from '../models/Chat';
import { MinimalUser, User } from '../../../generated/graphql';

interface ButtonsFormProps {
  friend: MinimalUser
  chat: Chat
}

export default function ButtonsForm(props: ButtonsFormProps) {
  const { friend, chat } = props
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    if (!input) return
    sendMessage(input, chat)
  }

  function sendMessage(message: string, chat: Chat) {
    const newMessage: Message = {
      text: message,
      chat
    }

    socket?.timeout(5000).emit('sendMessage', newMessage, () => {
      setIsLoading(false);
    });
  }

  function joinChat(friendId: string) {
    socket?.timeout(5000).emit('joinChat', friendId, () => {
      setIsLoading(false);
    });
  }

  function leaveChat() {
    socket?.timeout(5000).emit('leaveChat', () => {
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", padding: "8px" }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Wiadomość"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Tooltip title="Wyślij">
        <IconButton type="submit">
          <SendIcon />
        </IconButton>
      </Tooltip>
    </form>
  );
}