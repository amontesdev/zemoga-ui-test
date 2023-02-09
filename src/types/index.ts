export interface Ruling {
    id: number;
    name: string;
    description: string;
    category: string;
    picture: string;
    lastUpdated: string;
    votes: {
        positive: number;
        negative: number;
    }
    voted: boolean;
    lastVote: string | null;
}

export interface RulingsListData {
    data: Ruling[];
}