function Button(type, text) {
  return `
    <button class="btn ${type}">
      ${text}
    </button>
  `;
}

const app = document.getElementById("app");

app.innerHTML =
  Button("primary", "Primary") +
  Button("danger", "Danger") +
  Button("success", "Success");
