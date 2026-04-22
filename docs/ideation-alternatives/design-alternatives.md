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

:::note Conclusion
**"We traded perfect precision for absolute focus."**
:::