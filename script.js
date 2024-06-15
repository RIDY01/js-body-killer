function loadNewHTML(newHTML) {
    document.body.innerHTML = '';
    document.body.innerHTML = newHTML; 
}

document.addEventListener('DOMContentLoaded', (event) => {
    const newHTMLContent = `
        <h1>Welcome to the new page!</h1>
        <p>This is the new content loaded into the body.</p>
    `;
    
    loadNewHTML(newHTMLContent);
});
