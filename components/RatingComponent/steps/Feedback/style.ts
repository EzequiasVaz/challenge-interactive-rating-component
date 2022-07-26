import { styled } from "../../../../styles/stitches.config";

export const FeedbackRatingComponentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    px: '24px',
    py: '39px',
    maxHeight: 'fit-content',
    maxWidth: '360px',
    backgroundColor: '$DarkBlue',
    borderRadius: '16px',
})

export const FeedBackNote = styled('div', {
    backgroundColor: '$VeryDarkBlueLowOpacity',
    color: '$Orange',
    width: 'fit-content',
    py: '$1',
    px: '$2',
    borderRadius: '16px',
    mt: '8px'
})

export const IconFeedbackNote = styled('svg', {
    backgroundImage: 'url("/illustration-thank-you.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: 'fit-content',
    height: 'fit-content',
})

export const ThankTitleMessage = styled('h4', {
    fontSize: '24px',
    color: '$White',
    fontWeight: '$7',
    mt: '24px'
})

export const ThankMessage = styled('p', {
    fontSize: '14px',
    color: '$LightGrey',
    fontWeight: '$4',
    lineHeight: '24px',
    mt: '16px'
})