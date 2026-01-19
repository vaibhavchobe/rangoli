const WHATSAPP_NUMBER = "91XXXXXXXXXX";

let currentLang = "en";

const text = {
  en: {
    soft: "Soft Mat Rangoli",
    moti: "Moti Rangoli",
    order: "Order on WhatsApp",
    out: "Out of Stock",
    available: "Available"
  },
  hi: {
    soft: "सॉफ्ट मैट रंगोली",
    moti: "मोती रंगोली",
    order: "व्हाट्सऐप पर ऑर्डर करें",
    out: "स्टॉक समाप्त",
    available: "उपलब्ध"
  },
  mr: {
    soft: "सॉफ्ट मॅट रांगोळी",
    moti: "मोती रांगोळी",
    order: "व्हॉट्सअ‍ॅपवर ऑर्डर करा",
    out: "स्टॉक नाही",
    available: "उपलब्ध"
  }
};

const softMatRangoli = [
  { file: "soft1.jpg", price: 499, stock: true },
  { file: "soft2.jpg", price: 599, stock: true }
];

const motiRangoli = [
  { file: "moti1.jpg", price: 799, stock: true },
  { file: "moti2.jpg", price: 899, stock: true }
];

function renderAll() {
  document.getElementById("soft-gallery").innerHTML = "";
  document.getElementById("moti-gallery").innerHTML = "";

  renderThumbnails(softMatRangoli, "soft", "soft-gallery");
  renderThumbnails(motiRangoli, "moti", "moti-gallery");
}

function renderThumbnails(list, folder, containerId) {
  const container = document.getElementById(containerId);

  list.forEach(item => {
    const thumb = document.createElement("div");
    thumb.className = "thumb";

    thumb.innerHTML = `
      <img src="images/${folder}/${item.file}"
        onclick="${item.stock ?
        `openModal('${folder}','${item.file}',${item.price})` : ''}">
      <span>₹${item.price}</span>
      <span class="badge ${item.stock ? 'in' : 'out'}">
        ${item.stock ? text[currentLang].available : text[currentLang].out}
      </span>
    `;

    container.appendChild(thumb);
  });
}

function openModal(folder, file, price) {
  document.getElementById("modal-img").src = `images/${folder}/${file}`;
  document.getElementById("modal-img").classList.add("zoom");
  document.getElementById("modal-price").innerText =
      `₹${price}`;

  const msg = `I want to order ${file} priced at ₹${price}`;
  document.getElementById("whatsapp-btn").innerText = text[currentLang].order;
  document.getElementById("whatsapp-btn").href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  document.getElementById("image-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("image-modal").style.display = "none";
}

function setLang(lang) {
  currentLang = lang;
  renderAll();

  document.getElementById("banner-title").innerText =
      lang === "hi" ? "त्योहारी रंगोली संग्रह" :
          lang === "mr" ? "सणांसाठी खास रांगोळी संग्रह" :
              "Festive Rangoli Collection";

  document.getElementById("banner-sub").innerText =
      lang === "hi" ? "दीपावली, शादी और घर के प्रवेश के लिए" :
          lang === "mr" ? "दिवाळी, लग्न व घराच्या प्रवेशासाठी" :
              "Perfect for Diwali, Weddings & Home Entrance";
}

renderAll();
