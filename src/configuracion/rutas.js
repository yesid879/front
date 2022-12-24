// importamos componentes
import CompMostrarUsuarios from '../componentes/MostrarUsuarios';
import CompAgregarUsuarios from '../componentes/AgregarUsuarios';
import CompEditarUsuarios from '../componentes/EditarUsuarios';


//importar el router
import {  Route, Routes } from 'react-router-dom';

const Rutas = () => {
    return (
        
            <Routes>
                <Route path='/' element={<CompMostrarUsuarios />} />
                <Route path='/agregar' element={<CompAgregarUsuarios />} />
                <Route path='/editar/:id' element={<CompEditarUsuarios />} />


            </Routes>
       
    )
}
export default Rutas;