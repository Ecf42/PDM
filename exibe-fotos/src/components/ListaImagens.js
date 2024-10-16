import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({ pics, ImgStyle }) => {
  return pics.map((pic, key) => (
	<Imagem
		ImgStyle={ImgStyle}
		url={pic.src.small}
		alt={pic.alt}
		key={key}
	/>
))
}

export default ListaImagens
