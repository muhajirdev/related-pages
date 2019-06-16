import { relatedPagesByTags, Page } from "./index";

const pages: Page[] = [
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

const tags = ["mocha"];

const expected = {
  slug: "how-to-write-unit-test",
  tags: ["unit-test", "jest", "mocha", "tutorial"]
};

test("should sort article by matching tags", () => {
  const result = relatedPagesByTags(pages, tags);
  console.log(result);
  expect(result[0]).toEqual(expected);
});
