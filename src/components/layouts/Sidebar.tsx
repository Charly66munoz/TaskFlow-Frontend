import { Link } from "react-router-dom"
const Sidebar = () =>{

    return (
      <nav className=" shadow-xl/20 bg-violet-600/10 md:w-full px-2 py-4 gap-7 md:py-10 md:pr-5 flex md:flex-col items-center justify-center text-[14px] text-white flex-row rounded-3xl md:rounded-l-none ">
        <Link to={""}>Dashboard</Link>
        <Link to={""}>Crear tareas</Link>
        <Link to={""}>Perfil</Link>
      </nav>
    );
}

export default Sidebar