function languageFunction(){
  //console.log("Language:", document.documentElement.lang);
  if(document.documentElement.lang === "fr"){
    document.documentElement.lang = "en"
    window.location.href = "https://ethulliez.github.io/en/index.html";
  } else {
    document.documentElement.lang = "fr"
    window.location.href = "https://ethulliez.github.io/fr/index.html";
  }
  //console.log("Changed language to:", document.documentElement.lang);
}

function language_file(new_str){
  str1 = document.documentElement.lang
  return str1.concat("/", new_str)
}

const navbar = `
    <div id="navbar">
    <a href="fr/index.html">Situation</a>
    <a href="fr/publications.html">Publications</a>
    <a href="fr/talks.html">Talks</a>
    <a href="fr/enseignements.html">Enseignements</a>
    <a href="fr/data.html">Open Data</a>
    <button value = "change_language" onclick="languageFunction();"><i class="fa-solid fa-language"></i></button>
    </div>`
  
document.getElementsByTagName("nav")[0].innerHTML = navbar