// Import DOMPurify for sanitizing HTML
// DOMPurify is a library that helps prevent XSS attacks by sanitizing HTML

export function setupCounter(element) {
    let counter = 0
    const setCounter = (count) => {
        counter = count
        element.textContent = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}