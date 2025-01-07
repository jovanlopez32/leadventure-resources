document.addEventListener('DOMContentLoaded', () => {
    const logos = [
      { src: 'https://urldelaimagen.com/image/ford_aff.png', title: 'FORD LOGO' },
      { src: 'https://urldelaimagen.com/image/tesla_aff.png', title: 'TESLA LOGO' },
      { src: 'https://urldelaimagen.com/image/bmw_aff.png', title: 'BMW LOGO' },

    ];
  
    const logoContainer = document.getElementById('logoContainer');
    const logoSearch = document.getElementById('logoSearch');
  
   
    const renderLogos = (filteredLogos) => {
      logoContainer.innerHTML = '';
      filteredLogos.forEach(logo => {
        const logoElement = document.createElement('logo-net-driven');
        logoElement.setAttribute('src', logo.src);
        logoElement.setAttribute('title', logo.title);
        logoElement.classList.add('logo-item');
        logoContainer.appendChild(logoElement);
      });
    };

    const filterLogos = (query) => {
      return logos.filter(logo => logo.title.toLowerCase().includes(query.toLowerCase()));
    };
  
    renderLogos(logos);
  
   
    logoSearch.addEventListener('input', (event) => {
      const query = event.target.value;
      const filteredLogos = filterLogos(query);
      renderLogos(filteredLogos);
    });
  });
  