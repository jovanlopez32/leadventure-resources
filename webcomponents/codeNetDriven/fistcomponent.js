  // Importamos la función para resaltar código desde una librería externa
  import { codeToHtml } from "https://esm.sh/shiki@1.0.0";
  
  /* Creamos un nuevo Web Component llamado "CodeNetDriven" */
  class CodeNetDriven extends HTMLElement {
      constructor() {
          super(); // Llamamos al constructor de HTMLElement
          this.attachShadow({ mode: 'open' }); // Creamos un Shadow DOM para encapsular estilos y estructura

          // Estructura del componente en HTML y CSS
          this.shadowRoot.innerHTML = `
              <style>
                  .code-container {
                      padding: 20px;
                      border-radius: 8px;
                      background-color: #1e1e1e;
                      border: 1px solid #333;
                      margin: 20px 0;
                      position: relative;
                      overflow: auto;
                  }
                  .copy-button {
                      position: fixed;
                      top: 10px;
                      right: 10px;
                      padding: 8px;
                      background: transparent;
                      border: 1px solid #666;
                      border-radius: 4px;
                      color: #fff;
                      cursor: pointer;
                      font-size: 12px;
                      transition: background-color 0.2s;
                  }
                  .copy-button:hover {
                      background-color: rgba(255, 255, 255, 0.1);
                  }
              </style>
              <div class="code-container">
                  <button class="copy-button">Copy code</button>
                  <div class="code-content"></div>
              </div>
          `;
      }

      /* Método que se ejecuta cuando el componente se añade al DOM */
      async connectedCallback() {
          const code = this.innerHTML.trim(); // Obtenemos el código original dentro del componente
          const language = this.getAttribute('codeFormat') || 'html'; // Obtenemos el lenguaje o asumimos 'html'

          try {
              // Convertimos el código a una versión resaltada con la librería Shiki
              const highlightedCode = await codeToHtml(code, {
                  lang: language,
                  theme: 'min-dark'
              });
              this.shadowRoot.querySelector('.code-content').innerHTML = highlightedCode;
          } catch (error) {
              console.error('Error al resaltar el código:', error);
              this.shadowRoot.querySelector('.code-content').textContent = code; // Muestra el código original si hay error
          }

          // Activamos el botón de copiar
          this.shadowRoot.querySelector('.copy-button').addEventListener('click', () => this.copyCode(code));
      }

      /* Método para copiar el código al portapapeles */
      copyCode(code) {
          navigator.clipboard.writeText(code).then(() => {
              const button = this.shadowRoot.querySelector('.copy-button');
              const originalText = button.textContent;
              button.textContent = 'Copied!';
              setTimeout(() => button.textContent = originalText, 2000); // Volvemos al texto original tras 2 segundos
          });
      }
  }

  // Registramos el Web Component con su nombre
  customElements.define('code-net-driven', CodeNetDriven);