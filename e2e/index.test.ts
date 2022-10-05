import { TestEnvironment } from './driver';
import { join } from 'path';

const pathToCompose = join(__dirname, 'docker-compose.yml');

describe('E2E', () => {
    const env = new TestEnvironment(pathToCompose);

    env.init();

    it('happy flow', async () => {
        const res = await env.fetch('app');
        expect(res).toEqual({ message: 'hello world' });
    });
});
