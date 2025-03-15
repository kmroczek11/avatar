import React, { useState, ChangeEvent, useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { FindUsersByNameQuery, SendFriendRequestMutation, SendFriendRequestMutationVariables, Status, useCancelFriendRequestMutation, useFindUsersByNameQuery, useSendFriendRequestMutation } from '../../../generated/graphql';
import { useAuth } from '../../../components/auth/components/AuthProvider';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { CustomAvatar } from '../../../components/lib';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CancelIcon from '@mui/icons-material/Cancel';
import { debounce } from 'lodash';
import { useClient } from '../../../components/auth/components/ClientProvider';

export default function SearchBar() {
  const theme = useTheme();
  const { user } = useAuth();
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
  const { accessClient } = useClient()

  const { mutate: cancelFriendRequest } = useCancelFriendRequestMutation(accessClient!, {
    onSuccess: (data) => {
      refetchFindUsersByName()
    },
  }
  );

  const { isLoading: isSendFriendRequestLoading, mutate: sendFriendRequest } = useSendFriendRequestMutation<Error>(accessClient!, {
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
      refetchFindUsersByName()
    },
  });

  const { data: usersList, isLoading: isFindUsersByNameLoading, refetch: refetchFindUsersByName } = useFindUsersByNameQuery<FindUsersByNameQuery, Error>(
    accessClient!,
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

  const handleSearchChange = useMemo(
    () => debounce((value: string) => {
      setSearchQuery(value);
    }, 300),
    []
  )

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(e.target.value);
  }

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
          onChange={onSearchInputChange}
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
              const isCurrentUserSender = filteredUser.friendRequestsReceived?.some(req => req.creatorId === user?.id);
              const isCurrentUser = filteredUser.id === user?.id;

              return (
                <ListItem key={index} sx={{ padding: '8px 16px' }} secondaryAction={
                  !isCurrentUser && !isAlreadyFriend && (
                    isRequestPending ? (
                      <Tooltip title="Anuluj zaproszenie">
                        <IconButton
                          aria-label="cancel-friend-request"
                          onClick={() =>
                            cancelFriendRequest({
                              input: {
                                creatorId: user?.id!,
                                receiverId: filteredUser.id
                              }
                            })
                          }
                          disabled={!isCurrentUserSender}
                        >
                          <CancelIcon />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <Tooltip title="Wyślij zaproszenie do znajomych">
                        <IconButton
                          aria-label="send-friend-request"
                          onClick={() =>
                            sendFriendRequest({
                              input: {
                                creatorId: user?.id!,
                                receiverId: filteredUser.id
                              }
                            })
                          }
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
        </List >
      )}
    </Box >
  );
}