import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Target, Award, Users, CheckCircle, Phone } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the safety and security of our clients above all else, ensuring comprehensive protection in every service we provide.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in all our services, maintaining the highest standards of professionalism and quality.'
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Our clients trust us to deliver consistent, dependable services that they can count on 24/7.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term partnerships with our clients, understanding their unique needs and providing tailored solutions.'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Clients Served' },
    { number: '2+', label: 'Years of Excellence' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const team = [
    {
      title: 'Security Operations',
      description: 'Our security team consists of licensed professionals with extensive training in protection services, surveillance, and emergency response.'
    },
    {
      title: 'Installation Experts',
      description: 'Technical specialists in CCTV installation, solar systems, and smart security integrations with years of field experience.'
    },
    {
      title: 'Support Staff',
      description: 'Dedicated customer service and administrative professionals ensuring smooth operations and client satisfaction.'
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
              About Trexsource
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Your trusted partner in security and professional services, delivering peace of mind through expert solutions and reliable support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Trexsource, our mission is to deliver trusted manpower and safety solutions that protect what matters most to our clients. We are committed to providing comprehensive security services, professional staffing, and innovative solutions that exceed expectations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded on the principles of excellence, reliability, and integrity, we have grown to become a leading provider of security and professional services in Lagos and beyond. Our team of dedicated professionals works tirelessly to ensure that every client receives personalized attention and superior service quality.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/security-services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{achievement.number}</div>
                    <div className="text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="bg-primary rounded-full p-4 w-fit mx-auto">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Professional Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional service and protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((department, index) => (
              <Card key={index} className="p-8 border-0 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-elegant transition-all duration-300">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{department.title}</h3>
                  <p className="text-muted-foreground">{department.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Trexsource?</h2>
                <p className="text-xl text-muted-foreground">
                  We combine industry expertise with personalized service to deliver solutions that truly protect and serve our clients.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  'Certified security professionals',
                  'Comprehensive background checks for all personnel',
                  'Tech based solutions for guard monitoring',
                  'Customized solutions for every client',
                  '24/7 support and emergency response',
                  'Proven track record of excellence'
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Our Commitment</h3>
                  <p className="text-muted-foreground">
                    We are committed to building long-term relationships with our clients based on trust, reliability, and exceptional service delivery. Your safety and satisfaction are our top priorities.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Continuous Improvement</h3>
                  <p className="text-muted-foreground">
                    We continuously invest in training, technology, and process improvement to ensure we remain at the forefront of security and professional services.
                  </p>
                </CardContent>
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
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">Ready to Work with Us?</h2>
              <p className="text-xl text-accent-foreground/90">
                Contact us today to learn how we can help protect and serve your specific needs.
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
                <Link to="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;