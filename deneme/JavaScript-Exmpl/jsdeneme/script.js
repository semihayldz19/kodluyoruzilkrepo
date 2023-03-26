let Name = prompt("lütfen isminizi girin");

if (Boolean(Name) == 1) {
  let baslik = document.querySelector("#info1");
  let baslik2 = document.querySelector("#info2");
  let tarih = document.querySelector("#info3");
  let metin = document.querySelector("#info4");

  baslik.innerHTML = `kodluyoruz`;
  baslik2.innerHTML = `Merhaba ${Name.toUpperCase()} ! Hoşgeldin!`;
  tarih.innerHTML = `${new Date().toLocaleString("tr-TR")}`;
  metin.innerHTML = ` Tarihinde Frontend Web Development Patikasının Javascript 1. ödevindesiniz `;
}
