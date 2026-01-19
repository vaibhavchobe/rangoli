const images = [
  "rangoli1.jpg",
  "rangoli2.jpg",
  "rangoli3.jpg",
  "rangoli4.jpg"
];

const gallery = document.getElementById("gallery");

images.forEach((img, index) => {
  const card = document.createElement("div");
  card.className = "product";

  card.innerHTML = `
    <img src="images/${img}" alt="Rangoli ${index + 1}">
    <h3>Readymade Rangoli</h3>
    <p>Reusable handcrafted rangoli</p>
    <a class="btn"
       href="https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20order%20${img}">
       Order on WhatsApp
    </a>
  `;

  gallery.appendChild(card);
});
