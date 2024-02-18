import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProviderProps {
  children: JSX.Element;
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
      {children}
    </>
  );
};

export default ToastProvider;
