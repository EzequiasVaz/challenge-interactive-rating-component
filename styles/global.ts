import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    '*': { margin: 0, padding: 0, boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat' },
    body: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$VeryDarkBlue',
    }
})