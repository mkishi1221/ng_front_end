import { NuxtAuthHandler } from '#auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";

export default NuxtAuthHandler({
    secret: "1196b0666fd8c71a630d5d099bceb06f1cbb61437c1123e41e53e6f96e8dcaf4",
    pages: {
        signIn: '/login'
    },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: 'Iv1.eff27d463c419cc6',
           clientSecret: '004b157b03575ded763d4f550dcd3afd0ec0a1d9'
        }),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GoogleProvider.default({
            clientId: "882868324479-nm7o6d9qkcm12gfjnn6vu60s7e9l150u.apps.googleusercontent.com",
            clientSecret: "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",
            
        })
    ]
})