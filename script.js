let bg_blur = document.querySelector('body');

function visibile_menu(e) {

    const close_btn = document.getElementById('hamburger');
    const hidden_menu = document.getElementById('menu_list');
    const hidden_main_text = document.querySelector('header');

    if (close_btn.innerText === '☰') {
        hidden_menu.classList.remove('opacity-0');
        close_btn.innerHTML = "X";
        close_btn.classList.add('hover:bg-slate-100', 'hover:text-slate-950');
        bg_blur.classList.add('backdrop-blur-lg', 'z-10','inset-0');
        hidden_main_text.classList.add('blur-sm');
        
    }
    else {
        hidden_menu.classList.add('opacity-0')
        close_btn.innerText = '☰';
        close_btn.classList.remove('hover:bg-slate-100', 'hover:text-slate-950');
        bg_blur.classList.remove('backdrop-blur-lg');
    }
    
    
}

function show_alert(e) {
    alert("Oppss! this page underconstruction.")
}