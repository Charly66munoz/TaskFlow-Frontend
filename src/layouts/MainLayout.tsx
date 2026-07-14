import { Outlet } from "react-router-dom";
//marcador de posición dentro de una ruta padre. Le indica a react-router-dom dónde debe renderizar el contenido de las rutas hijas.

function MainLayout(){
    return (
        <>
            <header>
                <h2>TaskFlow</h2>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout;