import Button from "@mui/material/Button";
import { styled } from "@mui/system";

export const ColorButton = styled(Button)`
  border-radius: 24px;
  padding: 0.6rem 1.2rem;
  text-transform: none;

  &:hover {
    background: #d3d3d3;
  }
`;

export const Logo = styled("img")`
  width: 200px;
  height: 50px;
  object-fit: cover;
`;

export { default as CustomAlert } from "./CustomAlert";