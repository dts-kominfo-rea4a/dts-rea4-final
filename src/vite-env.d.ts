/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FREETOGAME_API_URL: string;
  readonly VITE_FREETOGAME_API_HOST: string;
  readonly VITE_FREETOGAME_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
