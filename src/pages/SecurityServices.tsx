import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Camera, Users, UserCheck, Clock, Phone, CheckCircle } from 'lucide-react';
import cctvImage from '@/assets/cctv-service.jpg';
import eventImage from '@/assets/event-security.jpg';
import heroImage from '@/assets/hero-security.jpg';

const SecurityServices = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Guards',
      description: 'Professional trained security personnel for comprehensive protection',
      image: heroImage,
      features: [
        'Residential security guards',
        'Commercial building security',
        'Industrial facility protection',
        'VIP & executive protection',
        'Background-checked personnel'
      ]
    },
    {
      icon: Camera,
      title: 'CCTV Installation & Repairs',
      description: 'Advanced surveillance systems with smart integrations and maintenance',
      image: cctvImage,
      features: [
        'HD & 4K camera installation',
        'Smart home integrations',
        'Remote monitoring setup',
        'Repair & maintenance services',
        'Cloud storage solutions',
        'Mobile app access'
      ]
    },
    {
      icon: Users,
      title: 'Event Security',
      description: 'Professional crowd control and access monitoring for all events',
      image: eventImage,
      features: [
        'Concert & festival security',
        'Corporate event protection',
        'Wedding & private party security',
        'Crowd control management',
        'VIP escort services',
        'Emergency response planning'
      ]
    },
    {
      icon: UserCheck,
      title: 'Private Security Consulting',
      description: 'Expert security assessments, strategy development, and risk evaluation',
      image: heroImage,
      features: [
        'Security risk assessments',
        'Vulnerability analysis',
        'Security strategy development',
        'Emergency response planning',
        'Staff training programs',
        'Compliance consulting'
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock security services and monitoring'
    },
    {
      icon: Shield,
      title: 'Trained Professionals',
      description: 'All personnel are well trained and certified'
    },
    {
      icon: Phone,
      title: 'Rapid Response',
      description: 'Quick emergency response and incident management'
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
              Professional Security Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect what matters most to you. From trained guards to advanced surveillance systems.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold">
              <Link to="/contact">Request Security Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-elegant">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-primary/90 backdrop-blur-sm rounded-full p-4">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <CardTitle className="text-3xl font-bold text-foreground">{service.title}</CardTitle>
                        <p className="text-lg text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="bg-primary hover:bg-primary/90 w-fit">
                        <Link to="/contact">Get Quote for This Service</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Our Security Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional, reliable, and comprehensive security solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="bg-primary rounded-full p-4 w-fit mx-auto">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{benefit.title}</CardTitle>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">Ready to Enhance Your Security?</h2>
              <p className="text-xl text-accent-foreground/90">
                Contact us today for a free security assessment and customized protection plan.
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
                <Link to="/contact">Request Free Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityServices;