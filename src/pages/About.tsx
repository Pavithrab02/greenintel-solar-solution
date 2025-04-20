import { Link } from "react-router-dom";
import { Award, CheckCircle, Target, Heart, Flower } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Sarvesh Mall",
      title: "Renewable Energy Specialist",
      experience: "11+ years, MNRE background",
      bio: "Expert in solar policy and implementation with extensive experience working with the Ministry of New and Renewable Energy."
    },
    {
      name: "Chetan Sharma",
      title: "Data & Sustainability Strategist",
      experience: "Environmental Engineering + Software",
      bio: "Combines environmental engineering expertise with advanced software skills to deliver data-driven sustainability solutions."
    },
    {
      name: "Prem Bharti",
      title: "Solar EPC Trainer & Implementer",
      experience: "10+ years",
      bio: "Seasoned professional in solar EPC project management, specializing in training teams and implementing efficient solar installations."
    },
    {
      name: "Vishnu Jain",
      title: "Technology & Energy Expert",
      experience: "IIT Roorkee Graduate, Data Engineer",
      bio: " Drives GreenIntel’s tech edge by integrating advanced AI solutions into renewable energy systems, enabling smarter, data-powered sustainability."
    }
  ];
  
  const values = [
    {
      icon: <Award className="h-8 w-8 text-greenintel-primary" />,
      title: "Innovation",
      description: "Continuously pushing boundaries with AI and deep tech to drive the renewable energy sector forward."
    },
    {
      icon: <Flower className="h-8 w-8 text-greenintel-primary" />,
      title: "Sustainability",
      description: "Committed to environmental stewardship and promoting sustainable practices in all our work."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-greenintel-primary" />,
      title: "Excellence",
      description: "Striving for the highest quality in every project, consultation, and technology solution we deliver."
    },
    {
      icon: <Heart className="h-8 w-8 text-greenintel-primary" />,
      title: "Integrity",
      description: "Honest, transparent relationships with clients built on trust and ethical business practices."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2025 by experts in green tech, GreenIntel merges AI, engineering, and clean energy to redefine renewables.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-greenintel-light px-4 py-2 rounded-full">
                <Target size={18} className="text-greenintel-primary" />
                <span className="font-medium text-greenintel-primary">Our Vision</span>
              </div>
              <h2>Lead the clean energy revolution</h2>
              <p className="text-lg text-muted-foreground">
                We envision a world where technology-driven sustainability is accessible to all,
                creating a cleaner planet while driving economic growth and energy independence.
              </p>
              <div className="pt-4">
                <Button className="btn-primary" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-greenintel-light px-4 py-2 rounded-full">
                <Target size={18} className="text-greenintel-primary" />
                <span className="font-medium text-greenintel-primary">Our Mission</span>
              </div>
              <h2>Maximize energy efficiency</h2>
              <p className="text-lg text-muted-foreground">
                We're committed to maximizing energy efficiency through innovation, 
                artificial intelligence, and expert-led services that deliver real 
                environmental impact and financial returns.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="border-greenintel-primary text-greenintel-primary hover:bg-greenintel-light" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-greenintel-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our work and define our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-greenintel-light flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Our expert team combines decades of experience in renewable energy, sustainability, and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 item-center">
            {team.map((member, index) => (
              <div key={index} className="bg-white border border-muted rounded-xl p-6 shadow-md">
                <h3 className="text-xl text-black font-bold mb-6">{member.name}</h3>
                <p className="text-greenintel-primary font-medium mb-2">{member.title}</p>
                <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                <p className="text-black">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-greenintel-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Join Us in Creating a Sustainable Future</h2>
            <p className="text-xl text-white/80 mb-8">
              Partner with GreenIntel to transform your energy strategy and contribute to a greener planet.
            </p>
            <Button className="bg-white text-greenintel-secondary hover:bg-greenintel-accent" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
