class TabsNetDriven extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
        <style>
          .tabs-container {
            background-color: #fafafa;
            padding: 20px 20px 40px;
            border-radius: 8px;
          }
  
          .tabs-header {
            display: flex;
            gap: 1rem;
            margin-bottom: 0rem;
            background-color: #f1f1f1;
            padding: 10px;
            border-radius: .45rem;
          }
  
          .tab-button {
            flex: 1;
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            background: transparent;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
            color: #333;
          }
  
          .tab-button:hover {
            background-color: #e2e2e2;
          }
  
          .tab-button.active {
            background-color: white;
           
          }
  
          .tab-content {
            display: none;
            border-radius: 6px;
            overflow: hidden;
          }
  
          .tab-content.active {
            display: block;
          }
  
        </style>
  
        <div class="tabs-container">
          <div class="tabs-header">
            <button class="tab-button" data-tab="html">HTML</button>
            <button class="tab-button" data-tab="scss">SCSS</button>
            <button class="tab-button" data-tab="javascript">JavaScript</button>
          </div>
          
          <div class="tab-panels">
            <div class="tab-content" data-content="html">
              <slot name="code-html"></slot>
            </div>
            <div class="tab-content" data-content="scss">
              <slot name="code-scss"></slot>
            </div>
            <div class="tab-content" data-content="javascript">
              <slot name="code-javascript"></slot>
            </div>
          </div>
        </div>
      `;

    this.handleTabs = this.handleTabs.bind(this);
  }

  connectedCallback() {
    // Activar la primera pestaña por defecto
    const firstTab = this.shadowRoot.querySelector(".tab-button");
    const firstContent = this.shadowRoot.querySelector(".tab-content");
    if (firstTab && firstContent) {
      firstTab.classList.add("active");
      firstContent.classList.add("active");
    }

    // Agregar event listeners
    const tabButtons = this.shadowRoot.querySelectorAll(".tab-button");
    tabButtons.forEach((button) => {
      button.addEventListener("click", this.handleTabs);
    });
  }

  disconnectedCallback() {
    // Limpiar event listeners
    const tabButtons = this.shadowRoot.querySelectorAll(".tab-button");
    tabButtons.forEach((button) => {
      button.removeEventListener("click", this.handleTabs);
    });
  }

  handleTabs(event) {
    const tabName = event.target.dataset.tab;

    // Actualizar botones
    this.shadowRoot.querySelectorAll(".tab-button").forEach((button) => {
      button.classList.toggle("active", button.dataset.tab === tabName);
    });

    // Actualizar contenido
    this.shadowRoot.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.toggle("active", content.dataset.content === tabName);
    });
  }
}

customElements.define("tabs-net-driven", TabsNetDriven);
