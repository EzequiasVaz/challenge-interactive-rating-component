import { styled } from "../../../styles/stitches.config"

export const NoteValuesContainer = styled('div', {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
})

export const NoteOptionValue = styled('span', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '48px',
    backgroundColor: '$VeryDarkBlueLowOpacity',
    color: '$White',
    cursor: 'pointer',
    transition: 'background-color 0.5s',

    '&:hover': {
        backgroundColor: '$Orange',
    },
    '&.selected': {
        backgroundColor: '$White',
        color: '$Orange'
    }

})