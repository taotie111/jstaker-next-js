import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log(auth)
      const isLogIn = !!auth?.user.name;
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