import BasicWebLayuout from "./pages/BasicWebLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import SignInPage from "./pages/SignInPage";
import SecurePage from "./pages/SecurePage";
import Dashboard from "./pages/Admin/Dashboard";
import { AuthProvider } from "./AuthProvider";
import SliderPage from "./pages/Admin/SliderPage/SliderPage";
import PartnerPage from "./pages/Admin/PartnerPage/PartnerPage";
import HomePage from "./pages/Web/HomePage";
import AboutUsPage from "./pages/Web/AboutUsPage";
import ContactPage from "./pages/Web/ContactPage";
import ProjectPage from "./pages/Web/ProjectPage";
import Users from "./pages/Admin/Users/Users";
import { FormUser } from "./pages/Admin/Users/FormUser";
import GalleryPage from "./pages/Admin/Gallery/GalleryPage";
import FormImage from "./pages/Admin/Gallery/FormImage";
import FormPartner from "./pages/Admin/PartnerPage/FormPartner";
import SocialNetwork from "./pages/Admin/SocialNetwork/SocialNetwork";
import ContactPageAdmin from "./pages/Admin/ContactPageAdmin/ContactPageAdmin";
import ProjectPageAdmin from "./pages/Admin/Project/ProjectPageAdmin";
import FormProject from "./pages/Admin/Project/FormProject";
import FormContactAdmin from "./pages/Admin/ContactPageAdmin/FormContactAdmin";
import FormSlider from "./pages/Admin/SliderPage/FormSlider";
import SinglePost from "./pages/Web/SinglePost";
import DonationAdmin from "./pages/Admin/DonationAdmin";
import Donations from "./components/Donations";
import MapaPage from "./pages/Admin/MapaPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* ////                          WEB SECTION                           //// */}
          {/* //////////////////////////////////////////////////////////////////////// */}
          <Route
            path=""
            element={
              <BasicWebLayuout>
                <HomePage />
              </BasicWebLayuout>
            }
          />
          <Route
            path="/acerca-de-nosotros"
            element={
              <BasicWebLayuout>
                <AboutUsPage />
              </BasicWebLayuout>
            }
          />
          <Route
            path="/blog"
            element={
              <BasicWebLayuout>
                <ProjectPage />
              </BasicWebLayuout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <BasicWebLayuout>
                <SinglePost />
              </BasicWebLayuout>
            }
          />
          <Route
            path="/contacto"
            element={
              <BasicWebLayuout>
                <ContactPage />
              </BasicWebLayuout>
            }
          />
          <Route
            path="/donativos"
            element={
              <BasicWebLayuout>
                <Donations />
              </BasicWebLayuout>
            }
          />
          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* ////                         ADMIN SECTION                          //// */}
          {/* //////////////////////////////////////////////////////////////////////// */}
          <Route path="/login" element={<SignInPage />} />
          <Route
            path="/admin"
            element={
              <SecurePage>
                <Dashboard />
              </SecurePage>
            }
          />
          <Route
            path="/admin/slider"
            element={
              <SecurePage>
                <SliderPage />
              </SecurePage>
            }
          />
          <Route
            path="/admin/slider/add"
            element={
              <SecurePage>
                <FormSlider />
              </SecurePage>
            }
          />
          <Route
            path="/admin/slider/:id"
            element={
              <SecurePage>
                <FormSlider />
              </SecurePage>
            }
          />
          <Route
            path="/admin/socios"
            element={
              <SecurePage>
                <PartnerPage />
              </SecurePage>
            }
          />
          <Route
            path="/admin/socios/add"
            element={
              <SecurePage>
                <FormPartner />
              </SecurePage>
            }
          />
          <Route
            path="/admin/redes-sociales"
            element={
              <SecurePage>
                <SocialNetwork />
              </SecurePage>
            }
          />
          <Route
            path="/admin/donacion"
            element={
              <SecurePage>
                <DonationAdmin />
              </SecurePage>
            }
          />
          <Route
            path="/admin/contacto"
            element={
              <SecurePage>
                <ContactPageAdmin />
              </SecurePage>
            }
          />
          <Route
            path="/admin/contacto/add"
            element={
              <SecurePage>
                <FormContactAdmin />
              </SecurePage>
            }
          />
          <Route
            path="/admin/contacto/:id"
            element={
              <SecurePage>
                <FormContactAdmin />
              </SecurePage>
            }
          />
          <Route
            path="/admin/mapa"
            element={
              <SecurePage>
                <MapaPage />
              </SecurePage>
            }
          />
          <Route
            path="/admin/proyectos"
            element={
              <SecurePage>
                <ProjectPageAdmin />
              </SecurePage>
            }
          />
          <Route
            path="/admin/proyectos/add"
            element={
              <SecurePage>
                <FormProject />
              </SecurePage>
            }
          />
          <Route
            path="/admin/proyectos/:id"
            element={
              <SecurePage>
                <FormProject />
              </SecurePage>
            }
          />
          <Route
            path="/admin/usuarios"
            element={
              <SecurePage>
                <Users />
              </SecurePage>
            }
          />
          <Route
            path="/admin/usuarios/add"
            element={
              <SecurePage>
                <FormUser />
              </SecurePage>
            }
          />
          <Route
            path="/admin/usuarios/:id"
            element={
              <SecurePage>
                <FormUser />
              </SecurePage>
            }
          />
          <Route
            path="/admin/galeria-imagenes"
            element={
              <SecurePage>
                <GalleryPage />
              </SecurePage>
            }
          />
          <Route
            path="/admin/galeria-imagenes/add"
            element={
              <SecurePage>
                <FormImage />
              </SecurePage>
            }
          />
          <Route
            path="/admin/galeria-imagenes/:id"
            element={
              <SecurePage>
                <FormImage />
              </SecurePage>
            }
          />
          <Route
            path="*"
            element={
              <BasicWebLayuout>
                <PageNotFound />
              </BasicWebLayuout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
