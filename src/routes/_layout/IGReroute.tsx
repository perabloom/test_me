import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useQueryClient } from '@tanstack/react-query';
import { MetaService } from '../../client/sdk.gen'; // Adjust the import path as necessary

import { createFileRoute} from '@tanstack/react-router';


export const Route = createFileRoute("/_layout/IGReroute")({
  component: IGReroute,
});

export default function IGReroute() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Forward the code to the backend using handleInstagramAuth
      queryClient.fetchQuery({
        queryKey: ['handleInstagramAuth', code],
        queryFn: () => MetaService.handleInstagramAuth({ code: code }) // Pass the code to the backend
      }).then(() => {
        alert('Instagram is now connected!');
        navigate({ to: '/SocialMedia' });
      }).catch((error) => {
        console.error('Failed to connect Instagram:', error);
        alert('Failed to connect Instagram.');
        navigate({ to: '/SocialMedia' });
      });
    }
  }, [navigate, queryClient]);

  return <div>Connecting to Instagram...</div>;
}
