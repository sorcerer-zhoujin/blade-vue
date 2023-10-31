/// <reference types="vite/client" />

interface ImportMetaEnv {
  // These environment variables will be set if you perform conditional compilation.
  readonly VITE_APP_NAME: string;
  readonly VITE_DB_CONNECTION: string;
  readonly VITE_DB_HOST: string;
  readonly VITE_DB_PORT: number;
  readonly VITE_DB_USERNAME: string;
  readonly VITE_DB_PASSWORD: string;

  readonly VITE_PUSHER_APP_KEY: string;
  readonly VITE_PUSHER_HOST: string;
  readonly VITE_PUSHER_PORT: number;
  readonly VITE_PUSHER_SCHEME: string;
  readonly VITE_PUSHER_APP_CLUSTER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
