
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, Mail, Book } from 'lucide-react';
import { count } from 'console';

const teamMembers = [
  {
    name: "Emma Tellblom",
    role: "Founder & Jack of All Trades",
    country: "Sweden",
    bio: "Founder of Mensinator as a favor to her friend. Handles a little bit of everything, hates design decisions.",
    avatar: "",
    github: "https://github.com/EmmaTellblom/",
    //website: "https://alexjohnson.dev",
    //email: "mensinator.app@gmail.com"
  },
  {
    name: "Carsten Hagemann",
    role: "Lead Backend Developer",
    country: "Germany",
    bio: "Strong believer in privacy and open source. Ensures the app remains strucutred and works as intended.",
    avatar: "",
    github: "https://github.com/carstenhag",
    //website: "",
    //email: "sam@mensinator.app"
  }
  // ,
  // {
  //   name: "Jamie Zhang",
  //   role: "Backend Developer",
  //   bio: "Privacy advocate and database specialist. Ensures all data remains secure and local to the device.",
  //   avatar: "",
  //   github: "https://github.com/jamiezhang",
  //   website: "https://jamiezhang.io",
  //   email: ""
  // },
  // {
  //   name: "Taylor Rivera",
  //   role: "Documentation Lead",
  //   bio: "Technical writer with experience in open source projects. Maintains the app's documentation and user guides.",
  //   avatar: "",
  //   github: "https://github.com/taylorr",
  //   website: "",
  //   email: "taylor@mensinator.app"
  // }
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">About Mensinator</h1>
        <p className="text-muted-foreground mb-8">
          Learn about our mission and the team behind the app.
        </p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Mensinator was created with a simple but powerful mission: to provide a period tracking tool that prioritizes privacy above all else. In an era where personal data is often exploited, we believe your most intimate health information should remain entirely in your control.
            </p>
            <p className="text-muted-foreground mb-4">
              We built this app on three core principles:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>
                <strong className="text-foreground">Complete Privacy:</strong> All data stays on your device. Period.
              </li>
              <li>
                <strong className="text-foreground">Accessibility:</strong> No accounts, no barriers, just open the app and start tracking.
              </li>
              <li>
                <strong className="text-foreground">Transparency:</strong> Open source code so anyone can verify our privacy claims.
              </li>
            </ul>
            <p className="text-muted-foreground">
              Our goal is to create a tool that helps people understand their bodies better without compromising their privacy or autonomy. We believe period tracking should be simple, secure, and accessible to everyone.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      {member.role}
                      <Badge variant="outline" className="ml-2 bg-accent text-accent-foreground">
                        Core Team
                      </Badge>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {/* {member.website && (
                    <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                      <Globe className="h-5 w-5" />
                    </a>
                  )} */}
                  {/* {member.email && (
                    <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-foreground">
                      <Mail className="h-5 w-5" />
                    </a>
                  )} */}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground mb-6">
            Mensinator is an open source project, and we welcome contributions from everyone. Whether you're a developer, designer, writer, or user with feedback, there are many ways to get involved.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://github.com/EmmaTellblom/Mensinator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-card rounded-lg border border-border hover:bg-accent/20 transition-colors"
            >
              <Github className="h-5 w-5 mr-3 text-burgundy" />
              <div>
                <h3 className="font-medium">Contribute on GitHub</h3>
                <p className="text-sm text-muted-foreground">Help us build and improve the app</p>
              </div>
            </a>
            <a 
              href="/docs/contributing" 
              className="flex items-center p-4 bg-card rounded-lg border border-border hover:bg-accent/20 transition-colors"
            >
              <Book className="h-5 w-5 mr-3 text-burgundy" />
              <div>
                <h3 className="font-medium">Read Contributing Guidelines</h3>
                <p className="text-sm text-muted-foreground">Learn how to get started</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
