import '../custom_typings/docker-compose-mocha/index.d';

import { dockerComposeTool, getAddressForService } from 'docker-compose-mocha';

import { exec as cb_exec } from 'child_process';
import fetch from 'node-fetch';
import { promisify } from 'util';
import { retry } from 'ts-retry-promise';

const exec = promisify(cb_exec);

export class TestEnvironment {
    private envName: string = '';
    constructor(private pathToCompose: string) {}

    init() {
        this.envName = dockerComposeTool(beforeEach, afterEach, this.pathToCompose, {
            shouldPullImages: false,
        });
    }

    async fetch(serviceName: string, port: number = 7001, path: string = '/') {
        if (process.env['CIRCLECI']) {
            const { stdout } = await exec(
                `docker run --network container:${this.envName}_${serviceName}_1 appropriate/curl  -s --retry 10 --retry-delay 1 --retry-connrefused http://localhost:${port}${path}`
            );
            return JSON.parse(stdout);
        } else {
            const addr = await getAddressForService(this.envName, this.pathToCompose, serviceName, port);
            const res = await retry(() => fetch('http://' + addr + path), { retries: 10, delay: 300 });
            return res.json();
        }
    }
}
