import React from 'react'

const imagem = ({key, url, alt, ImgStyle}) => {
  // url e alt
	// const url = props.url
	// const alt = props.alt
	// const { url, alt } = props
  return (
    <div 
			key={key}
			className={`${ImgStyle} flex justify-content-center`}>
      	<img 
					src={url} 
					alt={alt}/>
    </div>
  )
}

export default imagem
