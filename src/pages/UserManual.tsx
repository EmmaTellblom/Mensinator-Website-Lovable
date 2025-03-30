
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Book, Calendar, LineChart, Smartphone, Download, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserManual = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <Book className="h-6 w-6 text-slate-700" />
          <h1 className="text-3xl font-bold">User Manual</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          A comprehensive guide to using Mensinator
        </p>

        <Tabs defaultValue="getting-started" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Usage</TabsTrigger>
            <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
          </TabsList>
          
          {/* Getting Started */}
          <TabsContent value="getting-started">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started with Mensinator</CardTitle>
                <CardDescription>
                  Everything you need to know to start using Mensinator
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Download className="h-5 w-5 text-slate-700" />
                    Installation
                  </h3>
                  <div className="space-y-4">
                    <p>Mensinator is available on Android devices through the Google Play Store and F-Droid:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Open Google Play Store or F-Droid on your Android device</li>
                      <li>Search for "Mensinator"</li>
                      <li>Tap "Install" button</li>
                      <li>Open the app after installation is complete</li>
                    </ol>
                    <p className="text-sm text-muted-foreground">
                      Note: Mensinator requires Android 8.0 (Oreo) or higher.
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-slate-700" />
                    Initial Setup
                  </h3>
                  <div className="space-y-4">
                    <p>Before you start tracking, you might want to customize your settings:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Tap the menu icon and select "Settings"</li>
                      <li>Choose your preferred language</li>
                      <li>Adjust the color scheme to your liking</li>
                      <li>Set up notifications (optional)</li>
                      <li>Configure your cycle calculation preferences</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Features */}
          <TabsContent value="features">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
                <CardDescription>
                  Discover the main features of Mensinator
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-slate-700" />
                    Period Tracking
                  </h3>
                  <div className="space-y-4">
                    <p>The core functionality of Mensinator is tracking your menstrual cycle:</p>
                    <ol className="list-decimal pl-5 space-y-3">
                      <li>
                        <strong>Recording your period:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Tap on a day in the calendar view</li>
                          <li>Click the button "Period"</li>
                          <li>The day(s) should now be shown in the calendar as period day(s)</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Editing entries:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Tap on a day with an existing entry</li>
                          <li>Click on period button to remove the entry</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-slate-700" />
                    Ovulation Tracking
                  </h3>
                  <div className="space-y-4">
                    <p>Track your ovulation date:</p>
                    <ol className="list-decimal pl-5 space-y-3">
                      <li>
                        <strong>Add ovulation:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Tap on a day in the calendar view</li>
                          <li>Click on the button "Ovulation"</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Remove ovulation:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Tap on the ovulation date in the calendar view</li>
                          <li>Click on the button "Ovulation"</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-slate-700" />
                    Symptom Tracking
                  </h3>
                  <div className="space-y-4">
                    <p>Track various symptoms throughout your cycle:</p>
                    <ol className="list-decimal pl-5 space-y-3">
                      <li>
                        <strong>Recording symptoms:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Tap on a day in the calendar view</li>
                          <li>Click on the button "Symptoms"</li>
                          <li>Choose from options like flow or your own custom symptoms.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Customizing symptom options:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Go to Symptoms in the bottom menu</li>
                          <li>Enable or disable symptom types</li>
                          <li>Add custom symptoms specific to your needs</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-slate-700" />
                    Privacy Features
                  </h3>
                  <div className="space-y-4">
                    <p>Mensinator is designed with privacy as a top priority:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Local storage only:</strong> All data stays on your device and is never uploaded to any server
                      </li>
                      <li>
                        <strong>No account required:</strong> Use the app without creating an account or providing personal information
                      </li>
                      <li>
                        <strong>Data export/import:</strong> Control your data by exporting it for backup or importing it to a new device
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Advanced Usage */}
          <TabsContent value="advanced">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Usage</CardTitle>
                <CardDescription>
                  Get the most out of Mensinator's features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-medium">
                      Data Backup and Transfer
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p>Mensinator allows you to export your data for backup or transfer to another device:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Go to Settings/Backup</li>
                        <li>Tap "Export"</li>
                        <li>The file will be saved to the Document Directory</li>
                        <li>To import, go to Settings/Backup on the new device</li>
                        <li>Tap "Import Data" and select your backup file</li>
                      </ol>
                      {/* <p className="text-sm text-muted-foreground">
                        Note: Export files are encrypted for your privacy. It's recommended to backup your data regularly.
                      </p> */}
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-medium">
                      Customizing Predictions
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p>Mensinator calculates predictions based on your historical data, but you can customize how this works:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Go to Settings/Other settings</li>
                        <li>Choose the number of cycles to include in calculations (3-12 recommended)</li>
                        {/* <li>Set your preferred cycle length if you want to override the automatic calculation</li>
                        <li>Enable/disable fertility window calculations</li>
                        <li>Adjust notification timing for upcoming periods</li> */}
                      </ol>
                      <p>
                        The more consistent data you enter, the more accurate predictions will become over time.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-medium">
                      Advanced Period Predictions
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p>Regular predictions are calculated according to the average cycle length, but there is an option to predict according to the luteral cycle. To use this feature you must track your ovulation in the app and have at least 3 cycles recorded.</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Go to settings/Other settings</li>
                        <li>Turn on Luteal Phase Calculations</li>
                        {/* <li>See patterns in symptoms correlated with cycle phases</li>
                        <li>Access a history of irregular cycles if applicable</li>
                        <li>Export statistics for sharing with healthcare providers</li> */}
                      </ol>
                      <p className="text-sm text-muted-foreground">
                        Important: Mensinator is designed for informational purposes only and should not replace medical advice.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium">
                      Health Insights
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p>After tracking for several cycles, you can access insights about your patterns:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Tap the "Statistics" in the bottom menu</li>
                        <li>View average cycle length and period duration</li>
                        {/* <li>See patterns in symptoms correlated with cycle phases</li>
                        <li>Access a history of irregular cycles if applicable</li>
                        <li>Export statistics for sharing with healthcare providers</li> */}
                      </ol>
                      <p className="text-sm text-muted-foreground">
                        Important: Mensinator is designed for informational purposes only and should not replace medical advice.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-medium">
                      Calendar Integration
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p>You can optionally integrate predicted period dates with your device calendar:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Go to Settings > Calendar Integration</li>
                        <li>Enable the "Add to calendar" option</li>
                        <li>Choose which calendar to use (if you have multiple)</li>
                        <li>Select what information to include in calendar events</li>
                        <li>Choose how far in advance to add predictions</li>
                      </ol>
                      <p>
                        Privacy note: When using calendar integration, period information will be visible to anyone who can access your calendar. Consider using a private calendar for this integration.
                      </p>
                    </AccordionContent>
                  </AccordionItem> */}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Troubleshooting */}
          <TabsContent value="troubleshooting">
            <Card>
              <CardHeader>
                <CardTitle>Troubleshooting</CardTitle>
                <CardDescription>
                  Solutions to common issues with Mensinator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {/* <AccordionItem value="troubleshoot-1">
                    <AccordionTrigger className="text-left font-medium">
                      The app is crashing or freezing
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p>If Mensinator is unstable, try these steps:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Close the app completely and restart it</li>
                        <li>Restart your device</li>
                        <li>Make sure you have the latest version of the app installed</li>
                        <li>Check if your device meets the minimum requirements (Android 6.0+)</li>
                        <li>Clear the app cache (Settings/Apps/Mensinator/Storage/Clear Cache)</li>
                      </ol>
                      <p>
                        If the issue persists, you can report it on our GitHub repository.
                      </p>
                    </AccordionContent>
                  </AccordionItem> */}
                  
                  {/* <AccordionItem value="troubleshoot-2">
                    <AccordionTrigger className="text-left font-medium">
                      I lost all my data
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p>If your data has disappeared, try these recovery steps:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Check if you've accidentally enabled "Privacy Mode" which hides your data</li>
                        <li>If you recently updated the app, restart it to complete the data migration</li>
                        <li>If you have a backup, restore it from Settings > Data Management > Import Data</li>
                        <li>Check if you accidentally installed the app in a secondary profile on your device</li>
                      </ol>
                      <p className="text-sm text-muted-foreground">
                        Prevention tip: Set up regular automatic backups in Settings > Data Management to avoid data loss in the future.
                      </p>
                    </AccordionContent>
                  </AccordionItem> */}
                  
                  <AccordionItem value="troubleshoot-3">
                    <AccordionTrigger className="text-left font-medium">
                      Predictions seem inaccurate
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p>If period predictions don't match your actual cycle:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Ensure you've tracked at least 3 complete cycles for better predictions</li>
                        <li>Check that all your period start dates are correctly marked</li>
                        <li>Go to Settings/Other Settings to adjust how predictions are calculated</li>
                        <li>If your cycles are irregular, predictions may naturally be less accurate</li>
                        {/* <li>Consider using manual cycle length override if your cycles are consistent but different from what the app calculates</li> */}
                      </ol>
                      <p>
                        Remember that predictions are estimates based on past data and natural variations in cycles can occur.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="troubleshoot-4">
                    <AccordionTrigger className="text-left font-medium">
                      Notifications aren't working
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p>If you're not receiving notifications about upcoming periods:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Go to Settings/Reminders and check that you have entered how many days in advance you want to receive notifications</li>
                        <li>Check your device notification settings for Mensinator</li>
                        <li>Make sure battery optimization is disabled for Mensinator</li>
                        <li>Verify that you haven't muted notifications in your device settings</li>
                        <li>Restart your device and check again</li>
                      </ol>
                      <p className="text-sm text-muted-foreground">
                        Note: Some Android manufacturers have aggressive battery saving modes that can block notifications. Check your device's battery settings.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-10 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-medium mb-4">Need more help?</h2>
          <p className="text-muted-foreground mb-4">
            If you couldn't find the answer to your question in this manual, check our FAQ or reach out through our GitHub repository.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/faq" 
              className="text-slate-700 hover:text-slate-900 font-medium"
            >
              View FAQ →
            </Link>
            <a 
              href="https://github.com/EmmaTellblom/Mensinator/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 font-medium"
            >
              Report an Issue →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManual;
