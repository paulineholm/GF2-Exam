let dmClass = ".dm-nav";

let dmPages = [
    ["Forside",   "index.html"],
    ["Fester",     "#"],
    ["Firma events", "#"],
    ["Kontakt", "#"]
]
let dmParent = document.querySelector(dmClass);

if(dmParent != null){
    dmGenerateMenu ();
}
else{
    alert("Fejl! menuen eksiterer ikke");
}

function dmGenerateMenu(){
    let dmHTML = `<ul class="dm-menu">`;
    let dmUrl = window.location.pathname;
    let dmFileName = dmUrl.substring(dmUrl.lastIndexOf("/")+1);

    dmPages.forEach(function(element){
        let dmLinkClass = "";
        if(dmFileName == element[1]){
            dmLinkClass = "selected";
        }
        dmHTML += `
            <li class="dm-menu-item">
                <a href="${element[1]}" class="${dmLinkClass}">${element[0]}</a>
            </li>
        `;
    });
    dmHTML += `</ul>`;

    dmParent.innerHTML = dmHTML;
}
