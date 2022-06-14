import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthCtx } from "../contexts";
const SignInPage = () => {

  const { t } = useTranslation();
  let location = useLocation();
  let navigate = useNavigate();
  let state = location.state as any | undefined;
  let from = state?.from?.pathname || "/admin";

  const { login, loading, user } = useContext(AuthCtx);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(()=>{
    if(user && !loading){
      navigate(from, { replace: true });
    }
  },[from, loading, navigate, user])

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handlePasswordValueChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleEmailValueChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <FormControl variant="outlined" sx={{ width: "250px" }}>
        <InputLabel htmlFor="outlined-adornment-email">
          { t('login.user') }
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          type="text"
          value={email}
          label="text"
          sx={{ marginBottom: "20px" }}
          onChange={handleEmailValueChange}
        ></OutlinedInput>
      </FormControl>
      <FormControl variant="outlined" sx={{ width: "250px" }}>
        <InputLabel htmlFor="outlined-adornment-password">
          { t('login.password') }
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordValueChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        <Button
          sx={{ marginTop: "20px" }}
          variant="outlined"
          onClick={handleLogin}
        >
          { t('login.login') }
        </Button>
      </FormControl>
    </div>
  );
};
export default SignInPage;
