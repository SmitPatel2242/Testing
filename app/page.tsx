export default function Home() {
  return (
    <main>
      <div className="container">
        <span className="badge">Foundation v0.1</span>
        <h1>Telegram Automation Platform</h1>
        <p className="muted">Production-oriented foundation for Telegram bots, automations, scheduling, logs and management.</p>
        <div className="grid">
          <div className="card"><strong>Next.js</strong><p className="muted">Application and server endpoints.</p></div>
          <div className="card"><strong>Supabase</strong><p className="muted">Database, authentication and storage.</p></div>
          <div className="card"><strong>Telegram</strong><p className="muted">Bot API integration and webhooks.</p></div>
          <div className="card"><strong>Vercel</strong><p className="muted">Deployment and runtime.</p></div>
        </div>
      </div>
    </main>
  );
}
