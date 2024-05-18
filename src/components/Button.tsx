import React from "react";
import { useFormStatus } from "react-dom";
import { Button as ShadButton } from "@/components/ui/button";

export const Button = () => {
  const { pending } = useFormStatus();
  return (
    <ShadButton variant="secondary" disabled={pending}>
      Click me
    </ShadButton>
  );
};
