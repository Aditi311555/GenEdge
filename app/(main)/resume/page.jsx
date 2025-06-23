import { getResume } from "@/actions/resume";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import ResumeBuilderWrapper from "./resume-builder-wrapper"; // ✅ Correct wrapper usage

export default async function ResumePage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const resume = await getResume();

  return (
    <div className="container mx-auto py-6">
      <ResumeBuilderWrapper initialContent={resume?.content} />
    </div>
  );
}
