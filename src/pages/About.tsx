import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Leaf, 
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Heart,
  Sun,
  Shield
} from 'lucide-react';
import solarFarmSunset from '@/assets/solar-farm-sunset.jpg';
import technicianWork from '@/assets/technician-work.jpg';
import renewableLandscape from '@/assets/renewable-landscape.jpg';
import happyFamily from '@/assets/happy-family-solar.jpg';

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Trust & Reliability",
      description: "We deliver on our promises with transparent pricing and professional service."
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Every installation contributes to a cleaner, more sustainable future."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction and energy savings are our top priorities."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Industry-leading components and installation standards."
    },
    {
      icon: Sun,
      title: "Clean Energy Advocacy",
      description: "Passionate about educating communities on renewable energy benefits."
    },
    {
      icon: Shield,
      title: "Integrity & Transparency",
      description: "Honest communication, fair pricing, and reliable long-term service."
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Creating local jobs and supporting the transition to sustainable energy."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Horizonray Energy was established with a mission to make solar accessible to everyone."
    },
    {
      year: "2021",
      title: "First 100 Installations",
      description: "Reached our first major milestone, proving our commitment to quality service."
    },
    {
      year: "2022",
      title: "1,000+ Happy Customers",
      description: "Expanded our reach and established ourselves as a trusted solar provider."
    },
    {
      year: "2023",
      title: "Regional Expansion",
      description: "Extended services across multiple states, bringing solar to more communities."
    },
    {
      year: "2024",
      title: "3,000+ Installations",
      description: "Continuing our growth while maintaining exceptional customer satisfaction."
    }
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={solarFarmSunset} 
            alt="Beautiful solar farm at sunset representing our renewable energy mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About Horizonray Energy
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8">
              Pioneering the future of renewable energy with innovative solar solutions 
              that empower communities and protect our planet.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-solar-yellow">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Founded 2020</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>3,000+ Installations</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Regional Leader</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Images */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on purpose, driven by innovation, focused on your energy future
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="overflow-hidden shadow-elegant hover:shadow-solar transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src={renewableLandscape} 
                  alt="Renewable energy landscape representing our environmental mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-12 h-12 bg-gradient-solar rounded-lg flex items-center justify-center mb-2">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary">Democratizing Solar Energy</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe everyone should have access to clean, affordable energy. Our mission is to make 
                  solar installations simple, cost-effective, and reliable for homeowners everywhere.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By combining cutting-edge technology with exceptional service, we help families reduce their 
                  electricity bills while contributing to a sustainable future for the next generation.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-elegant hover:shadow-solar transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src={technicianWork} 
                  alt="Professional solar technician representing our commitment to excellence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-12 h-12 bg-gradient-energy rounded-lg flex items-center justify-center mb-2">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary">A Solar-Powered Future</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We envision a world where renewable energy powers every home and business, creating 
                  communities that are energy-independent and environmentally responsible.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through innovation in solar technology and energy storage, we're building the infrastructure 
                  for a cleaner, more sustainable tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Success Stories Preview */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Real Impact, Real Stories</h3>
                <p className="text-xl text-gray-200 mb-6">
                  Every installation creates a success story. Our customers don't just save money – 
                  they become part of the clean energy revolution.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-solar-yellow" />
                    <span className="text-lg">99.8% customer satisfaction rate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-solar-yellow" />
                    <span className="text-lg">Average 85% reduction in electricity bills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-solar-yellow" />
                    <span className="text-lg">Zero upfront costs available</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={happyFamily} 
                  alt="Happy family with their solar-powered home"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-solar-yellow text-primary p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">$2,500+</div>
                  <div className="text-sm">Avg. Annual Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from initial consultation to long-term support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.slice(0, 4).map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-solar transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            {values.slice(4).map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index + 4} className="group hover:shadow-solar transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to regional leader, here's how we've grown while staying true to our mission.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 ml-8 group-last:border-l-transparent">
                    <h3 className="text-xl font-semibold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Environmental Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every installation makes a difference. Here's how our customers are helping save the planet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-solar-yellow mb-4">500+</div>
              <div className="text-xl font-semibold mb-2">Tons CO₂ Prevented</div>
              <div className="text-gray-300">Equivalent to planting 12,000 trees</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-solar-yellow mb-4">15M+</div>
              <div className="text-xl font-semibold mb-2">kWh Clean Energy</div>
              <div className="text-gray-300">Renewable energy generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-solar-yellow mb-4">$2.5M+</div>
              <div className="text-xl font-semibold mb-2">Customer Savings</div>
              <div className="text-gray-300">Money saved on electricity bills</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of the renewable energy revolution. Let's create a cleaner future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-solar text-lg px-8 py-4" asChild>
              <Link to="/contact" className="inline-flex items-center">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-solar text-lg px-8 py-4" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;