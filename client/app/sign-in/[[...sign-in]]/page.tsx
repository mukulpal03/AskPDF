import { SignIn } from "@clerk/nextjs";
import { AuthShell } from "@/components/auth/auth-shell";

export default function SignInPage() {
  return (
    <AuthShell>
      <SignIn
        routing="path"
        path="/sign-in"
        forceRedirectUrl="/dashboard"
        signUpUrl="/sign-up"
      />
    </AuthShell>
  );
}
