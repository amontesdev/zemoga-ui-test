import { AnyAction } from "redux";
import { Ruling } from "../types";
import { SET_RULINGS_LIST, SET_POSITIVE_RULING_VOTES, SET_NEGATIVE_RULING_VOTES } from "./types";


export const setRulingsList = (rulingsList: Ruling[]): AnyAction => ({
    type: SET_RULINGS_LIST,
    payload: rulingsList,
})

export const setPositiveRulingVotes = (rulingId: number): AnyAction => ({
    type: SET_POSITIVE_RULING_VOTES,
    payload: rulingId,
})

export const setNegativeRulingVotes = (rulingId: number): AnyAction => ({
    type: SET_NEGATIVE_RULING_VOTES,
    payload: rulingId,
})