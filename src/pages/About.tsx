import { Heart, Leaf, Users, Award, Target, Eye, CheckCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const missionPoints = [
    {
      icon: Leaf,
      title: 'Eco-Tourism Excellence',
      description: 'Promoting sustainable tourism that preserves Jharkhand\'s pristine natural environment while supporting local communities.'
    },
    {
      icon: Users,
      title: 'Cultural Preservation',
      description: 'Celebrating and preserving the rich tribal heritage, traditions, and crafts of indigenous communities.'
    },
    {
      icon: Heart,
      title: 'Community Empowerment',
      description: 'Creating economic opportunities for local communities through responsible tourism and fair trade practices.'
    },
    {
      icon: Globe,
      title: 'Authentic Experiences',
      description: 'Providing genuine, immersive experiences that connect travelers with local culture and nature.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Destinations Covered', icon: '🗺️' },
    { number: '15', label: 'Tribal Communities', icon: '👥' },
    { number: '200+', label: 'Local Artisans', icon: '🎨' },
    { number: '10K+', label: 'Happy Travelers', icon: '✈️' }
  ];

  const values = [
    { title: 'Sustainability', description: 'Every tour is designed with minimal environmental impact' },
    { title: 'Authenticity', description: 'Real cultural experiences without commercialization' },
    { title: 'Community First', description: '70% of profits go directly to local communities' },
    { title: 'Quality', description: 'Premium experiences with attention to every detail' }
  ];

  const teamMembers = [
    {
      name: 'Dr. Arjun Munda',
      role: 'Cultural Heritage Expert',
      description: 'PhD in Tribal Studies, 15+ years preserving indigenous culture'
    },
    {
      name: 'Priya Sharma',
      role: 'Eco-Tourism Director',
      description: 'Environmental scientist passionate about sustainable tourism'
    },
    {
      name: 'Ravi Kumar',
      role: 'Community Relations',
      description: 'Local tribal leader fostering authentic cultural exchanges'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-forest to-forest-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in">Our Mission</h1>
          <p className="text-2xl mb-8 opacity-90 max-w-4xl mx-auto fade-in">
            Promoting Eco & Cultural Tourism in Jharkhand
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto fade-in">
            We believe in creating transformative travel experiences that celebrate nature, 
            culture, and community while ensuring sustainable development for Jharkhand's future.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                <Eye className="inline-block h-10 w-10 text-primary mr-3" />
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To establish Jharkhand as India's premier eco-cultural tourism destination, 
                where visitors can experience authentic tribal heritage while contributing 
                to environmental conservation and community development.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Carbon-neutral tourism by 2030</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Supporting 50+ tribal villages</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Preserving traditional crafts for future generations</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                <Target className="inline-block h-10 w-10 text-primary mr-3" />
                Our Mission
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {missionPoints.map((point, index) => (
                  <Card key={index} className="card-gradient hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <point.icon className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-forest-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              Creating positive change across Jharkhand's communities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scale-in">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-gradient text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work hand-in-hand with local communities to create sustainable tourism experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Community Partnership</h3>
              <p className="text-muted-foreground">
                We collaborate with tribal councils and local leaders to ensure tourism benefits everyone, 
                respecting traditional ways of life while creating economic opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Leaf className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Environmental Stewardship</h3>
              <p className="text-muted-foreground">
                Every tour follows strict environmental guidelines, using renewable energy, 
                supporting reforestation, and maintaining zero-waste practices.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Cultural Authenticity</h3>
              <p className="text-muted-foreground">
                We provide genuine cultural experiences through storytelling, traditional crafts, 
                and ceremonies, ensuring cultural integrity is always preserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate experts dedicated to sustainable tourism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-gradient text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Be part of a movement that transforms travel into a force for good. 
            Experience Jharkhand's beauty while making a positive impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
              Plan Your Trip
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold"
            >
              Support Local Communities
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">🌱</h3>
              <p className="opacity-90">Sustainable Tourism</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">🏛️</h3>
              <p className="opacity-90">Cultural Heritage</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">🤝</h3>
              <p className="opacity-90">Community Partnership</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;