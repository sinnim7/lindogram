import { adjectives, nouns } from "./words";

export const generateSecret = () => {
  const randonNUmber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randonNUmber]} ${nouns[randonNUmber]}`;
};
