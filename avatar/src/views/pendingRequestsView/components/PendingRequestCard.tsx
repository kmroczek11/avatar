import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { CustomAvatar } from "../../../components/lib";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { useAcceptFriendRequestMutation, useRejectFriendRequestMutation } from "../../../generated/graphql";
import createAccessClient from "../../../graphql/clients/accessClient";
import { useAuth } from "../../../components/auth/components/AuthProvider";
interface PendingRequestCardProps {
  item: { id: string; firstName: string; lastName: string, imgSrc?: string | null | undefined };
}

export default function PendingRequestCard(props: PendingRequestCardProps) {
  const { item } = props;
  const { id, firstName, lastName, imgSrc } = item;
  const { user, accessToken } = useAuth()

  const { mutate: acceptFriendRequest } = useAcceptFriendRequestMutation(createAccessClient(accessToken!), {
    onSuccess: () => { },
  }
  );

  const { mutate: rejectFriendRequest } = useRejectFriendRequestMutation(createAccessClient(accessToken!), {
    onSuccess: () => { },
  }
  );

  return (
    <Card
      sx={{
        background: `linear-gradient(to right,${grey[100]},#fff)`,
        borderRadius: "4px 4px 4px",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <CustomAvatar
            name={`${firstName} ${lastName}`}
            size="medium"
            imgSrc={
              imgSrc &&
              (process.env.NODE_ENV === "production"
                ? `${process.env.REACT_APP_HOST}/public/images/${imgSrc}`
                : `${process.env.REACT_APP_HOST}/images/${imgSrc}`)
            }
          />
          <Typography component="div" variant="h2">
            {firstName} {lastName}
          </Typography>
          <Box>
            <Tooltip title="Zaakceptuj zaproszenie">
              <IconButton
                aria-label="accept-friend-request"
                onClick={() => acceptFriendRequest({
                  input: {
                    creatorId: id,
                    receiverId: user?.id!
                  }
                })}
              >
                <DoneIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Odrzuć zaproszenie">
              <IconButton
                aria-label="reject-friend-request"
                onClick={() => rejectFriendRequest({
                  input: {
                    creatorId: id,
                    receiverId: user?.id!
                  }
                })}
              >
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
