const btn = document.querySelector("#fuck");
const dick = document.querySelector(".dick");
const dickFuck = document.querySelector(".dickFuck");

btn.addEventListener("click", () => {
	dick.classList.add("is-active");
	dickFuck.classList.add("none");
});
