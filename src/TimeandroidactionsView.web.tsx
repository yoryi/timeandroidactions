import * as React from 'react';

import { TimeandroidactionsViewProps } from './Timeandroidactions.types';

export default function TimeandroidactionsView(props: TimeandroidactionsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
