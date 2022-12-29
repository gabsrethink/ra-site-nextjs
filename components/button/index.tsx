import style from "./button.module.css";
import { GitHub } from "@mui/icons-material";

type ButtonWithIconProps = {
  //type: "black" | "green";
  onClick?: () => void;
};

const ButtonWithIcon = ({
  // type,
  onClick,
}: ButtonWithIconProps) => {
  return (
    <button onClick={onClick} className={style.button}>
      <GitHub /> Acesse o Github do projeto
    </button>
  );
};

export default ButtonWithIcon;
