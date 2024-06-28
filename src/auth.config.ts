import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLogIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/jstakerDashBoard');
      if (isOnDashboard) {
        if (isLogIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLogIn) {
        return Response.redirect(new URL('/jstakerDashBoard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now

 
} satisfies NextAuthConfig;