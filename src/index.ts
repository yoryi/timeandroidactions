import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Timeandroidactions.web.ts
// and on native platforms to Timeandroidactions.ts
import TimeandroidactionsModule from './TimeandroidactionsModule';
import TimeandroidactionsView from './TimeandroidactionsView';
import { ChangeEventPayload, TimeandroidactionsViewProps } from './Timeandroidactions.types';

// Get the native constant value.
export const PI = TimeandroidactionsModule.PI;

export function hello(): string {
  return TimeandroidactionsModule.hello();
}

export async function setValueAsync(value: string) {
  return await TimeandroidactionsModule.setValueAsync(value);
}

const emitter = new EventEmitter(TimeandroidactionsModule ?? NativeModulesProxy.Timeandroidactions);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { TimeandroidactionsView, TimeandroidactionsViewProps, ChangeEventPayload };
