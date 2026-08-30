"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Newspaper,
  Images,
  FolderKanban,
  Mail,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Tableau de bord", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Articles", href: "/admin/articles", icon: Newspaper },
  { label: "Galerie", href: "/admin/photos", icon: Images },
  { label: "Projets", href: "/admin/projects", icon: FolderKanban },
  { label: "Messages", href: "/admin/messages", icon: Mail },
];

export function AdminNav({ username }: { username: string }) {
  const pathname = usePathname();

  return (
    <aside className="flex w-full shrink-0 flex-col gap-1 bg-[#0F3D22] p-4 text-white lg:h-screen lg:w-64 lg:sticky lg:top-0">
      <div className="mb-6 flex items-center gap-3 px-2 py-3">
        <Logo variant="mark" monochrome="light" className="h-10 w-10" />
        <div>
          <p className="font-heading text-sm font-bold leading-tight">Admin EMD</p>
          <p className="text-xs text-white/60">{username}</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {LINKS.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-heading font-semibold transition-colors",
                active ? "bg-emd-or text-emd-vert-fonce" : "text-white/85 hover:bg-white/10"
              )}
            >
              <link.icon className="h-4.5 w-4.5" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-1 border-t border-white/10 pt-4">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-heading font-semibold text-white/85 hover:bg-white/10"
        >
          <ExternalLink className="h-4.5 w-4.5" />
          Voir le site
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-heading font-semibold text-white/85 hover:bg-white/10"
        >
          <LogOut className="h-4.5 w-4.5" />
          Déconnexion
        </button>
      </div>
    </aside>
  );
}
