window.addEventListener("keydown", function (e) {
    const p = document.querySelector("p");
    p.innerHTML = `
     <table style="border-collapse: collapse; width: 60%; background-color: #555; color: #000; 
     text-align: center; box-shadow: 0 0 15px rgba(255, 255, 255, 1); 
     border: 2px solid #555; font-weight: 900">
        <thead>
            <tr style="background-color: #ccc;">
                <th style="padding: 15px; border: 2px solid aqua;">Key</th>
                <th style="padding: 15px; border: 2px solid aqua;">KeyCode</th>
                <th style="padding: 15px; border: 2px solid aqua;">Code</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: crimson;">
                <td style="padding: 12px; border: 2px solid aqua;">${e.key === " " ? "Space" : e.key}</td>
                <td style="padding: 12px; border: 2px solid aqua;">${e.keyCode}</td>
                <td style="padding: 12px; border: 2px solid aqua;">${e.code}</td>
            </tr>
        </tbody>
    </table>
    `
    
})