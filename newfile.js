const profile = {
  name: 'Jazzy',
  title: 'New to this interface',
  message:
    'I am still getting used to this interface, but I hope to catch up quickly and learn as fast as possible.',
  goals: ['Learn fast', 'Build confidence', 'Keep improving'],
};

function renderInterface(user) {
  const goals = user.goals
    .map((goal) => `<li>${goal}</li>`)
    .join('');

  return `
    <main style="
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: linear-gradient(135deg, #0f172a, #1e293b);
      font-family: Arial, sans-serif;
      color: #e2e8f0;
      margin: 0;
    ">
      <section style="
        width: min(520px, 90vw);
        background: rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(148, 163, 184, 0.3);
        border-radius: 18px;
        box-shadow: 0 20px 50px rgba(15, 23, 42, 0.5);
        padding: 32px;
      ">
        <p style="margin: 0 0 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #67e8f9; font-size: 12px;">
          ${user.title}
        </p>
        <h1 style="margin: 0 0 16px; font-size: clamp(2rem, 4vw, 3rem);">
          Hi, I'm ${user.name}.
        </h1>
        <p style="margin: 0 0 20px; line-height: 1.6; font-size: 1.02rem; color: #cbd5e1;">
          ${user.message}
        </p>
        <div style="margin-top: 12px;">
          <h2 style="margin-bottom: 10px; font-size: 1rem; color: #f8fafc;">Goals</h2>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #cbd5e1;">
            ${goals}
          </ul>
        </div>
      </section>
    </main>
  `;
}

if (typeof document !== 'undefined') {
  document.body.innerHTML = renderInterface(profile);
} else {
  console.log(renderInterface(profile));
}
