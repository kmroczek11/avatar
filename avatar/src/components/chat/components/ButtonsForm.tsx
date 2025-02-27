import { FormEvent, useState } from 'react';
import { socket } from '../socket';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from "@mui/icons-material/Send";
import Tooltip from '@mui/material/Tooltip';

export default function ButtonsForm() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit('sendMessage', input, () => {
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