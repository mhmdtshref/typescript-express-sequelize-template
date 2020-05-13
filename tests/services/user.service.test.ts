import dotenvFlow from 'dotenv-flow';
dotenvFlow.config({ path: './environment' });

import { UserService } from "../../src/services";

describe("Test Jest package", () => {
    it("Testing should pass", async () => {
            await expect(UserService.index()).resolves.toBeTruthy();
    });
});
