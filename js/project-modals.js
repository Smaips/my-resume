const projectModalFullStack = document.querySelector('#personal-project-full-stack');

const projectOpenBtnFullStack = document.querySelector('#personal-project-full-stack-btn');

const projectModals = [projectModalFullStack];
const projectBtns = [projectOpenBtnFullStack];

projectBtns.forEach((btn,index) => {
    const projectModal = projectModals[index];

    if(btn) {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            projectModal.classList.add(MODAL_ACTIVE_CLASS);

            document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
        })
    }
});