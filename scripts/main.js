const sidebar_btn = document.getElementById('sidebar-btn')
const top_bar = document.getElementById('top_bar__container')
const main_grid = document.getElementById('main_grid')
const AllCircleContainers = document.querySelectorAll('.circle--container')
sidebar_btn.addEventListener('click', ()=> {
    document.querySelector('.sidebar-btn').classList.toggle('active-sidebar-btn')
    document.querySelector('.sidebar-container').classList.toggle('active-sidebar-movement')
    top_bar.classList.toggle('active-sidebar-opactiy-else')
    main_grid.classList.toggle('active-sidebar-opactiy-else')
    for(let single of AllCircleContainers){
        single.classList.toggle('activate-sidebar-silence')
    }
})

