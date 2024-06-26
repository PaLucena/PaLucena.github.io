document.getElementById("Home").innerHTML = "●";

function	pressBtn(btn) {
	if (btn.innerHTML !== "●") {
		document.querySelectorAll(".btn").forEach(element => {
			if (element.innerHTML === "●")
				element.innerHTML = element.id;
		})
		btn.innerHTML = "●";
	}
}