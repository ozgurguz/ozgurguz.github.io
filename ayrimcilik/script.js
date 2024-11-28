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

      // HTML'deki stilleri alarak canvas üzerinde aynı şekilde uygula
      const textElement = document.querySelector(".text");
      const textStyle = window.getComputedStyle(textElement);

      // İlk metni çiz
      const fontSize = parseFloat(textStyle.fontSize);
      ctx.font = `${fontSize}px ${textStyle.fontFamily}`;
      ctx.fillStyle = textStyle.color;

      // İlk metin için word wrapping
      wrapText(ctx, textInput.value, 57, 260, 911, fontSize + 10); // Y koordinatını 260 olarak ayarladık

      // İsim
      const nameElement = document.querySelector(".name");
      const nameStyle = window.getComputedStyle(nameElement);
      ctx.font = `${nameStyle.fontSize} ${nameStyle.fontFamily}`;
      ctx.fillText(nameInput.value.toUpperCase(), 57, 914);

      // Unvan
      const titleElement = document.querySelector(".title");
      const titleStyle = window.getComputedStyle(titleElement);
      ctx.font = `${titleStyle.fontSize} ${titleStyle.fontFamily}`;
      ctx.fillText(titleInput.value.toUpperCase(), 57, 944);

      // Görseli indir
      const link = document.createElement("a");
      link.download = "Kart_1080px.jpg";
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    };
  });

  /**
   * Metni belirtilen sınırlar içinde kaydırır.
   * @param {CanvasRenderingContext2D} ctx - Canvas'ın 2D bağlamı.
   * @param {string} text - Çizilecek metin.
   * @param {number} x - Başlangıç x koordinatı.
   * @param {number} y - Başlangıç y koordinatı.
   * @param {number} maxWidth - Metnin maksimum genişliği.
   * @param {number} lineHeight - Her satır arasındaki mesafe.
   */
  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const testWidth = ctx.measureText(testLine).width;

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }
});
