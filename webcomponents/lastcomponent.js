import { codeToHtml } from "https://esm.sh/shiki@1.0.0"

class CodeNetDriven extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.innerHTML = `
            <style>
                .wrapper {
                    position: relative;
                    margin: 20px 0;
                    overflow: hidden;
                    border-radius: 10px;
                }
                
                .code-container {
                    padding: 20px;
                    padding-top: 50px; 
                    background-color: #1e1e1e;
                    border: 1px solid #333;
                    overflow: auto;
                    max-height: 200px;
                }
                
                .button-wrapper {
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 50px;
                    width: 100%;
                    background-color: #1e1e1e;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding-right: 25px;
                    border-bottom: 1px solid #333;
                }

                .copy-button {
                    padding: 8px 12px;
                    background: transparent;
                    border: 1px solid #666;
                    border-radius: 4px;
                    color: #fff;
                    cursor: pointer;
                    font-size: 12px;
                    transition: all 0.2s;
                }

                .copy-button:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                    border-color: #888;
                }

                /* Estilos para la barra de scroll */
                .code-container::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }

                .code-container::-webkit-scrollbar-track {
                    background: #2e2e2e;
                }

                .code-container::-webkit-scrollbar-thumb {
                    background: #666;
                    border-radius: 4px;
                }

                .code-container::-webkit-scrollbar-thumb:hover {
                    background: #888;
                }
            </style>
            <div class="wrapper">
                <div class="button-wrapper">
                    <button class="copy-button">Copy code</button>
                </div>
                <div class="code-container">
                    <div class="code-content"></div>
                </div>
            </div>
        `
  }

  async connectedCallback() {
    const rawCode = this.innerHTML.trim()
    const code = this.innerHTML.trim()
    const language = this.getAttribute("codeFormat") || "html"

    let formattedCode = rawCode
    try {
      if (language === "html") {
        formattedCode = html_beautify(rawCode, { indent_size: 2 })
      } else if (language === "scss") {
        formattedCode = css_beautify(rawCode, { indent_size: 2 })
      } else if (language === "javascript") {
        formattedCode = js_beautify(rawCode, { indent_size: 2 })
      }
    } catch (error) {
      console.warn("Error al formatear el código:", error)
    }

    try {
      const highlightedCode = await codeToHtml(formattedCode, {
        lang: language,
        theme: "min-dark",
      })
      this.shadowRoot.querySelector(".code-content").innerHTML = highlightedCode
    } catch (error) {
      console.error("Error al resaltar el código:", error)
      this.shadowRoot.querySelector(".code-content").textContent = formattedCode
    }

    this.shadowRoot
      .querySelector(".copy-button")
      .addEventListener("click", () => this.copyCode(code))
  }

  copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
      const button = this.shadowRoot.querySelector(".copy-button")
      const originalText = button.textContent
      button.textContent = "Copied!"
      setTimeout(() => (button.textContent = originalText), 2000) // Volvemos al texto original tras 2 segundos
    })
  }
}

customElements.define("code-net-driven", CodeNetDriven)
