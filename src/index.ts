export type Pages = {
  slug: string;
  tags: string[];
};

type RelatedPagesByTags = (pages: Pages[]) => Pages[];

export const relatedPagesByTags: RelatedPagesByTags = pages => [
  {
    slug: "test",
    tags: ["a"]
  }
];
