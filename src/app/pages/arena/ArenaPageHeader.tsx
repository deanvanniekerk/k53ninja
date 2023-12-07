import { PageHeader, PageHeaderInfoIcon } from '@/app/components';
import React from 'react';

type Props = {
  onInfoClicked: () => void;
};

const ArenaPageHeaderComponent: React.FC<Props> = (props) => {
  return <PageHeader text="arena" rightComponent={<PageHeaderInfoIcon onClick={props.onInfoClicked} />} />;
};

const ArenaPageHeader = ArenaPageHeaderComponent;

export { ArenaPageHeader };
