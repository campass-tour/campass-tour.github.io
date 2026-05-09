import { AlertTriangle, ChevronRight, Compass, ExternalLink, TrendingUp } from 'lucide-react';

# Evidence of Life

This video captures our team conducting an on-campus interview with a potential user. It provides direct evidence of our early-stage user research and supports the contextual validation of our design concept.

## On-Campus Evidence

<video controls width="100%" style={{ maxWidth: '720px', borderRadius: '12px' }}>
  <source src="/video/evidence-of-life.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Questionnaire Evidence (N=15)

- Source PDF: <a className="pdf-source-link" href="https://pubref.paperol.cn/clientdown/359332332/359332332_1778384809amPfTc.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>Campus Exploration Needs Survey <ExternalLink size={13} /></a>
- Valid responses: `15`
- Objective: validate current campus exploration behavior, key pain points, and acceptance of Campass-style features.

## Key Findings

<div className="key-direction-grid">
  <div className="key-direction-card" style={{ '--accent': 'var(--ifm-color-primary)' }}>
    <div className="key-direction-header">
      <div className="key-direction-icon-box"><Compass size={24} /></div>
      <h3>Current Pattern</h3>
    </div>
    <p className="key-direction-desc">Campus exploration is still dominated by utility tools rather than engaging experiences.</p>
    <div className="key-direction-footer">
      <span className="key-direction-metric">80% rely on map/navigation apps</span>
      <ChevronRight size={16} className="key-direction-arrow" />
    </div>
  </div>

  <div className="key-direction-card" style={{ '--accent': 'var(--color-solution-text)' }}>
    <div className="key-direction-header">
      <div className="key-direction-icon-box"><AlertTriangle size={24} /></div>
      <h3>Main Pain Points</h3>
    </div>
    <p className="key-direction-desc">The strongest pain points are interaction quality, wayfinding, and real-time participation.</p>
    <div className="key-direction-footer">
      <span className="key-direction-metric">86.67% interaction gap | 80% navigation difficulty | 73.33% low engagement</span>
      <ChevronRight size={16} className="key-direction-arrow" />
    </div>
  </div>

  <div className="key-direction-card" style={{ '--accent': 'var(--color-winner)' }}>
    <div className="key-direction-header">
      <div className="key-direction-icon-box"><TrendingUp size={24} /></div>
      <h3>Feature Demand & Adoption</h3>
    </div>
    <p className="key-direction-desc">Playful features are highly preferred, and adoption intent toward Campass is positive.</p>
    <div className="key-direction-footer">
      <span className="key-direction-metric">86.67% gamification | 80% AR/NFC | 66.67% willing to use Campass</span>
      <ChevronRight size={16} className="key-direction-arrow" />
    </div>
  </div>
</div>

## Question Results

<details>
<summary><strong>Q1. How do you usually explore campus? (Multiple choice)</strong></summary>

| Option | Count | Ratio |
| --- | ---: | ---: |
| A. Use map/navigation apps | 12 | 80% |
| B. Ask classmates, teachers, or staff | 8 | 53.33% |
| C. Explore randomly / walk around | 7 | 46.67% |
| D. Check official school channels (website, social media, group messages) | 6 | 40% |
| E. Rarely explore campus | 3 | 20% |

**Insight:** Exploration is mainly tool-driven, while proactive discovery is moderate to low.

</details>

<details>
<summary><strong>Q2. How familiar are you with the campus environment? (Single choice)</strong></summary>

| Option | Count | Ratio |
| --- | ---: | ---: |
| A. Very familiar | 2 | 13.33% |
| B. Fairly familiar | 4 | 26.67% |
| C. Average | 4 | 26.67% |
| D. Not very familiar | 3 | 20% |
| E. Not familiar at all | 2 | 13.33% |

**Insight:** Most respondents are only average/fairly familiar, leaving clear room for guidance support.

</details>

<details>
<summary><strong>Q3. How often do you actively explore new places on campus? (Single choice)</strong></summary>

| Option | Count | Ratio |
| --- | ---: | ---: |
| A. Almost every day | 1 | 6.67% |
| B. 2-3 times per week | 3 | 20% |
| C. Once per week | 3 | 20% |
| D. Occasionally | 5 | 33.33% |
| E. Almost never | 3 | 20% |

**Insight:** Frequency is generally low; external motivation is needed to increase exploration behavior.

</details>

<details>
<summary><strong>Q4. What problems do you usually face while exploring campus? (Multiple choice)</strong></summary>

| Option | Count | Ratio |
| --- | ---: | ---: |
| A. Lack of interactive experience | 13 | 86.67% |
| B. Campus navigation is difficult | 12 | 80% |
| C. Lack of motivation to explore | 10 | 66.67% |
| D. Hard to discover interesting places | 9 | 60% |
| E. Lack of real-time engagement | 11 | 73.33% |
| F. Other | 2 | 13.33% |

**Insight:** Pain points cluster around interaction quality, wayfinding, and participation.

</details>

