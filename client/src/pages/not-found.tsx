import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-8" style={{ paddingTop: "100px" }}>
      <SEO 
        title="Page Not Found (404) | LaunchLayer"
        description="The page you're looking for doesn't exist or has been moved. Return to the LaunchLayer homepage for web development and design services."
        keywords="404 page, not found, LaunchLayer, web development, website error"
        ogTitle="Page Not Found | LaunchLayer Web Development"
        ogDescription="Sorry, we couldn't find the page you were looking for. Please return to our homepage or contact us for assistance."
      />
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-accent" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
        
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
