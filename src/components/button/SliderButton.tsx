import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const SliderButton: any = styled(Button)<ButtonProps>(({ theme }) => ({
  fontFamily: "Georgia, Times New Roman, Times, serif",
  fontSize: 17,
  letterSpacing: "0.06rem",
  lineHeight: 1.3,
  textTransform: "none",
  backgroundColor: "transparent",
  padding: "15px 45px",
  borderRadius: "100px",
  border: "#F1CDB3 2px solid",
  color: "#292929",
  boxShadow: "none",
  alignSelf: "self-start",
  "&:hover": {
    backgroundColor: "#fddcc4",
    borderColor: "#fddcc4",
  },
}));

export default SliderButton;
