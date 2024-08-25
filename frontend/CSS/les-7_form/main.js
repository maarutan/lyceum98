document.addEventListener("DOMContentLoaded", function () {
	const labels = document.querySelectorAll(".id");
	const allContent = [];

	labels.forEach((label) => {
		label.addEventListener("click", () => {
			labels.forEach((label) => label.classList.remove("active"));
			allContent.forEach((content) => content.classList.remove("active"));

			label.classList.add("active");
		});
	});
});
