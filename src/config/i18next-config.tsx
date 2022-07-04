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
                    spanish: "Español",
                    reading: "Continuar leyendo >>",
                    projectTitle: "Título del proyecto"
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
                    sectionA: "Aprovechamiento y reforestación con especies forestales de rápido crecimiento para producción de carbón vegetal ecológico (Especie capirona y otras de rápido crecimiento).",
                    sectionB: "Implementación de Biohuertos y uso de fitotoldos para producción de alimentos orgánicos.",
                    sectionC: "Aprovechamiento e instalación se sistemas agroforestales para producción, procesamiento y comercialización de súper alimentos como camu camu, huasai, ungurahui, sacha inchi, cocona, macambo, aguaje, para venta local, nacional e internacional.",
                    sectionD: "Aprovechamiento sostenible, procesamiento y comercialización de productos forestales no maderables como Palo Rosa, Sangre de Grado, Caucho, resinas, fibras,coloranes, para venta local, nacional e internacional.",
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
                        titleTable: "Título",
                        imageTable: "Imagen",
                        actionTable: "Acción",
                        id: "Id"
                    },
                    "slider": {
                        addSlider: "Añadir slider",
                        editSlider: "Edit slider",
                        id: "Id",
                        imageTable: "Imagen",
                        titleTable: "Título",
                        descriptionTable: "Descripción",
                        actionsTable: "Acciones",
                        mainImage: "Imagen destacada",
                        chooseImage: "Seleccione una imagen",
                        save: "GUARDAR",
                        delete: "Borrar",
                        edit: "Editar"
                    },
                    "socios": {
                        addImages: "AÑADIR IMAGENES",
                        id: "Id",
                        imageTable: "Imagen",
                        actionsTable: "Acciones",
                        delete: "Borrar",
                        addSocios: "Añadir socios",
                        add: "Añadir"
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
                        email: "Correo",
                        phone: "Teléfono",
                        address: "Dirección",
                        contacts: "Contactos",
                        enterAContact: "Ingrese dato de contacto",
                        title: "Título",
                        url: "Enlace de contacto",
                        select: "Seleccione el tipo de contacto a crear",
                        save: "Guardar"
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
                        titleTable: "Título",
                        actionsTable: "Acciones",
                        delete: "Borrar",
                        edit: "Editar",
                        projects: "Proyectos",
                        add: "Añadir",
                        mainImage: "Imagen destacada",
                        save: "Guardar",
                        content: "Contenido"
                    },
                    "galery": {
                        addImage: "Añadir imagen",
                        id: "Id",
                        imageTable: "Imagen",
                        actionsTable: "Accuibes",
                        delete: "Borrar",
                        upload: "Subir imagen",
                        add: "Añadir imagen",
                        galery: "Galería de imagenes"
                    },
                    "users": {
                        newUser: "Nuevo Usuario",
                        id: "Id",
                        userTable: "Usuario",
                        actionsTable: "Acciones",
                        delete: "Borrar",
                        edit: "Editar",
                        user: "Usuario",
                        addUser: "Añadir usuario",
                        editUser: "Editar usuario",
                        userNoRegister: "Usuario no registrado!",
                        userRegister: "Usuario registrado con éxito!",
                        save: "Guardar",
                        saveChanges: "Guardar cambios",
                        password: "Contraseña"
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
                    spanish: "Spanish",
                    reading: "Continue reading >>",
                    projectTitle: "Title of the project"
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
                    socialBenefitsDescription: "Promotion of initiatives aimed at creating or improving production capacities for goods or services under competitive, profitable, sustainable conditions and without significant negative environmental effects.",
                    readMore: "Read more",
                    ourAllies: "Our allies in this process",
                    projects: "Projects",
                    lastProjects: "Last projects"
                },
                "sectionInformation": {
                    sectionA: "Exploitation and reforestation with fast-growing forest species for the production of ecological charcoal (Capirona species and other fast-growing species).",
                    sectionB: "Implementation of bio-gardens and use of phyto-toldos for the production of organic food.",
                    sectionC: "Use and installation of agroforestry systems for the production, processing and marketing of super foods such as camu camu, huasai, ungurahui, sacha inchi, cocona, macambo, aguaje, for local, national and international sale.",
                    sectionD: "Sustainable use, processing and marketing of non-timber forest products such as Palo Rosa, Sangre de Grado, Rubber, resins, fibers, dyes, for local, national and international sale.",
                    sectionE: "Technology transfer and implementation of productive schools (agricultural, forestry, poultry, aquaculture) in the region.",
                    sectionF: "Development Forest plantations with species of high commercial value: mahogany, cedar, shihuahuaco, andiroba, pali sangre, on deforested lands."
                },
                "blog": {
                    title: "Blog of our Projects"
                },
                "aboutUs": {
                    title: "ABOUT US",
                    title2: "About Us",
                    description: "We are a Peruvian non-profit organization founded in the department of Loreto, the largest Amazon region in Peru, an area of ​​extraordinary biodiversity that is affected by the constant problems of illegal logging, deforestation, and migratory agriculture. We currently promote the conservation and recovery of forest species in danger of extinction in 300 hectares of forests. Located at km 55 of the Iquitos-Nauta highway, an area highly affected by illegal logging.",
                    missionTitle: "Mission",
                    missionDescription: "Conserve vulnerable forest areas and promote reforestation and recovery of endangered Amazon Rainforest species.",
                    vitionTitle: "Visition",
                    vitionDescription: "To be a non-profit organization recognized worldwide for promoting the conservation of Amazon forests and reforestation with an emphasis on forest species in danger of extinction.",
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
                        addSlider: "Add slider",
                        editSlider: "Edit slider",
                        id: "id",
                        imageTable: "Image",
                        titleTable: "Title",
                        save: "Save",
                        descriptionTable: "Descriptión",
                        actionsTable: "Actions",
                        mainImage: "Featured image",
                        chooseImage: "Choose an image",
                        delete: "Delete",
                        edit: "Edit"
                    },
                    "socios": {
                        addImages: "ADD IMAGES",
                        id: "Id",
                        imageTable: "Image",
                        actionsTable: "Actions",
                        delete: "Delete",
                        add: "Add",
                        addSocios: "Add socios",
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
                        email: "Email",
                        phone: "Phone",
                        address: "Address",
                        contacts: "Contacts",
                        enterAContact: "Enter contact information",
                        title: "Title",
                        url: "contact link",
                        select: "Select the type of contact to create",
                        save: "Save"
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
                        edit: "Edit",
                        projects: "Projects",
                        add: "Add",
                        mainImage: "Featured image",
                        save: "Save",
                        content: "Content"
                    },
                    "galery": {
                        addImage: "Add image",
                        id: "Id",
                        imageTable: "Image",
                        actionsTable: "Actions",
                        delete: "Delete",
                        upload: "Upload Image",
                        add: "Add image",
                        galery: "image gallery"
                    },
                    "users": {
                        newUser: "Ner User",
                        id: "Id",
                        userTable: "User",
                        actionsTable: "Actions",
                        delete: "Delete",
                        edit: "Edit",
                        user: "User",
                        addUser: "Add user",
                        editUser: "Edit User",
                        userNoRegister: "Unregistered user!",
                        userRegister: "Registered user successfully!",
                        save: "Save",
                        saveChanges: "Save chages",
                        password: "Password"
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