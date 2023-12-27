"use client";

import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface FormSubmitProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
  variant?:
    | "primary"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export const FormSubmit = ({
  children,
  className,
  variant = "primary",
}: FormSubmitProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      size={"sm"}
      className={cn(className)}
      variant={variant}
    >
      {children}
    </Button>
  );
};
