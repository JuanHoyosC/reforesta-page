import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";


interface NavTitleProps{
    children?: any;
    className?:string;
}

const NavTitle: FC<NavTitleProps> = ({ children,className }) => {
  return (
    <div role="presentation" className={className ? className :"my-3"}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/admin">
          <Typography color="text.primary">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Inicio
          </Typography>
        </Link>
        {children}
      </Breadcrumbs>
    </div>
  );
};

export default NavTitle;
