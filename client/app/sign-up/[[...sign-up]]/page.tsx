import { SignUp } from "@clerk/nextjs";
import { AuthShell } from "@/components/auth/auth-shell";

export default function SignUpPage() {
  return (
    <AuthShell>
      <SignUp
        routing="path"
        path="/sign-up"
        forceRedirectUrl="/dashboard"
        signInUrl="/sign-in"
      />
    </AuthShell>
  );
}
