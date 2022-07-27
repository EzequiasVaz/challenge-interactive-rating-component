import { FeedBackStep } from "../../../../utils/interfaces/ratingFeedback";
import { FeedbackRatingComponentContainer, FeedBackNote, IconFeedbackNote, ThankMessage, ThankTitleMessage } from "./style";

export function FeedbackStep({ ratingNote }: FeedBackStep) {
    return (
        <FeedbackRatingComponentContainer role='contentinfo' aria-roledescription="Feedback component">
            <header>
                <IconFeedbackNote />
            </header>
            <main>
                <FeedBackNote role={"log"} aria-roledescription="Feedback selected" >You selected {ratingNote} out of 5</FeedBackNote>

                <ThankTitleMessage role={'heading'}>Thank you!</ThankTitleMessage>
            </main>
            <footer>
                <ThankMessage role={'heading'}> We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!</ThankMessage>
            </footer>
        </FeedbackRatingComponentContainer>
    )
}