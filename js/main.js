/////////////////////////////////////////// Burger Menu  !////////////////////////////////////////////////////////////////////////
    const sidebarBox = document.querySelector('#box'),
    sidebarBtn = document.querySelector('#btn'),
    pageWrapper = document.querySelector('.content');
    
    sidebarBtn.addEventListener('click', event => {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
    });
    
    pageWrapper.addEventListener('click', event => {
    
    if (sidebarBox.classList.contains('active')) {
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
    }
    });
    
    window.addEventListener('keydown', event => {
    
    if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
    }
    });

    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const btn1 = document.querySelector('#btn1')


    btn1.addEventListener('click', ()=> {
        const url = './course_vid_sytylosti.html'
        document.location.href = url;
    })