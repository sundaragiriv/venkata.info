/*
	Halcyonic by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {
    const window = globalThis.window;
    const document = window.document;
    const body = document.body;

    // Breakpoints.
    // TODO: Implement a vanilla JavaScript alternative for breakpoints

    // Nav.

    // Title Bar.
    const titleBar = document.createElement('div');
    titleBar.id = 'titleBar';
    titleBar.innerHTML = `
		<a href="#navPanel" class="toggle"></a>
		<span class="title">${document.getElementById('logo').innerHTML}</span>
	`;
    body.appendChild(titleBar);

    // Panel.
    const navPanel = document.createElement('div');
    navPanel.id = 'navPanel';
    navPanel.innerHTML = `
		<nav>
			${document.getElementById('nav').innerHTML}
		</nav>
	`;
    body.appendChild(navPanel);

    // TODO: Implement panel functionality using vanilla JavaScript
})();