import { useEffect, useState } from 'react'

export default function useSectionVisible(ids) {
  const list = Array.isArray(ids) ? ids : [ids]
  const key = list.join('|')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const seen = new Map()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting))
        setVisible([...seen.values()].some(Boolean))
      },
      { threshold: 0.35 }
    )
    key.split('|').forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [key])

  return visible
}
