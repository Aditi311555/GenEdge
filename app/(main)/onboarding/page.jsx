import { redirect } from "next/navigation";
import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";
import { getUserOnboardingStatus } from "@/actions/user";

export default async function OnboardingPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/ai-cover-letter");
  }

  return (
    <div className="container mx-auto py-10">
      <OnboardingForm industries={industries} />
    </div>
  );
}
return (
  <div className="container mx-auto py-10">
    <h1 className="text-white text-2xl mb-4">Onboarding Page</h1>
    <OnboardingForm industries={industries} />
  </div>
);
