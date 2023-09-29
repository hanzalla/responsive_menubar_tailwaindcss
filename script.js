

function visibile_menu(e) {

    const close_btn = document.getElementById('hamburger');
    const hidden_menu = document.getElementById('menu_list');

    if (close_btn.innerText === '☰') {
        hidden_menu.classList.remove('opacity-0');
        close_btn.innerHTML = "X";
        close_btn.classList.add('hover:bg-slate-100', 'hover:text-slate-950');
        
    }
    else {
        hidden_menu.classList.add('opacity-0')
        close_btn.innerText = '☰';
        close_btn.classList.remove('hover:bg-slate-100', 'hover:text-slate-950');
    }
    
    
}