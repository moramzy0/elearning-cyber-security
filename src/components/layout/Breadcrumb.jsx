import { useLocation, Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { FaChevronRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Breadcrumb = () => {
  const location = useLocation()
  const { theme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pathnames = location.pathname.split('/').filter(x => x)

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    ...pathnames.map((name, index) => {
      let path = `/${pathnames.slice(0, index + 1).join('/')}`
      let displayName = name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ')
      if (name === 'course') {
        displayName = 'Courses'
        path = '/courses'
      } else if (pathnames[index - 1] === 'course' && /^\d+$/.test(name)) {
        displayName = `Course ${name}`
        path = `/courses/${name}`
      }
      return { name: displayName, path }
    })
  ]

  if (breadcrumbItems.length <= 1) return null

  return (
    <nav className="relative px-4 py-2">
      <div className="max-w-fit">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && <FaChevronRight className={`mx-2 ${theme === 'dark' ? 'text-gray-400' : scrolled ? 'text-gray-500' : 'text-gray-300'}`} />}
              {index === breadcrumbItems.length - 1 ? (
                <span className={`font-medium ${theme === 'dark' ? 'text-white' : scrolled ? 'text-gray-900' : 'text-white'}`}>
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`hover:underline ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : scrolled ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb