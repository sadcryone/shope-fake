const openmodalregisterbtn = document.querySelector('.js-modal-click-register');
const openmodalloginbtn = document.querySelector('.js-modal-click-login');
const modallogin = document.querySelector('.js-modal-login');
const modalregister = document.querySelector('.js-modal-register');
openmodalloginbtn.addEventListener('click', ()=>{
    modallogin.classList.add('open');
});
openmodalregisterbtn.addEventListener('click', ()=>{
    modalregister.classList.add('open');
});
const CloseModal = document.querySelectorAll('.js-modal-close');
for(const btn of CloseModal){
    btn.addEventListener('click',()=>{
        modallogin.classList.remove('open');
        modalregister.classList.remove('open');
    });
};
const switchtoregister = document.querySelector('.js-modal-switch-login');
const switchtologin = document.querySelector('.js-modal-switch-register');
switchtoregister.addEventListener('click',()=>{
    modalregister.classList.remove('open');
    modallogin.classList.add('open');
});
switchtologin.addEventListener('click',()=>{
    modallogin.classList.remove('open');
    modalregister.classList.add('open');
});
const input = document.getElementById("search");
const box = document.getElementById("suggestions");

// Khi focus thì hiện gợi ý
input.addEventListener("focus", () => {
  box.style.display = "block";
});

// Khi blur (click ra ngoài) thì ẩn gợi ý
input.addEventListener("blur", () => {
  setTimeout(()=> box.style.display = "none", 200);
});

// Khi click vào gợi ý thì gán vào input
box.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    input.value = e.target.textContent;
    box.style.display = "none";
  }
});
