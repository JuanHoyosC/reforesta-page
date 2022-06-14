import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
const SectionInformation = () => {

  const informationList = [
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: `Aprovechamiento y reforestación con especies forestales de rápido crecimiento para producción de carbón vegetal ecológico (Especie capirona y otras de rápido crecimiento)`},
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: `Implementación de Biohuertos y uso de fitotoldos para producción de alimentos orgánicos.`},
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: `Aprovechamiento e instalación se sistemas agroforestales para producción, procesamiento y comercialización de súper alimentos como camu camu, huasai, ungurahui, sacha inchi, cocona, macambo, aguaje, para venta local, nacional e internacional.`},
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: `Aprovechamiento sostenible, procesamiento y comercialización de productos forestales no maderables como Palo Rosa, Sangre de Grado, Caucho, resinas, fibras,coloranes, para venta local, nacional e internacional`},
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: `Transferencia tecnológica e implementación de escuelas productivas (agrícola, forestal, avícola, acuícola) en la región.`},
    {icon: <CrisisAlertIcon className="scale-150 item-center group-hover:text-white" />, text: `Desarrollo Plantaciones forestales con especies de alto valor comercial: caoba, cedro, shihuahuaco, andiroba, pali sangre, en tierras deforestadas.`}

  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mb-10 divide-y md:divide-y-0 md:divide-x  divide-x">
      {informationList.map((info, index)=>(
        <div className="p-10 grid justify-items-center group hover:bg-teal-800" key={index}>
          {info.icon}
          <p className="text-center group-hover:text-white ">
            {info.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionInformation;
