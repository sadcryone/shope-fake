const openclickmodalregister = document.querySelector('.js-modal-click-register');
const openclickmodallogin = document.querySelector('.js-modal-click-login');
const clickmodalregister = document.querySelector('.js-modal-register');
const clickmodallogin = document.querySelector('.js-modal-login');
openclickmodalregister.addEventListener('click',()=>{
  clickmodalregister.classList.add('open');
});
openclickmodallogin.addEventListener('click', ()=>{
  clickmodallogin.classList.add('open');
});
const closesmodal = document.querySelectorAll('.js-modal-close');
for(const btnClose of closesmodal){
  btnClose.addEventListener('click',()=>{
    clickmodallogin.classList.remove('open');
    clickmodalregister.classList.remove('open');
  });
};
const switchlogin = document.querySelector('.js-modal-switch-login');
const switchregister = document.querySelector('.js-modal-switch-register');
switchlogin.addEventListener('click',()=>{
  clickmodalregister.classList.remove('open');
  clickmodallogin.classList.add('open');

});
switchregister.addEventListener('click',()=>{
  clickmodallogin.classList.remove('open');
  clickmodalregister.classList.add('open');

});

const input = document.getElementById("search");
const box = document.getElementById("suggestions");

// Khi focus thì hiện gợi ý
input.addEventListener("focus", () => {
  box.style.display = "block";
});

// Khi blur (click ra ngoài) thì ẩn gợi ý
input.addEventListener("blur", () => {
  setTimeout(()=> box.style.display = "none", 0);
});

// Khi click vào gợi ý thì gán vào input
box.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    input.value = e.target.textContent;
    box.style.display = "none";
  }
});
