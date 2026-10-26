import './styles.css';
import { createLenis } from './lenis.js';
import { initSmoothnessTest } from './animations.js';

document.documentElement.classList.add('lenis');

const app = document.querySelector('#app');
app.innerHTML = `
  <div class="test-shell">
    <div class="test-progress" data-test-progress></div>
    <nav class="test-nav" aria-label="Prototype navigation">
      <span><strong>Karnataka</strong> / a story in scroll</span>
      <span>stage 01 — smoothness</span>
    </nav>
    <header class="test-hero" data-test-section>
      <div class="test-kicker">A weighted scroll prototype</div>
      <div>
        <h1 data-test-copy>Scroll into <em>history.</em></h1>
        <p data-test-copy>Lenis is the only scroll loop. The next stage turns this quiet test into a cinematic Karnataka opening.</p>
      </div>
      <div class="test-orb" data-test-orb aria-hidden="true"></div>
    </header>
    <section class="test-section" data-test-section>
      <div data-test-copy><span>01 / weighted motion</span><h2>Slow enough<br>to notice.</h2><p>Scroll-linked movement uses a smoothed scrub so the page feels like a camera, not a stack of cards.</p></div>
    </section>
    <section class="test-section" data-test-section>
      <div data-test-copy><span>02 / one loop</span><h2>One rhythm.<br>No jump cuts.</h2><p>The Lenis frame is connected to ScrollTrigger once, keeping the animation clock in one place.</p></div>
    </section>
    <section class="test-section" data-test-section>
      <div data-test-copy><span>03 / next</span><h2>The map<br>arrives next.</h2><p>Stage 02 will replace this prototype with the real Karnataka outline and the flag-red / flag-yellow opening sequence.</p></div>
    </section>
  </div>
`;

createLenis();
initSmoothnessTest();
