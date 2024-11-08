document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})

const icons = document.querySelectorAll('.section-1-icons i')
let i = 1

setInterval(() => {
	i++
	const icon = document.querySelector('.section-1-icons .change')
	icon.classList.remove('change')

	if (i > icons.length) {
		icons[0].classList.add('change')
		i = 1
	} else {
		icon.nextElementSibling.classList.add('change')
	}
}, 4000)

//Popup das imagens da lua

// Obtendo os elementos
const openPopupBtn = document.getElementById('Abrida');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupBackdrop = document.getElementById('popupBackdrop');
const pages = document.querySelectorAll('.popup-page');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');

let currentPage = 1; // Página inicial

// Função para abrir o pop-up

openPopupBtn.addEventListener('click', () => {
    popupBackdrop.style.display = 'flex'; // Mostra o pop-up
    showPage(currentPage); // Exibe a primeira página
});

document.getElementById('popup').onload=function(){

// Função para fechar o pop-up
closePopupBtn.addEventListener('click', () => {
    popupBackdrop.style.display = 'none'; // Oculta o pop-up
});

// Função para mostrar uma página específica
function showPage(pageNumber) {
    // Verifica se o número da página é válido
    if (pageNumber < 1 || pageNumber > pages.length) {
        return;
    }

    // Oculta todas as páginas
    pages.forEach(page => page.classList.remove('active'));

    // Exibe a página selecionada
    const pageToShow = document.getElementById(`page${pageNumber}`);
    if (pageToShow) {
        pageToShow.classList.add('active');
    }
}

// Função para ir para a página anterior
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

// Função para ir para a próxima página
nextPageBtn.addEventListener('click', () => {
    if (currentPage < pages.length) {
        currentPage++;
        showPage(currentPage);
    }
});
}