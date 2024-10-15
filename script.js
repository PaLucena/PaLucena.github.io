function	pressBtn() {

	let btns = document.querySelectorAll(".btn");
	
	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			btns.forEach(thisBtn => {
				if (thisBtn != btn)
					thisBtn.innerHTML = thisBtn.id;
			});
			btn.innerHTML = "●";
			showContent(btn)
		});
	});
}

function	showContent(btn) {
	document.querySelectorAll("[id^='content-']").forEach(element => {
		element.style.display = "none";
	});
	document.querySelector("#content-" + btn.id).style.display = "block";
}

pressBtn();