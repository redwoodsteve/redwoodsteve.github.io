async function readText(event) {
  const file = event.target.files.item(0)
  const text = await file.text();
  
document.getElementById('text-val').value = text;
}