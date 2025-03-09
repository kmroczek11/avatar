import { FormEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from "@mui/icons-material/Send";
import Tooltip from '@mui/material/Tooltip';
import { Message } from '../models/Message';
import { Chat } from '../models/Chat';
import { MinimalUser, User } from '../../../generated/graphql';
import { useSocket } from './SocketProvider';
import { useAuth } from '../../auth/components/AuthProvider';

interface ButtonsFormProps {
  friend: MinimalUser
  chat: Chat
}

export default function ButtonsForm(props: ButtonsFormProps) {
  const { friend, chat } = props
  const { user } = useAuth()
  const { socket } = useSocket()
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
      createdAt: new Date(),
      senderId: user?.id!,
      chatId: chat?.id!
    }

    socket?.timeout(5000).emit('sendMessage', newMessage, () => {
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