namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'

    DB_HOST: string
    DB_PORT: string
    DB_USERNAME: string
    DB_PASSWORD: string
    DB_NAME: string

    SESSION_SECRET: string

    NEXT_PUBLIC_IP_ENDPOINT: string
  }
}
