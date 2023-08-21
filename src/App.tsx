import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import React from 'react';

const Home = React.lazy(() => import('./Pages/Home'));
const About = React.lazy(() => import('./Pages/About'));
const Services = React.lazy(() => import('./Pages/Services'));
const PetRegister = React.lazy(() => import('./Pages/Auth/PetRegister'));
const Login = React.lazy(() => import('./Pages/Auth/Login'));
const Register = React.lazy(() => import('./Pages/Auth/Register'));
const AllServices = React.lazy(() => import('./Pages/OutServices'));
const NoPage = React.lazy(() => import('./Pages/Misc/NoPage'));

const fallback = <h1>Loading...</h1>

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={fallback}  >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="petregister" element={<PetRegister />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="all-services" element={<AllServices />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;