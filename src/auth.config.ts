import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
<<<<<<< HEAD
      const isLogIn = !!auth?.user;
=======

      const isLogIn = !!auth?.user?.name;
>>>>>>> 2e7992cb4eace3a7461f5ccf9b8abbf01c308342
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