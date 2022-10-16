var nowLetsDraw = function () { 
	var blueThing = document.querySelector(".important-notifications-badge");
	if (blueThing != null) {
		var bell = document.querySelector('.notifications-button');
		bell.click();
		var bellIndicate = document.querySelector(".notifications-dropdown-content");
		if (bellIndicate == null) {
			setTimeout(nowLetsDraw, 150);
		} else {
			blueThing.remove();
			styleshit = document.createElement('style');
			styleshit.innerHTML = `
				.icon-resurrection {
					height: 22.4px;
					width: 35.8px;
					margin-left: 12px;
					margin-right: 12px;
					transition-property: all;
					transition-duration: 0.3s;
					transition-timing-function: ease;
					transition-delay: 0s;
					text-decoration: none;
				}
				.icon-resurrection > span {
					color: #ffffff;
					font-size: 18px;
					font-family: Verdana;
					text-decoration: none;
					font-weight: bold;
					margin-left: 5px;
					transition: inherit;
				}
				.icon-resurrection > svg {
					height: 18px;
					width: 18px;
					fill: #ffffff;
					transition: inherit;
				}
				.icon-resurrection:hover > svg,  .icon-resurrection:focus > svg {
					fill: #b0b0b0;
				}
				.icon-resurrection:hover > span,  .icon-resurrection:focus > span {
					color: #b0b0b0;
				}
				.icon-resurrection:hover {
					text-decoration: none;
				}
				`;
			
			document.head.insertAdjacentElement("beforeend", styleshit);
			
			var iconList = bellIndicate.querySelectorAll(".important-link");
			var panel = document.querySelector(".top-notifications");
			iconList.forEach((el) => {
				var newIcon = el.cloneNode(true);
				newIcon.classList.add('icon-resurrection');
				
				panel.insertAdjacentElement("afterbegin", newIcon);
			})
			
		}	
	}
}
nowLetsDraw();
	
