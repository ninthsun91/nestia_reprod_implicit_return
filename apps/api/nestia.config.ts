import { INestiaConfig } from '@nestia/sdk';

const config: INestiaConfig = {
  input: 'src/**/*.controller.ts',
  output: 'sdk/src',
  distribute: 'sdk/package',

  assert: true,
  json: true,
  primitive: true,
};
export default config;
