!function(){"use strict";var t,e,o;t=document.querySelector("[data-menu-button]"),e=document.querySelector("[data-menu]"),o=document.body,t.addEventListener("click",(function(){var a="true"===t.getAttribute("aria-expanded")||!1;t.classList.toggle("is-open"),t.getAttribute("aria-expanded",!a),e.classList.toggle("is-open"),o.classList.toggle("modal-open")})),function(){var t={openModalBtn:document.querySelector("[data-modal-open-contact]"),closeModalBtn:document.querySelector("[data-modal-close-contact]"),modal:document.querySelector("[data-modal-contact]")};function e(){t.modal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)}(),function(){var t={openModalBtn2:document.querySelector("[data-modal-open-contact2]"),closeModalBtn2:document.querySelector("[data-modal-close-contact2]"),modal2:document.querySelector("[data-modal-contact2]")};function e(){t.modal2.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}t.openModalBtn2.addEventListener("click",e),t.closeModalBtn2.addEventListener("click",e)}()}();
//# sourceMappingURL=accessories.7fd70d18.js.map
