import { HeadlessClient } from "./HeadlessClient";

const baseUrl = import.meta.env.VITE_BASE_URL
  ? import.meta.env.VITE_BASE_URL
  : "https://backdrop-sandbox.ddev.site";

async function main() {
  // Init client
  const client = new HeadlessClient(baseUrl);
  console.log("Client", client);

  // make some requests
  const mockJson = { data: "true" };

  // Render the response
  document.querySelector("#app").innerHTML = `
  <pre>${JSON.stringify(mockJson, null, 2)}</pre>`;
}

main();
