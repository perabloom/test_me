import React, { useEffect, useState } from 'react';
import { RouterProvider } from '@tanstack/react-router';

const PreProcessingWrapper = ({ router }: { router: any }) => {
    const [subdomain, setSubdomain] = useState<string | null>(null);

  useEffect(() => {
    // Add your pre-processing logic here
    console.log('Pre-processing logic executed');
    console.log('Current URL:', window.location.href);
    const hostnameParts = window.location.hostname.split('.');
    console.log('Hostname parts:', hostnameParts);
    if (hostnameParts.length > 1) {
        setSubdomain(hostnameParts[0]); // Assuming the first part is the subdomain
    }

    // You can modify the router or perform other actions here
  }, []);

  if (subdomain) {
    return <div>Subdomain detected: {subdomain}</div>;
  }

  return <RouterProvider router={router} />;
};

export default PreProcessingWrapper;
