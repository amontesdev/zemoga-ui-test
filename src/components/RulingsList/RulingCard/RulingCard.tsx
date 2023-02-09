import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setNegativeRulingVotes,
  setPositiveRulingVotes,
} from "../../../actions";
import { Ruling } from "../../../types";
import "./RulingCard.scss";

export interface Props {
  ruling: Ruling;
}

type VoteSelected = "positive" | "negative" | null;

const RulingCard: React.FC<Props> = ({ ruling }) => {
  const dispatch = useDispatch();

  const [voteSelected, setVoteSelected] = useState<VoteSelected>(null);
  const [isReset, setIsReset] = useState<boolean>(false);
  const [voteButtonEnabled, setVoteButtonEnabled] = useState<boolean>(false);

  useEffect(() => {
    setIsReset(ruling.voted);
  }, []);

  const getPercentage = (
    positiveVotes: number,
    negativeVotes: number
  ): { positivePercentage: number; negativePercentage: number } => {
    const totalVotes = positiveVotes + negativeVotes;
    const positivePercentage = (positiveVotes / totalVotes) * 100;
    const negativePercentage = (negativeVotes / totalVotes) * 100;

    return {
      positivePercentage: positivePercentage,
      negativePercentage: negativePercentage,
    };
  };

  const { positivePercentage, negativePercentage } = getPercentage(
    ruling.votes.positive,
    ruling.votes.negative
  );

  const vote = () => {
    setVoteButtonEnabled(true);
    if (voteSelected === "positive") {
      dispatch(setPositiveRulingVotes(ruling.id));
    } else if (voteSelected === "negative") {
      dispatch(setNegativeRulingVotes(ruling.id));
    }
    setVoteSelected(null);
  };

  const toggleVote = () => {
    if (voteButtonEnabled) {
      setVoteSelected(null);
      setIsReset(true);
      setVoteButtonEnabled(false);
    } else {
      vote();
      setIsReset(false);
      setVoteButtonEnabled(true);
    }
  };

  return (
    <div className="ruling-card">
      <img
        className="ruling-card__image"
        src={require(`../../../assets/img/${ruling.picture}`)}
        alt={ruling.name}
      />
      <div className="ruling-card__content">
        <div className="ruling-card__content--description">
          <section className="texts">
            <p>{ruling.name}</p>
            <p>{ruling.description}</p>
          </section>
          <section className="votes">
            <p>
              {ruling.voted && !isReset
                ? "Thank you for your vote!"
                : moment(ruling.lastUpdated).fromNow()}
            </p>

            <div className="votes-container">
              <button
                className={`positive-vote ${
                  voteSelected === "positive" ? "active" : ""
                }`}
                onClick={() => setVoteSelected("positive")}
                data-testid="positive-vote-button"
              >
                <img
                  src={require("../../../assets/img/thumbs-up.png")}
                  alt="thumbs upp"
                />
              </button>
              <button
                className={`negative-vote ${
                  voteSelected === "negative" ? "active" : ""
                }`}
                onClick={() => setVoteSelected("negative")}
                data-testid="negative-vote-button"
              >
                <img
                  src={require("../../../assets/img/thumbs-down.png")}
                  alt="thumbs down"
                />
              </button>
              <button
                className="btn"
                disabled={voteSelected === null && !voteButtonEnabled}
                onClick={toggleVote}
              >
                {ruling.voted && !isReset ? "Vote Again" : "Vote Now"}
              </button>
            </div>
          </section>
        </div>
        <section className="ruling-card__content--progress">
          <div
            className="positive-progress"
            style={{ width: `${positivePercentage}%` }}
          >
            <img
              src={require("../../../assets/img/thumbs-up.png")}
              alt="thumbs upp"
            />
            <span className="positive-progress__text">
              {`${positivePercentage.toFixed()}%`}
            </span>
          </div>
          <div
            className="negative-progress"
            style={{ width: `${negativePercentage}%` }}
          >
            <img
              src={require("../../../assets/img/thumbs-down.png")}
              alt="thumbs down"
            />
            <span className="negative-progress__text">
              {`${negativePercentage.toFixed()}%`}
            </span>
          </div>
        </section>
        <div
          className={`ruling-card__content--thumb-result ${
            positivePercentage >= negativePercentage
              ? "positive-vote"
              : "negative-vote"
          }`}
        >
          {positivePercentage >= negativePercentage ? (
            <img
              src={require(`../../../assets/img/thumbs-up.png`)}
              alt="thumbs up"
            />
          ) : (
            <img
              src={require(`../../../assets/img/thumbs-down.png`)}
              alt="thumbs down"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RulingCard;
