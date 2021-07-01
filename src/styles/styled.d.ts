import 'styled-components ';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      interactive: string;
      disabled: string;
      divider: string;

      boxNone: string;
      boxSelect: string;
      boxDelete: string;

      text: string;

      white: string;

      buttonGoogle: string;
    };
  }
}
