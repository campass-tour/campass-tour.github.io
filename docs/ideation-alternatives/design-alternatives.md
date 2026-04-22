import DesignAlternatives from '@site/src/components/mdx/DesignAlternatives';

# Design Alternatives

## Navigating the Design Space: Choosing the Campus Canvas

We evaluated three distinct map paradigms to serve as the foundation for the Campass experience, balancing geographic utility against narrative immersion.

<DesignAlternatives
  title="Campus Canvas Alternatives"
  intro="Select an option below to view the radar chart and details. Option C was selected as our final choice."
  options={[
    {
      id: 'option-a',
      title: 'Option A: The Utility Paradigm',
      visualSrc: '/images/alternatives/map/map-optiona.png',
      description: 'Standard Mobile Map using third-party SDKs like Google Maps or Gaode Maps.',
      dilemma: 'While offering pinpoint accuracy, these maps are cluttered with commercial POIs (restaurants, parking lots) and "commuter" visual language that breaks the game’s "Magic Circle."',
      metrics: {
        geo: 10,
        imm: 2,
        dev: 9,
        snr: 3
      },
      verdict: 'REJECTED. High utility, but zero soul. It feels like a tool for delivery drivers, not explorers.'
    },
    {
      id: 'option-b',
      title: 'Option B: The Information Overload',
      visualSrc: '/images/alternatives/map/map-optionb.png',
      description: 'Adopting the highly detailed, multi-colored official campus map used for administrative logistics.',
      dilemma: 'It contains every single infrastructure detail. However, the high visual density creates massive "Cognitive Noise," making it nearly impossible to highlight interactive quest pins.',
      metrics: {
        geo: 7,
        imm: 4,
        dev: 8,
        snr: 4
      },
      verdict: 'REJECTED. Too busy. The interactive elements (pins) would be "eaten" by the colorful background clutter.'
    },
    {
      id: 'option-c',
      title: 'Option C: The Narrative Stage',
      visualSrc: '/images/alternatives/map/map-optionc.png',
      description: 'A custom-drawn, brand-aligned vector map that strips away all non-essential geometry to focus on the exploration path.',
      dilemma: 'It lacks geographic precision and requires a custom "Relative Coordinate Mapping" algorithm to translate real GPS data onto a stylized canvas.',
      metrics: {
        geo: 5,
        imm: 10,
        dev: 4,
        snr: 10
      },
      verdict: 'SELECTED. By stripping the map to its skeletal essence, we transformed it from a "navigation tool" into a "narrative stage."',
      isWinner: true
    }
  ]}
  metricsDef={[
    { label: 'Geographic Accuracy', def: 'The degree of alignment with real-world satellite coordinates.' },
    { label: 'Narrative Immersion', def: 'The ability to maintain the "Magic Circle" and gamified atmosphere.' },
    { label: 'Development Efficiency', def: 'The speed of implementation using out-of-the-box tools vs. custom code.' },
    { label: 'Signal-to-Noise Ratio (SNR)', def: 'The clarity of interactive quest elements against the background environment.' }
  ]}
/>

## The Desktop Dilemma: Map Pin Interactions

While our mobile interface successfully utilized a comfortable bottom sheet, designing the desktop interaction for map pins presented a unique challenge. On wide screens, we wanted to display rich location details (AR triggers, clues, achievements) alongside the global Message Wall. However, translating point-of-interest (POI) interactions to a larger canvas quickly led to cluttered interfaces and broken visual flows.

<DesignAlternatives
  title="Map Pin Interaction on Desktop"
  intro="Evaluating how to display point-of-interest details on wide screens. Select an option below to view its pros, cons, and dilemma."
  hideRadar={true}
  options={[
    {
      id: 'pin-option-a',
      title: 'Option A: The Standard Popover (Only)',
      visualSrc: '/images/alternatives/mappin/mappin-optiona.png',
      description: 'A centralized floating card appearing directly over the map.',
      dilemma: 'It drastically underutilized desktop screen real estate. Furthermore, to keep the user focused, clicking a pin automatically centered it on the screen, which frequently pushed the popover out of the top viewport boundary (Vertical Cropping).',
      pros: 'Familiar interaction pattern used across most native map applications; it keeps the user\'s eyes anchored close to the geographical context of the pin they just interacted with.',
      cons: 'Severe vertical cropping issues when centering pins; significantly wastes the horizontal screen real estate available on larger desktop displays.'
    },
    {
      id: 'pin-option-b',
      title: 'Option B: The Fragmented UI (Popover + Side Drawer)',
      visualSrc: '/images/alternatives/mappin/mappin-optionb.png',
      description: 'Keeping the center popover for location details, while simultaneously opening a right-side drawer for the Message Wall.',
      dilemma: 'Spatial Collision. The floating popover physically overlapped with the side drawer. More critically, it shattered the user\'s visual focus, forcing their eyes to ping-pong between the center popover and the right-hand wall, significantly increasing cognitive load.',
      pros: 'Aims to fully utilize wide desktop screens by showing both rich location context and uninterrupted social interactions concurrently.',
      cons: 'Massive cognitive overload from split visual focus; chaotic spatial collisions between the floating popover boundaries and the persistent side drawer.'
    },
    {
      id: 'pin-option-c',
      title: 'Option C (Our Decision): Architecture Forking & Master-Detail View',
      visualSrc: '/images/alternatives/mappin/mappin-optionc.png',
      description: 'Discarding the popover entirely for desktop environments. Clicking a pin now triggers a unified, full-height right sidebar.',
      dilemma: 'We needed a way to consolidate all location lore, AR summoning buttons, achievements, and real-time whispers without cluttering the map canvas.',
      pros: 'Clean, distraction-free layout. Unifies all complex contextual functionality into a single, scrollable panel without overlapping map UI or causing eye strain.',
      cons: 'Increased development overhead. It requires writing distinct rendering logic ("Architecture Forking") for mobile interfaces (bottom sheet) versus desktop interfaces (sidebar).',
      verdict: 'SELECTED. The Master-Detail Architecture perfectly balanced spatial efficiency with rich storytelling. All location lore, AR buttons, achievements, and whispers are consolidated into this master sidebar.',
      isWinner: true
    }
  ]}
/>
