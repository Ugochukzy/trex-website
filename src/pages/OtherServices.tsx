import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Car, Sun, Users, CheckCircle, Phone } from 'lucide-react';

const OtherServices = () => {
  const services = [
    {
      icon: Car,
      title: 'Driver Recruitment',
      description: 'Professional, trained, and verified drivers for businesses and individuals',
      features: [
        'Background-checked drivers',
        'Professional training certification',
        'Personal & commercial drivers',
        'Executive chauffeur services',
        'Temporary & permanent placements',
        'Fleet management support'
      ]
    },
    {
      icon: Sun,
      title: 'Solar-Powered Home Solutions',
      description: 'Clean energy setups for sustainable and cost-effective power solutions',
      features: [
        'Residential solar installations',
        'Energy efficiency consultations',
        'Battery storage systems',
        'Grid-tie & off-grid solutions',
        'Maintenance & monitoring',
        'Government incentive assistance'
      ]
    },
    {
      icon: Users,
      title: 'Business Support Services',
      description: 'Comprehensive staffing solutions including office assistants, cleaners, and general staff',
      features: [
        'Office assistants & receptionists',
        'Professional cleaning services',
        'Administrative support staff',
        'Maintenance personnel',
        'Customer service representatives',
        'Temporary & permanent staffing'
      ]
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
              Additional Professional Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Beyond security, we offer comprehensive business solutions including driver recruitment, solar installations, and professional staffing services.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold">
              <Link to="/contact">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-elegant">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary rounded-full p-4">
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-foreground">{service.title}</CardTitle>
                    </div>
                    <p className="text-lg text-muted-foreground">{service.description}</p>
                    <Button asChild className="bg-primary hover:bg-primary/90 w-fit">
                      <Link to="/contact">Get More Information</Link>
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Service Features:</h3>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Complete Business Solutions</h2>
                <p className="text-xl text-muted-foreground">
                  Trexsource is your one-stop solution for professional services. We understand that businesses need reliable partners for various operational needs.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Trusted Professionals</h3>
                    <p className="text-muted-foreground">All our staff undergo thorough background checks and professional training.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Flexible Solutions</h3>
                    <p className="text-muted-foreground">Temporary, permanent, and contract-based services to meet your specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Quality Assurance</h3>
                    <p className="text-muted-foreground">Regular quality checks and performance monitoring ensure consistent service delivery.</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <div className="text-center space-y-4">
                  <Car className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">Driver Services</h3>
                  <p className="text-muted-foreground">Professional chauffeurs and drivers for executive transport and daily commutes.</p>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                <div className="text-center space-y-4">
                  <Sun className="w-12 h-12 text-accent mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">Solar Solutions</h3>
                  <p className="text-muted-foreground">Sustainable energy solutions for homes and businesses with professional installation.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">Need Professional Services?</h2>
              <p className="text-xl text-accent-foreground/90">
                Contact us to discuss your specific requirements and get a customized solution.
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
                <Link to="/contact">Request Service Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OtherServices;