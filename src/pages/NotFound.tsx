import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-16 lg:pt-20">
      <div className="text-center container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-8xl lg:text-9xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to a different location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-solar" asChild>
              <Link to="/" className="inline-flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" className="btn-outline-solar" asChild>
              <Link to="/contact" className="inline-flex items-center">
                Get Help
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
