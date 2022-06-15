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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  let navigate = useNavigate();
  const Menu: MenuItems[] = [
    {
      title: t('admin.navBar.main'),
      submenuList: [
        { icon: <HomeOutlinedIcon />, title: t('admin.navBar.home'), url: "/admin" },
        { icon: <BoltOutlinedIcon />, title: t('admin.navBar.slider'), url: "/admin/slider" },
        { icon: <NoteOutlinedIcon />, title: t('admin.navBar.socios'), url: "/admin/socios" },
      ],
    },
    {
      title: t('admin.navBar.information'),
      submenuList: [
        {
          icon: <AccountCircleOutlinedIcon />,
          title: t('admin.navBar.socialNetworks'),
          url: "/admin/redes-sociales",
        },
        {
          icon: <AccountCircleOutlinedIcon />,
          title: t('admin.navBar.contact'),
          url: "/admin/contacto",
        },{
          icon: <AccountCircleOutlinedIcon />,
          title: t('admin.navBar.donation'),
          url: "/admin/donacion",
        },{
          icon: <FmdGoodIcon />,
          title: t('admin.navBar.map'),
          url: "/admin/mapa",
        }
      ],
    },
    {
      title: t('admin.navBar.admin'),
      submenuList: [
        {
          icon: <VerticalSplitOutlinedIcon />,
          title: t('admin.navBar.projects'),
          url: "/admin/proyectos",
        },
        {
          icon: <ShareIcon />,
          title: t('admin.navBar.galery'),
          url: "/admin/galeria-imagenes",
        },
        {
          icon: <AccountCircleOutlinedIcon />,
          title: t('admin.navBar.users'),
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
