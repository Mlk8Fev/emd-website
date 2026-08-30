import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-heading font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-emd-vert-fonce text-white",
        gold: "border-transparent bg-emd-or text-emd-vert-fonce",
        outline: "border-emd-vert-fonce text-emd-vert-fonce bg-transparent",
        soft: "border-transparent bg-emd-vert-clair/15 text-emd-vert-fonce",
        success: "border-transparent bg-emerald-100 text-emerald-700",
        warning: "border-transparent bg-amber-100 text-amber-700",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
