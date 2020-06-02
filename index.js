const praiseBubble = document.getElementById("praise_bubble");

function addPraise() {
    const b = Math.floor(Math.random() * 6) + 1;
    const bl = Math.floor(Math.random() * 11) + 1;

    const d = document.createElement('div')
    d.className = `bubble b${b} bl${bl}`
    praiseBubble.appendChild(d)
}