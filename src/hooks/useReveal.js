import { useEffect, useRef, useState } from 'react'

export default function useReveal({ rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // isIntersecting: entrou na tela. boundingClientRect.top < 0: já passou
        // por cima (usuário pulou a seção), então revela sem esperar.
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin])

  return [ref, isVisible]
}
