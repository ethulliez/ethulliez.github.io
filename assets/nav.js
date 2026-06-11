function languageFunction(){
  //console.log("Language:", document.documentElement.lang);
  if(document.documentElement.lang === "fr"){
    document.documentElement.lang = "en"
    window.location.href = "index_en.html";
  } else {
    document.documentElement.lang = "fr"
    window.location.href = "index.html";
  }
  //console.log("Changed language to:", document.documentElement.lang);
}


const navbar = `
    <div id="navbar">
    <a href="index.html#situation">Situation</a>
    <a href="publications.html">Publications</a>
    <a href="talks.html">Talks</a>
    <a href="enseignements.html">Enseignements</a>
    <a href="data.html">Open Data</a>
    <button value = "change_language" onclick="languageFunction();"><i class="fa-solid fa-language"></i></button>
    </div>`
  
document.getElementsByTagName("nav")[0].innerHTML = navbar