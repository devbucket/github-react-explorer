import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './api/schema.docs.graphql',
  documents: ['src/**/*.graphql'],
  generates: {
    './api/index.ts': {
      plugins: [
        {
          add: {
            content: '/** Generated via GraphQL Code Generator. */',
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        documentMode: 'documentNode',
        nonOptionalTypename: true,
      },
    },
  },
};

export default config;
