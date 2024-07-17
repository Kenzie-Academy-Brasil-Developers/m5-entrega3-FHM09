/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [ '**/__tests__/(car|integrations)/**/*.[jt]s?(x)' ],
  setupFilesAfterEnv: [ './src/__tests__/__mock__/prisma.ts', './src/__tests__/utils/reflectMetadata.ts' ]
};