<details>
<summary><strong>Q5. Which one of the above problems affects you the most? (Single choice)</strong></summary>

| Option | Count | Ratio |
| --- | ---: | ---: |
| A. Lack of interactive experience | 5 | 33.33% |
| B. Campus navigation is difficult | 4 | 26.67% |
| C. Lack of motivation to explore | 2 | 13.33% |
| D. Hard to discover interesting places | 1 | 6.67% |
| E. Lack of real-time engagement | 3 | 20% |

**Insight:** "Lack of interactive experience" is the top pain point and supports gamified design direction.

</details>

<details>
<summary><strong>Q6. When going to an unfamiliar campus location, what do you do first? (Single choice)</strong></summary>

| Option | Count | Ratio |
| --- | ---: | ---: |
| A. Open map/navigation directly | 7 | 46.67% |
| B. Ask others | 3 | 20% |
| C. Search while walking | 2 | 13.33% |
| D. Follow signs/directions on campus | 2 | 13.33% |
| E. Delay or give up | 1 | 6.67% |

**Insight:** Goal-oriented wayfinding is dominant; navigation remains a baseline requirement.

</details>

<details>
<summary><strong>Q7. Which campus exploration features are you most interested in? (Multiple choice)</strong></summary>

| Option | Count | Ratio |
| --- | ---: | ---: |
| A. Gamified exploration (missions, points, rewards) | 13 | 86.67% |
| B. AR exploration | 12 | 80% |
| C. Social interaction | 11 | 73.33% |
| D. NFC check-ins | 12 | 80% |
| E. Campus tour (audio guide) | 9 | 60% |
| F. Event notifications | 8 | 53.33% |
| G. Campus map | 7 | 46.67% |
| H. Personalization | 8 | 53.33% |

**Insight:** Users prefer combined value from play mechanics, immersive tech, and social feedback.

</details>

<details>
<summary><strong>Q8. If NFC tags were placed around campus to unlock stories, clues, or mascots, would you try it? (Single choice)</strong></summary>

| Option | Count | Ratio |
| --- | ---: | ---: |
| A. Definitely willing | 4 | 26.67% |
| B. Probably willing | 6 | 40% |
| C. Neutral | 3 | 20% |
| D. Probably not willing | 1 | 6.67% |
| E. Definitely not willing | 1 | 6.67% |

**Insight:** Show positive willingness toward NFC-triggered exploration content.

</details>

<details>
<summary><strong>Q9. If finishing exploration unlocked AR interaction or photo features, would that be attractive? (Single choice)</strong></summary>

| Option | Count | Ratio |
| --- | ---: | ---: |
| A. Very attractive | 4 | 26.67% |
| B. Quite attractive | 5 | 33.33% |
| C. Neutral | 3 | 20% |
| D. Not very attractive | 2 | 13.33% |
| E. Not attractive at all | 1 | 6.67% |

**Insight:** AR rewards have medium-high appeal and fit well as post-task incentives.

</details>

<details>
<summary><strong>Q10. If there were an interactive system like Campass, would you use it? (Single choice)</strong></summary>

| Option | Count | Ratio |
| --- | ---: | ---: |
| A. Definitely willing | 4 | 26.67% |
| B. Probably willing | 6 | 40% |
| C. Neutral | 2 | 13.33% |
| D. Probably not willing | 2 | 13.33% |
| E. Definitely not willing | 1 | 6.67% |

**Insight:** Express clear intent to use, indicating solid potential for implementation.

</details>

<style>{`
  .pdf-source-link,
  .pdf-source-link:hover,
  .pdf-source-link:focus,
  .pdf-source-link:active {
    text-decoration: none !important;
  }

  .key-direction-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin: 1rem 0 1.5rem;
  }

  .key-direction-card {
    background: var(--color-surface);
    border: 1px solid var(--button-outline-bg);
    border-radius: var(--radius-card);
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--shadow-card);
    position: relative;
    overflow: hidden;
  }

  .key-direction-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-card-hover);
    border-color: var(--accent);
  }

  .key-direction-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .key-direction-icon-box {
    background: var(--button-outline-bg);
    color: var(--accent);
    padding: 10px;
    border-radius: 12px;
    display: flex;
    transition: all 0.3s ease;
  }

  .key-direction-card:hover .key-direction-icon-box {
    background: var(--accent);
    color: #fff;
  }

  .key-direction-header h3 {
    margin: 0;
    font-size: 1.05rem;
    color: var(--ifm-color-primary);
  }

  .key-direction-desc {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.5;
    color: var(--color-text-secondary);
    flex-grow: 1;
  }

  .key-direction-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6rem;
  }

  .key-direction-metric {
    font-size: 0.78rem;
    color: var(--color-text-secondary);
    line-height: 1.5;
  }

  .key-direction-arrow {
    color: var(--accent);
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .key-direction-card:hover .key-direction-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 996px) {
    .key-direction-grid {
      grid-template-columns: 1fr;
    }
  }
`}</style>
