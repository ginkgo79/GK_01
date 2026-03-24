import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ListingSection } from './components/ListingSection'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="app">
      <Header />
      <main>
        <Hero query={searchQuery} onQueryChange={setSearchQuery} />
        <ListingSection searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  )
}
