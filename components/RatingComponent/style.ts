import { styled } from "../../styles/stitches.config";


export const RatingComponentContainer = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    px: '24px',
    py: '24px',
    maxHeight: 'fit-content',
    maxWidth: '360px',
    backgroundColor: '$DarkBlue',
    borderRadius: '16px',
    gap: '$4',

    '@desktop': {
        maxWidth: '420px',
        px: '32px'
    }
})

export const StarIconContainer = styled('div', {
    width: '48px',
    height: '48px',
    borderRadius: '48px',
    backgroundColor: '$VeryDarkBlueLowOpacity',
})

export const StarIcon = styled('svg', {
    height: '100%',
    width: '100%',
    backgroundImage: 'url("/icon-star.svg")',
    backgroundSize: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
})

export const TitleAndSubtitleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3'
})

export const TitleRatingComponent = styled('h1', {
    fontSize: '24px',
    color: '$White',
    fontWeight: '$7',
})

export const SubtitleRatingComponent = styled('p', {
    fontSize: '14px',
    color: '$LightGrey',
    fontWeight: '$4',
    lineHeight: '24px'
})

export const SubmitButton = styled('button', {
    width: '100%',
    height: '48px',
    borderRadius: '999px',
    backgroundColor: '$Orange',
    color: '$White',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontWeight: '$7',
    letterSpacing: '3px',
    '&:hover': {
        backgroundColor: '$White',
        color: '$Orange'
    }
})

