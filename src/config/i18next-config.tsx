import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next)
    .init({
    lng: 'es',
    resources: {
        es: {
          translation: {
                "general": {
                    title: "REFORESTA LORETO",
                    galery: "Galeria",
                    information: "Información",
                    logout: "Salir"
                },
                "navBar": {
                    title: "REFORESTANDO LORETO",
                    home: "Inicio",
                    aboutUs: "Acerca de nosotros",
                    blog: "Blog",
                    contact: "Contacto",
                    donation: "Donativo"
                },
                "home": {
                    socialBenefits: "INICIATIVAS PARA EL BENEFICIO SOCIAL", 
                    socialBenefitsDescription: "Fomento de iniciativas orientadas a crear o mejorar capacidades de producción de bienes o servicios bajo condiciones competitivas, rentables, sostenibles y sin efectos ambientales negativos significativos.",
                    readMore: "Leer más",
                    ourAllies: "Nuestros aliados en este procesos",
                    projects: "Proyectos",
                    lastProjects: "Últimos proyectos"
                },
                "sectionInformation": {
                    sectionA: "Aprovechamiento y reforestación con especies forestales de rápido crecimiento para producción de carbón vegetal ecológico (Especie capirona y otras de rápido crecimiento)",
                    sectionB: "Implementación de Biohuertos y uso de fitotoldos para producción de alimentos orgánicos.",
                    sectionC: "Aprovechamiento e instalación se sistemas agroforestales para producción, procesamiento y comercialización de súper alimentos como camu camu, huasai, ungurahui, sacha inchi, cocona, macambo, aguaje, para venta local, nacional e internacional.",
                    sectionD: "Aprovechamiento sostenible, procesamiento y comercialización de productos forestales no maderables como Palo Rosa, Sangre de Grado, Caucho, resinas, fibras,coloranes, para venta local, nacional e internacional",
                    sectionE: "Transferencia tecnológica e implementación de escuelas productivas (agrícola, forestal, avícola, acuícola) en la región.",
                    sectionF: "Desarrollo Plantaciones forestales con especies de alto valor comercial: caoba, cedro, shihuahuaco, andiroba, pali sangre, en tierras deforestadas."
                },
                "blog": {
                    title: "Blog de nuestros Proyectos"
                },
                "aboutUs": {
                    title: "Acerca de nosotros",
                    title2: "QUIENES SOMOS",
                    description: "Somos una organización peruana sin fines de lucro fundada en el departamento de Loreto, la región amazónica más extensa del Perú, una zona de extraordinaria biodiversidad que es afectada por los constantes problemas de tala ilegal, deforestación, agricultura migratoria. Actualmente promovemos la conservación y recuperación de especies forestales en peligro de extinción en 300 hectáreas de bosques, ubicados en el km 55 de la carretera Iquitos-Nauta, una zona muy afectada por la tala ilegal.",
                    missionTitle: "Misión",
                    missionDescription: "Conservar áreas de bosques vulnerables y promover la reforestación y recuperación de especies forestales amazónicas en peligro de extinción.",
                    vitionTitle: "Visión",
                    vitionDescription: "Ser una organización sin ánimo de lucro reconocida a nivel mundial por fomentar la conservación de bosques amazónicos y la reforestación con énfasis en especies forestales en peligro de extinción.",
                    ourWork: "Enterate de nuestro trabajo"
                },
                "contact": {
                    title: "Contacto",
                    talkWithUs: "Puedes hablar con nosotros",
                    name: "Nombre",
                    namePlaceholder: "Ingrese su nombre",
                    email: "Email",
                    message: "Mensaje",
                    send: "Enviar",
                    sending: "Enviando...",
                    contactUs: "¿Como puedes contactarnos?"
                },
                "footer": {
                    socialNetworks: "Redes sociales",
                    contact: "Contacto",
                    autor: "Desarrollado por Da&Da Servicios Tecnológico"
                },
                "login": {
                    user: "Usuario",
                    password: "Contraseña",
                    login: "Ingresar"
                },
                "notFound": {
                    notFound: "Lo sentimos! Esta sección no se encuentra disponible.",
                    goHome: "Regresar al Inicio"
                }
            }
        },
        en: {
            translation: {
                "general": {
                    title: "REFORESTA LORETO",
                    galery: "Galery",
                    information: "Information"
                },
                "navBar": {
                    title: "REFORESTANDO LORETO",
                    home: "Home",
                    aboutUs: "About us",
                    blog: "Blog",
                    contact: "Contact",
                    donation: "Donation"
                },
                "home": {
                    socialBenefits: "INITIATIVES FOR SOCIAL BENEFIT",
                    socialBenefitsDescription: "Fomento de iniciativas orientadas a crear o mejorar capacidades de producción de bienes o servicios bajo condiciones competitivas, rentables, sostenibles y sin efectos ambientales negativossignificativos.",
                    readMore: "Read more",
                    ourAllies: "Our allies in this process",
                    projects: "Projects",
                    lastProjects: "Last projects"
                },
                "sectionInformation": {
                    sectionA: "Aprovechamiento y reforestación con especies forestales de rápido crecimiento para producción de carbón vegetal ecológico (Especie capirona y otras de rápido crecimiento)",
                    sectionB: "Implementación de Biohuertos y uso de fitotoldos para producción de alimentos orgánicos.",
                    sectionC: "Aprovechamiento e instalación se sistemas agroforestales para producción, procesamiento y comercialización de súper alimentos como camu camu, huasai, ungurahui, sacha inchi, cocona, macambo, aguaje, para venta local, nacional e internacional.",
                    sectionD: "Aprovechamiento sostenible, procesamiento y comercialización de productos forestales no maderables como Palo Rosa, Sangre de Grado, Caucho, resinas, fibras,coloranes, para venta local, nacional e internacional",
                    sectionE: "Transferencia tecnológica e implementación de escuelas productivas (agrícola, forestal, avícola, acuícola) en la región.",
                    sectionF: "Desarrollo Plantaciones forestales con especies de alto valor comercial: caoba, cedro, shihuahuaco, andiroba, pali sangre, en tierras deforestadas."
                },
                "blog": {
                    title: "Blog of our Projects"
                },
                "aboutUs": {
                    title: "ABOUT US",
                    title2: "About Us",
                    description: "",
                    missionTitle: "Misition",
                    missionDescription: "",
                    vitionTitle: "Visition",
                    vitionDescription: "",
                    ourWork: "Find out about our work"
                },
                "contact": {
                    title: "Contact",
                    talkWithUs: "You can talk to us",
                    name: "Name",
                    namePlaceholder: "Enter your name",
                    email: "Email",
                    message: "Message",
                    send: "Send",
                    sending: "Sending...",
                    contactUs: "How can you contact us?"
                },
                "footer": {
                    socialNetworks: "social networks",
                    contact: "Contact",
                    autor: "Developed by Da&Da Servicios Tecnológico"
                },
                "login": {
                    user: "User",
                    password: "Password",
                    login: "Login"
                },
                "notFound": {
                    notFound: "We're sorry! This section is not available.",
                    goHome: "Go to home",
                    logout: "Logout"
                }
            }
        }
    }
});