
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Download, Settings, Users } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Documentation</h1>
        <p className="text-muted-foreground mb-8">
          Find everything you need to know about using and contributing to Mensinator.
        </p>
        
        <Tabs defaultValue="user-guide" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="user-guide">User Guide</TabsTrigger>
            <TabsTrigger value="developer">Developer Guide</TabsTrigger>
            {/* <TabsTrigger value="api">API Reference</TabsTrigger> */}
          </TabsList>
          
          <TabsContent value="user-guide">
            <Card>
              <CardHeader>
                <CardTitle>User Guide</CardTitle>
                <CardDescription>
                  Learn how to use the Mensinator app effectively.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Download className="h-5 w-5 text-burgundy" />
                    Installation
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Download the app from Google Play Store and install it on your Android device.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Open Google Play Store</li>
                    <li>Search for "Mensinator"</li>
                    <li>Tap "Install" button</li>
                    <li>Open the app after installation is complete</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-burgundy" />
                    Basic Setup
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Set up your preferences in the settings when first launching the app.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Choose your language preference</li>
                    <li>Change colors to your liking</li>
                    <li>Customize notifications (optional)</li>
                    <li>Change calculations (optional)</li>
                  </ol>
                </div>

                <Link to="/docs/user-guide" className="text-burgundy hover:text-burgundy-700 font-medium inline-block mt-4">
                  View full user guide →
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="developer">
            <Card>
              <CardHeader>
                <CardTitle>Developer Guide</CardTitle>
                <CardDescription>
                  Contribute to the Mensinator project.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Book className="h-5 w-5 text-burgundy" />
                    Getting Started
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Set up your local development environment.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Clone the repository from GitHub</li>
                    <li>Install dependencies using Gradle</li>
                    <li>Set up Android Studio</li>
                    <li>Build the project</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-burgundy" />
                    Contributing
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Learn how to contribute to the project.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a new branch for your feature or fix</li>
                    <li>Make your changes</li>
                    <li>Run tests to ensure everything works</li>
                    <li>Submit a pull request</li>
                  </ol>
                </div>

                <Link to="/docs/developer-guide" className="text-burgundy hover:text-burgundy-700 font-medium inline-block mt-4">
                  View full developer guide →
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>
                  Technical documentation for developers working with the app's codebase.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mensinator uses a local database for storage. There are no external APIs, but the internal API structure is documented here for developers who want to contribute to the project.
                </p>

                <Link to="/docs/api-reference" className="text-burgundy hover:text-burgundy-700 font-medium inline-block mt-4">
                  View API reference →
                </Link>
              </CardContent>
            </Card>
          </TabsContent> */}
        </Tabs>
        
        <div className="border-t border-border pt-8">
          <h2 className="text-xl font-medium mb-4">Need further help?</h2>
          <p className="text-muted-foreground mb-4">
            If you can't find what you're looking for in the documentation, check our FAQ or open an issue on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/faq" className="text-burgundy hover:text-burgundy-700 font-medium">
              View FAQ →
            </Link>
            <a 
              href="https://github.com/EmmaTellblom/Mensinator/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-burgundy hover:text-burgundy-700 font-medium"
            >
              Open an Issue →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
