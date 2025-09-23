import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Zap, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Shield,
  DollarSign,
  Clock,
  Wrench,
  Battery,
  Factory,
  Home as HomeIcon,
  Phone
} from 'lucide-react';
import solarInstallation from '@/assets/solar-installation.jpg';
import technicianWork from '@/assets/technician-work.jpg';
import energyDashboard from '@/assets/energy-dashboard.jpg';

const Services = () => {
  const solarPackages = [
    {
      name: "Starter Solar",
      size: "3-5 kW System",
      price: "From $8,999",
      savings: "$800-1,200/year",
      description: "Perfect for smaller homes and apartments with moderate energy usage.",
      features: [
        "12-20 premium solar panels",
        "25-year performance warranty", 
        "Professional installation",
        "System monitoring app",
        "Grid-tie inverter included"
      ],
      popular: false
    },
    {
      name: "Family Solar",
      size: "6-8 kW System", 
      price: "From $15,999",
      savings: "$1,500-2,200/year",
      description: "Ideal for average-sized homes with typical family energy consumption.",
      features: [
        "24-32 premium solar panels",
        "25-year performance warranty",
        "Professional installation", 
        "Advanced monitoring system",
        "String inverters with optimizers",
        "Battery-ready setup"
      ],
      popular: true
    },
    {
      name: "Premium Solar",
      size: "10-15 kW System",
      price: "From $24,999", 
      savings: "$2,500-3,500/year",
      description: "Maximum efficiency for large homes or high energy usage households.",
      features: [
        "40-60 premium solar panels",
        "25-year performance warranty",
        "Professional installation",
        "Premium monitoring & analytics",
        "Microinverters for max efficiency", 
        "Battery storage compatible",
        "EV charging preparation"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Massive Savings",
      description: "Save up to 90% on your electricity bills from day one."
    },
    {
      icon: Shield,
      title: "25-Year Warranty",
      description: "Industry-leading warranty coverage on all components."
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Most installations completed within 1-3 days."
    },
    {
      icon: Wrench,
      title: "Full-Service Support",
      description: "From permits to maintenance, we handle everything."
    }
  ];

  const futureServices = [
    {
      icon: Battery,
      title: "Battery Storage Solutions",
      subtitle: "Coming Q2 2024",
      description: "Store excess solar energy for use during peak hours or outages. Complete energy independence.",
      features: [
        "10-20 kWh capacity options",
        "Backup power during outages", 
        "Peak hour energy storage",
        "Smart grid integration"
      ]
    },
    {
      icon: Factory,
      title: "Solar Panel Manufacturing",
      subtitle: "Future Ready",
      description: "Custom solar panel production for large-scale commercial and residential projects.",
      features: [
        "Custom panel specifications",
        "Bulk pricing for developers",
        "Quality assured manufacturing",
        "Direct-to-customer delivery"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={solarInstallation} 
            alt="Professional solar panel installation showcasing our quality services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Solar Installation Packages
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8">
              Choose the perfect solar solution for your home and start saving money 
              while protecting the environment.
            </p>
            <Button size="lg" className="btn-solar text-lg px-8 py-4" asChild>
              <Link to="/contact" className="inline-flex items-center">
                Get Free Quote & Site Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Why Choose Our Solar Installations?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional installation, premium components, and exceptional service that delivers results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-solar transition-all duration-300 hover:scale-105 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Our Installation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From consultation to activation, we handle every step with professionalism and care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 shadow-solar">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-solar-yellow text-primary rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Consultation</h3>
              <p className="text-muted-foreground">Schedule a no-obligation consultation to assess your home's solar potential</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 shadow-solar">
                  <HomeIcon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-solar-yellow text-primary rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Site Assessment</h3>
              <p className="text-muted-foreground">Our experts evaluate roof condition, sun exposure, and electrical systems</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 shadow-solar">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-solar-yellow text-primary rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Design</h3>
              <p className="text-muted-foreground">We create a personalized solar system design optimized for your home</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 shadow-solar">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-solar-yellow text-primary rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Installation</h3>
              <p className="text-muted-foreground">Certified technicians install your system with precision, typically in 1-2 days</p>
            </div>
          </div>
          
          {/* Process Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-solar transition-all duration-300">
              <img 
                src={technicianWork} 
                alt="Professional solar technician working on installation"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Expert Installation</h3>
                  <p className="text-sm">Certified professionals ensuring quality</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-solar transition-all duration-300">
              <img 
                src={energyDashboard} 
                alt="Modern energy monitoring dashboard showing solar performance"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Smart Monitoring</h3>
                  <p className="text-sm">Track your energy production and savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Installation Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Solar Installation Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. All packages include professional installation, 
              permits, and 25-year warranty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solarPackages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-elegant transition-all duration-300 ${pkg.popular ? 'border-solar-yellow border-2 scale-105' : 'hover:scale-105'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-solar text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-lg text-muted-foreground">{pkg.size}</div>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <div className="text-lg text-solar-yellow font-semibold">Save {pkg.savings}</div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">{pkg.description}</p>
                  
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-solar-yellow flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={pkg.popular ? "btn-solar w-full" : "btn-energy w-full"} 
                    asChild
                  >
                    <Link to="/contact">Get This Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Future-Ready Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Coming soon: Advanced energy storage and manufacturing capabilities to complete your energy ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {futureServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-energy-orange/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-energy rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-energy-orange border-energy-orange">
                        {service.subtitle}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-energy-orange flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" disabled className="w-full">
                      Notify Me When Available
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solar Calculator CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Is Solar Right for Your House?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Use our advanced solar calculator to estimate your savings based on your location, 
            electricity usage, and roof specifications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-solar-yellow mb-2">Calculate</div>
              <div className="text-gray-300">Monthly savings potential</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-solar-yellow mb-2">Analyze</div>
              <div className="text-gray-300">Roof suitability & orientation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-solar-yellow mb-2">Estimate</div>
              <div className="text-gray-300">System size & investment</div>
            </div>
          </div>
          
          <Badge variant="outline" className="text-energy-orange border-energy-orange mb-4">
            Coming Soon
          </Badge>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" disabled className="text-lg px-8 py-4">
              Try Solar Calculator
            </Button>
            <Button size="lg" className="btn-solar text-lg px-8 py-4" asChild>
              <Link to="/contact" className="inline-flex items-center">
                Get Professional Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;