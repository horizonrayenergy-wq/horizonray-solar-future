import { Button } from './button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-solar.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern solar panel installation showcasing renewable energy solutions"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl">
          <h1 className="hero-text mb-6">
            Power Your Future with Solar
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Trusted solar installation company in Rajasthan. Join thousands of Indian families saving money and protecting the environment with 
            Horizonray Energy's trusted solar panel installations.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mb-10 text-gray-300">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-solar-yellow" />
              <span>Trusted by 2000+ customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-solar-yellow" />
              <span>25-year warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-solar-yellow" />
              <span>Professional installation</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-solar text-lg px-8 py-4" size="lg" asChild>
              <Link to="/contact" className="inline-flex items-center">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="btn-outline-solar text-lg px-8 py-4" asChild>
              <Link to="/services">Check Eligibility</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/20">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-solar-yellow mb-1">₹1,50,000+</div>
              <div className="text-sm text-gray-300">Average Annual Savings</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-solar-yellow mb-1">25 Years</div>
              <div className="text-sm text-gray-300">Performance Warranty</div>
            </div>
            <div className="text-center lg:text-left col-span-2 lg:col-span-1">
              <div className="text-3xl font-bold text-solar-yellow mb-1">100%</div>
              <div className="text-sm text-gray-300">Clean Energy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;