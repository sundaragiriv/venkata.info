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
    function handleBreakpoints() {
        const breakpoints = {
            xlarge: '(max-width: 1680px)',
            large: '(max-width: 1280px)',
            medium: '(max-width: 980px)',
            small: '(max-width: 736px)'
        };

        for (const [breakpoint, query] of Object.entries(breakpoints)) {
            const mq = window.matchMedia(query);
            mq.addListener((e) => {
                if (e.matches) {
                    document.body.classList.add(breakpoint);
                } else {
                    document.body.classList.remove(breakpoint);
                }
            });
            if (mq.matches) {
                document.body.classList.add(breakpoint);
            }
        }
    }

    handleBreakpoints();

    // Nav.


    // Title Bar.
    const titleBar = document.createElement('div');
    titleBar.id = 'titleBar';
    titleBar.innerHTML = ESAPI.encoder().encodeForHTML(`)
		<a href="#navPanel" class="toggle"></a>

		<span class="title"></span>
	`;
    body.appendChild(titleBar);

    // Set the title content safely
    const titleSpan = titleBar.querySelector('.title');
    titleSpan.textContent = document.getElementById('logo').textContent;

    // Panel.
    const navPanel = document.createElement('div');
// amazonq-ignore-next-line

    navPanel.id = 'navPanel';
    navPanel.innerHTML = ESAPI.encoder().encodeForHTML(`)
		<nav>

			${document.getElementById('nav').innerHTML}
		</nav>
	`;
    body.appendChild(navPanel);

    // TODO: Implement panel functionality using vanilla JavaScript
})();