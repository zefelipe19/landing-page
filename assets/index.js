const body = document.querySelector("body")
let body_mobile = body.clientWidth
console.log(body_mobile)

const main_content = document.querySelector("main")
console.log(main_content)

if (body_mobile < 780) {
    main_content.setAttribute("class", "container")
}