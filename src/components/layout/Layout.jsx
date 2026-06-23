import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from '../shared/Footer';


export default function Layout() {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Navbar />

      <main className="flex-1 bg-white">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
