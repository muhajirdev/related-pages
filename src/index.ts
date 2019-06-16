import _ from "lodash";

type Tag = string;
export type Page = {
  [key: string]: any;
  tags: Tag[];
};

type RelatedPagesByTags = (pages: Page[], tags: Tag[]) => Page[];

const countMatchedTags = (tags1: Tag[], tags2: Tag[]) =>
  tags1.filter(tag => tags2.includes(tag)).length;

export const relatedPagesByTags: RelatedPagesByTags = (pages, tags) =>
  _.map(pages, x => ({
    ...x,
    _score: countMatchedTags(x.tags, tags)
  }))
    .filter(x => x._score > 0)
    .sort(x => x._score)
    .reverse()
    .map(x => _.omit(x, "_score"));
