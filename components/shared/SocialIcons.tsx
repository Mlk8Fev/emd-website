export type SocialName = "facebook" | "instagram" | "twitter" | "linkedin";

// Seuls les réseaux dont le client a fourni le lien sont affichés.
// Pour en ajouter (Instagram, X...), ajouter une entrée ici : les icônes existent déjà.
export const SOCIALS: { icon: SocialName; href: string; label: string }[] = [
  { icon: "facebook", href: "https://www.facebook.com/share/1Cuh6k6F6A", label: "Facebook" },
  { icon: "linkedin", href: "https://www.linkedin.com/in/ensemble-monde-durable-618bb2433", label: "LinkedIn" },
];

const PATHS: Record<SocialName, string> = {
  facebook:
    "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  instagram:
    "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.51.5.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.16 1.77 4.9 4.9 0 0 1-1.77 1.16c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77a4.9 4.9 0 0 1 1.77-1.16c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  twitter:
    "M18.9 3H21.7l-6.06 6.93L22.8 21h-5.6l-4.38-5.73L7.8 21H5l6.48-7.41L4.3 3h5.74l3.96 5.24L18.9 3Zm-.98 16.17h1.55L7.15 4.74H5.48l12.44 14.43Z",
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.98 1.83-2.02 3.77-2.02 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.85c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.5-2.26 3.1V21h-4V9Z",
};

export function SocialIcon({ name, className }: { name: SocialName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}
