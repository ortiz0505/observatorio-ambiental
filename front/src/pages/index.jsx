import React from 'react';
import {Link} from 'react-router-dom';

const Index = () => {
  return(
    <div className='w-full xl:grid xl:place-items-center'>
      <nav className='flex justify-between sm:w-full sm:my-2 sm:box-content sm:p-4 sm:border-2 sm:border-black sm:rounded-lg xl:w-9/12'>
          <div>Logo</div>
          <Link to="/login"><div>Login</div></Link>
      </nav>
      <div className='flex justify-center sm:w-full sm:my-2 sm:box-content sm:p-4 xl:w-9/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum ligula non ipsum commodo tincidunt. In aliquet, nibh id mattis consequat, urna tellus mollis nisi, non efficitur tellus tortor non nisl. Sed volutpat mi sit amet dictum dictum. Quisque pellentesque tellus vel magna posuere, eget viverra nulla finibus. Proin bibendum lacus a ex feugiat vestibulum. In pharetra lorem urna, sed tempor metus tristique ut. Donec laoreet erat vitae pharetra consectetur. Nullam ut dolor eu nisi viverra ullamcorper.</div>
      <Link to='mapageneral'><div className='flex justify-center sm:w-full sm:my-2 sm:box-content sm:p-4 xl:w-9/12'>Ver mapa</div></Link>
      <div className='flex justify-center sm:w-full sm:my-2 sm:box-content sm:p-4 xl:w-9/12'>Nulla non velit eget urna lacinia auctor. Vivamus finibus sit amet ligula eu sagittis. Sed nec rhoncus mi, et molestie turpis. Fusce eu lobortis tortor, vel dignissim nibh. Fusce varius ligula vitae urna imperdiet, nec ultricies diam tristique. In malesuada tristique facilisis. Nulla sagittis dignissim tellus ut ultricies. Sed quis orci sit amet diam tempus laoreet.</div>
      <div className='flex justify-center sm:w-full sm:my-2 sm:box-content sm:p-4 xl:w-9/12'>Cras nulla diam, ultrices eu elit quis, ornare luctus ante. Etiam quam libero, egestas sit amet tellus eu, suscipit egestas massa. Sed rhoncus nulla ut dui dictum, sed vulputate lacus dapibus. Maecenas tempor vitae augue eu dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non porta nisi, a convallis ex. Aliquam rutrum tortor sed nisl porta, ut pellentesque augue tempor. Donec est lorem, feugiat sed odio id, varius malesuada arcu. Fusce venenatis, sem quis scelerisque ullamcorper, erat eros elementum nunc, eget feugiat elit nisl non ante. Nullam facilisis metus ipsum, eget pulvinar sapien consectetur at. Donec sollicitudin euismod elementum. Nunc egestas magna sed erat condimentum, ut bibendum massa lacinia. Nulla dignissim arcu maximus neque eleifend pharetra. Proin augue magna, sollicitudin eu diam non, iaculis laoreet est.</div>
    </div>
  );
};
//Volver componentes los cajones de texto
//crear layout de el navbar
export default Index;
