import { doBitmove } from "./functions";

const BITMOVES = ["<", "~", ">"];
const SIZE = 256;

const _ = require("lodash");

type Pair = {
  origin: number;
  result: number;
  solution: string;
};

function initializeSolutionsGrid(size: number): Pair[][] {
  let solutionsGrid: Pair[][] = [...Array(size)].map((e) => Array(size));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      solutionsGrid[i][j] = {
        origin: i,
        result: j,
        solution: "none",
      };
    }
  }

  return solutionsGrid;
}

const makeAllSolutions = (size: number, bitmoves: string[]) => {

  let solutionsGrid = initializeSolutionsGrid(size);
  
  // in pairs where the origin and goal are the 
  // same number, set the solution to an empty string
  const zeroSteps = () => {
    for (let i = 0; i < size; i++) {
      solutionsGrid[i][i].solution = ""
    }
  }

  const oneSteps = () => {
    for (let i = 0; i < size; i++) {
      for (let bitmove of bitmoves) {
        const result = doBitmove(i, bitmove);
        if (solutionsGrid[i][result].solution === "none") {
          solutionsGrid[i][result].solution = bitmove;
        }
      }
    }
  }
  
  const addSteps = () => {
    // flat array containing all solved pairs
    const solvedPairs = _.flatten(solutionsGrid).filter((item: Pair) => item.solution !== "none")
    for (let pair of solvedPairs) {
      // build each new solution atop an existing one
      const {origin, result, solution} = pair
      for (let bitmove of bitmoves) {
        const newResult = doBitmove(result, bitmove)
        if (solutionsGrid[origin][newResult].solution === "none") {
          solutionsGrid[origin][newResult].solution = solution + bitmove
        }
      }
    }
  }

  zeroSteps();
  oneSteps();
  //i.e. while there are still any unsolved pairs
  while (
    _.flatten(solutionsGrid).filter((item: Pair) => item.solution === "none").length >
    0
  ) {
    addSteps()
  }

  return solutionsGrid
}

export const allSolutions = makeAllSolutions(SIZE, BITMOVES)