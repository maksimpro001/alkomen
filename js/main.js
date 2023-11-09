if (document.body.clientWidth <= 800) {

    let burger_btn = document.querySelector(".header__nav-burger")
    let burger_btn_line = document.querySelectorAll(".header__nav-burger-line")
    let info_burgermenu = document.querySelector(".info__burgermenu")

    let arrow = document.querySelector(".info__blocks-arrow")

    let animateSite = {
        burrger__btn_opened: false,
        burger__btn_open: [
            [{transform: "rotate(0deg)"}, {transform: "rotate(-45deg) translateY(-50%)", top: "50%"}],
            [{transform: "translateX(0%)"}, {transform: "translateX(100%)",}],
            [{transform: "rotate(0deg)"}, {transform: "rotate(45deg) translateY(-50%)", top: "50%"}],
            [{top: "-100%"}, {top: "0"}]
        ],
        burger__btn_close: [
            [{transform: "rotate(0deg)", top: "0%"}, {transform: "rotate(-45deg) translateY(-50%)", top: "50%"}].reverse(),
            [{transform: "translateX(0%)"}, {transform: "translateX(100%)",}].reverse(),
            [{transform: "rotate(0deg) translateY(-100%)", top: "100%"}, {transform: "rotate(45deg) translateY(-50%)", top: "50%"}].reverse(),
            [{top: "-100%"}, {top: "0"}].reverse()
        ],
    }


    burger_btn.addEventListener("click", e => {
        if (!animateSite.burrger__btn_opened) {
            burger_btn_line[1].animate(animateSite.burger__btn_open[1], {duration: 500, iterations: 1})
            burger_btn_line[1].style.transform = "translateX(100%)"
            burger_btn_line[0].animate(animateSite.burger__btn_open[0], {duration: 500, iterations: 1})
            setTimeout(() => {
                burger_btn_line[0].style.transform = "rotate(-45deg) translateY(-50%)"
                burger_btn_line[0].style.top = "50%"
            }, 490)
            burger_btn_line[2].animate(animateSite.burger__btn_open[2], {duration: 500, iterations: 1})
            setTimeout(() => {
                burger_btn_line[2].style.transform = "rotate(45deg) translateY(-50%)"
                burger_btn_line[2].style.top = "50%"
            }, 490)
            info_burgermenu.style.display = "flex"
            info_burgermenu.animate(animateSite.burger__btn_open[3], {duration: 800, iterations: 1})
        }
        else {
            burger_btn_line[1].animate(animateSite.burger__btn_close[1], {duration: 500, iterations: 1})
            burger_btn_line[1].style.transform = "translateX(0%) translateY(-50%)"
            burger_btn_line[0].animate(animateSite.burger__btn_close[0], {duration: 500, iterations: 1})
            setTimeout(() => {
                burger_btn_line[0].style.transform = "rotate(0deg)"
                burger_btn_line[0].style.top = "0"
            }, 490)
            burger_btn_line[2].animate(animateSite.burger__btn_close[2], {duration: 500, iterations: 1})
            setTimeout(() => {
                burger_btn_line[2].style.transform = "rotate(0deg) translateY(-100%)"
                burger_btn_line[2].style.top = "100%"
            }, 490)
            info_burgermenu.animate(animateSite.burger__btn_close[3], {duration: 800, iterations: 1})
            setTimeout(() => {
                info_burgermenu.style.display = "none"
            }, 790)
        }
        animateSite.burrger__btn_opened = !animateSite.burrger__btn_opened
    })

    let block = document.querySelectorAll(".info__blocks-scroll-block")

    block.forEach(el => {
        el.addEventListener("click", e => {
            console.dir(e.target);
            let last = document.querySelector(".info__blocks-scroll-block[data-view = true]")
            if (last != e.target && e.target.classList[0] == "info__blocks-scroll-block") {
                last.animate([{width: "60%", opacity: "1", height: "100%"}, {width: "30%", opacity: ".5", height: "45%"}], {duration: 800, iterations: 1})
                last.dataset.view = "false"
                e.target.animate([{width: "60%", opacity: "1"}, {width: "30%", opacity: ".5", height: "45%"}].reverse(), {duration: 800, iterations: 1})
                e.target.dataset.view = "true"
            } 
            else if (last != e.target.parentElement && e.target.parentElement.classList[0] == "info__blocks-scroll-block") {
                last.animate([{width: "60%", opacity: "1", height: "100%"}, {width: "30%", opacity: ".5", height: "45%"}], {duration: 800, iterations: 1})
                last.dataset.view = "false"
                e.target.parentElement.animate([{width: "60%", opacity: "1"}, {width: "30%", opacity: ".5", height: "45%"}].reverse(), {duration: 800, iterations: 1})
                e.target.parentElement.dataset.view = "true"
            }
        })
    })
}