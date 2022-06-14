import { useContext, useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import SideBar from "../components/SideBar";
import MenuIcon from "@mui/icons-material/Menu";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthCtx } from "../contexts";
import { useTranslation } from "react-i18next";
const SecurePage = ({ children }: { children: JSX.Element }) => {
  const { t } = useTranslation();
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  let navigate = useNavigate();
  const { user, logout,  authorized } = useContext(AuthCtx);

  const renderData = () => {
    if (!authorized && !user) {
      return <Navigate to="/login" replace />;
    }
    else{
      return (
        <>
          <Box sx={{ flexGrow: 1 }}>
            {showSideBar && <SideBar setShowSideBar={setShowSideBar} />}
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon onClick={() => setShowSideBar(true)} />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  { t('general.title') }
                </Typography>
                <Button color="inherit" onClick={
                  ()=>{
                    logout();
                    navigate("/login", { replace: true });
                  }}>
                  { t('general.logout') }
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Container
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              maxWidth: 1000,
            }}
          >
            {children}
          </Container>
        </>
      );
    }
  };

  return <>{renderData()}</>;
};

export default SecurePage;
