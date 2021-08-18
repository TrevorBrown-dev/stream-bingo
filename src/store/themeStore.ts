import { writable } from 'svelte/store';
export interface ThemeProps {
    //Error on this line
    colors: string;
    primary: string;
    secondary: string;
    light: string;
    dark: string;
    offDark: string;
}

const colorTheme = {
    primary: '#802BB1',
    secondary: '#564F6F',
    dark: '#2D283E',
    offDark: '#4C495D',
    light: '#D1D7E0',
};

export const theme = writable<ThemeProps>({
    colors: `--color-primary: ${colorTheme.primary}; --color-secondary: ${colorTheme.secondary}; --color-dark: ${colorTheme.dark}; --color-off-dark: ${colorTheme.offDark}; --color-light: ${colorTheme.light};`,
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    dark: 'var(--color-dark)',
    offDark: 'var(--color-off-dark)',
    light: 'var(--color-light)',
});
