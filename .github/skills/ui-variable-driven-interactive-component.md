# UI Variable-Driven & Interactive Component Skill

## Skill Overview
This skill enforces a variable-first, component-driven, and theme-aware approach for all UI development. It ensures maintainability, consistency, and a professional look for all interactive user interfaces in the project.

---

## 1. Variable-First Policy
- **Never hardcode colors, spacing, border-radius, or shadows.**
- **All visual values must use CSS variables** (e.g., `var(--ifm-color-primary)`, `var(--radius-card)`).
- **If a new visual value is needed:**
  - Add it to `custom.css` under both `:root` and `[data-theme='dark']`.
  - Reference the variable in your component or style.
- **Examples:**
  - ❌ `style={{ color: '#281559' }}`
  - ✅ `style={{ color: 'var(--ifm-color-primary)' }}`

## 2. Interactive UI Standards
- **Icons:**
  - Do not use Emoji for UI icons.
  - Use Lucide Icons (SVG, inline or as React components) for all iconography.
- **Transitions:**
  - All interactive elements (hover, click, expand) must include `transition: all 0.3s ease` for smoothness.
- **Component Usage:**
  - Prefer interactive, stateful components (e.g., `InteractiveUJM`, `JourneyCard`) over static text blocks.

## 3. Component-Driven Development
- **DRY Principle:**
  - If a UI pattern (e.g., a card) is used in more than one place, extract it as a React component in `src/components/mdx/`.
  - Never duplicate HTML/CSS for the same UI structure.
- **MDX Integration:**
  - Leverage MDX's ability to embed React components for advanced interactivity and reuse.

## 4. Theme Awareness
- **Always define new variables for both light and dark modes** in `custom.css`.
- **Test all pages in both light and dark mode** to ensure clarity and elegance of text, backgrounds, and borders.

---

## Tech Stack
- **React**
- **Docusaurus**
- **Lucide Icons**
- **MDX**

---

## Developer Checklist
| Scenario                | Required Action                                                      |
|-------------------------|----------------------------------------------------------------------|
| Add a new color         | Define in `custom.css` under `:root` and `[data-theme='dark']`        |
| Add an icon             | Use Lucide SVG, never Emoji                                           |
| Card effect             | Use `var(--shadow-card)` or `var(--radius-card)`, never hardcode      |
| Add interaction effect  | Always include `transition: all 0.3s ease`                            |
| Reuse layout            | Extract as a component if used in more than two places                |

---

## Enforcement
- PR reviewers must reject any code that violates these standards.
- All team members are responsible for refactoring legacy code to comply when touched.
