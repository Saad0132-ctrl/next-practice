// app/page.tsx
'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MediaControlCard from './components/Card';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Hello from MUI + Next.js App Router!
      </Typography>
      <Button 
  variant="contained" 
  color="secondary" 
  onClick={() => alert('Button clicked!')}
>
  Press me
</Button>
<MediaControlCard/>
    </main>
  );
}
