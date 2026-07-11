import { FaReact } from 'react-icons/fa';
import {
  SiAxios,
  SiReactrouter,
  SiReactquery,
} from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { GrToast } from 'react-icons/gr';
import { TbApi, TbBrandVite } from 'react-icons/tb';
import { FaHelmetSafety } from 'react-icons/fa6';
import { SiCreatereactapp } from 'react-icons/si';

export default function About() {
  const technologies = [
    {
      icon: <FaReact className="text-sky-500 text-4xl" />,
      title: 'React',
      description: 'Biblioteca principal del proyecto.',
    },
    {
      icon: <SiReactrouter className="text-red-500 text-4xl" />,
      title: 'React Router',
      description: 'Navegación SPA.',
    },
    {
      icon: <SiReactquery className="text-pink-500 text-4xl" />,
      title: 'React Query',
      description: 'Gestión de peticiones y caché.',
    },
    {
      icon: <SiAxios className="text-violet-500 text-4xl" />,
      title: 'Axios',
      description: 'Consumo de la API.',
    },
    {
      icon: <RiTailwindCssFill className="text-cyan-500 text-4xl" />,
      title: 'Tailwind CSS',
      description: 'Diseño responsive.',
    },
    {
      icon: <GrToast className="text-orange-500 text-4xl" />,
      title: 'React Hot Toast',
      description: 'Notificaciones.',
    },
    {
      icon: <FaHelmetSafety className="text-green-600 text-4xl" />,
      title: 'React Helmet Async',
      description: 'SEO básico.',
    },
    {
      icon: <SiCreatereactapp className="text-gray-700 text-4xl" />,
      title: 'React Icons',
      description: 'Iconografía.',
    },
    {
      icon: <TbApi className="text-emerald-500 text-4xl" />,
      title: 'DummyJSON API',
      description: 'Fuente de datos.',
    },
    {
      icon: <TbBrandVite className="text-yellow-500 text-4xl" />,
      title: 'Vite',
      description: 'Bundler del proyecto.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-14 space-y-20">
<section className="text-center">

  <h1 className="text-5xl md:text-6xl font-black text-primary mb-5">
    Emarket
  </h1>

  <p className="max-w-3xl mx-auto text-lg leading-8 text-textSecondary">
    Proyecto personal desarrollado para poner en práctica React,
    consumo de APIs, arquitectura Front End, accesibilidad,
    rendimiento y diseño responsive.
  </p>

</section>

<section className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">

  <div className="grid md:grid-cols-2 gap-10">

    <div>

      <h2 className="text-3xl font-bold text-primary mb-6">
        Información del proyecto
      </h2>

      <p className="text-textSecondary leading-8">
        React • React Query • Tailwind CSS • Context API • Axios • Vite
      </p>

    </div>

    <ul className="space-y-4">

      <li>
        <span className="font-semibold">Estado:</span>{' '}
        <span className="text-green-600">Proyecto terminado</span>
      </li>

      <li>
        <span className="font-semibold">Versión:</span> 1.0.0
      </li>

      <li>
        <span className="font-semibold">Tiempo de desarrollo:</span> 3 meses
      </li>

      <li>
        <span className="font-semibold">Repositorio:</span> GitHub
      </li>

      <li>
        <span className="font-semibold">Deploy:</span> Vercel
      </li>

    </ul>

  </div>

</section>

<section id="Emarket">

  <h2 className="text-3xl font-bold text-primary mb-6">
    ¿Qué es Emarket?
  </h2>

  <p className="leading-8 text-textSecondary">
    Emarket es una aplicación de comercio electrónico desarrollada con
    React que simula una experiencia moderna de compra en línea
    utilizando la API DummyJSON como fuente de datos. El objetivo
    principal del proyecto fue aplicar buenas prácticas de desarrollo
    Front End, accesibilidad, rendimiento y una arquitectura escalable
    basada en componentes reutilizables.
  </p>

</section>

<section id="Objetivos">

  <h2 className="text-3xl font-bold text-primary mb-8">
    Objetivos del proyecto
  </h2>

  <ul className="space-y-5 list-disc pl-6 text-textSecondary leading-8">

    <li>
      Construir una aplicación moderna utilizando React y herramientas del ecosistema Front End.
    </li>

    <li>
      Aplicar buenas prácticas de desarrollo, organización y reutilización de componentes.
    </li>

    <li>
      Mejorar la experiencia del usuario mediante una interfaz intuitiva,
      accesible y responsiva.
    </li>

    <li>
      Consumir una API REST utilizando React Query y Axios.
    </li>

    <li>
      Crear un proyecto que represente mis conocimientos para mi
      portafolio profesional.
    </li>

  </ul>

</section>

<section className="mb-16">

        <h2 className="text-3xl font-bold text-primary mb-8">
          Tecnologías utilizadas
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {technologies.map((tech) => (

            <article
              key={tech.title}
              className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
            >

              <div className="mb-4">
                {tech.icon}
              </div>

              <h3 className="font-bold text-lg mb-2">
                {tech.title}
              </h3>

              <p className="text-textSecondary">
                {tech.description}
              </p>

            </article>

          ))}

        </div>

      </section>

      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">
            Funcionalidades
          </h2>

          <div className="space-y-8">

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Catálogo de productos
              </h3>

              <p className="text-textBody leading-8">
                El catálogo obtiene la información desde la API de DummyJSON y
                la presenta mediante tarjetas limpias y fáciles de recorrer.
                Cada producto muestra únicamente la información más relevante,
                como imagen, nombre, calificación, precio y categoría,
                evitando saturar visualmente al usuario.
              </p>

              <p className="text-textBody leading-8 mt-3">
                Además, cada tarjeta incorpora accesos rápidos para agregar el
                producto al carrito o marcarlo como favorito, reduciendo la
                cantidad de clics necesarios durante la navegación.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Filtros inteligentes
              </h3>

              <p className="text-textBody leading-8">
                Los usuarios pueden filtrar productos por categoría, rango de
                precios y calificación para encontrar rápidamente aquello que
                buscan. En dispositivos móviles los filtros se muestran dentro
                de un panel lateral optimizado para mejorar la experiencia de
                uso.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Ordenamiento
              </h3>

              <p className="text-textBody leading-8">
                Es posible ordenar el catálogo por precio ascendente,
                descendente o por mejor calificación, permitiendo comparar
                productos de una forma mucho más sencilla.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Búsqueda de productos
              </h3>

              <p className="text-textBody leading-8">
                La barra de búsqueda integrada en el Navbar utiliza la API de
                DummyJSON para encontrar productos en tiempo real. Cuando no
                existen coincidencias, la aplicación informa claramente al
                usuario mediante una vista amigable.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Lista de favoritos
              </h3>

              <p className="text-textBody leading-8">
                Los usuarios pueden guardar productos como favoritos para
                consultarlos posteriormente. La lista permanece almacenada en
                el navegador mediante LocalStorage, por lo que no se pierde al
                recargar la página.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Carrito de compras
              </h3>

              <p className="text-textBody leading-8">
                El carrito permite modificar cantidades mediante botones o
                escribiendo directamente el valor en un campo numérico.
                Conforme cambian las cantidades, el subtotal de cada producto y
                el total general se actualizan automáticamente.
              </p>

              <p className="text-textBody leading-8 mt-3">
                Tanto el carrito flotante como el contador del Navbar muestran
                siempre la cantidad total de artículos agregados.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Productos vistos recientemente
              </h3>

              <p className="text-textBody leading-8">
                Se implementó una sección que recuerda los últimos productos
                visitados utilizando LocalStorage. Esta sección únicamente se
                muestra cuando existen elementos almacenados y mantiene un
                máximo de cinco productos para evitar saturar la interfaz.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Compartir productos
              </h3>

              <p className="text-textBody leading-8">
                Mediante la Web Share API los usuarios pueden compartir un
                producto directamente desde dispositivos compatibles. Cuando el
                navegador no soporta esta funcionalidad, la aplicación copia
                automáticamente el enlace al portapapeles como alternativa.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Diseño Responsive
              </h3>

              <p className="text-textBody leading-8">
                Toda la interfaz fue desarrollada siguiendo un enfoque
                responsive para ofrecer una experiencia consistente tanto en
                teléfonos móviles como en tablets y computadoras.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Skeleton Loading
              </h3>

              <p className="text-textBody leading-8">
                Durante la carga de información se muestran Skeletons que
                anticipan la estructura del contenido, mejorando la percepción
                de velocidad y evitando cambios bruscos en la interfaz.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Breadcrumb
              </h3>

              <p className="text-textBody leading-8">
                La navegación mediante Breadcrumb ayuda al usuario a conocer en
                todo momento dónde se encuentra dentro de la aplicación y le
                permite regresar fácilmente a secciones anteriores.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                SEO básico
              </h3>

              <p className="text-textBody leading-8">
                Se implementó React Helmet para actualizar dinámicamente el
                título y la descripción de cada página, mejorando la
                indexación en motores de búsqueda y el contenido compartido en
                redes sociales.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Animaciones
              </h3>

              <p className="text-textBody leading-8">
                Se añadieron transiciones y animaciones sutiles en el carrusel,
                botones, tarjetas y notificaciones para hacer la navegación más
                agradable sin afectar el rendimiento.
              </p>
            </div>

            <div className="bg-bgWhite rounded-xl shadow-md p-6 border border-borderGrey">
              <h3 className="text-xl font-semibold text-textHeading mb-3">
                Accesibilidad
              </h3>

              <p className="text-textBody leading-8">
                La aplicación incorpora buenas prácticas de accesibilidad como
                etiquetas <code>aria-label</code>, navegación mediante teclado,
                textos alternativos en imágenes y una estructura semántica que
                facilita el uso con tecnologías de asistencia.
              </p>
            </div>

          </div>
        </div>
      </section>

    <section className="space-y-8">
    <div>
        <h2 className="text-3xl font-bold text-primary mb-6">
        Arquitectura del proyecto
        </h2>

        <div className="bg-bgWhite rounded-xl">
        <p className="text-textBody leading-8">
            Emarket fue desarrollado siguiendo una arquitectura basada en
            componentes reutilizables para facilitar el mantenimiento y la
            escalabilidad del proyecto.
        </p>

        <p className="text-textBody leading-8 mt-4">
            La lógica de negocio se encuentra separada mediante Hooks
            personalizados, mientras que el estado global se administra con
            Context API para gestionar el carrito de compras, la lista de
            favoritos y los productos vistos recientemente.
        </p>

        <p className="text-textBody leading-8 mt-4">
            La obtención de datos se realiza utilizando React Query junto con
            Axios, permitiendo aprovechar el almacenamiento en caché,
            revalidación automática de datos y una mejor gestión de los estados
            de carga y error.
        </p>
        </div>
    </div>
    </section>

    <section className="space-y-8">
    <div>
        <h2 className="text-3xl font-bold text-primary mb-6">
        Retos durante el desarrollo
        </h2>

        <div className="bg-bgWhite rounded-xl">
        <ul className="space-y-4 list-disc pl-6 text-textBody leading-8">
            <li>
            Diseñar una galería de imágenes adaptable para escritorio y
            dispositivos móviles sin provocar cambios de tamaño al cambiar la
            imagen principal.
            </li>

            <li>
            Implementar filtros y ordenamientos manteniendo un buen rendimiento
            de la aplicación mediante <strong>useMemo</strong>.
            </li>

            <li>
            Crear un historial de productos vistos recientemente utilizando
            LocalStorage, limitando automáticamente la lista a los últimos cinco
            elementos visitados.
            </li>

            <li>
            Sincronizar el carrito de compras y la lista de favoritos entre
            diferentes componentes mediante Context API.
            </li>

            <li>
            Implementar Skeleton Loaders para mejorar la percepción de
            rendimiento mientras se realizan las peticiones a la API.
            </li>

            <li>
            Integrar la Web Share API incorporando una alternativa automática
            que copia el enlace al portapapeles cuando el navegador no soporta
            dicha funcionalidad.
            </li>

            <li>
            Adaptar toda la aplicación para distintos tamaños de pantalla
            siguiendo un enfoque Responsive y Mobile First.
            </li>
        </ul>
        </div>
    </div>
    </section>

    <section className="space-y-8">
    <div>
        <h2 className="text-3xl font-bold text-primary mb-6">
        Lo que aprendí
        </h2>

        <div className="bg-bgWhite rounded-xl">
        <p className="text-textBody leading-8">
            Durante el desarrollo de Emarket fortalecí mis conocimientos en
            React y puse en práctica conceptos que anteriormente solo conocía de
            forma teórica. Este proyecto me permitió profundizar en el consumo de
            APIs REST, la creación de Hooks personalizados, el manejo del estado
            global mediante Context API y la optimización de peticiones utilizando
            React Query.
        </p>

        <p className="text-textBody leading-8 mt-4">
            También desarrollé habilidades relacionadas con el diseño de
            interfaces reutilizables, accesibilidad, SEO básico, diseño
            responsive, optimización de la experiencia de usuario y creación de
            animaciones que enriquecen la interacción sin afectar el rendimiento.
        </p>

        <p className="text-textBody leading-8 mt-4">
            Este proyecto representó una excelente oportunidad para comprender
            cómo estructurar aplicaciones Front End más escalables y cercanas a
            un entorno de desarrollo profesional.
        </p>
        </div>
    </div>
    </section>

    <section className="space-y-8 pb-10">
    <div>
        <h2 className="text-3xl font-bold text-primary mb-6">
        Próximas mejoras
        </h2>

        <div className="bg-bgWhite rounded-xl">
        <ul className="space-y-4 list-disc pl-6 text-textBody leading-8">
            <li>Implementar autenticación e inicio de sesión de usuarios.</li>

            <li>
            Incorporar un proceso de pago simulado para completar el flujo de
            compra.
            </li>

            <li>Agregar un comparador de productos.</li>

            <li>
            Sincronizar la lista de favoritos mediante una base de datos para
            conservar la información entre distintos dispositivos.
            </li>

            <li>Implementar un modo oscuro.</li>

            <li>Agregar soporte para múltiples idiomas (i18n).</li>

            <li>
            Incorporar pruebas unitarias y de integración utilizando Vitest y
            React Testing Library.
            </li>
        </ul>
        </div>
    </div>
    </section>
    </div>
)}