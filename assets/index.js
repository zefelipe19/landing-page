const body = document.querySelector("body")
const main_content = document.querySelector("main")
let body_mobile = body.clientWidth

if (body_mobile < 780) {
    main_content.setAttribute("class", "container")
}



const carrosel = () => {
    const images_carrosel = document.querySelector(".images")
    console.log(images_carrosel.src)
}

