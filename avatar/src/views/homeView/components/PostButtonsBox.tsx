import React, { ChangeEvent } from "react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import imageCompression from "browser-image-compression";
import ImageIcon from '@mui/icons-material/Image';

interface PostButtonsBoxProps {
  setImage: React.Dispatch<React.SetStateAction<File | null>>
}

export default function PostButtonsBox(props: PostButtonsBoxProps) {
  const { setImage } = props

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

    const blob = await imageCompression(image, options);
    const compressedFile = new File([blob], blob.name, {
      type: blob.type,
    });

    setImage(compressedFile)
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
      <Tooltip title="Dodaj zdjęcie">
        <IconButton
          aria-label="add-photo"
          component="label"
        >
          <ImageIcon />
          <input id="icon-button-file" type="file" onChange={onFileChange} hidden />
        </IconButton>
      </Tooltip>
    </Box>
  )
}