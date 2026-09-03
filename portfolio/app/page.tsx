import { ArrowUpRight, ArrowDown, Download, MapPin, Code2, GraduationCap, ScanLine, HeartPulse, Building2, Plus, Mail } from 'lucide-react';

const projects = [
  { id: '01', name: 'Sistema de gestión de asistencias', institution: 'Facultad de Ciencias Médicas · UNLP', category: 'EDUCACIÓN', date: '2024', icon: ScanLine, color: 'mint', description: 'Una aplicación web para gestionar la asistencia mediante códigos QR. Desarrollada para la Facultad de Ciencias Médicas y utilizada por la institución.', tags: ['Aplicación web', 'Códigos QR', 'Gestión institucional'], context: 'Junio — diciembre de 2024', status: 'En uso en la institución' },
  { id: '02', name: 'Registro clínico en terapia intensiva', institution: 'Hospital Dr. Pepe Olaechea · Pinamar', category: 'SALUD', date: '2025', icon: HeartPulse, color: 'blue', description: 'Formularios digitales para registrar y almacenar información de pacientes, con foco en mejorar la rapidez y la organización de los registros clínicos.', tags: ['Aplicación web', 'Formularios digitales', 'Gestión de datos'], context: 'Enero — marzo de 2025', status: 'Finalizado' },
  { id: '03', name: 'Sistema de gestión inmobiliaria', institution: 'FlipTracker · Proyecto independiente', category: 'INMOBILIARIA', date: '2026', icon: Building2, color: 'violet', description: 'App para Windows y Android que permite comparar oportunidades inmobiliarias, estimar inversión y rentabilidad, y respaldar la información en Google Drive.', tags: ['Flutter / Dart', 'SQLite', 'Google Drive'], context: 'Julio — septiembre de 2026', status: 'Finalizado' },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="header wrap">
        <a className="wordmark" href="#inicio" aria-label="Facundo Mendoza, inicio">fm<span>.</span></a>
        <nav aria-label="Navegación principal"><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><a className="nav-contact" href="#contacto">Contacto <ArrowUpRight size={16}/></a></nav>
      </header>
      <main id="contenido">
        <section id="inicio" className="hero wrap">
          <div className="eyebrow"><span className="dot"/> FACUNDO NICOLÁS MENDOZA <span className="hero-index"></span></div>
          <h1>Software con <span>propósito.</span></h1>
          <div className="hero-bottom"><div><p className="hero-role">Desarrollo de software.</p><p className="intro">Construyo páginas web y apps que buscan resolver necesidades reales, con experiencia en el ámbito de la salud, la educación y los inmuebles.</p><div className="hero-actions"><a className="button primary" href="#proyectos">Explorar proyectos <ArrowDown size={17}/></a><a className="cv-link" href="./CV-Facundo-Mendoza.pdf" download>Descargar CV <Download size={16}/></a></div></div><div className="location"><MapPin size={17}/><span>La Plata, Argentina<br/><small>Analista Programador · UNLP</small></span></div></div>
        </section>
        <div className="specialties"><div className="wrap"><span>DESARROLLO FULL STACK</span><i>✳</i><span>WEB</span><i>✳</i><span>DATOS & SISTEMAS</span><i>✳</i><span>APPS</span></div></div>
        <section id="proyectos" className="section wrap">
          <div className="section-heading"><div><p className="eyebrow muted">01 / TRABAJOS </p><h2>Proyectos con intención.</h2></div></div>
          <div className="projects">{projects.map(({icon: Icon, ...p}) => <article className={`project ${p.color}`} key={p.id}>
            <div className="project-cover"><div className="cover-meta"><span>{p.category}</span><span>{p.date}</span></div><div className="project-symbol"><Icon strokeWidth={1} aria-hidden="true"/><span className="project-number">{p.id}</span></div><h3>{p.name}</h3><div className="cover-footer"><span>{p.institution}</span></div></div>
            <div className="project-body"><p className="project-status"><span/> {p.status}</p><p>{p.description}</p><div className="tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-date">{p.context}</div></div>
          </article>)}</div>
          <div className="other-projects"><div><p className="eyebrow muted">INVESTIGACIÓN Y PROYECTOS ACADÉMICOS</p><h3>También en mi recorrido</h3></div><div className="other-list"><details><summary><span>Alfadatizando <small>Investigación / Tesis · 2026 — actualidad</small></span><Plus size={19}/></summary><p>Plataforma educativa para analizar documentos PDF y construir grafos conceptuales a partir de su información. Proyecto de la UNLP orientado a apoyar el aprendizaje en escuelas secundarias.</p></details><details><summary><span>CEDICA <small>Proyecto académico · 2024</small></span><Plus size={19}/></summary><p>Participación en el desarrollo de una aplicación web para la gestión de empleados y la publicación de noticias institucionales, en el marco de un proyecto académico para CEDICA.</p></details><details><summary><span>Centro de Salud de Villa Argüello <small>Proyecto académico · 2025</small></span><Plus size={19}/></summary><p>Desarrollo de una propuesta de plataforma para importar encuestas desde Excel, procesar los datos y explorarlos mediante filtros, estadísticas y mapas.</p></details></div></div>
        </section>
        <section id="sobre-mi" className="about section"><div className="wrap about-grid"><div><p className="eyebrow muted">02 / UN POCO SOBRE MÍ</p><h2>Entender primero.<br/><span>Construir después.</span></h2><div className="about-signature">Facundo Mendoza<span>DESARROLLADOR DE SOFTWARE</span></div></div><div className="about-content"><p className="about-lead">Me interesa entender cómo trabajan las personas y construir herramientas que les sirvan.</p><p>Soy Analista Programador Universitario y estudiante avanzado de la Licenciatura en Sistemas en la UNLP. Participé en proyectos para instituciones educativas y de salud, desde el análisis de requerimientos hasta la implementación.</p><p>También soy ayudante adscripto en el Seminario de Lenguajes (Go). Acompañar a estudiantes y discutir distintas formas de resolver un problema es parte de lo que disfruto del desarrollo.</p><div className="milestones"><div><GraduationCap size={22}/><span>Formación en la UNLP<small>Analista Programador Universitario · 2026</small></span></div><div><Code2 size={22}/><span>Participación en la facultad<small>Ayudante adscripto en Go · Desde 2023</small></span></div></div></div></div></section>
        <section className="section wrap stack-section"><div><p className="eyebrow muted">03 / HERRAMIENTAS</p><h2></h2></div><div className="stack"><div><span>01</span><h3>Lenguajes</h3><p>Java · Python · Go<br/>JavaScript · TypeScript · Dart</p></div><div><span>02</span><h3>Desarrollo</h3><p>Angular · Flutter · Node.js<br/>Flask · Django · Spring Data JPA</p></div><div><span>03</span><h3>Datos e infraestructura</h3><p>PostgreSQL · MySQL · MongoDB · SQLite<br/>Redis · Git · Docker · AWS</p></div></div></section>
        <section id="contacto" className="contact wrap"><div className="eyebrow"><span className="dot"/>04 / SIGAMOS LA CONVERSACIÓN</div><div className="contact-row"><h2>¿Se te ocurre<br/><span>una idea?</span></h2><a href="mailto:n.facundomendoza@gmail.com" className="contact-arrow" aria-label="Enviar un correo a Facundo Mendoza"><ArrowUpRight strokeWidth={1.2}/></a></div><a className="email" href="mailto:n.facundomendoza@gmail.com"><Mail size={20}/>n.facundomendoza@gmail.com</a><p>Podés escribirme para conversar sobre un proyecto o una oportunidad de trabajo.</p></section>
      </main>
      <footer className="wrap"><a className="wordmark" href="#inicio" aria-label="Volver al inicio">fm<span>.</span></a><span>© 2026 Facundo Mendoza</span></footer>
    </>
  );
}






