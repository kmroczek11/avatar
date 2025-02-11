import React, { ChangeEvent, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "@mui/material/styles";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import imageCompression from "browser-image-compression";
import { CustomAlert } from "../../../components/lib";
import { useAuth } from "../../../components/auth/components/AuthProvider";
import { useCookies } from "react-cookie";

const stringToColor = (string: string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

interface UserAvatarProps {
  name: string;
  size?: "small" | "medium" | "large";
  imgSrc?: string;
  BadgeIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

const SmallIconButton = styled(IconButton)(({ theme }) => ({
  width: 80,
  height: 80,
  border: `5px solid ${theme.palette.background.paper}`,
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
})) as typeof IconButton;

const errorMessages = {
  noFile: "Nie przesłano zdjęcia. Zdjęcie musi być w formacie png lub jpg/jpeg.",
  invalidExtension: "Nieprawidłowe rozszerzenie pliku.",
  invalidMimeType: "Nieprawidłowy typ MIME.",
  unexpectedError: "Nieoczekiwany błąd.",
};

export default function UserAvatar(props: UserAvatarProps) {
  const { name, size, imgSrc, BadgeIcon } = props;
  const { user, accessToken, getUserRefetch } = useAuth();
  const [changeProfilePicStatus, setChangeProfilePicStatus] = useState<string>("");
  const [cookies, setCookie] = useCookies(["userId"]);

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const image = input.files[0];

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const blob = await imageCompression(image, options);
      const compressedFile = new File([blob], blob.name, {
        type: blob.type,
      });

      const formData = new FormData();
      formData.append("operations", JSON.stringify({
        query: `
          mutation ChangeProfilePic($input: ChangeProfilePicInput!) {
            changeProfilePic(changeProfilePicInput: $input) {
              userId
            }
          }
        `,
        variables: {
          input: {
            userId: user?.id!,
            image: null, // GraphQL Upload scalar requires `null` here
          },
        },
      }));

      formData.append("map", JSON.stringify({ "0": ["variables.input.image"] }));
      formData.append("0", compressedFile);

      const response = await fetch(`${process.env.REACT_APP_HOST}/graphql`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "apollo-require-preflight": "true",
        },
        body: formData,
      });

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors[0].message);
      }

      setCookie("userId", result.data.changeProfilePic.userId);
      getUserRefetch();
    } catch (error) {
      setChangeProfilePicStatus(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <Tooltip title="Zmień zdjęcie profilowe">
            <SmallIconButton component="label">
              {BadgeIcon && <BadgeIcon />}
              <input id="icon-button-file" type="file" onChange={onFileChange} hidden />
            </SmallIconButton>
          </Tooltip>
        }
      >
        <Avatar
          src={imgSrc}
          sx={{
            bgcolor: stringToColor(name),
            ...(size === "small" && { width: 50, height: 50, fontSize: 20 }),
            ...(size === "medium" && { width: 100, height: 100, fontSize: 40 }),
            ...(size === "large" && { width: 300, height: 300, fontSize: 60 }),
          }}
          children={`${name.split(" ")[0][0]}${name.split(" ")[1][0]}`}
        />
      </Badge>
      {changeProfilePicStatus && <CustomAlert severity="error" msg={changeProfilePicStatus} />}
    </Box>
  );
}