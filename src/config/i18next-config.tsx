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
                    galery: "Galería",
                    information: "Información",
                    logout: "Salir",
                    english: "Inglés",
                    spanish: "Español"
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
                "admin": {
                    "navBar": {
                        main: "Principal",
                        home: "Inicio",
                        slider: "Slider",
                        socios: "Socios",
                        information: "Información",
                        socialNetworks: "Redes sociales",
                        contact: "Contacto",
                        donation: "Donación",
                        map: "Mapa",
                        admin: "Admin",
                        projects: "Proyectos",
                        galery: "Galería de imagenes",
                        users: "Usuarios"
                    },
                    "main": {
                        title: "Inicio",
                        totalSlider: "TOTAL SLIDERS",
                        totalGalery: "TOTAL IMAGENES EN GALLERIA",
                        totalProjects: "TOTAL PROYECTOS",
                        totalSocios: "TOTAL DE SOCIOS",
                        lastProjects: "últimos proyectos",
                        lastImages: "últimas imagenes de la galería",
                        titleTable: "Titulo",
                        imageTable: "Imagen",
                        actionTable: "Acción",
                        id: "Id"
                    },
                    "slider": {
                        addSlider: "AÑADIR SLIDER",
                        id: "Id",
                        imageTable: "Imagen",
                        titleTable: "Titulo",
                        descriptionTable: "Descripción",
                        actionsTable: "Acciones",
                        delete: "Borrar",
                        edit: "Editar"
                    },
                    "socios": {
                        addImages: "AÑADIR IMAGENES",
                        id: "Id",
                        imageTable: "Imagen",
                        actionsTable: "Acciones",
                        delete: "Delete",
                        add: "Add"
                    },
                    "socialNetworks": {
                        url: "Ingrese la URL de la red social",
                        save: "GUARDAR CAMBIOS",
                        disabled: "Haga clic para activar o desactivar esta red social!"
                    },
                    "contact": {
                        addContact: "Añadir nuevo contacto",
                        id: "Id",
                        typeTable: "Tipo",
                        descriptionTable: "Descripción",
                        actionsTable: "Acciones",
                        delete: "Borrar",
                        edit: "Editar",
                        email: "Correo"
                    },
                    "donation": {
                        content: "Contenido",
                        save: "Guardar"
                    },
                    "map": {
                        save: "Guardar"
                    },
                    "projects": {
                        addProject: "Añadir Proyecto",
                        id: "Id",
                        imageTable: "Imagen",
                        titleTable: "Titulo",
                        actionsTable: "Acciones",
                        delete: "Borrar",
                        edit: "Editar"
                    },
                    "galery": {
                        addImage: "Añadir imagen",
                        id: "Id",
                        imageTable: "Imagen",
                        actionsTable: "Accuibes",
                        delete: "Borrar",
                    },
                    "users": {
                        newUser: "Nuevo Usuario",
                        id: "Id",
                        userTable: "Usuario",
                        actionsTable: "Acciones",
                        delete: "Borrar",
                        edit: "Editar"
                    }
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
                    logout: "Logout",
                    information: "Information",                    
                    english: "English",
                    spanish: "Spanish"
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
                "admin": {
                    "navBar": {
                        main: "Main",
                        home: "Home",
                        slider: "Slider",
                        socios: "Partners",
                        information: "Information",
                        socialNetworks: "social networks",
                        contact: "Contact",
                        donation: "Donation",
                        map: "Map",
                        admin: "Admin",
                        projects: "Projects",
                        galery: "Image gallery",
                        users: "Users"
                    },
                    "main": {
                        title: "Main",
                        totalSlider: "TOTAL SLIDERS",
                        totalGalery: "TOTAL IMAGES IN GALLERY",
                        totalProjects: "TOTAL PROJECTS",
                        totalSocios: "TOTAL PARTNERS",
                        lastProjects: "Last projects",
                        lastImages: "Latest Gallery Images",
                        titleTable: "Title",
                        imageTable: "Image",
                        actionTable: "Action",
                        id: "id"
                    },
                    "slider": {
                        addSlider: "ADD SLIDER",
                        id: "id",
                        imageTable: "Image",
                        titleTable: "Title",
                        descriptionTable: "Descriptión",
                        actionsTable: "Actions",
                        delete: "Delete",
                        edit: "Edit"
                    },
                    "socios": {
                        addImages: "ADD IMAGES",
                        id: "Id",
                        imageTable: "Image",
                        actionsTable: "Actions",
                        delete: "Delete",
                        add: "Add"
                    },
                    "socialNetworks": {
                        url: "Enter social network url",
                        save: "SAVE CHANGES",
                        disabled: "Click to activate or deactivate this social network!"
                    },
                    "contact": {
                        addContact: "Add new contact",
                        id: "Id",
                        typeTable: "Type",
                        descriptionTable: "Description",
                        actionsTable: "Actions",
                        delete: "Delete",
                        edit: "Edit",
                        email: "Email"
                    },
                    "donation": {
                        content: "Content",
                        save: "Save"
                    },
                    "map": {
                        save: "Save"
                    },
                    "projects": {
                        addProject: "Add project",
                        id: "Id",
                        imageTable: "Image",
                        titleTable: "Title",
                        actionsTable: "Actions",
                        delete: "Delete",
                        edit: "Edit"
                    },
                    "galery": {
                        addImage: "Add image",
                        id: "Id",
                        imageTable: "Image",
                        actionsTable: "Actions",
                        delete: "Delete",
                    },
                    "users": {
                        newUser: "Ner User",
                        id: "Id",
                        userTable: "User",
                        actionsTable: "Actions",
                        delete: "Delete",
                        edit: "Edit"
                    }
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