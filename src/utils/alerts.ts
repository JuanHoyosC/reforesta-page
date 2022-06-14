import Swal from "sweetalert2";

export const succesAlert = () => {
  return Swal.fire({
    icon: "success",
    title: "Operación lograda con exito!",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const successDeleted = () =>{
  return Swal.fire({
    icon: "success",
    title: "Eliminado con exito!",
    showConfirmButton: false,
    timer: 1500,
  });
}

export const errorMessage = () =>{
  return Swal.fire({
    icon: "error",
    title: "No se pudo completar esta operación",
    showConfirmButton: false,
    timer: 1500,
  });
}

export const warningMessage = (msg: string) =>{
  return Swal.fire({
    icon: "warning",
    title: msg,
    showConfirmButton: false,
    timer: 1500
  });
}

export const confirmAlert = () => {
    return Swal.fire({
      icon: "warning",
      title: "¿Desea borrar este elemento?",
      showDenyButton: true,
      denyButtonText: 'No',
      confirmButtonText: 'Si'
    });
};
