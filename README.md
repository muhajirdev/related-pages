# Related Pages

## Getting Started

### Installation

```
yarn add related-pages
```

or

```
npm install --save related-pages
```

### Usage

```javascript
import { relatedPagesByTags } from "related-pages";

const pages = [
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

const tags = ["mocha", "tutorial"];

const result = relatedPagesByTags(pages, tags);

console.log(result[0]);
// {
//   slug: "how-to-write-unit-test",
//   tags: ["unit-test", "jest", "mocha", "tutorial"]
// };
```

## Test

```
yarn test
```

## Author

Muhammad Muhajir [@muhajirdev](https://twitter.com/muhajirdev)

## License

MIT License
