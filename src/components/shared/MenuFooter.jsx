import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';

export default function MenuFooter() {
  return (
    <div className="bg-primary py-10">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-6 text-white md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">Menú</h3>

          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="transition-colors duration-200 hover:text-accent"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="transition-colors duration-200 hover:text-accent"
              >
                Productos
              </Link>
            </li>

            <li>
              <Link
                to="/shoppingcard"
                className="transition-colors duration-200 hover:text-accent"
              >
                Carrito
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-white">Acerca de</h3>

          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="transition-colors duration-200 hover:text-accent"
              >
                Emarket
              </Link>
            </li>

            <li>
              <Link
                to="/about#Market"
                className="transition-colors duration-200 hover:text-accent"
              >
                ¿Qué es Emarket?
              </Link>
            </li>

            <li>
              <Link
                to="/about#Objetivos"
                className="transition-colors duration-200 hover:text-accent"
              >
                Objetivos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-white">Síguenos</h3>

          <div className="flex gap-4 text-3xl">
            <a
              href="#"
              aria-label="Instagram"
              className="transition-transform duration-200 hover:scale-110 hover:text-accent"
            >
              <FaInstagramSquare />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="transition-transform duration-200 hover:scale-110 hover:text-accent"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="transition-transform duration-200 hover:scale-110 hover:text-accent"
            >
              <FaFacebookSquare />
            </a>

            <a
              href="#"
              aria-label="GitHub"
              className="transition-transform duration-200 hover:scale-110 hover:text-accent"
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-white">Contacto</h3>

          <p className="mb-3">
            Contáctame por WhatsApp:
          </p>

          <div className="flex items-center gap-2">
            <FaWhatsappSquare className="text-2xl text-green-400" />

            <span>(55) 55-5252-2525</span>
          </div>
        </div>
      </div>
    </div>
  );
}