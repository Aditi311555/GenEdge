



import dynamic from "next/dynamic";
import { getResume } from "@/actions/resume";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import ResumeBuilderWrapper from "./resume-builder-wrapper";



const ResumeBuilder = dynamic(() => import("./_components/resume-builder"), {
  ssr: false,
});

export default async function ResumePage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const resume = await getResume();

  return (
    <div className="container mx-auto py-6">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
}

