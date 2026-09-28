import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  // Nécessaire hors Vercel (Hostinger, VPS...) : Auth.js ne fait confiance
  // au header Host que sur Vercel par défaut, sinon il rejette les requêtes
  // avec "UntrustedHost". Sûr ici : le domaine est fixé par nous (NEXTAUTH_URL),
  // pas par un utilisateur.
  trustHost: true,
  pages: {
    signIn: "/admin/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
