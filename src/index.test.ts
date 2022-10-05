import { hello, serve } from './index';

import fetch from 'node-fetch';
import { retry } from 'ts-retry-promise';

describe('index', function () {
    test('happy flow', () => {
        expect(hello('world')).toEqual({ message: 'hello world' });
    });

    test('[small e2e] index serves "hello world"', async () => {
        const port = 1234;
        const server = serve(port);
        try {
            const response = await retry(() => fetch(`http://localhost:${port}/`).then<unknown>((r) => r.json()), {
                retries: 10,
                delay: 500,
            });
            expect(response).toEqual({ message: 'hello world' });
        } finally {
            server.close();
        }
    });
});
