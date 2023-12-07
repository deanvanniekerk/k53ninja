import { QuestionAnswer } from './';
import * as actions from './actions';

describe('state > arena > test > actions', () => {
  it('recieveQuestionAnswers', () => {
    const expectedAction = {
      type: 'ARENA_TEST_RECIEVE_QUESTION_ANSWERS',
      payload: [
        {
          section: 'A',
          answer: null,
          question: {
            id: '1',
            answer: 'C',
            text: "When you only have a learner's licence you are not allowed to:",
            option: [
              {
                id: 'A',
                value: 'Carry passengers in your car.',
              },
              {
                id: 'B',
                value: 'Drive faster than 100km/h.',
              },
              {
                id: 'C',
                value: 'Drive without having your licence with you.',
              },
            ],
          },
        },
      ] as QuestionAnswer[],
    };

    expect(actions.recieveQuestionAnswers(expectedAction.payload)).toEqual(expectedAction);
  });

  it('recieveAnswer', () => {
    const expectedAction = {
      type: 'ARENA_TEST_RECIEVE_ANSWER',
      payload: {
        questionId: '1',
        answer: 'A',
      },
    };

    expect(actions.recieveAnswer('1', 'A')).toEqual(expectedAction);
  });

  it('recieveCurrentSection', () => {
    const expectedAction = {
      type: 'ARENA_TEST_RECIEVE_CURRENT_SECTION',
      payload: 'B',
    };

    expect(actions.recieveCurrentSection('B')).toEqual(expectedAction);
  });
});
