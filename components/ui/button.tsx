import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-heading font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emd-vert-clair disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-emd-vert-fonce text-white hover:bg-emd-vert-moyen hover:shadow-soft-lg hover:-translate-y-0.5",
        gold: "bg-emd-or text-emd-vert-fonce hover:bg-emd-or-clair hover:shadow-soft-lg hover:-translate-y-0.5",
        outline:
          "border-2 border-emd-or text-emd-or bg-transparent hover:bg-emd-or hover:text-emd-vert-fonce",
        "outline-white":
          "border-2 border-white text-white bg-transparent hover:bg-white hover:text-emd-vert-fonce",
        ghost: "text-emd-vert-fonce hover:bg-emd-gris-leger",
        white: "bg-white text-emd-vert-fonce hover:bg-emd-creme hover:shadow-soft-lg",
        destructive: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
