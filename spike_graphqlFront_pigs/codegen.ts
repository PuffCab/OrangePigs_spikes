import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://countries.trevorblades.com/graphql",
  documents: "src/graphql/*.gql",
  generates: {
    "src/graphql/__generated__/types.ts": {
      plugins: ["typescript"],
    },
    "src/graphql/__generated__": {
      preset: "near-operation-file",
      plugins: ["typescript-react-apollo", "typescript-operations"],
      presetConfig: {
        folder: "__generated__",
        baseTypesPath: "types.ts",
        extension: ".ts",
      },
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};
export default config;
