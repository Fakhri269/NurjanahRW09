import { useEffect, useState } from 'react'

export function useScrollAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    // 1. Intersection Observer for Reveal-on-Scroll Elements
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12,
    })

    const elements = document.querySelectorAll(
      '.reveal-up, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale'
    )
    elements.forEach((el) => observer.observe(el))

    // 2. Scroll Progress & Back-to-Top Listener with RequestAnimationFrame
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight
          if (totalHeight > 0) {
            const currentProgress = (window.scrollY / totalHeight) * 100
            setScrollProgress(currentProgress)
          }
          setShowBackToTop(window.scrollY > 350)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Trigger once on mount

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return { scrollProgress, showBackToTop, scrollToTop }
}
