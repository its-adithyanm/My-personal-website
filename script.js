// ── FOG CURSOR ──
(function() {
  var sizes = [80, 100, 60, 120, 90];
  var count = 0;

  document.addEventListener('mousemove', function(e) {
    count++;
    if (count % 3 !== 0) return;

    var dot = document.createElement('div');
    dot.className = 'fog-dot';

    var size = sizes[Math.floor(Math.random() * sizes.length)];
    dot.style.width  = size + 'px';
    dot.style.height = size + 'px';
    dot.style.left   = e.clientX + 'px';
    dot.style.top    = e.clientY + 'px';

    document.body.appendChild(dot);

    setTimeout(function() {
      dot.remove();
    }, 1200);
  });
})();

// Ease-out cubic function for animations
const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
};

document.addEventListener('DOMContentLoaded', () => {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    /* -------------------------------------
       1. PAGE LOADER
    ------------------------------------- */
    const loader = document.querySelector('.loader');
    const loaderSpans = document.querySelectorAll('.loader-text span');
    const progressBar = document.querySelector('.loader-progress');
    
    // Staggered text reveal
    loaderSpans.forEach((span, index) => {
        setTimeout(() => {
            span.style.transition = 'transform 0.5s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.5s';
            span.style.transform = 'translateY(0)';
            span.style.opacity = '1';
        }, index * 100);
    });

    // Progress bar fill
    setTimeout(() => {
        progressBar.style.transition = 'width 1.5s cubic-bezier(0.76, 0, 0.24, 1)';
        progressBar.style.width = '100%';
    }, 500);

    // Fade out loader
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2500);

    /* -------------------------------------
       3. NAVIGATION & SMOOTH SCROLL
    ------------------------------------- */
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* -------------------------------------
       4. SCROLL REVEALS (Intersection Observer)
    ------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            const target = entry.target;
            const delay = target.getAttribute('data-delay') || 0;
            
            setTimeout(() => {
                target.classList.add('active');
            }, delay);
            
            observer.unobserve(target); // Reveal only once
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    /* -------------------------------------
       5. SKILL BARS
    ------------------------------------- */
    const skillFills = document.querySelectorAll('.skill-bar-fill');
    
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            const fill = entry.target;
            const targetWidth = fill.getAttribute('data-width');
            fill.style.width = targetWidth;
            
            observer.unobserve(fill);
        });
    }, { threshold: 0.5 });

    skillFills.forEach(fill => {
        skillObserver.observe(fill);
    });

    /* -------------------------------------
       6. COUNTER ANIMATION
    ------------------------------------- */
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            let startTime = null;

            const updateCounter = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = currentTime - startTime;
                
                // Calculate percentage (0 to 1)
                let percent = Math.min(progress / duration, 1);
                // Apply easing
                percent = easeOutCubic(percent);
                
                // Set value
                counter.innerText = Math.floor(target * percent);
                
                if (progress < duration) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            
            requestAnimationFrame(updateCounter);
            observer.unobserve(counter);
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    /* -------------------------------------
       7. PARALLAX
    ------------------------------------- */
    const heroBgText = document.querySelector('.hero-bg-text-container');
    
    if (heroBgText && !isTouch) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            // Move text up slightly slower than scroll speed
            heroBgText.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.4}px))`;
        });
    }

    /* -------------------------------------
       8. 3D TILT EFFECT
    ------------------------------------- */
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    if (!isTouch) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate rotation (-10 to 10 degrees)
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                card.style.transition = 'none'; // Remove transition during move for instant tracking
                
                // Light glare effect (optional subtle enhancement)
                card.style.boxShadow = `${-rotateY}px ${rotateX}px 20px rgba(0,0,0,0.1)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                card.style.transition = 'transform 0.5s cubic-bezier(0.76, 0, 0.24, 1), box-shadow 0.5s cubic-bezier(0.76, 0, 0.24, 1)';
                card.style.boxShadow = 'none';
            });
            
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.1s ease-out';
            });
        });
    }

    // MODAL DATA (now loaded from window.siteContent)
    // MODAL LOGIC
    const overlay   = document.getElementById('modalOverlay');
    const modalBox  = document.getElementById('modalBox');
    const modalClose = document.getElementById('modalClose');
    const modalNum   = document.getElementById('modalNum');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody  = document.getElementById('modalBody');

    function openModal(index) {
      const data = window.siteContent.work.cards[index];
      modalNum.textContent   = data.num;
      modalTitle.textContent = data.title;
      modalBody.innerHTML    = data.modalBody;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    }

    function closeModal() {
      overlay.classList.add('closing');
      setTimeout(() => {
        overlay.classList.remove('active', 'closing');
        document.body.style.overflow = '';
        document.body.classList.remove('modal-open');
        modalBox.scrollTop = 0;
      }, 300);
    }

    // Attach click to each work card
    document.querySelectorAll('.work-card').forEach((card, index) => {
      card.addEventListener('click', () => openModal(index));
      card.style.cursor = 'pointer';
    });

    // Close on X button
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close on backdrop click
    if (overlay) {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) closeModal();
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) closeModal();
    });
});
