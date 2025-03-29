
import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="container flex flex-col items-center justify-center max-w-md min-h-[calc(100vh-8rem)] py-20 mx-auto text-center">
      <h1 className="text-9xl font-bold text-burgundy">404</h1>
      <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
      <p className="mt-2 text-lg text-muted-foreground">
        We couldn't find the page you were looking for.
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        {location.pathname}
      </p>
      <Button asChild className="mt-8 bg-burgundy hover:bg-burgundy-700">
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
