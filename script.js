const channels = document.querySelectorAll(".channel");
const content = document.querySelector(".content");

channels.forEach(channel => {
  channel.addEventListener("click", () => {
    content.innerHTML = `
      <h1>${channel.innerText}</h1>
      <p>Bu kanal için içerik buraya gelecek.</p>
    `;
  });
});
