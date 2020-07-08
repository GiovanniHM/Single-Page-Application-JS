//Importamos las rutas para hacer render en nuestra aplicación
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


//Obj de rutas
const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};
//manejador muestar los elemntos 
const router = async () => {
  //Render de los elementos html
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  //Template hacia la vista 
  header.innerHTML = await Header();
};

export default router;