import Button from "@mui/material/Button";
import { styled } from "@mui/system";

export const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color:theme.palette.primary.main,
  padding: '0.6rem 1.2rem',
  textTransform: 'none',
  clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
  
  '&:hover': {
    background: '#d3d3d3'
  }
}));

export const Logo = styled("img")`
  width: 200px;
  height: 50px;
  object-fit: contain;
`;

export { default as CustomAlert } from "./CustomAlert";
export { default as CustomDialog } from "./CustomDialog";
export { default as CustomAvatar } from "./CustomAvatar";
export { default as LoadingScreen } from "./LoadingScreen";
export { default as ImageBlock } from "./ImageBlock";