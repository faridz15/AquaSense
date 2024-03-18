import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Deskripsi from './pages/Deskripsi';
import DataMonitoringAlat from './pages/Monitoring';


const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/about', component: <About /> },
  { path: '/contact', component: <Contact /> },
  { path: '/deskripsi', component: <Deskripsi /> },
  { path: '/DataMonitoringAlat', component: <DataMonitoringAlat /> },
];

export default routes;