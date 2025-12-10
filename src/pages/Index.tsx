import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { products } from '@/data/mockData';
import farmer1 from "@/assets/images/traditonalfarm.avif";
import terrace1 from "@/assets/images/terracegarden.jpg";
import community1 from "@/assets/images/community.avif";
import terrace2 from "@/assets/images/urban.avif";
import freshImg from "@/assets/images/fresh.avif";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products.slice(0, 6)
    : products.filter(p => p.category === selectedCategory).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <HeroSection />

      {/* Fresh From The Farm Section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Fresh From The Farm
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Discover locally grown produce from farmers near you. All products are
              harvested fresh and delivered to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Buy Direct from Growers */}
<section className="py-24 bg-green-50/20 relative overflow-hidden">
  <div className="container mx-auto px-6">
    {/* Section header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
        Buy Direct from Local Growers
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Support farmers and terrace gardeners directly — fresh, local, and sustainable.
      </p>
    </div>

    {/* Horizontal scroll images */}
    <div className="flex overflow-x-auto gap-6 py-6 scrollbar-hide">
      {[farmer1, terrace1, community1, terrace2].map((img, i) => (
        <div
          key={i}
          className="min-w-[280px] h-60 rounded-3xl overflow-hidden shadow-lg flex-shrink-0 transform transition duration-300 hover:scale-105"
        >
          <img
            src={img}
            alt="Grower"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Getting fresh produce has never been easier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Find Farmers",
                description: "Browse local farmers in your area based on your location.",
                icon: "🗺️",
                gradient: "from-green-300 to-green-500",
              },
              {
                step: "02",
                title: "Choose Products",
                description: "Select fresh produce directly from their farms.",
                icon: "🥬",
                gradient: "from-yellow-300 to-yellow-500",
              },
              {
                step: "03",
                title: "Get Delivered",
                description: "Receive your order fresh at your doorstep.",
                icon: "🚚",
                gradient: "from-blue-300 to-blue-500",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-8 rounded-3xl shadow-xl bg-white/20 backdrop-blur-md border border-white/30 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`mx-auto w-20 h-20 mb-6 rounded-full flex items-center justify-center text-4xl bg-gradient-to-br ${item.gradient} text-white shadow-lg animate-bounce-slow`}>
                  {item.icon}
                </div>

                <span className="inline-block text-sm font-bold text-primary bg-primary/20 px-3 py-1 rounded-full mb-4">
                  Step {item.step}
                </span>

                <h3 className="text-xl font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>

                <div className="w-16 h-1 bg-gradient-to-r from-primary to-golden rounded-full mx-auto mt-6 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Why Customers Love VelaanX
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "🚀", title: "Fast Delivery", desc: "Fresh produce delivered same-day." },
              { icon: "💰", title: "Transparent Pricing", desc: "Know exactly what you pay." },
              { icon: "➖👤➖", title: "No MiddleMan", desc: "Sustainable & safe packaging." },
              { icon: "🤝", title: "Support Local", desc: "Empowering farmers in your area." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/20 backdrop-blur-md shadow-lg hover:-translate-y-2 transition transform duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            
      

      {/* CTA - Download App */}
<section className="py-24 bg-gradient-hero">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE CONTENT */}
      <div className="text-left">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          Ready to Eat Fresh?
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-md">
          Download the VelaanX app and get fresh produce delivered straight to your home.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6">
          <a href="#" aria-label="Google Play">
            <div className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-3xl shadow hover:scale-105 transition transform">
              <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">▶</div>
              <div className="text-left">
                <div className="text-xs opacity-70">GET IT ON</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </div>
          </a>

          <a href="#" aria-label="App Store">
            <div className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-3xl shadow hover:scale-105 transition transform">
              <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center"></div>
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center md:justify-end">
        <img
          src={freshImg}
          alt="Fresh produce"
          className="w-full max-w-md rounded-3xl shadow-lg object-cover"
        />
      </div>


    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Index;
