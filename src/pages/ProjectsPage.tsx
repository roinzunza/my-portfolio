const styles = `
  :root {
    --accent: #60CD8B;
    --accent-light: #60CD8B22;
    --bg: #0d0d0d;
    --surface: #1a1a1a;
    --border: #2a2a2a;
    --text: #f0f0f0;
    --muted: #888;
    --radius: 14px;
  }

  .sq-page {
    font-family: 'Inter', system-ui, sans-serif;
    background: #000;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  .sq-inner {
    width: 794px;
    min-height: 1123px;
    background: var(--bg);
    margin: 40px auto;
    padding: 52px 52px 40px;
    display: flex;
    flex-direction: column;
    gap: 36px;
    box-shadow: 0 4px 40px rgba(0,0,0,0.12);
  }

  .sq-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--border);
  }

  .sq-header-left {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .sq-app-name {
    font-size: 30px;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: var(--text);
  }

  .sq-app-name span {
    color: var(--accent);
  }

  .sq-tagline {
    font-size: 14px;
    color: var(--muted);
    font-weight: 500;
  }

  .sq-header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
  }

  .sq-role-badge {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--accent-light);
    padding: 4px 10px;
    border-radius: 20px;
  }

  .sq-header-right p {
    font-size: 12px;
    color: var(--muted);
  }

  .sq-sections {
    display: flex;
    flex-direction: column;
    gap: 28px;
    flex: 1;
  }

  .sq-section {
    display: grid;
    gap: 20px;
    align-items: center;
  }

  .sq-section.layout-full  { grid-template-columns: 1fr 200px; }
  .sq-section.layout-split { grid-template-columns: 1fr 1fr; }
  .sq-section.layout-chat  { grid-template-columns: 200px 1fr; }

  .sq-section-text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sq-section-number {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--accent);
  }

  .sq-section-title {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: var(--text);
  }

  .sq-section-desc {
    font-size: 13px;
    line-height: 1.65;
    color: var(--muted);
    max-width: 340px;
  }

  .sq-screenshot {
    border-radius: var(--radius);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface);
  }

  .sq-screenshot.tall   { height: 340px; }
  .sq-screenshot.medium { height: 260px; }
  .sq-screenshot.short  { height: 220px; }

  .sq-screenshot img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  .sq-two-up {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .sq-two-up-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 6px;
  }

  .sq-divider {
    height: 1px;
    background: var(--border);
  }

  .sq-hood-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px 28px;
    margin-top: 2px;
  }

  .sq-hood-item {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .sq-hood-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--text);
  }

  .sq-hood-desc {
    font-size: 11px;
    line-height: 1.55;
    color: var(--muted);
  }

  .sq-stack-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
  }

  .sq-stack-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .sq-chip {
    font-size: 11px;
    font-weight: 500;
    color: var(--text);
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 4px 10px;
    border-radius: 20px;
  }

  @media print {
    .sq-page { background: #000; }
    .sq-inner {
      margin: 0;
      box-shadow: none;
      width: 100%;
      padding: 36px 44px;
    }
  }
`;

const base = import.meta.env.BASE_URL;

