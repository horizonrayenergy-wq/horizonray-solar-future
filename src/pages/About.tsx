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
  CheckCircle
} from 'lucide-react';

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
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
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

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Our Mission</h2>
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-solar rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Democratizing Solar Energy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe everyone should have access to clean, affordable energy. Our mission is to make 
                    solar installations simple, cost-effective, and reliable for homeowners everywhere.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                By combining cutting-edge technology with exceptional service, we help families reduce their 
                electricity bills while contributing to a sustainable future for the next generation.
              </p>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Our Vision</h2>
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-energy rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">A Solar-Powered Future</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a world where renewable energy powers every home and business, creating 
                    communities that are energy-independent and environmentally responsible.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Through innovation in solar technology and energy storage, we're building the infrastructure 
                for a cleaner, more sustainable tomorrow.
              </p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
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