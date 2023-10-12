import * as React from 'react';

import { ExpoApplePayViewProps } from './ExpoApplePay.types';

export default function ExpoApplePayView(props: ExpoApplePayViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