export default function ProjectsPage() {
  return (
    <>
      <style>{styles}</style>
      <div className="sq-page">
        <div className="sq-inner">

          {/* Header */}
          <div className="sq-header">
            <div className="sq-header-left">
              <div className="sq-app-name">Side<span>Quest</span></div>
              <div className="sq-tagline">iOS Job Marketplace - Full-Stack Solo Project</div>
            </div>
            <div className="sq-header-right">
              <div className="sq-role-badge">iOS + Backend</div>
              <p>sidequestapp.io</p>
              <p>rosendoinzunza@gmail.com</p>
              <p>Beta Launch - May 2026</p>
            </div>
          </div>

          <div className="sq-sections">

            {/* Section 1: Discover Jobs */}
            <div className="sq-section layout-full">
              <div className="sq-section-text">
                <div className="sq-section-number">01 - Discover Jobs</div>
                <div className="sq-section-title">Swipe to Apply</div>
                <div className="sq-section-desc">
                  Applicants browse job listings through a swipeable card deck.
                  Swipe right to apply, left to pass - a familiar, low-friction
                  interaction that makes job hunting feel less like work.
                </div>
              </div>
              <div className="sq-screenshot tall">
                <img src={`${base}Applicant_feed_view.png`} alt="Applicant feed view" />
              </div>
            </div>

            <div className="sq-divider" />

            {/* Section 2: Two-Sided Marketplace */}
            <div className="sq-section-text">
              <div className="sq-section-number">02 - Two-Sided Marketplace</div>
              <div className="sq-section-title">Built for Both Sides</div>
              <div className="sq-section-desc">
                Businesses post listings and move applicants through a hiring pipeline
                (Interested → Hired). Applicants track every application in one place,
                with active and archived views.
              </div>
            </div>
            <div className="sq-two-up">
              <div>
                <div className="sq-two-up-label">Business - Listings</div>
                <div className="sq-screenshot medium">
                  <img src={`${base}biz_listings.view.png`} alt="Business listings view" />
                </div>
              </div>
              <div>
                <div className="sq-two-up-label">Applicant - Quests</div>
                <div className="sq-screenshot medium">
                  <img src={`${base}applicant_quests_view.png`} alt="Applicant quests view" />
                </div>
              </div>
            </div>

            <div className="sq-divider" />

            {/* Section 3: Messaging */}
            <div className="sq-section layout-chat">
              <div className="sq-screenshot short">
                <img src={`${base}conversation_view.png`} alt="Conversation view" />
              </div>
              <div className="sq-section-text">
                <div className="sq-section-number">03 - Real-Time Messaging</div>
                <div className="sq-section-title">Chat When It Clicks</div>
                <div className="sq-section-desc">
                  In-app messaging connects businesses and applicants the moment
                  there's mutual interest. Live updates via WebSocket, typing
                  indicators, read receipts, and push notifications keep
                  conversations moving.
                </div>
              </div>
            </div>

          </div>

          {/* Under the Hood */}
          <div className="sq-divider" />
          <div>
            <div className="sq-stack-label">Under the Hood</div>
            <div className="sq-hood-grid">
              <div className="sq-hood-item">
                <div className="sq-hood-title">JWT + Refresh Token Rotation</div>
                <div className="sq-hood-desc">Short-lived access tokens with silent refresh - users stay logged in without re-authenticating.</div>
              </div>
              <div className="sq-hood-item">
                <div className="sq-hood-title">Apple &amp; Google SSO</div>
                <div className="sq-hood-desc">Native OAuth flows on iOS alongside email/password auth, all sharing the same session pipeline.</div>
              </div>
              <div className="sq-hood-item">
                <div className="sq-hood-title">WebSocket Messaging</div>
                <div className="sq-hood-desc">Live chat with a polling fallback - messages arrive instantly without requiring a page refresh.</div>
              </div>
              <div className="sq-hood-item">
                <div className="sq-hood-title">Per-Route Rate Limiting</div>
                <div className="sq-hood-desc">Sliding window limiter keyed by IP, with separate thresholds for auth vs. registration routes.</div>
              </div>
              <div className="sq-hood-item">
                <div className="sq-hood-title">Stripe + RevenueCat</div>
                <div className="sq-hood-desc">Stripe for business subscriptions, RevenueCat for applicant in-app purchases - two billing surfaces, one codebase.</div>
              </div>
              <div className="sq-hood-item">
                <div className="sq-hood-title">AWS S3 Media Uploads</div>
                <div className="sq-hood-desc">Profile photos and video intros upload directly to S3, keeping the API server stateless.</div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="sq-divider" />
          <div>
            <div className="sq-stack-label">Built with</div>
            <div className="sq-stack-chips">
              {[
                "SwiftUI (MVVM)", "Rust / Axum", "PostgreSQL", "JWT Auth",
                "Stripe", "RevenueCat", "WebSockets", "Push Notifications",
                "AWS S3", "TestFlight",
              ].map((chip) => (
                <span key={chip} className="sq-chip">{chip}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
