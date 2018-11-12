import { InjectionToken } from '@angular/core';

export const CONFIG = new InjectionToken<string>('APP-CONFIG');

export interface Config {
    language: 'de' | 'en' | 'da';
    trackerUrl: string;
    trackerKey: string;
}
