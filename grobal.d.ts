// types/global.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_KEY: string;
    NEXT_PUBLIC_API_URL: string;
  }
}
