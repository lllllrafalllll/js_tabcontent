window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelectorAll('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function hideTabConted (a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabConted(1);



    function showTabConted (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }



    info[0].addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
            if (target === tab[i]) {
                hideTabConted (0)
                showTabConted (i)
                break;
            }
        }

        }
        
    })


})