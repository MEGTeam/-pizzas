/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import * as module from "./util.js";

module.default.MYBUTTONS.forEach((e, i) => {
    e.addEventListener("click", (ev) => {
        module.default.removeActive(module.default.MYBUTTONS, "activeB");
        e.classList.add("activeB");
        module.default.removeActive(module.default.MYSECTIONS, "activeM");
        module.default.MYSECTIONS[i].classList.add("activeM");
    });
});
