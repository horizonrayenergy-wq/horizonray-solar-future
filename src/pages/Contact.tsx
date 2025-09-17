import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  CheckCircle,
  Calculator,
  Home,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [detailedForm, setDetailedForm] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    monthlyBill: '',
    monthlyConsumption: '',
    roofType: '',
    timeline: '',
    message: ''
  });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quick form submitted:', quickForm);
    alert('Thank you for your interest! We will contact you within 24 hours to schedule your free consultation.');
  };

  const handleDetailedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Detailed form submitted:', detailedForm);
    alert('Thank you for providing detailed information! Our solar experts will contact you within 4 hours with a preliminary assessment.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-SOLAR",
      subtitle: "Mon-Fri 8AM-6PM, Sat 9AM-4PM"
    },
    {
      icon: Mail,
      title: "Email", 
      details: "info@horizonray.energy",
      subtitle: "We respond within 4 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Solar Street",
      subtitle: "Green City, GC 12345"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-6PM",
      subtitle: "Saturday: 9AM-4PM"
    }
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get Your Free Solar Quote
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8">
              Ready to start saving with solar? Get a personalized quote and site assessment 
              from our renewable energy experts. No obligation, completely free.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-solar-yellow">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>No pressure sales</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Custom recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Choose Your Quote Method
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quick form for immediate contact or detailed form for a more accurate preliminary assessment.
              </p>
            </div>

            <Tabs defaultValue="quick" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="quick" className="flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Quick Quote</span>
                </TabsTrigger>
                <TabsTrigger value="detailed" className="flex items-center space-x-2">
                  <Calculator className="w-4 h-4" />
                  <span>Detailed Assessment</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="quick">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Quick Form */}
                  <Card className="shadow-elegant">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Quick Lead Form</CardTitle>
                      <p className="text-muted-foreground">
                        Get contacted within 24 hours for your free consultation.
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <form onSubmit={handleQuickSubmit} className="space-y-6">
                        <div>
                          <Label htmlFor="quickName">Full Name *</Label>
                          <Input
                            id="quickName"
                            value={quickForm.name}
                            onChange={(e) => setQuickForm(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="quickPhone">Phone Number *</Label>
                          <Input
                            id="quickPhone"
                            type="tel"
                            value={quickForm.phone}
                            onChange={(e) => setQuickForm(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="(555) 123-4567"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="quickEmail">Email Address *</Label>
                          <Input
                            id="quickEmail"
                            type="email"
                            value={quickForm.email}
                            onChange={(e) => setQuickForm(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                        
                        <Button type="submit" className="w-full btn-solar text-lg py-4">
                          Get My Free Quote
                        </Button>
                        
                        <p className="text-xs text-center text-muted-foreground">
                          By submitting, you agree to receive calls/texts about solar solutions. 
                          No spam, unsubscribe anytime.
                        </p>
                      </form>
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary">What Happens Next?</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-solar rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div>
                        <div>
                          <h4 className="font-semibold mb-2">Initial Consultation Call</h4>
                          <p className="text-muted-foreground">Our solar expert calls you within 24 hours to understand your energy needs and schedule a site visit.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-solar rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div>
                        <div>
                          <h4 className="font-semibold mb-2">Free Home Assessment</h4>
                          <p className="text-muted-foreground">Professional site evaluation including roof analysis, shading study, and electrical assessment.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-solar rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div>
                        <div>
                          <h4 className="font-semibold mb-2">Custom Proposal</h4>
                          <p className="text-muted-foreground">Receive detailed proposal with system design, savings projections, and financing options.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="detailed">
                <div className="max-w-3xl mx-auto">
                  <Card className="shadow-elegant">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-4">
                        <Home className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">Detailed Assessment Form</CardTitle>
                      <p className="text-muted-foreground">
                        Provide detailed information for a more accurate preliminary solar assessment.
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <form onSubmit={handleDetailedSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="detailedName">Full Name *</Label>
                            <Input
                              id="detailedName"
                              value={detailedForm.name}
                              onChange={(e) => setDetailedForm(prev => ({ ...prev, name: e.target.value }))}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="detailedMobile">Mobile Number *</Label>
                            <Input
                              id="detailedMobile"
                              type="tel"
                              value={detailedForm.mobile}
                              onChange={(e) => setDetailedForm(prev => ({ ...prev, mobile: e.target.value }))}
                              placeholder="(555) 123-4567"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="detailedEmail">Email Address *</Label>
                          <Input
                            id="detailedEmail"
                            type="email"
                            value={detailedForm.email}
                            onChange={(e) => setDetailedForm(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="address">Property Address *</Label>
                          <Input
                            id="address"
                            value={detailedForm.address}
                            onChange={(e) => setDetailedForm(prev => ({ ...prev, address: e.target.value }))}
                            placeholder="123 Main St, City, State 12345"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="monthlyBill">Average Monthly Electric Bill *</Label>
                            <Select onValueChange={(value) => setDetailedForm(prev => ({ ...prev, monthlyBill: value }))}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-100">Under $100</SelectItem>
                                <SelectItem value="100-150">$100 - $150</SelectItem>
                                <SelectItem value="150-200">$150 - $200</SelectItem>
                                <SelectItem value="200-300">$200 - $300</SelectItem>
                                <SelectItem value="over-300">Over $300</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="monthlyConsumption">Monthly kWh Usage (if known)</Label>
                            <Input
                              id="monthlyConsumption"
                              value={detailedForm.monthlyConsumption}
                              onChange={(e) => setDetailedForm(prev => ({ ...prev, monthlyConsumption: e.target.value }))}
                              placeholder="e.g. 800 kWh"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="roofType">Roof Type *</Label>
                            <Select onValueChange={(value) => setDetailedForm(prev => ({ ...prev, roofType: value }))}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select roof type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="flat">Flat Roof</SelectItem>
                                <SelectItem value="sloped">Sloped Roof</SelectItem>
                                <SelectItem value="mixed">Mixed (Flat & Sloped)</SelectItem>
                                <SelectItem value="unsure">Not Sure</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="timeline">Preferred Installation Timeline *</Label>
                            <Select onValueChange={(value) => setDetailedForm(prev => ({ ...prev, timeline: value }))}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select timeframe" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="asap">As soon as possible</SelectItem>
                                <SelectItem value="1-3months">1-3 months</SelectItem>
                                <SelectItem value="3-6months">3-6 months</SelectItem>
                                <SelectItem value="6-12months">6-12 months</SelectItem>
                                <SelectItem value="exploring">Just exploring options</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="message">Additional Information</Label>
                          <Textarea
                            id="message"
                            value={detailedForm.message}
                            onChange={(e) => setDetailedForm(prev => ({ ...prev, message: e.target.value }))}
                            placeholder="Tell us about any specific requirements, concerns, or questions you have about solar installation..."
                            rows={4}
                          />
                        </div>
                        
                        <Button type="submit" className="w-full btn-solar text-lg py-4">
                          Get Detailed Assessment
                        </Button>
                        
                        <p className="text-xs text-center text-muted-foreground">
                          Our experts will contact you within 4 hours with a preliminary assessment 
                          based on your information and schedule your site visit.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us. We're here to answer all your solar questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold text-primary mb-1">{contact.details}</div>
                    <div className="text-sm text-muted-foreground">{contact.subtitle}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop by our office to meet our team and see solar technology demonstrations.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-elegant">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <div className="text-lg font-semibold text-gray-600">Interactive Map</div>
                <div className="text-gray-500">123 Solar Street, Green City, GC 12345</div>
                <div className="text-sm text-gray-400 mt-2">
                  Map integration would be implemented here
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;