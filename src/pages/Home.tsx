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
  Sun
} from 'lucide-react';

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