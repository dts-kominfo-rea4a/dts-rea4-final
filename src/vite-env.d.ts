/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly POKEMONCTG_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
