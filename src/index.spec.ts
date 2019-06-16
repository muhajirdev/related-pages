import { relatedPagesByTags, Pages } from "./index";

const pages: Pages[] = [
  {
    slug: "writing-an-article",
    tags: ["write", "article", "document"]
  },
  {
    slug: "how-to-write-unit-test",
    tags: ["unit-test", "jest", "mocha", "tutorial"]
  },
  {
    slug: "writing-article-about-jest",
    tags: ["write", "jest"]
  }
];

const tags = ["unit-test", "mocha", "jest"];

const exptected = {
  slug: "writing-an-article",
  tags: ["write", "article", "document"]
};

test("should sort article by matching tags", () => {});
