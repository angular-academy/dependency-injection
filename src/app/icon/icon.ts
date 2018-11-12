import { InjectionToken } from '@angular/core';

export interface Icon {
    name: string;
    file: string;
}
export const ICON = new InjectionToken<Icon>('ICON');

