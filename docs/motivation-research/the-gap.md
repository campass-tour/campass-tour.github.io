import { Rocket, Target, BookOpen, ShoppingBag, ExternalLink, Library, Globe } from 'lucide-react';

# The Gap

To define the uniqueness of **Campass**, we conducted a cross-analysis of academic research and commercial products. By mapping out the current landscape, we identified a "Structural Void" where high-performance Web-rendering meets deep campus cultural narrative.

---

## 1. Academic Research Insights
*Focus: Theoretical frameworks for gamification, AR usability, and digital placemaking.*

<div style={{ overflowX: 'auto', marginBottom: '2.5rem', marginTop: '1.5rem' }}>
  <table style={{ 
    width: '100%', 
    borderCollapse: 'separate', 
    borderSpacing: '0', 
    borderRadius: '20px', 
    overflow: 'hidden', 
    border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)',
    background: 'var(--button-outline-bg)'
  }}>
    <thead>
      <tr style={{ background: 'rgba(var(--ifm-color-primary-rgb), 0.05)' }}>
        <th style={{ padding: '1.2rem', textAlign: 'left', color: 'var(--ifm-color-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', width: '30%' }}>Research & Source</th>
        <th style={{ padding: '1.2rem', textAlign: 'left', color: 'var(--ifm-color-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Contributions</th>
        <th style={{ padding: '1.2rem', textAlign: 'left', color: 'var(--ifm-color-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Identified Gaps</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{ borderBottom: '1px solid rgba(var(--ifm-color-primary-rgb), 0.05)' }}>
        <td style={{ padding: '1.2rem' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>Gamification in LBS</div>
          <a href="https://dl.acm.org/doi/abs/10.1145/1978942.1979295" target="_blank" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--ifm-color-primary)', textDecoration: 'none' }}>
            ACM Digital Library <ExternalLink size={12} />
          </a>
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Validated badge systems for engagement<br/>
          2. Established reward loops for exploration<br/>
          3. Proven efficacy of "Treasure Hunt" mechanics
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Over-reliance on leaderboard competition<br/>
          2. Ignored long-term "Novelty DecayBase"<br/>
          3. Weak direct peer-to-peer social interaction
        </td>
      </tr>
      <tr style={{ borderBottom: '1px solid rgba(var(--ifm-color-primary-rgb), 0.05)' }}>
        <td style={{ padding: '1.2rem' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>Outdoor Interactive Education</div>
          <a href="https://www.mdpi.com/2076-3417/11/16/7515" target="_blank" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--ifm-color-primary)', textDecoration: 'none' }}>
            MDPI Applied Sciences <ExternalLink size={12} />
          </a>
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Integrated AR with Geolocation<br/>
          2. Optimized Web-based AR for casual users<br/>
          3. Highlighted "Instant Capture" for sharing
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. High latency in complex 3D asset loading<br/>
          2. Lacks persistent binding to specific sites<br/>
          3. High friction for "passer-by" scenarios
        </td>
      </tr>
      <tr style={{ borderBottom: '1px solid rgba(var(--ifm-color-primary-rgb), 0.05)' }}>
        <td style={{ padding: '1.2rem' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>Performing the Digital Self</div>
          <a href="https://dl.acm.org/doi/fullHtml/10.1145/3364997" target="_blank" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--ifm-color-primary)', textDecoration: 'none' }}>
            ACM CHI Conference <ExternalLink size={12} />
          </a>
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Analyzed location-based identity expression<br/>
          2. Explored digital layers in physical spaces<br/>
          3. Defined sense of community in placemaking
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Focused on urban rather than micro-campus<br/>
          2. Interaction remains mostly asynchronous<br/>
          3. Technical implementation stays conceptual
        </td>
      </tr>
      <tr>
        <td style={{ padding: '1.2rem' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>Virtualizing Campus Tours</div>
          <a href="https://www.researchgate.net/publication/346035044" target="_blank" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--ifm-color-primary)', textDecoration: 'none' }}>
            ResearchGate Study <ExternalLink size={12} />
          </a>
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Identified student orientation pain points<br/>
          2. Validated gamified navigation for anxiety<br/>
          3. Structured data on user perception
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Narrative structures are too linear/rigid<br/>
          2. Fails to sustain engagement post-onboarding<br/>
          3. Ignored non-gamer demographics
        </td>
      </tr>
    </tbody>
  </table>
</div>

---

## 2. Commercial Landscape
*Focus: Market-proven engagement models and their limitations.*

<div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
  <table style={{ 
    width: '100%', 
    borderCollapse: 'separate', 
    borderSpacing: '0', 
    borderRadius: '20px', 
    overflow: 'hidden', 
    border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)',
    background: 'var(--button-outline-bg)'
  }}>
    <thead>
      <tr style={{ background: 'rgba(var(--ifm-color-primary-rgb), 0.05)' }}>
        <th style={{ padding: '1.2rem', textAlign: 'left', color: 'var(--ifm-color-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', width: '30%' }}>Competitor / Product</th>
        <th style={{ padding: '1.2rem', textAlign: 'left', color: 'var(--ifm-color-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Strengths</th>
        <th style={{ padding: '1.2rem', textAlign: 'left', color: 'var(--ifm-color-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Missed Opportunities</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{ borderBottom: '1px solid rgba(var(--ifm-color-primary-rgb), 0.05)' }}>
        <td style={{ padding: '1.2rem' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>Super Nintendo World</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Power-Up Band System</div>
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Seamless NFC hardware interaction<br/>
          2. Top-tier emotional resonance with IPs<br/>
          3. Strong "Treasure Hunt" & collection loops
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Requires expensive specialized hardware<br/>
          2. Disconnected from real-world navigation<br/>
          3. Closed ecosystem; no UGC support
        </td>
      </tr>
      <tr style={{ borderBottom: '1px solid rgba(var(--ifm-color-primary-rgb), 0.05)' }}>
        <td style={{ padding: '1.2rem' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>Snapchat / Instagram AR</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Social AR & Lens Studio</div>
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Zero-friction viral social sharing<br/>
          2. Massive library of interactive filters<br/>
          3. Best-in-class AR usability for mobile
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Filters lack specific geolocation/history ties<br/>
          2. No long-term "Collection" or progression<br/>
          3. Lacks functional/utilitarian campus toolsets
        </td>
      </tr>
      <tr style={{ borderBottom: '1px solid rgba(var(--ifm-color-primary-rgb), 0.05)' }}>
        <td style={{ padding: '1.2rem' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>Google Maps Reviews</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Location-based UGC</div>
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Massive database of authentic photos/reviews<br/>
          2. Highly reliable utilitarian navigation<br/>
          3. Mature Local Guides incentive system
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Content is overly commercial/adult-oriented<br/>
          2. Lacks "Instant Presence" and playfulness<br/>
          3. Missing the "Insider" vibe of student life
        </td>
      </tr>
      <tr>
        <td style={{ padding: '1.2rem' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>Official Campus Apps</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>USTC / XJTLU Native Apps</div>
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. Reliable map & service integration<br/>
          2. High authority and data accuracy<br/>
          3. Excellent offline caching for schedule
        </td>
        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
          1. High friction (Requires App Store download)<br/>
          2. Purely utilitarian; lacks "Soul" and fun<br/>
          3. Fails to foster a sense of social belonging
        </td>
      </tr>
    </tbody>
  </table>
</div>

---

## 3. The Strategic Void

By synthesizing these findings, **Campass** positions itself at the intersection of three structural gaps:

### 3.1 The Access Gap: Web-First AR
Current AR solutions are either too heavy (Native Apps) or too shallow (Social Filters). Campass utilizes a **Web-first architecture** to eliminate the "Download Friction," enabling seamless, low-latency AR interactions for **spontaneous capture** scenarios.

### 3.2 The Interaction Gap: Identity-Based Utility
Traditional maps are utilitarian but cold; games are engaging but lack utility. Our **Mascot Summoning** mechanic bridges NFC-based check-ins (Functional) with digital identity progression (Emotional), transforming navigation into a form of **self-expression**.

### 3.3 The Narrative Gap: Peer-to-Peer "Insider" Social
Generic platforms are too broad, and official apps are too formal. Campass focuses on **Location-Bound UGC**, such as our "Peer Whispers" feature. This preserves authentic, niche student traces that foster a genuine **sense of belonging** often ignored by official tools.

---

<div style={{ 
  background: 'var(--button-outline-bg)', 
  padding: '1.5rem', 
  borderRadius: '20px', 
  display: 'flex', 
  gap: '1.2rem',
  alignItems: 'center',
  marginTop: '2.5rem',
  border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)'
}}>
  <div style={{ background: 'var(--ifm-color-primary)', color: '#fff', padding: '0.6rem', borderRadius: '12px', display: 'flex' }}>
    <Rocket size={24} />
  </div>
  <p style={{ margin: 0, lineHeight: 1.6, fontSize: '1rem' }}>
    <strong style={{ color: 'var(--ifm-color-primary)' }}>Core Differentiation:</strong> We bridge the gap between <strong>Technical Depth</strong> and <strong>Emotional Connection</strong>, leveraging WebAR to transform campus navigation into a living social narrative.
  </p>
</div>