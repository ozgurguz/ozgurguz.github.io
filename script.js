document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const textInputs = document.querySelectorAll(".text-input");
    const downloadButtons = document.querySelectorAll(".download-btn");
    const adjustmentButtons = document.querySelectorAll(".adjust-btn");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const imagePath = button.getAttribute("data-image");
        const textColor = button.getAttribute("data-text-color");
        const image = button.closest(".image-container").querySelector(".image");
        const text = image.querySelector(".text");
  
        // Arka plan resmini ve metin rengini ayarla
        image.style.backgroundImage = `url(${imagePath})`;
        text.style.color = textColor;
      });
    });
  
    textInputs.forEach(textInput => {
      textInput.addEventListener("input", () => {
        const imageContainer = textInput.closest(".image-container");
        const text = imageContainer.querySelector(".text");
        text.textContent = textInput.value;
      });
    });
  
    adjustmentButtons.forEach(button => {
      button.addEventListener("click", () => {
        const imageContainer = button.closest(".image-container");
        const textElement = imageContainer.querySelector(".text");
  
        if (button.classList.contains("increase-font")) {
          const currentFontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
          textElement.style.fontSize = `${currentFontSize + 1}px`;
        } else if (button.classList.contains("decrease-font")) {
          const currentFontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
          textElement.style.fontSize = `${currentFontSize - 1}px`;
        }
      });
    });
  
    downloadButtons.forEach(downloadButton => {
      downloadButton.addEventListener("click", () => {
        const imageContainer = downloadButton.closest(".image-container");
        const imageDiv = imageContainer.querySelector(".image");
        const text = imageDiv.querySelector(".text").textContent;
  
        const canvas = document.createElement("canvas");
        canvas.width = 1080;
        canvas.height = 1080;
        const ctx = canvas.getContext("2d");
  
        // Arka plan resmini çiz
        const backgroundImage = new Image();
        const bgUrl = imageDiv.style.backgroundImage.slice(5, -2); // URL'yi temizle
        backgroundImage.src = bgUrl;
  
        backgroundImage.onload = () => {
          ctx.drawImage(backgroundImage, 0, 0, 1080, 1080);
  
          // Metni çizmek için sınırlar
          const textX = 57; // Sol kenar
          const textY = 180; // Üst kenar
          const maxWidth = 911; // Sağ kenar (968 - 57)
          const lineHeight = parseFloat(window.getComputedStyle(imageDiv.querySelector(".text")).lineHeight);
  
          // Metin özellikleri
          ctx.font = `${parseFloat(window.getComputedStyle(imageDiv.querySelector(".text")).fontSize)}px 'Causten-Bold'`;
          ctx.fillStyle = imageDiv.querySelector(".text").style.color;
          ctx.textAlign = "left";
          ctx.textBaseline = "top";
  
          wrapText(ctx, text, textX, textY, maxWidth, lineHeight);
  
          // Görseli indirilebilir yap
          const link = document.createElement("a");
          link.download = "image_with_text.jpg";
          link.href = canvas.toDataURL("image/jpeg");
          link.click();
        };
      });
    });
  
    /**
     * Metni belirtilen genişlik sınırına göre kaydırır.
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
  