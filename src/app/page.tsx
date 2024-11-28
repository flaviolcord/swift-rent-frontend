import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import Hero from "@/components/homepage/Hero";
import InteractiveMap from "@/components/homepage/InteractiveMap";
import ProductHighlights from "@/components/homepage/ProductHighlights";
import Sustainability from "@/components/homepage/Sustainability";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductHighlights />
      <InteractiveMap />
      <Sustainability />
      <Footer />
    </main>
  )
}
