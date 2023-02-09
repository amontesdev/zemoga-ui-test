import { SET_NEGATIVE_RULING_VOTES, SET_POSITIVE_RULING_VOTES, SET_RULINGS_LIST } from "../actions/types";
import { Ruling } from "../types";

export interface State {
  rulingsList: Ruling[];
}

export const initialState: State = {
  rulingsList: [],
};
function rootReducer(state = initialState, action: any): State {
  switch (action.type) {
    case SET_RULINGS_LIST:
      return {
        ...state,
        rulingsList: action.payload,
      };
    case SET_POSITIVE_RULING_VOTES: {
      const { rulingsList } = state;
      const newRulesList = rulingsList.map((ruling) => {
        if(ruling.id === action.payload) {
          ruling.votes.positive += 1;
          ruling.voted = true;
          ruling.lastVote = 'positive';
        }
        return ruling;
      })

      return {
        ...state,
        rulingsList: newRulesList,
      }

    }
    case SET_NEGATIVE_RULING_VOTES: {
      const { rulingsList } = state;
      const newRulesList = rulingsList.map((ruling) => {
        if(ruling.id === action.payload) {
          ruling.votes.negative += 1;
          ruling.voted = true;
          ruling.lastVote = 'negative';
        }
        return ruling;
      })

      return {
        ...state,
        rulingsList: newRulesList,
      }

    }
    default:
      return state;
  }
}

export default rootReducer;
