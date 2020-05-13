import { UserService } from "../../src/services";

describe("Test Jest package", () => {
    it("Testing should pass", async () => {
          await expect(UserService.index()).resolves.toBeTruthy();
    });
});
