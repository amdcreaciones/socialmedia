window.onload = function() {
	const title = document.querySelector('.ct-title')
	const redes = document.querySelector('.title-r')
	const sociales = document.querySelector('.title-s')
	const instagram = document.querySelector('.ct-instagram')
	const facebook = document.querySelector('.ct-facebook')
	const whatsapp = document.querySelector('.ct-whatsapp')
	const dataIg = document.querySelector('.d-instagram')
	const dataFb = document.querySelector('.d-facebook')
	const dataWp = document.querySelector('.d-whatsapp')
	const arrowIg = document.querySelector('.a-instagram')
	const arrowFb = document.querySelector('.a-facebook')
	const arrowWp = document.querySelector('.a-whatsapp')

	function doubleclick (socialmedia, link) {
  	if (socialmedia.style = 'scale(1.1)') {
  		window.open(link)
  	}
  }

  instagram.onclick = function() {
  	doubleclick(instagram, 'https://www.instagram.com/amd.creaciones/')
  } 

 	facebook.onclick = function() {
  	doubleclick(facebook, 'https://www.facebook.com/amd.creaciones')
  } 

 	whatsapp.onclick = function() {
  	doubleclick(whatsapp, 'https://api.whatsapp.com/send/?phone=5491163070429&text&app_absent=0')
  } 

	title.onmouseover = function() {
		redes.classList.toggle('underline')
		sociales.classList.toggle('underline')
		sociales.classList.toggle('black')
	}

	title.onmouseout = function() {
		redes.classList.toggle('underline')
		sociales.classList.toggle('underline')
		sociales.classList.toggle('black')
	}

	instagram.onmouseover = function() {
		dataIg.classList.toggle('black')
		arrowIg.classList.toggle('rotate')
	}

	instagram.onmouseout = function() {
		dataIg.classList.toggle('black')
		arrowIg.classList.toggle('rotate')
	}

	facebook.onmouseover = function() {
		dataFb.classList.toggle('black')
		arrowFb.classList.toggle('rotate')
	}

	facebook.onmouseout = function() {
		dataFb.classList.toggle('black')
		arrowFb.classList.toggle('rotate')
	}

	whatsapp.onmouseover = function() {
		dataWp.classList.toggle('black')
		arrowWp.classList.toggle('rotate')
	}

	whatsapp.onmouseout = function() {
		dataWp.classList.toggle('black')
		arrowWp.classList.toggle('rotate')
	}


}