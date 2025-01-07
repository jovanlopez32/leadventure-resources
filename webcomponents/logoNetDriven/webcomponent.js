class LogoNetDriven extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          :host {
            display: inline-block;
            position: relative;
          }
          .container {
            border-radius: 0.75rem;
            overflow: hidden;
            cursor: pointer;
            padding: 15px;
            border: 1px solid #333;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }
          img {
            display: block;
            height: 100px;
            max-width: 150px;
            width: 100%;
            object-fit: contain;
          }
          .overlay {
            position: absolute;
            border-radius: 0.75rem;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s;
          }
          :host(:hover) .overlay {
            opacity: 1;
          }
          .copy-icon {
            width: 24px;
            height: 24px;
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"></path><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path></svg>');
            background-size: contain;
            background-repeat: no-repeat;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .copy-text {
            color: white;
            font-size: 14px;
            font-family: Arial, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
          }
        </style>
        <div class="container">
          <img id="logoImg" src="" alt="">
          <div class="overlay">
            <div class="copy-icon"></div>
          </div>
        </div>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      const src = this.getAttribute('src');
      const title = this.getAttribute('title');
      const img = this.shadowRoot.querySelector('#logoImg');
      img.src = src;
      img.alt = title;
      const overlay = this.shadowRoot.querySelector('.overlay');
      const copyIcon = this.shadowRoot.querySelector('.copy-icon');
  
      overlay.addEventListener('click', () => {
        const imgTag = `<img src="${src}" alt="${title}">`;
        navigator.clipboard.writeText(imgTag).then(() => {
          copyIcon.classList.add('copy-text');
          copyIcon.innerHTML = 'copied to clipboard!';
          copyIcon.style.backgroundImage = 'none';
  
          setTimeout(() => {
            copyIcon.classList.remove('copy-text');
            copyIcon.innerHTML = '';
            copyIcon.style.backgroundImage = 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"></path><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path></svg>\')';
          }, 1500);
        }).catch(err => {
          console.error('Error copy to clipboard: ', err);
        });
      });
    }
  }
  
  customElements.define('logo-net-driven', LogoNetDriven);