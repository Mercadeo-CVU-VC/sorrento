document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-apartamento");
  const cards = document.querySelectorAll(".srr-card");
  const texts = document.querySelectorAll('.content');
  const imgs = document.querySelectorAll('.apt')

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const idsToShow = button.dataset.card.split(",");
      const idcontent = button.dataset.content; 

      // Oculta todos los íconos
      cards.forEach(card => {
        card.classList.add("hidden");
      });

      texts.forEach(text => text.classList.add("hidden"));
      imgs.forEach(img => img.classList.add("hidden"));

      // Muestra solo los íconos correspondientes
      idsToShow.forEach(id => {
        const cardEl = document.getElementById(`card-${id.trim()}`);
        if (cardEl) cardEl.classList.remove("hidden");
      });

      const selectedText = document.getElementById(`content-${idcontent}`);
      if (selectedText) selectedText.classList.remove("hidden");

      const selectedImg = document.getElementById(`apt-${idcontent}`);
      if (selectedImg) selectedImg.classList.remove("hidden");

      buttons.forEach(btn => btn.classList.remove("btn-active"));
      button.classList.add("btn-active");
    });
  });
});