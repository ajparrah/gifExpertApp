import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifCard } from '../../Components/GifCard';

describe('Pruebas en <GifCard />', () => {
  // #region Component and props required
  const image = {
    title: 'Imagen de prueba',
    url: 'https://localhost:8000'
  };
  const wrapper = shallow(<GifCard image={image}/>);
  // #endregion

  test('Debe mostrar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe poseer un titulo la imagen', () => {
    const titleElement = wrapper.find('.card-title');
    expect(titleElement.text().trim()).toBe(image.title);
  });

  test('Debe poseer un titulo alternativo y URL valida la imagen', () => {
    const imgElement = wrapper.find('img');
    //.props, retorna un objeto con las propiedades del elemento, como por ejemplo el src, alt...
    //.prop, recibe el identificador de la propiedad, como por ejemplo. .prop('src'). Busca el atributo del elemento para validar
    expect(imgElement.prop('src').trim()).toBe(image.url);
    expect(imgElement.prop('alt').trim()).toBe(image.title);
  });

  describe('Debe poseer la clase fadeIn para que sea animado al renderizar', () => {
    const divElement = wrapper.find('#gifCard');
    test('Debe poseer la clase animated por ser requerido por la libreria', () => {
      expect(divElement.hasClass('animate__animated')).toBe(true); //Requerido para que sea posible la animacion
    });

    test('Debe poseer la clase fadeIn', () => {
      expect(divElement.hasClass('animate__fadeIn')).toBe(true);  
    });
  });
  
  
});
