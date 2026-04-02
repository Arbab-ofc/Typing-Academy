import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/AppRoutes';
import AcademyProvider from './components/common/AcademyProvider';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <AcademyProvider>
        <AppRoutes />
      </AcademyProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={2200}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        className="lux-toast-container"
        toastClassName={() => 'lux-toast'}
        bodyClassName={() => 'lux-toast-body'}
        theme="light"
      />
    </BrowserRouter>
  );
}
