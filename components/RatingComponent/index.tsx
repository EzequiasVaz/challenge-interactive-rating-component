import React, { useState } from 'react'
import { RatingButtons } from './ratingButtons'
import { FeedbackStep } from './steps/Feedback'
import './style'
import { RatingComponentContainer, StarIcon, StarIconContainer, SubmitButton, SubtitleRatingComponent, TitleAndSubtitleContainer, TitleRatingComponent } from './style'

export function RatingComponent() {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [ratingNote, setRatingNote] = useState<number>()

    function getRatingNote(value: number) {
        setRatingNote(value)
    }

    async function submitRatingNote(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        !ratingNote && alert('Set a rating note and press again!')
        ratingNote && setIsSubmitted(true)
    }

    return (
        <>
            {!isSubmitted ?
                <RatingComponentContainer method='POST' onSubmit={(e: React.FormEvent<HTMLFormElement>) => { submitRatingNote(e) }}>
                    <header>
                        <StarIconContainer>
                            <StarIcon />
                        </StarIconContainer>
                    </header>


                    <TitleAndSubtitleContainer>
                        <TitleRatingComponent>How did we do?</TitleRatingComponent>
                        <SubtitleRatingComponent>Please let us know how we did with your support request. All feedback is appreciated
                            to help us improve our offering!</SubtitleRatingComponent>
                    </TitleAndSubtitleContainer>
                    <RatingButtons getRatingNote={getRatingNote} />


                    <footer>
                        <SubmitButton type='submit'>Submit</SubmitButton>
                    </footer>

                </RatingComponentContainer> : <FeedbackStep ratingNote={ratingNote} />}
        </>

    )
}