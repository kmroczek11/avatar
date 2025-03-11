import React, { useState, ChangeEvent, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { FindUsersByNameQuery, SendFriendRequestMutation, SendFriendRequestMutationVariables, Status, useCancelFriendRequestMutation, useFindUsersByNameQuery, useSendFriendRequestMutation } from '../../../generated/graphql';
import createAccessClient from '../../../graphql/clients/accessClient';
import { useAuth } from '../../../components/auth/components/AuthProvider';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { CustomAvatar } from '../../../components/lib';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CancelIcon from '@mui/icons-material/Cancel';

export default function SearchBar() {
  const theme = useTheme();
  const { user, accessToken, refreshToken } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<Array<{
    id: string,
    imgSrc?: string | null,
    firstName: string,
    lastName: string,
    friendRequestsReceived?: {
      status: Status,
      creatorId: string
    }[] | null | undefined
    friendRequestStatus?: Status | null | undefined,
    creatorId?: string | null | undefined
  }>>([]);
  const [sendFriendRequestStatus, setSendFriendRequestStatus] = useState<string>("");

  const { mutate: cancelFriendRequest } = useCancelFriendRequestMutation(createAccessClient(accessToken!, refreshToken!), {
    onSuccess: (_, variables) => {
      setFilteredUsers((prev) =>
        prev.map((user) =>
          user.id === variables.input.receiverId
            ? { ...user, friendRequestStatus: null }
            : user
        )
      );
    },
  }
  );

  const { isLoading: isSendFriendRequestLoading, mutate: sendFriendRequest } = useSendFriendRequestMutation<Error>(createAccessClient(accessToken!, refreshToken!), {
    onError: (error: Error) => {
      let err: any = {};
      err.data = error;
      setSendFriendRequestStatus(err?.data?.response.errors[0].message);
    },
    onSuccess: (
      data: SendFriendRequestMutation,
      _variables: SendFriendRequestMutationVariables,
      _context: unknown
    ) => {
      setFilteredUsers((prev) =>
        prev.map((user) =>
          user.id === _variables.input.receiverId
            ? { ...user, friendRequestStatus: Status.Pending }
            : user
        )
      );
    },
  });

  const { data: usersList, isLoading: isFindUsersByNameLoading, refetch } = useFindUsersByNameQuery<FindUsersByNameQuery, Error>(
    createAccessClient(accessToken!, refreshToken!),
    {
      input: {
        name: searchQuery,
        creatorId: user?.id!
      }
    },
    {
      enabled: !!searchQuery,
      onSuccess: (data) => {
        if (data?.findUsersByName) {
          setFilteredUsers(data.findUsersByName);
        }
      },
    }
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim().length > 0) {
      refetch();
    } else {
      setFilteredUsers([]);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        bgcolor: "background.paper",
        boxShadow: 2,
        borderRadius: 2,
        width: "100%",
        maxWidth: 300,
        my: 2
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          width: '100%',
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
      {searchQuery && (
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
          {!isFindUsersByNameLoading && filteredUsers.length > 0 ? (
            filteredUsers.map((filteredUser, index) => {
              const isRequestPending = filteredUser.friendRequestStatus === Status.Pending;
              const isAlreadyFriend = filteredUser.friendRequestStatus === Status.Accepted;
              const isCurrentUserSender = isRequestPending && filteredUser.friendRequestsReceived?.some(req => req.creatorId === user?.id);
              const isCurrentUser = filteredUser.id === user?.id;

              return (
                <ListItem key={index} sx={{ padding: '8px 16px' }} secondaryAction={
                  !isCurrentUser && !isAlreadyFriend && (
                    isRequestPending ? (
                      <Tooltip title="Anuluj zaproszenie">
                        <IconButton
                          aria-label="cancel-friend-request"
                          onClick={() => cancelFriendRequest({
                            input: {
                              creatorId: user?.id!,
                              receiverId: filteredUser.id
                            }
                          })}
                          disabled={!isCurrentUserSender}
                        >
                          <CancelIcon />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <Tooltip title="Wyślij zaproszenie do znajomych">
                        <IconButton
                          aria-label="send-friend-request"
                          onClick={() => sendFriendRequest({
                            input: {
                              creatorId: user?.id!,
                              receiverId: filteredUser.id
                            }
                          })}
                        >
                          <PersonAddIcon />
                        </IconButton>
                      </Tooltip>
                    )
                  )
                }>
                  <ListItemAvatar>
                    <CustomAvatar
                      name={`${filteredUser.firstName} ${filteredUser.lastName}`}
                      size="small"
                      imgSrc={
                        filteredUser.imgSrc &&
                        (process.env.NODE_ENV === "production"
                          ? `${process.env.REACT_APP_HOST}/public/images/${filteredUser.imgSrc}`
                          : `${process.env.REACT_APP_HOST}/images/${filteredUser.imgSrc}`)
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${filteredUser.firstName} ${filteredUser.lastName}`}
                  />
                </ListItem>
              );
            })
          ) : (
            <ListItem>
              <ListItemText primary={isFindUsersByNameLoading ? 'Ładowanie...' : 'Brak wyników'} />
            </ListItem>
          )}
        </List>
      )}
    </Box>
  );
}