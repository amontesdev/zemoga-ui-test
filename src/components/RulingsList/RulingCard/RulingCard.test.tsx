import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import RulingCard from "./RulingCard";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const getStore = () => {
  return {
    rulingsList: [
      {
        id: 1,
        name: "Kanye West",
        description:
          "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
        category: "entertainment",
        picture: "kanye.png",
        lastUpdated: "2020-03-10T23:08:57.892Z",
        votes: {
          positive: 50,
          negative: 50,
        },
        voted: false,
        lastVote: null,
      },
      {
        id: 2,
        name: "Mark Zuckerberg",
        description:
          "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
        category: "business",
        picture: "mark.png",
        lastUpdated: "2021-02-14T23:10:19.134Z",
        votes: {
          positive: 418,
          negative: 324,
        },
        voted: false,
        lastVote: null,
      },
      {
        id: 3,
        name: "Cristina Fernández de Kirchner",
        description:
          "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
        category: "politics",
        picture: "cristina.png",
        lastUpdated: "2020-12-10T23:41:07.120Z",
        votes: {
          positive: 45,
          negative: 97,
        },
        voted: false,
        lastVote: null,
      },
      {
        id: 4,
        name: "Malala Yousafzai",
        description:
          "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
        category: "politics",
        picture: "malala.png",
        lastUpdated: "2020-12-10T23:41:07.120Z",
        votes: {
          positive: 18,
          negative: 3,
        },
        voted: false,
        lastVote: null,
      },
      {
        id: 5,
        name: "Elon Musk",
        description:
          "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
        category: "business",
        picture: "elon.png",
        lastUpdated: "2020-12-20T23:43:38.041Z",
        votes: {
          positive: 1237,
          negative: 894,
        },
        voted: false,
        lastVote: null,
      },
      {
        id: 6,
        name: "Greta Thumberg",
        description:
          "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
        category: "environment",
        picture: "greta.png",
        lastUpdated: "2021-02-26T23:44:50.326Z",
        votes: {
          positive: 118,
          negative: 45,
        },
        voted: false,
        lastVote: null,
      },
    ],
  };
};

describe("RulingCard", () => {
  describe("vote now button", () => {
    it("should be rendered", () => {
      render(
        <Provider store={mockStore(getStore())}>
          <RulingCard ruling={getStore().rulingsList[0]} />
        </Provider>
      );
      expect(
        screen.getByRole("button", { name: "Vote Now" })
      ).toBeInTheDocument();
    });
    it("should be disabled", async () => {
      render(
        <Provider store={mockStore(getStore())}>
          <RulingCard ruling={getStore().rulingsList[0]} />
        </Provider>
      );
      expect(screen.getByRole("button", { name: "Vote Now" })).toBeDisabled();
    });
    it("should be enabled", async () => {
      render(
        <Provider store={mockStore(getStore())}>
          <RulingCard ruling={getStore().rulingsList[0]} />
        </Provider>
      );
      userEvent.click(screen.getByTestId("positive-vote-button"));
      expect(screen.getByRole("button", { name: "Vote Now" })).toBeEnabled();
    });
  });
  describe("positive vote button", () => {
    it("should be rendered", () => {
      render(
        <Provider store={mockStore(getStore())}>
          <RulingCard ruling={getStore().rulingsList[0]} />
        </Provider>
      );
      expect(screen.getByTestId("positive-vote-button")).toBeInTheDocument();
    });
    it("should hot have active class", async () => {
      render(
        <Provider store={mockStore(getStore())}>
          <RulingCard ruling={getStore().rulingsList[0]} />
        </Provider>
      );
      expect(screen.getByTestId("positive-vote-button")).not.toHaveClass(
        "active"
      );
    });
    it("should to be selected", async () => {
      render(
        <Provider store={mockStore(getStore())}>
          <RulingCard ruling={getStore().rulingsList[0]} />
        </Provider>
      );
      userEvent.click(screen.getByTestId("positive-vote-button"));
      expect(screen.getByTestId("positive-vote-button")).toHaveClass("active");
    });
  });
  describe("negative vote button", () => {
    it("should be rendered", () => {
      render(
        <Provider store={mockStore(getStore())}>
          <RulingCard ruling={getStore().rulingsList[0]} />
        </Provider>
      );
      expect(screen.getByTestId("negative-vote-button")).toBeInTheDocument();
    });
    it("should hot have active class", async () => {
      render(
        <Provider store={mockStore(getStore())}>
          <RulingCard ruling={getStore().rulingsList[0]} />
        </Provider>
      );
      expect(screen.getByTestId("negative-vote-button")).not.toHaveClass(
        "active"
      );
    });
    it("should to be selected", async () => {
      render(
        <Provider store={mockStore(getStore())}>
          <RulingCard ruling={getStore().rulingsList[0]} />
        </Provider>
      );
      userEvent.click(screen.getByTestId("negative-vote-button"));
      expect(screen.getByTestId("negative-vote-button")).toHaveClass("active");
    });
  });
});
