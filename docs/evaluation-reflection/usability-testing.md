# Usability Testing

## Testing Setup

To evaluate the alpha version of Campass, our team ran a focused usability test around the core campus exploration loop. The assessment included three in-depth observed sessions with real users and a consolidated pilot summary covering 10 participant records: 4 visitors and 6 students.

We asked participants to complete five representative tasks: find a landmark clue, unlock location-based content, open the AR photo feature, post to the location message wall, and preview the 3D mascot interaction. This helped us test whether the experience was understandable beyond the interface mockups, especially for people with different levels of campus familiarity.

<div style={{
  background: 'var(--button-outline-bg)',
  border: '1px solid rgba(40, 21, 89, 0.1)',
  borderRadius: 'var(--radius-card, 16px)',
  padding: '1.25rem',
  margin: '2rem 0',
  textAlign: 'center'
}}>
  <img
    src="/images/evaluation/evaluation-dashboard.png"
    alt="Usability testing dashboard summarising success rate, error rate, task time, and visitor-student gap"
    style={{
      width: '100%',
      maxWidth: '820px',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
      borderRadius: '14px',
      boxShadow: 'var(--shadow-card-hover, 0 8px 24px rgba(0,0,0,0.1))'
    }}
  />
  <div style={{
    color: 'var(--color-text-secondary, #666)',
    fontSize: '0.9rem',
    marginTop: '0.75rem'
  }}>
    Figure 1. Summary dashboard from our alpha usability testing.
  </div>
</div>

| Test Area | What We Checked | Why It Mattered |
| :--- | :--- | :--- |
| Landmark hunt and clue unlock | Whether users could connect a clue with the correct campus location. | This tested the basic exploration and navigation loop. |
| NFC-style unlock | Whether users understood the unlock action after reaching a location. | This tested whether the digital reward felt connected to the physical place. |
| AR photo and 3D preview | Whether users could access and control the playful visual features. | This tested guidance, loading feedback, and device performance. |
| Location message wall | Whether users could post with a location tag. | This tested the social layer of the experience. |

## Key Results

| Metric | Result | Interpretation |
| :--- | :--- | :--- |
| Participants | 10 total: 4 visitors and 6 students | The sample helped us compare users with and without campus familiarity. |
| Core tasks tested | 5 tasks | The test covered navigation, unlocking, AR/3D interaction, and social posting. |
| Overall success rate | 64% | The main flow was understandable, but some steps still caused hesitation. |
| Error rate | 36% | Most errors appeared in clue interpretation, AR access, and 3D control. |
| Average task time | 29.9 seconds | Time varied strongly between familiar students and first-time visitors. |
| Successful attempts | 32 out of 50 | NFC unlock and location posting were the most reliable parts of the flow. |

## Main Findings

### Finding 1: Visitors needed clearer navigation support

Visitors were more likely to feel uncertain when clues assumed prior campus knowledge. They understood the idea of following a clue, but they needed more visible map cues and clearer wording to connect the clue with a real building or landmark.

### Finding 2: NFC unlock and location posting were easy to understand

Participants quickly understood the loop of finding a place, unlocking content, and leaving a location-based message. This gave us confidence that the core social exploration concept was clear when the interface made the relationship between place and action visible.

### Finding 3: AR and 3D features required stronger guidance

The AR photo and 3D mascot interactions created more friction. Users were sometimes unsure whether the feature was loading, whether their device supported it, or how to control the 3D model without accidentally scrolling. These issues pointed to a need for clearer feedback and smoother performance on mobile devices.

## Design Impact

The usability test directly shaped our next refinement priorities. We decided to make onboarding clearer for first-time visitors, add more visible navigation cues around clue-based tasks, and provide stronger loading, success, and error feedback for AR and 3D interactions.

The results also pushed us to think more inclusively about different user groups. Students could rely on existing campus knowledge, while visitors needed more guidance before they could enjoy the playful parts of Campass. Our team therefore treated visitor support as a design requirement rather than an optional enhancement.
