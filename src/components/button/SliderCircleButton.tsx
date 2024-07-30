import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const SliderCircleButton: any = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "52px",
  height: "52px",
  border: "#f1cdb3 2px solid",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  color: "black",
  minWidth: "auto",
  "&:hover": {
    backgroundColor: "#fddcc4",
    borderColor: "#fddcc4",
  },
  "&:disabled": {
    border: "#cdcdcd 2px solid",
  },
  "&:disabled:hover": {
    backgroundColor: "transparent",
    border: "#cdcdcd 2px solid",
  },
  "&.pageNumber": {
    border: "#fddcc4 2px solid",
    backgroundColor: "#fddcc4",
  },
}));

export default SliderCircleButton;
