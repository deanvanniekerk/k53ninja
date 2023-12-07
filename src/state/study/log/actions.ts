export const STUDY_LOG_RECIEVE_SEEN_CONTENT_KEY = 'STUDY_LOG_RECIEVE_SEEN_CONTENT_KEY';
export const STUDY_LOG_RECIEVE_LAST_SEEN_PARENT_CONTENT_KEY = 'STUDY_LOG_RECIEVE_LAST_SEEN_PARENT_CONTENT_KEY';
export const STUDY_LOG_CLEAR_SEEN_CONTENT = 'STUDY_LOG_CLEAR_SEEN_CONTENT';

interface RecieveSeenContentKeyAction {
  type: typeof STUDY_LOG_RECIEVE_SEEN_CONTENT_KEY;
  payload: string;
}

interface RecieveLastSeenParentContentKeyAction {
  type: typeof STUDY_LOG_RECIEVE_LAST_SEEN_PARENT_CONTENT_KEY;
  payload: string;
}

interface ClearSeenContentAction {
  type: typeof STUDY_LOG_CLEAR_SEEN_CONTENT;
}

export type LogActions = RecieveSeenContentKeyAction | RecieveLastSeenParentContentKeyAction | ClearSeenContentAction;

export const recieveSeenContentKey = (key: string): RecieveSeenContentKeyAction => ({
  type: STUDY_LOG_RECIEVE_SEEN_CONTENT_KEY,
  payload: key,
});

export const recieveLastSeenParentContentKey = (key: string): RecieveLastSeenParentContentKeyAction => ({
  type: STUDY_LOG_RECIEVE_LAST_SEEN_PARENT_CONTENT_KEY,
  payload: key,
});

export const clearSeenContent = (): ClearSeenContentAction => ({
  type: STUDY_LOG_CLEAR_SEEN_CONTENT,
});
