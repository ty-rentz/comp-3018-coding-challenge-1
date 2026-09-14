import {getPlayerById, Player,} from "../src/services/playerService";

describe("getPlayerById", () => {
    it("should return a player when the player exists", () => {
        // Arrange
        const playerId: number = 1;

        // Act
        const result: Player | null = getPlayerById(playerId);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.name).toBe("ShadowStrike");
    });
});
