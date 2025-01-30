import React, { useEffect, useState } from 'react';
import { RouterProvider } from '@tanstack/react-router';


const mockFetchWebsiteCode = (subdomain: string) => {
    const mockData = {
      subdomain1: {
        html: '<h1>Welcome to Subdomain 1</h1>',
        css: 'h1 { color: blue; }',
        js: 'console.log("Subdomain 1 loaded");',
      },
      subdomain2: {
        html: '<h1>Welcome to Subdomain 2</h1>',
        css: 'h1 { color: green; }',
        js: 'console.log("Subdomain 2 loaded");',
      },
    };

    return mockData[subdomain] || null;
  };


const PreProcessingWrapper = ({ router }: { router: any }) => {
    const [subdomain, setSubdomain] = useState<string | null>(null);
    const [websiteContent, setWebsiteContent] = useState<any>(null);

  useEffect(() => {

    // Add your pre-processing logic here
    console.log('TODO REMOVE : Pre-processing logic executed');
    console.log('TODO REMOVE: Current URL:', window.location.href);
    const hostnameParts = window.location.hostname.split('.');
    console.log('Hostname parts:', hostnameParts);
    if (hostnameParts.length > 1) {
        setSubdomain(hostnameParts[0]); // Assuming the first part is the subdomain
    }

    // You can modify the router or perform other actions here
  }, []);

    useEffect(() => {
        if (subdomain) {
            const content = mockFetchWebsiteCode(subdomain);
            setWebsiteContent(content);
        }
    }, [subdomain]);

    if (websiteContent) {
        return (
            <div>
                <style>{websiteContent.css}</style>
                <div dangerouslySetInnerHTML={{ __html: websiteContent.html }} />
                <script>{websiteContent.js}</script>
            </div>
        );
    }

  return <RouterProvider router={router} />;
};

export default PreProcessingWrapper;



// import React, { useEffect, useState } from 'react';
// import { RouterProvider } from '@tanstack/react-router';
// import { useQuery } from '@tanstack/react-query';

// const fetchWebsiteCode = async (subdomain: string) => {
//   // Replace with your actual API endpoint
//   const response = await fetch(`/api/website-code?subdomain=${subdomain}`);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const PreProcessingWrapper = ({ router }: { router: any }) => {
//   const [subdomain, setSubdomain] = useState<string | null>(null);

//   useEffect(() => {
//     const hostnameParts = window.location.hostname.split('.');
//     if (hostnameParts.length > 2) {
//       setSubdomain(hostnameParts[0]); // Assuming the first part is the subdomain
//     }
//   }, []);

//   const { data, error, isLoading } = useQuery(
//     ['websiteCode', subdomain],
//     () => fetchWebsiteCode(subdomain!),
//     {
//       enabled: !!subdomain, // Only run the query if a subdomain is present
//     }
//   );

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error || !data) {
//     return <RouterProvider router={router} />;
//   }

//   return <div>{data.websiteContent}</div>; // Assuming the API returns a field called `websiteContent`
// };

// export default PreProcessingWrapper;
