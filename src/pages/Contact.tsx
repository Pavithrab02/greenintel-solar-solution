
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-greenintel-primary" />,
      title: "Phone",
      details: "+91-907-937-0323",
      link: "tel:+919079370323"
    },
    {
      icon: <Mail size={24} className="text-greenintel-primary" />,
      title: "Email",
      details: "admin@greenintel.in",
      link: "mailto:admin@greenintel.in"
    },
    {
      icon: <MapPin size={24} className="text-greenintel-primary" />,
      title: "Office",
      details: "Greater Noida, Gautam Buddha Nagar, 201318, India",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions or ready to start your green energy journey? Reach out to our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-greenintel-light rounded-full flex items-center justify-center mb-6">
                      <Check size={32} className="text-greenintel-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      variant="outline"
                      className="border-greenintel-primary text-greenintel-primary"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="Your phone number (optional)"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help you?"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        placeholder="Please describe how we can assist you..."
                        className="w-full min-h-[150px]"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="btn-primary w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending Message...</>
                      ) : (
                        <>
                          <Send size={16} className="mr-2" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps?q=Greater+Noida,+Gautam+Buddha+Nagar,+201318&output=embed"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="GreenIntel Office Location"
                  />
                </CardContent>
              </Card>

              <div className="bg-white rounded-lg shadow-md pt-0 px-4 pb-4 ">
                <h3 className="text-xl font-bold mb-0">Contact Information</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4  ">
                      <div className="flex items-center justify-center w-10 h-10 bg-greenintel-light rounded-full  relative top-[15px]">
                        {info.icon}
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-medium leading-tight">{info.title}</h4>
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-greenintel-primary transition-colors text-sm"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-greenintel-primary text-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-greenintel-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-greenintel-dark mb-6">Join Our Green Energy Community</h2>
            <p className="text-xl text-greenintel-dark/80 mb-8">
              Subscribe to our newsletter for the latest updates on renewable energy, AI advancements, and sustainability practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border-white focus-visible:ring-greenintel-primary"
              />
              <Button className="bg-greenintel-dark text-white hover:bg-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
