import React, { useState, ChangeEvent, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { FindUsersByNameQuery, useFindUsersByNameQuery } from '../../../generated/graphql';
import createAccessClient from '../../../graphql/clients/accessClient';
import { useAuth } from '../../../components/auth/components/AuthProvider';

export default function SearchBar() {
  const theme = useTheme();
  const { accessToken } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<Array<{ firstName: string,lastName:string }>>([]);

  const { data: usersList, isLoading } = useFindUsersByNameQuery<FindUsersByNameQuery, Error>(
    createAccessClient(accessToken!),
    { name: searchQuery },
    {
      onSuccess: (data) => {
        setFilteredUsers(data?.findUsersByName || []);
      },
    }
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        backgroundColor: theme.palette.primary.main,
        borderRadius: '10px',
        width: '300px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '4px',
          padding: '4px 8px',
        }}
      >
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Wyszukaj znajomych"
          variant="standard"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            '& label': {
              color: theme.palette.primary.contrastText,
            },
            '& label.Mui-focused': {
              color: theme.palette.primary.contrastText,
            },
          }}
        />
      </Box>

      <List
        sx={{
          width: '100%',
          marginTop: '8px',
          backgroundColor: 'white',
          borderRadius: '4px',
          maxHeight: '200px',
          overflowY: 'auto',
          boxShadow: theme.shadows[1],
        }}
      >
        {!isLoading && filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <ListItem key={index} sx={{ padding: '8px 16px' }}>
              <ListItemText primary={`${user.firstName} ${user.lastName}`} />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary={isLoading ? 'Ładowanie...' : 'Brak wyników'} />
          </ListItem>
        )}
      </List>
    </Box>
  );
}