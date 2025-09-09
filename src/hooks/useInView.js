import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook that uses Intersection Observer to detect when an element enters the viewport
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element that needs to be visible (0-1)
 * @param {string} options.rootMargin - Margin around the root element
 * @returns {Array} [ref, isInView] - ref to attach to element, boolean indicating if in view
 */
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const ref = useRef(null)

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px', // Trigger 100px before element enters viewport
    triggerOnce = true // Only trigger once by default for performance
  } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // If we've already seen this element and triggerOnce is true, don't set up observer
    if (hasBeenInView && triggerOnce) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setIsInView(inView)

        if (inView && !hasBeenInView) {
          setHasBeenInView(true)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, hasBeenInView, triggerOnce])

  return [ref, isInView || (hasBeenInView && triggerOnce)]
}

export default useInView