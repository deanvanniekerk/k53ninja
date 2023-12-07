import { BackButton, QuestionInfo, QuestionList } from '@/app/components';
import { useAnalytics } from '@/app/hooks/useAnalytics';
import { RootState } from '@/state';
import { questionAnswersSelector, recieveQuestionAnswers } from '@/state/dojo/test';
import { IonContent, IonPage, useIonViewWillLeave } from '@ionic/react';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';
import { DojoWatermark } from '../DojoWatermark';
import { Header } from './components';
import { Footer } from './components/Footer';
import { TestResultPageHeader } from './TestResultPageHeader';

type Props = PropsFromState & PropsFromDispatch;

const TestResultPage: React.FC<Props> = ({ questionAnswers, recieveQuestionAnswers }) => {
  const history = useHistory();

  useAnalytics('QuizPage:TestResultPage');

  useIonViewWillLeave(() => {
    recieveQuestionAnswers([]); //Clear test
  });

  const onBackClicked = () => {
    history.replace('/dojo');
  };

  const questions = questionAnswers.map<QuestionInfo>((q) => ({
    question: q.question,
    answer: q.answer,
  }));

  return (
    <Page>
      <TestResultPageHeader />
      <DojoWatermark />
      <Content>
        <BackButton onClick={onBackClicked} />
        <Header />
        <QuestionList questions={questions} showResult={true} />
        <Footer />
      </Content>
    </Page>
  );
};

const Content = styled(IonContent)`
  --background: transparent;
`;

const Page = styled(IonPage)`
  background: var(--dojo-background);
`;

type PropsFromState = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: RootState) => {
  return {
    questionAnswers: questionAnswersSelector(state),
  };
};

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>;
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ recieveQuestionAnswers }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResultPage);
