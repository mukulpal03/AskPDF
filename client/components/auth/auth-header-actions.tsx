"use client";

import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { BrandButton } from "@/components/ui/brand-button";

export function AuthHeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <Show when="signed-out">
        <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
          <BrandButton variant="ghost">Sign in</BrandButton>
        </SignInButton>
        <SignUpButton mode="redirect" forceRedirectUrl="/dashboard">
          <BrandButton>Get started</BrandButton>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
}
