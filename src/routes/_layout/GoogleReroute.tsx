import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useQueryClient } from '@tanstack/react-query';
import { GoogleBusinessService } from '../../client/sdk.gen'; // Adjust the import path as necessary

import { createFileRoute} from '@tanstack/react-router';


export const Route = createFileRoute("/_layout/GoogleReroute")({
  component: GoogleReroute,
});

export default function GoogleReroute() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log('GoogleReroute code:', code);
    if (code) {
      // Forward the code to the backend using handleGoogleAuth
      queryClient.fetchQuery({
        queryKey: ['handleGoogleAuth', code],
        queryFn: () => GoogleBusinessService.handleGoogleAuth({ code: code }) // Pass the code to the backend
      }).then(() => {
        alert('Google is now connected!');
        navigate({ to: '/SocialMedia' });
      }).catch((error) => {
        console.error('Failed to connect Google:', error);
        alert('Failed to connect Google.');
        navigate({ to: '/SocialMedia' });
      });
    }
  }, [navigate, queryClient]);

  return <div>Connecting to Google...</div>;
}
