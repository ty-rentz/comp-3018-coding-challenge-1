// Player interface

export interface Player {
    id: number;
    name: string;
    wins: number;
    losses: number;
    totalScore: number;
}

const players: Player[] = [
    {
        id: 1,
        name: "ShadowStrike",
        wins: 15,
        losses: 5,
        totalScore: 28500,
    },
    {
        id: 2,
        name: "NoobMaster",
        wins: 3,
        losses: 12,
        totalScore: 4200,
    },
    {
        id: 3,
        name: "ProGamer99",
        wins: 0,
        losses: 0,
        totalScore: 0,
    },
];

// Finds player with matching ID

export const getPlayerById = (id: number): Player | null => {
    for (const player of players) {
        if (player.id === id) {
            return player;
        }
    }

    return null;
};

export const calculatePerformanceRating = (player: Player): number => {
    const totalGames = player.wins + player.losses;

    if (totalGames === 0) {
        return 0;
    }

    const rating = (player.wins / totalGames) * 100 +
    player.totalScore / totalGames;

    return Math.round(rating * 100) / 100;
};