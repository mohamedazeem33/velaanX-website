import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Sprout, Users, Heart, Star, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-bold drop-shadow-lg">
            Our Mission at <span className="text-green-300">VelaanX</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg opacity-90">
            Empowering local farmers & terrace gardeners by connecting them
            directly to customers — no middlemen, no struggle, only pure growth.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Who Are We?</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We are a team of passionate Computer Science graduates who believe
              technology should serve the farmers of our country — not just big
              companies.  
              <br /><br />
              VelaanX was born with one goal:  
              <span className="font-semibold text-foreground">
                 to help every farmer and home grower sell their produce
                effortlessly.
              </span>
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80"
            className="rounded-2xl shadow-xl"
            alt="Farmers working"
          />
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            What We Provide
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="bg-card p-8 rounded-2xl shadow hover:-translate-y-2 hover:shadow-lg transition">
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-2">For Farmers</h3>
              <p className="text-muted-foreground">
                Sell fresh vegetables, fruits, and crops directly from your farm.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow hover:-translate-y-2 hover:shadow-lg transition">
              <Sprout className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-2">For Terrace Gardeners</h3>
              <p className="text-muted-foreground">
                Have a balcony or terrace garden? Sell your harvest in minutes.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow hover:-translate-y-2 hover:shadow-lg transition">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Nearby Buyers</h3>
              <p className="text-muted-foreground">
                Customers in your area can instantly discover your produce.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            We dream of a future where no farmer struggles to sell their crops,
            and every household gets fresh, chemical-free produce straight from
            trusted local growers.
          </p>

          <div className="flex justify-center gap-10 mt-10">
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto" />
              <p className="mt-3 font-semibold">Community Love</p>
            </div>

            <div className="text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto" />
              <p className="mt-3 font-semibold">Quality Guaranteed</p>
            </div>

            <div className="text-center">
              <Rocket className="w-12 h-12 text-primary mx-auto" />
              <p className="mt-3 font-semibold">Fast Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-green-200">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">Download the VelaanX App</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Take your farming business to the next level with our mobile app.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Google Play */}
            <div className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-3xl shadow hover:scale-105 transition transform cursor-pointer">
              <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                ▶
              </div>
              <div className="text-left">
                <div className="text-xs opacity-70">GET IT ON</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </div>

            {/* App Store */}
            <div className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-3xl shadow hover:scale-105 transition transform cursor-pointer">
              <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                
              </div>
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
