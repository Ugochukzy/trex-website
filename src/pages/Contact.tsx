import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+234 812 784 0524',
      description: 'Call us for immediate assistance'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '2, Olusosun Street, Oregun, Ikeja, Lagos',
      description: 'Visit our office for consultations'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@trexsource.com',
      description: 'Send us your inquiries'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 8:00 AM - 6:00 PM',
      description: 'Saturday: 9:00 AM - 4:00 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Contact Trexsource
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Ready to secure your property or need professional services? Get in touch with us today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Send className="w-6 h-6 mr-2 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="security">Security Guards</SelectItem>
                          <SelectItem value="cctv">CCTV Installation & Repair</SelectItem>
                          <SelectItem value="event">Event Security</SelectItem>
                          <SelectItem value="consulting">Security Consulting</SelectItem>
                          <SelectItem value="driver">Driver Recruitment</SelectItem>
                          <SelectItem value="solar">Solar Solutions</SelectItem>
                          <SelectItem value="business">Business Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  We're here to help! Reach out to us through any of the following channels, and our team will respond promptly to your inquiry.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 border-0 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-elegant transition-all duration-300">
                    <CardContent className="flex items-start space-x-4">
                      <div className="bg-primary rounded-full p-3">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.details}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                <CardContent className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Emergency Security Response</h3>
                  <p className="text-muted-foreground">
                    For urgent security situations, call our 24/7 emergency line:
                  </p>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="tel:+2348127840524">
                      <Phone className="mr-2 w-5 h-5" />
                      +234 812 784 0524
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Ikeja, Lagos for easy accessibility
            </p>
          </div>
          
          <Card className="overflow-hidden border-0 shadow-elegant">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-12 text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">2, Olusosun Street</h3>
              <p className="text-lg text-muted-foreground mb-4">Oregun, Ikeja, Lagos, Nigeria</p>
              <p className="text-muted-foreground">
                Easily accessible by public transport and with parking available for visitors.
                <br />
                Schedule an appointment for personalized security consultations.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;