//Importamos las rutas para hacer render en nuestra aplicación
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Footer from '../templates/Footer';


//Obj de rutas
const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
  '/:pages': Home,
};
//manejador muestar los elemntos 
const router = async () => {
  //Render de los elementos html
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  const footer = null || document.getElementById('footer')

  //Template hacia la vista 
  header.innerHTML = await Header();
  footer.innerHTML = await Footer();
  //Llamamos el Hash
  let hash = getHash();
  //manejador de ruta
  let route = await resolveRoutes(hash);
  let render = routes [route] ? routes [route] : Error404;
  content.innerHTML = await render();
};

export default router;