
export const initScrollAnimation = () => {
  // Add basic scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        
        // Add custom animation based on data attributes
        const el = entry.target as HTMLElement;
        if (el.dataset.animation === 'fade-in') {
          el.classList.add('animate-fade-in');
        } else if (el.dataset.animation === 'slide-in-left') {
          el.classList.add('animate-slide-in-left');
        } else if (el.dataset.animation === 'slide-in-right') {
          el.classList.add('animate-slide-in-right');
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => {
    observer.observe(el);
  });
  
  // Parallax effect for background elements
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    parallaxElements.forEach((element) => {
      const el = element as HTMLElement;
      const speed = el.dataset.speed ? parseFloat(el.dataset.speed) : 0.15;
      const yPos = -scrollTop * speed;
      el.style.transform = `translateY(${yPos}px)`;
    });
  });
};

// Reveal sections one by one with staggered animations
export const revealSections = () => {
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    root: null,
    rootMargin: '-50px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target;
        section.classList.add('revealed');
        
        // Stagger children animations
        const children = section.querySelectorAll('.stagger-item');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('animated');
          }, 100 * index);
        });
        
        observer.unobserve(section);
      }
    });
  }, observerOptions);
  
  sections.forEach((section) => {
    observer.observe(section);
    section.classList.add('transition-section');
  });
};

// Initialize both animation systems
export const initAllAnimations = () => {
  initScrollAnimation();
  revealSections();
  
  // Add scroll triggered class changes
  const handleScroll = () => {
    const scrolled = window.scrollY > 50;
    const navbar = document.querySelector('nav');
    if (navbar) {
      if (scrolled) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize on load
};
