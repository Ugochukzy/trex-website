import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Camera, Users, Phone, MapPin, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-security.jpg';
import cctvImage from '@/assets/cctv-service.jpg';
import eventImage from '@/assets/event-security.jpg';

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Guards',
      description: 'Professional trained guards for homes, businesses, and events',
      image: heroImage
    },
    {
      icon: Camera,
      title: 'CCTV Installation & Repair',
      description: 'Advanced surveillance systems with smart integrations',
      image: cctvImage
    },
    {
      icon: Users,
      title: 'Event Security',
      description: 'Crowd control and access monitoring for all events',
      image: eventImage
    }
  ];

  const features = [
    'Certified & Insured Security Personnel',
    '24/7 Monitoring & Response',
    'Advanced Technology Integration',
    'Customized Security Solutions',
    'Professional Risk Assessment',
    'Rapid Emergency Response'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                  Professional Security Services You Can Trust
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  From expertly trained guards to advanced CCTV installations, Trexsource delivers complete protection for homes, businesses, and institutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold">
                  <Link to="/security-services">
                    Get Security Support
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/contact">Request a Free Consultation</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-primary-foreground/80">Clients Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-primary-foreground/80">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional Security Guard" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Security Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security solutions tailored to meet your specific protection needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full p-3">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to="/security-services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Trexsource?</h2>
                <p className="text-xl text-muted-foreground">
                  We combine years of experience with cutting-edge technology to deliver unmatched security solutions.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-3">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Certified</h3>
                    <p className="text-muted-foreground">All our security personnel are well trained, and certified professionals.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent rounded-full p-3">
                    <Camera className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Technology</h3>
                    <p className="text-muted-foreground">State-of-the-art surveillance systems and smart security integrations.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gold-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">Ready to Secure Your Property?</h2>
              <p className="text-xl text-accent-foreground/90">
                Contact us today for a free security consultation and customized protection plan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-background/10 border-accent-foreground/20 text-accent-foreground hover:bg-background/20">
                <Link to="/contact">
                  <Phone className="mr-2 w-5 h-5" />
                  Call +234 812 784 0524
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-accent-foreground/80">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>2, Olusosun Street, Oregun, Ikeja, Lagos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@trexsource.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
