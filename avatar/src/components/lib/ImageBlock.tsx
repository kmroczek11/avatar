import React from "react";
import { Theme, SxProps, styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const ImageBlockRoot = styled("section")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 800,
  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {
    height: 400,
  },
}));

const BackgroundWrapper = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  zIndex: -2,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

interface ImageBlockProps {
  imgSrc: string;
  secondImgSrc?: string;
  sxImgBg?: SxProps<Theme>;
}

const ImageBlock: React.FC<React.HTMLAttributes<HTMLDivElement> & ImageBlockProps> = ({
  imgSrc,
  secondImgSrc,
  sxImgBg,
  children,
}) => {
  return (
    <ImageBlockRoot>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </Container>

      {/* Background Image with <picture> for responsive handling */}
      <BackgroundWrapper sx={sxImgBg}>
        <picture>
          {secondImgSrc && <source media="(min-width: 600px)" srcSet={secondImgSrc} />}
          <img
            src={imgSrc}
            alt="Background"
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }}
          />
        </picture>
      </BackgroundWrapper>
    </ImageBlockRoot>
  );
};

export default ImageBlock;