import { useTheme } from '../contexts/ThemeContext'
import TrackTree from '../components/TrackTree'

const Tracks = () => {
  const { theme } = useTheme()

  const bgClass = theme === 'dark'
    ? 'bg-gradient-to-br from-blue-900 to-green-900'
    : 'bg-white'


  return (
    <div className={`min-h-screen ${bgClass} text-${theme === 'dark' ? 'white' : 'gray-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Learning Tracks
        </h1>


        {/* Tracks Tree */}
        <TrackTree />

      </div>
    </div>
  )
}

export default Tracks