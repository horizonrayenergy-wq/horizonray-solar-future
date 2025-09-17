import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Wrench, 
  Calculator, 
  Headphones, 
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  Upload
} from 'lucide-react';
import { useState } from 'react';

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    availability: ''
  });

  const openPositions = [
    {
      title: "Solar Installation Technician",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "$45,000 - $65,000",
      icon: Wrench,
      description: "Install and maintain solar panel systems for residential and commercial customers.",
      requirements: [
        "2+ years electrical or roofing experience",
        "Valid driver's license",
        "Ability to work at heights",
        "OSHA 10 certification preferred"
      ]
    },
    {
      title: "Solar Sales Consultant", 
      department: "Sales",
      location: "Remote/Field",
      type: "Full-time",
      salary: "$50,000 - $85,000 + Commission",
      icon: Users,
      description: "Help homeowners understand solar benefits and design custom energy solutions.",
      requirements: [
        "Sales experience preferred",
        "Strong communication skills",
        "Self-motivated and goal-oriented",
        "Clean driving record"
      ]
    },
    {
      title: "Project Engineer",
      department: "Engineering", 
      location: "Main Office",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      icon: Calculator,
      description: "Design solar systems and manage technical aspects of installations.",
      requirements: [
        "Engineering degree or equivalent",
        "Solar design software experience",
        "Project management skills",
        "NABCEP certification a plus"
      ]
    },
    {
      title: "Customer Success Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time", 
      salary: "$40,000 - $55,000",
      icon: Headphones,
      description: "Provide ongoing support to customers throughout their solar journey.",
      requirements: [
        "Customer service experience",
        "Technical troubleshooting skills",
        "Excellent written communication",
        "Solar industry knowledge helpful"
      ]
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      items: ["Comprehensive medical insurance", "Dental & vision coverage", "Mental health support", "Gym membership reimbursement"]
    },
    {
      title: "Financial Benefits", 
      items: ["Competitive salary", "Performance bonuses", "401(k) with company match", "Employee stock options"]
    },
    {
      title: "Work-Life Balance",
      items: ["Flexible work arrangements", "Paid time off", "Parental leave", "Professional development"]
    },
    {
      title: "Career Growth",
      items: ["Training & certification programs", "Advancement opportunities", "Conference attendance", "Mentorship programs"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your application! We will review it and get back to you within 3-5 business days.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Join Our Solar Revolution
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8">
              Build a meaningful career while helping families save money and protect the environment. 
              Join Horizonray Energy's growing team of renewable energy professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-solar-yellow">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Competitive Benefits</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Growth Opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Mission-Driven Work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Why Work at Horizonray Energy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a rapidly growing company that's making a real difference in the renewable energy sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-solar-yellow flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your perfect role in the renewable energy industry. All positions offer competitive 
              compensation and growth opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openPositions.map((position, index) => {
              const Icon = position.icon;
              return (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-solar rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{position.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span>{position.department}</span>
                            <Badge variant="outline">{position.type}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{position.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-solar-yellow font-semibold">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-solar-yellow flex-shrink-0 mt-1" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full btn-solar" onClick={() => {
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Apply for This Position
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Apply Now
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to start your career in renewable energy? Submit your application below.
              </p>
            </div>
            
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="position">Position Applying For *</Label>
                      <Select onValueChange={(value) => handleInputChange('position', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          {openPositions.map((position) => (
                            <SelectItem key={position.title} value={position.title}>
                              {position.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="experience">Years of Relevant Experience *</Label>
                    <Select onValueChange={(value) => handleInputChange('experience', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="availability">Availability to Start *</Label>
                    <Select onValueChange={(value) => handleInputChange('availability', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="When can you start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="2-weeks">2 weeks notice</SelectItem>
                        <SelectItem value="1-month">1 month</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit for Horizonray Energy..."
                      rows={6}
                    />
                  </div>
                  
                  <div>
                    <Label>Resume Upload *</Label>
                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground/25 rounded-lg hover:border-solar-yellow transition-colors cursor-pointer">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium text-primary hover:text-solar-yellow">Upload your resume</span>
                          <p>or drag and drop</p>
                        </div>
                        <p className="text-xs text-muted-foreground">PDF, DOC up to 10MB</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full btn-solar text-lg py-4">
                    Submit Application
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this application, you agree to our privacy policy and terms of service.
                    We will review your application within 3-5 business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;