import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initSmoothnessTest() {
  const progress = document.querySelector('[data-test-progress]');
  const orb = document.querySelector('[data-test-orb]');
  const sections = gsap.utils.toArray('[data-test-section]');

  if (!progress || !orb || !sections.length) return;

  gsap.to(progress, {
    scaleX: 1,
    transformOrigin: 'left center',
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    },
  });

  sections.forEach((section, index) => {
    gsap.fromTo(
      section.querySelector('[data-test-copy]'),
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 74%',
          once: true,
        },
      },
    );

    gsap.to(orb, {
      xPercent: index * 12,
      yPercent: index * -8,
      rotation: index * 18,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    });
  });
}
