"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playerService_1 = require("../src/services/playerService");
describe("getPlayerById", () => {
    it("should return a player when the player exists", () => {
        // Arrange
        const playerId = 1;
        // Act
        const result = (0, playerService_1.getPlayerById)(playerId);
        // Assert
        expect(result).not.toBeNull();
        expect(result === null || result === void 0 ? void 0 : result.name).toBe("ShadowStrike");
    });
});
