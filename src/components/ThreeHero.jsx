import { useEffect, useRef } from 'react'

export default function ThreeHero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || typeof window === 'undefined') return

    let animId
    let scene, camera, renderer, particles

    const init = () => {
      const THREE = window.THREE
      if (!THREE) return

      scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0x0A1628, 0.0025)

      camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
      camera.position.z = 20

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setSize(canvas.clientWidth, canvas.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      const count = 120
      const geo = new THREE.BufferGeometry()
      const pos = new Float32Array(count * 3)
      for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 40
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))

      const mat = new THREE.PointsMaterial({
        color: 0x4DBDB8,
        size: 0.04,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
      })
      particles = new THREE.Points(geo, mat)
      scene.add(particles)
    }

    const animate = () => {
      if (!renderer || !scene || !camera) return
      if (particles) {
        particles.rotation.y += 0.0003
        particles.rotation.x += 0.0001
      }
      renderer.render(scene, camera)
      animId = requestAnimationFrame(animate)
    }

    const onResize = () => {
      if (!camera || !renderer || !canvas) return
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    }

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
    script.onload = () => { init(); animate() }
    document.body.appendChild(script)

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      if (animId) cancelAnimationFrame(animId)
      if (renderer) { renderer.dispose(); renderer = null }
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}
