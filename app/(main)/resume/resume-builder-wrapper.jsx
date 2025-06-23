'use client';

import dynamic from 'next/dynamic';

// Dynamically import the ResumeBuilder component with SSR disabled
const ResumeBuilder = dynamic(() => import('./_components/resume-builder'), { ssr: false });


export default function ResumeBuilderWrapper({ initialContent }) {
  return <ResumeBuilder initialContent={initialContent} />;
}
