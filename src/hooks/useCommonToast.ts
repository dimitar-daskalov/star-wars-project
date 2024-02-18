import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
}

const useCommonToast = (): ToastProps => {
  const showSuccess = (message: string) => {
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

  const showError = (message: string) => {
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
    showSuccess,
    showError,
  };
};

export default useCommonToast;
