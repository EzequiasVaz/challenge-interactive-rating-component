import { createStitches } from '@stitches/react'


export const { css, globalCss, styled, theme } = createStitches({
    theme: {
        colors: {
            'Orange': 'hsl(25, 97%, 53%)',
            'White': 'hsl(0, 0%, 100%)',
            'LightGrey': 'hsl(217, 12%, 63%)',
            'MediumGrey': 'hsl(216, 12%, 54%)',
            'DarkBlue': 'hsl(213, 19%, 18%)',
            'VeryDarkBlueLowOpacity': 'hsl(210, 19%, 20%)',
            'VeryDarkBlue': 'hsl(216, 12%, 8%)'
        },
        space: {
            1: '8px',
            2: '16px',
            3: '24px',
            4: '32px',
            5: '40px',
            6: '48px',
            7: '56px',
            8: '64px',
            9: '72px',
            10: '80px',
        },
        fontSizes: {

        },
        lineHeights: {

        },
        fontWeights: {
            4: '400',
            7: '700',
        },

        transitions: {
        },


    },
    media: {

    },
    utils: {
        mx: (value: string) => ({
            marginLeft: value,
            marginRight: value
        }),
        my: (value: string) => ({
            marginTop: value,
            marginBottom: value
        }),
        mb: (value: string) => ({
            marginBottom: value
        }),
        mt: (value: string) => ({
            marginTop: value
        }),
        px: (value: string) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value: string) => ({
            paddingTop: value,
            paddingBottom: value
        })

    }
})