
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from 'lucide-react';

const FAQPage = () => {
  const faqs = [
    {
      category: "Privacy",
      questions: [
        {
          q: "Is my data really kept only on my device?",
          a: "Yes, absolutely. Mensinator is designed with privacy as the top priority. All your data is stored locally on your device and never leaves it without your explicit consent. There are no servers, no cloud storage, and no data collection. This approach ensures your most personal information remains completely private."
        },
        {
          q: "What happens to my data if I uninstall the app?",
          a: "When you uninstall Mensinator, all your data is completely removed from your device. We recommend exporting your data first if you want to keep a backup. You can do this from the Settings > Export Data menu within the app."
        },
        {
          q: "Does the app require any permissions?",
          a: "The app requires minimal permissions to function. It only needs storage permission to save your data locally on your device. No location, contacts, or other sensitive permissions are required."
        }
      ]
    },
    {
      category: "Usage",
      questions: [
        {
          q: "How do I track my period?",
          a: "To track your period, simply open the app and tap on the calendar view. You can then mark the days when you have had your period and select 'Period'. The app will automatically calculate your cycle length and predict future periods based on your historical data. You can also add days with symptoms and ovulation to help with tracking."
        },
        {
          q: "Can I track symptoms and moods?",
          a: "Yes, Mensinator allows you to track various symptoms, moods, and other factors that might be related to your cycle. You can customize which symptoms and moods you want to track in the Symptoms menu."
        },
        {
          q: "Is there a way to backup my data?",
          a: "Yes, you can export your data to a local file on your device. Go to Settings > Export Data to create a backup. This file is stored in your Documents folder and can be imported back into the app later if needed."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          q: "Does the app work offline?",
          a: "Yes, Mensinator works completely offline. Since all data is stored locally on your device, you don't need an internet connection to use any feature of the app."
        },
        {
          q: "What devices are supported?",
          a: "Mensinator is currently available for Android devices running Android 6.0 (Marshmallow) or higher. We're considering developing an iOS version in the future."
        },
        {
          q: "How can I report bugs or request features?",
          a: "You can report bugs or request features by opening an issue on our GitHub repository. We welcome all feedback and contributions from the community."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="h-6 w-6 text-burgundy" />
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          Find answers to common questions about Mensinator.
        </p>
        
        <div className="space-y-8">
          {faqs.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
                <CardDescription>
                  Common questions about {category.category.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${category.category}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-medium mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            If you couldn't find the answer to your question, feel free to reach out through our GitHub repository or check our detailed documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://github.com/EmmaTellblom/Mensinator/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-burgundy hover:text-burgundy-700 font-medium"
            >
              Ask on GitHub →
            </a>
            <a 
              href="/docs" 
              className="text-burgundy hover:text-burgundy-700 font-medium"
            >
              Read Documentation →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
