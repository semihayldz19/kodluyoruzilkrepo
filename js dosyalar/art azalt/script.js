let sayi = document.querySelector("#counter");
let say = sayi.innerHTML;

let arttır = document.querySelector("#art");
arttır.addEventListener("click", function () {
  sayi.innerHTML = say++;
  return sayi;
});

let azalt = document.querySelector("#azalt");
azalt.addEventListener("click", function () {
  sayi.innerHTML = say--;
  return sayi;
});
