import type { NextAuthConfig } from 'next-auth';

const isDevelopment = process.env.NODE_ENV === 'development';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      console.log(auth);
      const isLogIn = !!auth?.user?.name;
      const isOnDashboard = nextUrl.pathname.startsWith('/jstakerDashBoard');
      console.log(isLogIn, isOnDashboard, '-----------------------------');

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
  trustHost: true, // 信任主机头
};

export default authConfig;
