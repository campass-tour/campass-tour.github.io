import { StrategyCard } from '@site/src/components/mdx/StrategyCard';
import { IterationLog } from '@site/src/components/mdx/IterationLog';
import { Rocket, Target, BookOpen, ShoppingBag } from 'lucide-react';

# The Gap

To define the uniqueness of Campass, we conducted a deep dive into current academic research trends and established commercial products. Our analysis reveals a significant market void between "High-performance Web-based 3D Synthesis" and "Deep Campus Cultural Narrative."

## 1. Academic Research Insights
Academia focuses on technical breakthroughs and interaction paradigms but often overlooks user retention and seamless cross-platform accessibility.

| Category | Key Research (Selected Papers) | 3 Things They Did Well | 3 Things They Missed |
| :--- | :--- | :--- | :--- |
| **P1** | *Web-based 3D Reconstruction* | 1. High-precision geometry algorithms<br/>2. Lightweight point cloud compression<br/>3. Established Web rendering benchmarks | 1. Ignored mobile VRAM constraints<br/>2. Lacks real-world interaction logic<br/>3. Excessive asset loading times |
| **P2** | *AR for Cultural Heritage* | 1. Robust digital twin frameworks<br/>2. Visual reconstruction of history<br/>3. Strong educational orientation | 1. Overly academic/dry UI design<br/>2. Reliance on specific high-end hardware<br/>3. Lack of social or incentive mechanics |
| **P3** | *Modular 3D Asset Management* | 1. Innovative component-based storage<br/>2. Solved multi-variant referencing<br/>3. Reduced database query pressure | 1. Ignored client-side assembly lag<br/>2. Lack of automated pipeline support<br/>3. Insufficient UI adaptability research |
| **P4** | *Gamified Navigation Logic* | 1. Scientific pathfinding models<br/>2. Validated gamification as a motivator<br/>3. Provided multi-dimensional user data | 1. Art style disconnected from reality<br/>2. Rigid and overly linear narratives<br/>3. Ignored onboarding for non-gamers |

---

## 2. Commercial Landscape
Commercial products prioritize ease of use and visual polish but often compromise on customization depth and architectural flexibility.

| Category | Competitors (Commercial Products) | 3 Things They Did Well | 3 Things They Missed |
| :--- | :--- | :--- | :--- |
| **C1** | *Google Maps AR (Live View)* | 1. High-precision global positioning<br/>2. Seamless UI/UX onboarding flow<br/>3. Massive backend computational power | 1. Lack of emotional IP interaction<br/>2. Closed ecosystem (no custom content)<br/>3. Purely utilitarian; no "collection" value |
| **C2** | *Zappar / 8th Wall (WebAR)* | 1. Excellent cross-browser compatibility<br/>2. Rich library of marketing templates<br/>3. Low barrier to entry for developers | 1. Limited 3D rendering (non-PBR focus)<br/>2. Weak support for complex assembly<br/>3. Prohibitively high commercial licensing |
| **C3** | *Animal Crossing (Pocket Camp)* | 1. Top-tier social/decorative drivers<br/>2. Emotionally resonant mascot design<br/>3. Micro-moments of flow experience | 1. Fully disconnected from physical geography<br/>2. No real-world utility or toolset<br/>3. Closed platform; no campus customization |
| **C4** | *Campus Tour Apps (Native)* | 1. Deep content for specific campuses<br/>2. Localized service integration (Payment)<br/>3. Better offline caching support | 1. High friction (requires app download)<br/>2. Visuals limited to static 2D images<br/>3. Lack of 3D interaction/self-expression |

---

## 3. Defining the Gap

By integrating academic and commercial findings, Campass identifies **three structural gaps** that define our differentiation:

### 3.1 The Architectural Gap: Web-first AR Access
* **Gap:** Current solutions split into Web 3D experiences (accessible but shallow in AR) or native AR apps (powerful but installation-heavy).
* **Our Solution:** We currently adopt a **Web-first architecture**: users can access core campus guidance and storytelling content directly in the browser, while AR features are provided as lightweight add-ons in supported scenarios. This reduces installation friction and keeps the experience practical for current development resources.

### 3.2 The Interaction Gap: Identity-Based Exploration
* **Gap:** Navigation tools lack "self-expression," while social games lack "spatial utility."
* **Our Solution:** Campass introduces the **Mascot Summoning** mechanic. While exploring physical campus spots (spatial value), users are simultaneously building their digital identity (self-expression).

### 3.3 The Narrative Gap: Scalable Personalization
* **Gap:** Deep campus customization is typically constrained by heavy modeling workloads and escalating storage costs.
* **Our Solution:** We use a **modular content approach** to reuse base models and scene elements, then add persona-specific stories through lightweight configuration and content updates. This gives us manageable personalization without claiming fully automated large-scale generation.

---

<div style={{ 
  background: 'var(--button-outline-bg)', 
  padding: '1.5rem', 
  borderRadius: 'var(--radius-card, 16px)', 
  display: 'flex', 
  gap: '1rem',
  alignItems: 'flex-start',
  marginTop: '2rem',
  boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.02)'
}}>
  <div style={{
    background: 'var(--ifm-color-primary)',
    color: '#fff',
    padding: '0.5rem',
    borderRadius: '12px',
    display: 'flex'
  }}>
    <Rocket size={24} />
  </div>
  <div>
    <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--ifm-color-primary)', fontWeight: 'bold' }}>Our Strategic Positioning:</h4>
    <div style={{ margin: 0, lineHeight: 1.6, opacity: 0.9 }}>
      Campass is more than a navigation tool. We stand at the intersection of <strong>"Academic Architectural Depth"</strong> and <strong>"Commercial Emotional Experience."</strong> By breaking down the 3D performance barriers in Web environments, we provide a new digital medium for campus culture.
    </div>
  </div>
</div>
