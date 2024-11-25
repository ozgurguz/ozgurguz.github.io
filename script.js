document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const textInput = document.querySelector(".text-input");
  const nameInput = document.querySelector(".name-input");
  const titleInput = document.querySelector(".title-input");
  const adjustmentButtons = document.querySelectorAll(".adjust-btn");
  const downloadButton = document.querySelector(".download-btn");

  // Arka plan ve metin renklerini değiştirme
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const imagePath = button.getAttribute("data-image");
      const textColor = button.getAttribute("data-text-color");
      const image = button.closest(".image-container").querySelector(".image");

      // Arka plan resmini ve metin rengini ayarla
      image.style.backgroundImage = `url(${imagePath})`;
      image.querySelector(".text").style.color = textColor;
      image.querySelector(".name").style.color = textColor;
      image.querySelector(".title").style.color = textColor;
    });
  });

  // İlk textarea'daki metni güncelleme
  textInput.addEventListener("input", () => {
    const textElement = document.querySelector(".text");
    textElement.textContent = textInput.value;
  });

  // İsim alanını güncelleme
  nameInput.addEventListener("input", () => {
    const nameElement = document.querySelector(".name");
    nameElement.textContent = nameInput.value.toUpperCase(); // Her zaman büyük harfe çevir
  });

  // Unvan alanını güncelleme
  titleInput.addEventListener("input", () => {
    const titleElement = document.querySelector(".title");
    titleElement.textContent = titleInput.value.toUpperCase(); // Her zaman büyük harfe çevir
  });

  // Font büyütme/küçültme butonları
  adjustmentButtons.forEach(button => {
    button.addEventListener("click", () => {
      const textElement = document.querySelector(".text");
      const currentFontSize = parseFloat(window.getComputedStyle(textElement).fontSize);

      if (button.classList.contains("increase-font")) {
        textElement.style.fontSize = `${currentFontSize + 2}px`;
      } else if (button.classList.contains("decrease-font")) {
        textElement.style.fontSize = `${currentFontSize - 2}px`;
      }
    });
  });

  // Görseli indirme işlemi
  downloadButton.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext("2d");

    const backgroundImage = new Image();
    const bgUrl = document.querySelector(".image").style.backgroundImage.slice(5, -2);
    backgroundImage.src = bgUrl;

    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, 1080, 1080);

      // İlk metni çiz
      ctx.font = `${parseFloat(window.getComputedStyle(document.querySelector(".text")).fontSize)}px 'Causten-Black'`;
      ctx.fillStyle = document.querySelector(".text").style.color;
      ctx.fillText(textInput.value, 57, 180);

      // İsim çizimi
      ctx.font = "30pt 'Roboto Slab-Bold'";
      ctx.fillText(nameInput.value.toUpperCase(), 57, 914);

      // Unvan çizimi
      ctx.font = "24pt 'Roboto Slab-Light'";
      ctx.fillText(titleInput.value.toUpperCase(), 57, 944);

      // Görseli indir
      const link = document.createElement("a");
      link.download = "image_with_text.jpg";
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    };
  });
});
