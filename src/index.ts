import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoApplePay.web.ts
// and on native platforms to ExpoApplePay.ts
import ExpoApplePayModule from './ExpoApplePayModule';
import ExpoApplePayView from './ExpoApplePayView';
import { ChangeEventPayload, ExpoApplePayViewProps } from './ExpoApplePay.types';

// Get the native constant value.
export const PI = ExpoApplePayModule.PI;

export function hello(): string {
  return ExpoApplePayModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoApplePayModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoApplePayModule ?? NativeModulesProxy.ExpoApplePay);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoApplePayView, ExpoApplePayViewProps, ChangeEventPayload };
