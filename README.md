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

// or if you're in nodejs environment
const { relatedPagesByTags } = require("related-pages");

const re

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

The only required property is `tags` containing list of strings (`string[]`). Check the source code in `index.ts` to see the typings

## Test

```
yarn test
```

## Author

Muhammad Muhajir [@muhajirdev](https://twitter.com/muhajirdev)

## License

MIT License
