const menuButton = document.getElementById('button-menu');
const navigation = document.querySelector('.side-menu-navigation');
menuButton.addEventListener('click', function () {
    navigation.classList.toggle('show');
});
