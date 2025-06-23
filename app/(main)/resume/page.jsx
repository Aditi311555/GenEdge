


import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_components/resume-builder";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function ResumePage() {
  // ✅ Check if user has completed onboarding
  const { isOnboarded } = await getUserOnboardingStatus();

  // ✅ Redirect to onboarding if not done
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
