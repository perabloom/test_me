import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useQueryClient } from '@tanstack/react-query';

import { createFileRoute} from '@tanstack/react-router';


export const Route = createFileRoute("/_layout/FBReroute")({
  component: FBReroute,
});

export default function FBReroute() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    navigate({ to: '/SocialMedia' });
    if (code) {
      navigate({ to: '/SocialMedia' });
    }
  }, [navigate, queryClient]);


  return <div>Connecting to Facebook...</div>;
}
