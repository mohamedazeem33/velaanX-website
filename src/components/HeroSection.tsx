import { ArrowRight, MapPin, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-golden/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '-3s' }}
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div>

            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Fresh produce, delivered to you
            </span>

            {/* Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              Fresh From
              <span className="block text-primary">Local Growers</span>
              To Your Table
            </h1>

            {/* Description */}
            <p
              className="text-lg text-muted-foreground mb-8 max-w-lg animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              Discover produce from farmers, terrace gardeners, and local growers near you.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-4 mb-12 animate-fade-up"
              style={{ animationDelay: '0.55s' }}
            >
              <Link to="/farmers">
                <Button variant="hero" size="xl">
                  Meet our Farmers
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <Link to="/farmers">
                <Button variant="outline" size="xl">
                  About Us
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-8 animate-fade-up"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Local Farmers</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Same Day</p>
                  <p className="text-sm text-muted-foreground">Delivery</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-golden/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-golden" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Quality Guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative animate-fade-up"
            style={{ animationDelay: '0.9s' }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-golden/20 rounded-[3rem] rotate-6" />
              
              <img
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=600&fit=crop"
                alt="Fresh vegetables and fruits from local farms"
                className="relative rounded-[3rem] w-full h-full object-cover shadow-lg"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=50&h=50&fit=crop"
                    alt="Farmer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Many Farms</p>
                    <p className="text-sm text-primary">Around You</p>
                  </div>
                </div>
              </div>

              {/* Organic Badge */}
              <div
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg animate-float"
                style={{ animationDelay: '-2s' }}
              >
                🌱 100% Organic
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
