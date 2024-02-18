import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  successToast: (message: string) => void;
  errorToast: (message: string) => void;
}

const useCommonToast = (): ToastProps => {
  const successToast = (message: string) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "colored",
    });
  };

  const errorToast = (message: string) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "colored",
    });
  };

  return {
    successToast,
    errorToast,
  };
};

export default useCommonToast;
