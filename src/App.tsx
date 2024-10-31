import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MultiStepForm from "./components/MultiStepForm";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registration" element={<MultiStepForm />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;