import { FC } from "react";

import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShareIcon from "@mui/icons-material/Share";
import VerticalSplitOutlinedIcon from "@mui/icons-material/VerticalSplitOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SubMenuItems {
  icon: React.ReactNode;
  title: string;
  extraInformation?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  url?: string;
}

interface MenuItems {
  title: string;
  submenuList?: SubMenuItems[];
  url?: string;
}

export const SideBar: FC<SidebarProps> = ({ setShowSideBar }) => {
  let navigate = useNavigate();
  const Menu: MenuItems[] = [
    {
      title: "Principal",
      submenuList: [
        { icon: <HomeOutlinedIcon />, title: "Inicio", url: "/admin" },
        { icon: <BoltOutlinedIcon />, title: "Slider", url: "/admin/slider" },
        { icon: <NoteOutlinedIcon />, title: "Socios", url: "/admin/socios" },
      ],
    },
    {
      title: "Información",
      submenuList: [
        {
          icon: <AccountCircleOutlinedIcon />,
          title: "Redes sociales",
          url: "/admin/redes-sociales",
        },
        {
          icon: <AccountCircleOutlinedIcon />,
          title: "Contacto",
          url: "/admin/contacto",
        },{
          icon: <AccountCircleOutlinedIcon />,
          title: "Donacion",
          url: "/admin/donacion",
        },{
          icon: <FmdGoodIcon />,
          title: "Mapa",
          url: "/admin/mapa",
        }
      ],
    },
    {
      title: "ADMIN",
      submenuList: [
        {
          icon: <VerticalSplitOutlinedIcon />,
          title: "Proyectos",
          url: "/admin/proyectos",
        },
        {
          icon: <ShareIcon />,
          title: "Galeria de imagenes",
          url: "/admin/galeria-imagenes",
        },
        {
          icon: <AccountCircleOutlinedIcon />,
          title: "Usuarios",
          url: "/admin/usuarios",
        },
        // { icon: <SettingsIcon />, title: "Configuración", url:"/admin/configuracion" }
      ],
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        width: "25%",
        height: "100vh",
        paddingBottom: "20px",
        backgroundColor: "white",
        boxShadow: "0px 0px 15px rgba(34, 35, 63, 0.1)",
        overflowY: "scroll",
        "@media (max-width: 900px)": {
          width: "63%",
        },
        zIndex: "20",
      }}
    >
      <Box
        className="header-sidebar"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <IconButton aria-label="delete" onClick={() => setShowSideBar(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {Menu.map((menuItem, index) => {
          return (
            <div key={menuItem.title + index}>
              <ListSubheader sx={{ bgcolor: "background.paper" }}>
                {menuItem.title}
              </ListSubheader>
              <div>
                {menuItem.submenuList?.map((submenuItem, index) => {
                  return (
                    <ListItemButton
                      key={submenuItem.title + index}
                      onClick={() => {
                        navigate("" + submenuItem.url, { replace: true });
                      }}
                    >
                      <ListItemIcon>{submenuItem.icon}</ListItemIcon>
                      <ListItemText primary={submenuItem.title} />
                    </ListItemButton>
                  );
                })}
              </div>
            </div>
          );
        })}
      </List>
    </Box>
  );
};

export default SideBar;
