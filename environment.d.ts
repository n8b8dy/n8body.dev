namespace NodeJS {
  interface ProcessEnv {
    DB_HOST: string
    DB_PORT: string
    DB_USERNAME: string
    DB_PASSWORD: string
    DB_NAME: string

    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    GITHUB_APP_CLIENT_ID: string
    GITHUB_APP_CLIENT_SECRET: string

    ADMIN_EMAIL: string

    NEXT_PUBLIC_IP_ENDPOINT: string
  }
}
