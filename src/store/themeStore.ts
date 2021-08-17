import { writable } from 'svelte/store';
export interface ThemeProps {
    //Error on this line
    colors: string;
    primary: string;
    secondary: string;
    light: string;
    dark: string;
}

const colorTheme = {
    primary: 'dodgerblue',
    secondary: 'lightcoral',
    dark: 'black',
    light: 'white',
};

export const theme = writable<ThemeProps>({
    colors: `--color-primary: ${colorTheme.primary}; --color-secondary: ${colorTheme.secondary}; --color-dark: ${colorTheme.dark}; --color-light: ${colorTheme.light};`,
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    dark: 'var(--color-dark)',
    light: 'var(--color-light)',
});
