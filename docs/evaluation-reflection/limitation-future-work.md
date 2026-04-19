import { StrategyCard } from '@site/src/components/mdx/StrategyCard';
import { IterationLog } from '@site/src/components/mdx/IterationLog';
import { Rocket, Activity } from 'lucide-react';

# 1. The Performance

## 1.1 The Performance Dilemma

While our client-side 3D synthesis engine enables a highly modular experience, it creates a significant performance bottleneck. On mobile devices with limited RAM/VRAM, the "Summoning" process (assembly and rendering) can experience stuttering. This is primarily caused by the volume explosion of the final binary blob after Three.js decompressing, merging, and re-exporting 3D assets.

## 1.2 Strategic Rationale

Why stick to this architecture if performance is a challenge? Here is our strategic rationale, broken down into four core pillars.

<div className="strategy-card-wrapper">
  <StrategyCard 
    icon="cuboid"
    title="Seamless AR Integration"
    challenge="Native AR engines (iOS Quick Look / Android Scene Viewer) only accept a single file path. Simple CSS layering of assets works on the web but breaks in AR, where mascots and accessories disappear."
    strategy='By "welding" components into a single binary Blob via GLTFExporter, we ensure spatial persistence and visual consistency across the Web-to-AR transition.'
  />
  <StrategyCard 
    icon="layers"
    title="Modular Scalability"
    challenge="Pre-rendering every possible combination (12 spots × 10 outfits × 5 accessories) would require storing thousands of massive GLB files."
    strategy='We adopted an "Atomic Asset Pipeline." Codes act as an assembly line, dynamically mounting parts. Adding a new outfit now only requires a few KB of data instead of regenerating the entire library.'
  />
  <StrategyCard 
    icon="server"
    title="Client-side Edge Computing"
    challenge="Serverless platforms like Vercel impose strict 4.5MB payload limits, making it impossible to process or transfer uncompressed 3D streams server-side."
    strategy="We offloaded the heavy lifting (3D parsing/merging) to the user's device. This eliminates server costs, reduces network latency, and allows for offline-ready interactions."
  />
  <StrategyCard 
    icon="zap"
    title="Quality-Efficiency Trade-off"
    strategy="We utilized a dual-engine approach. Three.js handles the 'Logic & Assembly,' while <model-viewer> handles the 'Presentation.' This allows us to leverage Google’s PBR (Physically Based Rendering) engine for industry-grade visual fidelity without building a custom renderer from scratch."
  />
</div>

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
  <img 
    src="/images/limitations/modelassembly.png" 
    alt="Model Assembly Architecture Diagram" 
    style={{ 
      borderRadius: 'var(--radius-card, 16px)', 
      border: '1px solid var(--button-outline-bg)', 
      boxShadow: 'var(--shadow-card, 0 4px 12px rgba(0,0,0,0.1))',
      width: '100%',
      maxWidth: '800px'
    }} 
  />
  <p style={{ 
    color: 'var(--color-text-secondary, #888)', 
    fontSize: '0.9rem', 
    marginTop: '0.5rem' 
  }}>Client-Side Component Synthesis vs Rendering Engine</p>
</div>


## 1.3 The Iteration Log: Failed Attempts

We went through several pivots to balance AR compatibility, platform limits, and mobile performance.

<IterationLog trials={[
  {
    id: 'Trial 1',
    title: 'DOM Slot Nesting',
    approach: 'Nesting mascot models within building slots via <model-viewer>.',
    pivot: 'Mascot disappeared in native AR mode. We prioritized the "Playful AR" core experience over simple UI layering.'
  },
  {
    id: 'Trial 2',
    title: 'Serverless Backend Compression',
    approach: 'Sending raw 30MB streams to a Node.js API for gltf-pipeline compression.',
    pivot: 'Hit the Vercel 413 Request Entity Too Large error. The 4.5MB payload limit proved to be an insurmountable wall for raw 3D data.',
    image: '/images/limitations/413.png',
    github: {
      url: 'https://github.com/campass-tour/campass/tree/compress-model',
      label: 'compress-model branch'
    }
  },
  {
    id: 'Trial 3',
    title: 'Client-side Draco WASM Compression',
    approach: 'Integrating Google’s Draco encoder on the client side via CDN.',
    pivot: 'Draco only compresses geometry (meshes). Since 90% of our file size comes from Raw Bitmaps (textures), the reduction was negligible, while CPU usage spiked significantly.'
  }
]} />


## 1.4 Future Roadmap

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
    <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--ifm-color-primary)', fontWeight: 'bold' }}>To overcome the current 4.5MB barrier:</h4>
    <p style={{ margin: 0, lineHeight: 1.6, opacity: 0.9 }}>
      Our next architectural evolution involves migrating to a <strong>Dedicated VPS Environment</strong>. By maintaining a persistent Node.js environment, we can implement real-time server-side texture transcoding (to WebP or KTX2) and Draco mesh compression, serving optimized, ready-to-render assets that significantly reduce mobile memory overhead.
    </p>
  </div>
</div>
