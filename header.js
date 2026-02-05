console.log("ok")

const head = `<!--<img src="Images/ethulliez.PNG" alt="Photo de Emma Thulliez" style="float:right;width:200px;">-->
  </br>
  <name>Emma Thulliez</name>
  <p>Chargée d'Enseignement Contractuelle | AgroParisTech, Palaiseau, France
  </br> <i class="fa-regular fa-envelope"></i> emma.thulliez@agroparistech.com
  </br><i class="fa-brands fa-orcid"></i> <a href="https://orcid.org/0009-0000-5679-3036" target="_blank" style="color: white;">Emma Thulliez</a>
  </p>
  </br>`
  
document.getElementsByTagName("header")[0].innerHTML = head