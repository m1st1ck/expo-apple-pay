import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoApplePayViewProps } from './ExpoApplePay.types';

const NativeView: React.ComponentType<ExpoApplePayViewProps> =
  requireNativeViewManager('ExpoApplePay');

export default function ExpoApplePayView(props: ExpoApplePayViewProps) {
  return <NativeView {...props} />;
}
