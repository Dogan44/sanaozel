let hoverCount = 0;
const hayirButon = document.getElementById("hayir");

function kacirButon() {
  hoverCount++;
  if (hoverCount >= 2) {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    hayirButon.style.position = "absolute";
    hayirButon.style.left = `${x}px`;
    hayirButon.style.top = `${y}px`;
  }
}

hayirButon.addEventListener("mouseover", kacirButon);
hayirButon.addEventListener("touchstart", kacirButon);

function cevapVer() {
  document.getElementById("cevap").classList.remove("hidden");

  const music = document.getElementById("mymusic");
  music.play().catch(() => {
    alert("Tarayıcı otomatik müziği engelledi. Lütfen sesi aç.");
  });

  startConfetti();
}

function startConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const pieces = [];

  for (let i = 0; i < 100; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 6 + 4,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      speed: Math.random() * 3 + 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of pieces) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;
    }
    requestAnimationFrame(draw);
  }

  draw();
}
