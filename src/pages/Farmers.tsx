import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Sprout, CheckCircle, Truck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Farmers = () => {
  const navigate = useNavigate(); // <-- initialize navigate

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        className="py-24 bg-cover bg-center bg-no-repeat relative animate-fadeIn"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-lg">
            Grow With <span className="text-primary">VelaanX</span>
          </h1>

          <p className="text-lg text-white/90 max-w-2xl mx-auto mt-4">
            Whether you're a farmer or a terrace gardener, VelaanX helps you
            reach customers in your area and grow your sales with zero hassle.
          </p>

          <Button
            className="mt-8 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 scale-105 hover:scale-110 bg-primary"
            onClick={() => navigate("/join-farmer")} // <-- navigate to registration
          >
            Join as Seller
          </Button>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-10">
            Who Can Join?
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">

            {/* Farmers */}
            <div className="bg-card shadow-md rounded-2xl p-8 text-center border transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-full w-fit mx-auto mb-4 text-white shadow">
                <Leaf className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Farmers</h3>
              <p className="text-muted-foreground">
                From large-scale farms to small local farmers, anyone growing
                fresh produce can join our community.
              </p>
            </div>

            {/* Terrace Gardeners */}
            <div className="bg-card shadow-md rounded-2xl p-8 text-center border transform hover:-translate-y-2 hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-full w-fit mx-auto mb-4 text-white shadow">
                <Sprout className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Terrace Gardeners</h3>
              <p className="text-muted-foreground">
                Grow on your terrace or balcony? Sell your fresh produce
                directly to local customers with ease.
              </p>
            </div>

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

      {/* Why Sell With Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
            Why Sell With VelaanX?
          </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card */}
          <div className="p-6 bg-card rounded-xl shadow border hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <CheckCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Zero Hassle</h3>
            <p className="text-muted-foreground">
              Simple onboarding and easy product uploads.
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl shadow border hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <Truck className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reach More Customers</h3>
            <p className="text-muted-foreground">
              Your products become visible to thousands of nearby buyers.
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl shadow border hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <TrendingUp className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Grow Your Business</h3>
            <p className="text-muted-foreground">
              Increase your sales without any middlemen.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Start selling your fresh produce with VelaanX today.
        </p>
        <Button
          variant="hero"
          className="px-10 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
          onClick={() => navigate("/join-farmer")} // <-- navigate to registration
        >
          Join as Seller and Earn Massively
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default Farmers;
