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
        pauseOnHover={false}
        theme="dark"
      />
    </BrowserRouter>
  );
}
