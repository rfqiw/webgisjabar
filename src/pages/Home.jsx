import Hero from '../components/Hero'
import WeatherSlider from '../components/WeatherSlider'
import QuickSummary from '../components/QuickSummary'
import NewsSection from '../components/NewsSection'
import EmergencyContact from '../components/EmergencyContact'

export default function Home() {
  return (
    <div>
      <Hero />
      <WeatherSlider />
      <QuickSummary />
      <NewsSection />
      <EmergencyContact />
    </div>
  )
}
