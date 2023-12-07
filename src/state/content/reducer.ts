import { ContentData, contentData } from '@/data';

export type ContentState = {
  readonly contentData: ContentData;
};

export const defaultState: ContentState = {
  contentData: contentData,
};

export const reducer = (state: ContentState = defaultState): ContentState => {
  return state;
};
