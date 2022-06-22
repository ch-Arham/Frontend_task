import { toast } from "react-toastify";

export const notifyError = (msg) =>
  toast.error(msg, {
    theme: "light",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  export const notifySuccess = (msg) =>
  toast.success(msg, {
    theme: "light",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });