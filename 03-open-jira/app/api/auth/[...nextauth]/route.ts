import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from "next-auth"


const handler = NextAuth({

  providers: [
    CredentialsProvider({
      name: 'Custom Login',
      credentials: {
        email: { label: 'Correo:', type: 'email', placeholder: 'correo@google.com' },
        password: { label: 'Contraseña:', type: 'password', placeholder: 'Contraseña' }
      },
     async authorize(credentials) {
        console.log('credencials', credentials)

        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

        return user
      }
    }),

    GithubProvider({
        clientId: process.env.GITHUB_ID ?? '',
        clientSecret: process.env.GITHUB_SECRET ?? ''
    })
  ],

  callbacks: {
    async jwt({ token, account, user }) {

      if (account) {
        token.accessToken = account.access_token

        switch (account.type) {
          case 'oauth':
          // TODO: crear usuario o verificar si esxiste en mi db
          break

          case 'credentials':
            token.user = user
            break
        }
      }
      
      return token
    },

    async session({ session, token, user }) {
      console.log('user', user)
      console.log('token', token)

  
      
      session.user = token.user as any;
      
      console.log('session', session)
      
      return session
    }
  }
})

export { handler as GET, handler as POST }