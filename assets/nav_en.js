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
    <a href="index_en.html#situation">Situation</a>
    <a href="publications_en.html">Publications</a>
    <a href="talks_en.html">Talks</a>
    <a href="enseignements_en.html">Teaching</a>
    <a href="data_en.html">Open Data</a>
    <button value = "change_language" onclick="languageFunction();"><i class="fa-solid fa-language"></i></button>
    </div>`
  
document.getElementsByTagName("nav")[0].innerHTML = navbar