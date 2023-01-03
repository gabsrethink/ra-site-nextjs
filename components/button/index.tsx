import style from "./button.module.css";
import { GitHub } from "@mui/icons-material";

type ButtonWithIconProps = {
  url?: any;
  type?: "black" | "green";
};

const ButtonWithIcon = ({ type, url }: ButtonWithIconProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={type === "green" ? style.button_green : style.button}
      href={url}
    >
      <GitHub /> Acesse o Github do projeto
    </a>
  );
};

export default ButtonWithIcon;
