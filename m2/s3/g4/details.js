const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("picId");

window.onload = async () => {
  const resp = await fetch("https://api.pexels.com/v1/photos/" + id, {
    headers: {
      Authorization: "[LA TUA API KEY QUI]",
    },
  });
  const picInfos = await resp.json();

  console.log(picInfos);
  const imgContent = document.querySelector("#img-content");

  const img = document.createElement("img");
  img.src = picInfos.src.original;
  img.classList.add("img-fluid", "rounded-lg", "shadow-lg");

  imgContent.appendChild(img);

  const h2 = document.createElement("h2");
  const photographerLink = document.createElement("a");
  photographerLink.classList.add("text-dark", "d-inline-block", "mt-4");
  photographerLink.href = picInfos.photograper_url;
  photographerLink.innerText = picInfos.photographer;
  h2.appendChild(photographerLink);
  imgContent.appendChild(h2);

  const backLink = document.createElement("a");
  backLink.href = "./index.html";
  backLink.innerText = "⬅️ Go back Home";
  backLink.className = "mb-5";
  imgContent.appendChild(backLink);

  const body = document.querySelector("body");
  body.style.cssText = `min-height: 100vh; background-color: ${picInfos.avg_color}`;
};
