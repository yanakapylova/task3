import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const PrimaryButton: any = styled(Button)<ButtonProps>(({ theme }) => ({
  fontFamily: "Georgia, Times New Roman, Times, serif",
  fontSize: 17,
  letterSpacing: "0.06rem",
  lineHeight: 1.3,
  textTransform: "none",
  backgroundColor: "#f1cdb3",
  padding: "15px 45px",
  borderRadius: "100px",
  color: "#292929",
  boxShadow: "none",
  alignSelf: "self-start",
  width: 300,
  "&:hover": {
    backgroundColor: "#fddcc4",
  },
}));

export default PrimaryButton;
