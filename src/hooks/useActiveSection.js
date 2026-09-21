import { useEffect, useState } from 'react'

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    let raf = 0

    const compute = () => {
      raf = 0
      const line = window.innerHeight * 0.35
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

      if (atBottom) return setActive(ids[ids.length - 1])

      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ids])

  return active
}
