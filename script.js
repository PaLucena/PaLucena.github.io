
function	pressBtn(btn) {
	if (btn.innerHTML !== "●") {
		document.querySelectorAll(".btn").forEach(element => {
			if (element.innerHTML === "●")
				element.innerHTML = element.id;
		})
		btn.innerHTML = "●";
		showContent(btn);
	}
}

function	showContent(btn) {
	document.querySelectorAll("[id^='content-']").forEach(element => {
		element.style.display = "none";
	});
	document.querySelector("#content-" + btn.id).style.display = "block";
}
