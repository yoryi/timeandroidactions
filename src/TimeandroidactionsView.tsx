import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { TimeandroidactionsViewProps } from './Timeandroidactions.types';

const NativeView: React.ComponentType<TimeandroidactionsViewProps> =
  requireNativeViewManager('Timeandroidactions');

export default function TimeandroidactionsView(props: TimeandroidactionsViewProps) {
  return <NativeView {...props} />;
}
