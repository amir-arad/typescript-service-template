import test from 'ava';
import { hello, serve } from './index';
import fetch from 'node-fetch';
import { retry } from 'ts-retry-promise';

test('happy flow', (t) => {
    t.deepEqual(hello('world'), { message: 'hello world' });
});

test.serial('[small e2e] index serves "hello world"', async (t) => {
    const port = 1234;
    const server = serve(port);
    try {
        const response = await retry(() => fetch(`http://localhost:${port}/`).then((r) => r.json()), {
            retries: 10,
            delay: 500,
        });
        t.deepEqual(response, { message: 'hello world' });
    } finally {
        server.close();
    }
});
