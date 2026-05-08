const gomb = document.getElementById("uzenet-gomb");
const uzenet = document.getElementById("uzenet");

if (gomb && uzenet) {
  gomb.addEventListener("click", () => {
    const szoveg = "Szia! Köszönöm, hogy megnézted az oldalamat.";
    uzenet.textContent = szoveg;
    console.log(szoveg);
  });
}
