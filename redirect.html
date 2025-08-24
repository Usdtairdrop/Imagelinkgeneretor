const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const result = document.getElementById("result");
const shareLink = document.getElementById("shareLink");
const copyBtn = document.getElementById("copyBtn");
const openBtn = document.getElementById("openBtn");

uploadBtn.addEventListener("click", async () => {
  const file = fileInput.files[0];
  if (!file) return alert("Please select a file!");

  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (data.url) {
    const link = `${window.location.origin}/redirect.html?u=${encodeURIComponent(data.url)}`;
    shareLink.value = link;
    openBtn.href = link;
    result.style.display = "block";
  } else {
    alert("Upload failed!");
  }
});

copyBtn.addEventListener("click", () => {
  shareLink.select();
  document.execCommand("copy");
  alert("Copied!");
});
