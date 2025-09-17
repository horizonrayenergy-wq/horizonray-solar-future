import HeroSection from '@/components/ui/hero-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  DollarSign, 
  Leaf, 
  ArrowRight, 
  Users, 
  Award,
  TrendingUp,
  CheckCircle,
  Sun,
  Star,
  Clock,
  MapPin,
  Phone,
  Wrench,
  Home as HomeIcon
} from 'lucide-react';
import solarInstallation from '@/assets/solar-installation.jpg';
import happyFamily from '@/assets/happy-family-solar.jpg';
import technicianWork from '@/assets/technician-work.jpg';
import solarFarmSunset from '@/assets/solar-farm-sunset.jpg';
import energyDashboard from '@/assets/energy-dashboard.jpg';
import renewableLandscape from '@/assets/renewable-landscape.jpg';

const Home = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save Money",
      description: "Reduce your electricity bills by up to 90% with our high-efficiency solar panels."
    },
    {
      icon: Leaf,
      title: "Protect Environment",
      description: "Reduce your carbon footprint and contribute to a cleaner, greener planet."
    },
    {
      icon: Shield,
      title: "25-Year Warranty",
      description: "Peace of mind with industry-leading warranties on all our solar installations."
    },
    {
      icon: Zap,
      title: "Reliable Power",
      description: "Generate clean, reliable energy even during peak usage hours."
    }
  ];

  const whySolar = [
    {
      stat: "3,000+",
      label: "Happy Customers",
      description: "Trusted by homeowners across the region"
    },
    {
      stat: "$2.5M+",
      label: "Total Savings",
      description: "Money saved on electricity bills"
    },
    {
      stat: "500+",
      label: "Tons CO₂ Saved",
      description: "Environmental impact reduction"
    },
    {
      stat: "99.9%",
      label: "Uptime Reliability",
      description: "Consistent energy production"
    }
  ];

  const processSteps = [
    {
      icon: Phone,
      title: "Free Consultation",
      description: "Schedule a no-obligation consultation to assess your home's solar potential and energy needs."
    },
    {
      icon: HomeIcon,
      title: "Site Assessment",
      description: "Our experts visit your property to evaluate roof condition, sun exposure, and electrical systems."
    },
    {
      icon: Award,
      title: "Custom Design",
      description: "We create a personalized solar system design optimized for your home and energy goals."
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Certified technicians install your solar system with precision and care, typically in 1-2 days."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Phoenix, AZ",
      image: happyFamily,
      rating: 5,
      review: "Horizonray Energy transformed our home! We're saving $180 per month and couldn't be happier with the professional installation."
    },
    {
      name: "Mike Chen",
      location: "Austin, TX", 
      image: solarInstallation,
      rating: 5,
      review: "Exceptional service from start to finish. The team was knowledgeable, punctual, and left our property spotless."
    },
    {
      name: "Lisa Rodriguez",
      location: "San Diego, CA",
      image: energyDashboard,
      rating: 5,
      review: "Our energy bills are practically zero now! The installation was seamless and the monitoring app is fantastic."
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Benefits Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Why Choose Solar Energy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the life-changing benefits of switching to renewable solar energy 
              with Horizonray Energy's proven solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-solar transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Solar Stats */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Research-Based Solar Facts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real data from our customers and environmental impact studies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySolar.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-solar-yellow mb-2">
                  {item.stat}
                </div>
                <div className="text-xl font-semibold mb-2">{item.label}</div>
                <div className="text-gray-300">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Our Solar Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive renewable energy services designed for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-solar rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Solar Panel Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Professional installation of high-efficiency solar panels with 25-year warranty.
                </p>
                <Button variant="outline" className="btn-outline-solar" asChild>
                  <Link to="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 border-solar-yellow/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-energy rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Battery Solutions</CardTitle>
                <div className="text-sm text-energy-orange font-medium">Coming Soon</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Store solar energy for use during peak hours or power outages.
                </p>
                <Button variant="outline" disabled>
                  Available Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Solar Manufacturing</CardTitle>
                <div className="text-sm text-energy-orange font-medium">Future Ready</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Custom solar panel manufacturing for large-scale installations.
                </p>
                <Button variant="outline" disabled>
                  Future Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              How Solar Installation Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to flipping the switch, we make going solar simple and stress-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 shadow-solar">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-solar-yellow text-primary rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              See Solar in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real installations, real results - witness the transformation of homes across the region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-solar transition-all duration-300">
              <img 
                src={solarInstallation} 
                alt="Professional solar panel installation on residential roof"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Professional Installation</h3>
                  <p className="text-sm">Expert team ensures quality results</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-solar transition-all duration-300">
              <img 
                src={happyFamily} 
                alt="Happy family with their new solar powered home"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Happy Customers</h3>
                  <p className="text-sm">Families saving money every day</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-solar transition-all duration-300">
              <img 
                src={technicianWork} 
                alt="Solar technician working on panel installation"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Expert Technicians</h3>
                  <p className="text-sm">Certified professionals you can trust</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-solar transition-all duration-300 md:col-span-2">
              <img 
                src={solarFarmSunset} 
                alt="Beautiful solar farm at sunset showcasing renewable energy"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Clean Energy Future</h3>
                  <p className="text-sm">Join the renewable energy revolution</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-solar transition-all duration-300">
              <img 
                src={energyDashboard} 
                alt="Modern energy monitoring dashboard showing solar savings"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Smart Monitoring</h3>
                  <p className="text-sm">Track your savings in real-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories from real customers who made the switch to solar energy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-solar-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 italic">"{testimonial.review}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-300 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={renewableLandscape} 
            alt="Clean renewable energy landscape with solar panels and wind turbines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Making a Difference Together
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Every solar installation contributes to a cleaner, more sustainable future for our planet
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-bold text-solar-yellow mb-2">25%</div>
              <div className="text-xl font-semibold mb-2">Carbon Reduction</div>
              <div className="text-gray-300">Average household impact</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-bold text-solar-yellow mb-2">30</div>
              <div className="text-xl font-semibold mb-2">Trees Planted</div>
              <div className="text-gray-300">Equivalent environmental benefit</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-bold text-solar-yellow mb-2">∞</div>
              <div className="text-xl font-semibold mb-2">Clean Energy</div>
              <div className="text-gray-300">Renewable for generations</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-solar-yellow to-energy-orange">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who are already saving money and protecting the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link to="/contact" className="inline-flex items-center">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-solar text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/services">Check Eligibility</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;