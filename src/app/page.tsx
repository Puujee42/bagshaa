'use client'; // This is essential! It tells Next.js this is a Client Component.

import React, { useEffect, useRef } from 'react';

// We need to declare these global variables so TypeScript doesn't complain
// These are defined in the scripts we loaded in layout.tsx
declare const $: any; // Use const for global declarations if they won't be reassigned
declare const Jscex: any;
declare const Tree: any;
declare const $await: any;
export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (typeof $ === 'undefined' || typeof Jscex === 'undefined' || typeof Tree === 'undefined') {
      console.error("Required scripts are not loaded yet.");
      return;
    }

    const canvas = $('#canvas');
    if (!canvas[0] || !canvas[0].getContext) {
      $("#error").show();
      return;
    }

    const width: number = canvas.width();
    const height: number = canvas.height();
    canvas.attr("width", width);
    canvas.attr("height", height);

    const opts = {
      seed: { x: width / 2 - 20, color: "rgb(190, 26, 37)", scale: 2 },
      branch: [[535, 680, 570, 250, 500, 200, 30, 100, [[540, 500, 455, 417, 340, 400, 13, 100, [[450, 435, 434, 430, 394, 395, 2, 40]]], [550, 445, 600, 356, 680, 345, 12, 100, [[578, 400, 648, 409, 661, 426, 3, 80]]], [539, 281, 537, 248, 534, 217, 3, 40], [546, 397, 413, 247, 328, 244, 9, 80, [[427, 286, 383, 253, 371, 205, 2, 40], [498, 345, 435, 315, 395, 330, 4, 60]]], [546, 357, 608, 252, 678, 221, 6, 100, [[590, 293, 646, 277, 648, 271, 2, 80]]]]]],
      bloom: { num: 700, width: 1080, height: 650 },
      footer: { width: 1200, height: 5, speed: 10 }
    };

    const tree = new Tree(canvas[0], width, height, opts);
    const seed = tree.seed;
    const foot = tree.footer;
    let hold = 1;

    const playAudio = () => {
      audioRef.current?.play().catch(e => console.error("Audio play failed:", e));
    };

    // Correctly type the event parameter for jQuery
    canvas.on('click', function(e: JQuery.ClickEvent) {
      playAudio();
      const offset = canvas.offset();
      if (!offset) return; // Add a check for offset being undefined
      const x = e.pageX - offset.left;
      const y = e.pageY - offset.top;
      if (seed.hover(x, y)) {
        hold = 0;
        canvas.off("click").off("mousemove").removeClass('hand');
      }
    }).on('mousemove', function(e: JQuery.MouseMoveEvent) {
      const offset = canvas.offset();
      if (!offset) return;
      const x = e.pageX - offset.left;
      const y = e.pageY - offset.top;
      canvas.toggleClass('hand', seed.hover(x, y));
    });

    // This is the core logic fix.
    const runAsync = eval(Jscex.compile("async", function () {
      // The function is now a REGULAR function, not a generator (no *)
      // We must use the special "$await" function provided by the library.

      // 1. Animate the seed
      seed.draw();
      while (hold) {
          $await(Jscex.Async.sleep(10));
      }
      while (seed.canScale()) {
          seed.scale(0.95);
          $await(Jscex.Async.sleep(10));
      }
      while (seed.canMove()) {
          seed.move(0, 2);
          foot.draw();
          $await(Jscex.Async.sleep(10));
      }

      // 2. Grow the tree
      do {
          tree.grow();
          $await(Jscex.Async.sleep(10));
      } while (tree.canGrow());
      
      // 3. Bloom the flowers
      do {
          tree.flower(2);
          $await(Jscex.Async.sleep(10));
      } while (tree.canFlower());

      // 4. Move the canvas
      tree.snapshot("p1", 240, 0, 610, 680);
      while (tree.move("p1", 500, 0)) {
          foot.draw();
          $await(Jscex.Async.sleep(10));
      }
      foot.draw();
      tree.snapshot("p2", 500, 0, 610, 680);
      canvas.parent().css("background", "url(" + tree.toDataURL('image/png') + ")");
      $await(Jscex.Async.sleep(300));
      canvas.css("background", "none");
      
      // 5. Start the typewriter effect
      $("#code").show().typewriter();
    }));

    // Finally, start the entire animation sequence.
    runAsync().start();

  }, []); // The empty array [] ensures this effect runs only once.

  return (
    <div id="main">
      <div id="error">Please use <a href="http://www.google.cn/chrome/intl/zh-CN/landing_chrome.html">Chrome</a> or <a href="http://firefox.com.cn/download/">Firefox</a></div>
      
      <div id="wrap">
        <div id="text">
          <div id="code">
            <span className="say">Хайрт Ээждээ 💞</span><br />
            <span className="say">47 насны төрсөн өдрийн мэнд! 🎈</span><br />
            <span className="say">Та бол дэлхийн хамгийн гайхалтай ээж. 💖</span><br />
            <span className="say">Таны минь хайр хамгийн том эрдэнэ. ✨</span><br />
            <span className="say">Таны хийсэн бүхэнд баярлалаа. 🙏</span><br />
            <span className="say">Ирэх жил тань инээд хөөр,</span><br />
            <span className="say">аз жаргалаар дүүрэн байх болтугай. 🥳</span><br />
            <span className="say">Хайртай шүү,</span><br />
            <span className="say">Д.Мөнхбаатар</span>
          </div>
        </div>
        
        <div id="clock-box">
          ❤️ <span id="clock">Гайхамшигт 47 жилийг тэмдэглэцгээе</span> ❤️
        </div>
        
        <canvas id="canvas" width="1100" height="680"></canvas>
      </div>
    </div>
  );
}