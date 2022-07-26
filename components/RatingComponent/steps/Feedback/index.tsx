import { FeedBackStep } from "../../../../utils/interfaces/ratingFeedback";
import { FeedbackRatingComponentContainer, FeedBackNote, IconFeedbackNote, ThankMessage, ThankTitleMessage } from "./style";

export function FeedbackStep({ ratingNote }: FeedBackStep) {
    return (
        <FeedbackRatingComponentContainer>
            <IconFeedbackNote />
            <FeedBackNote>You selected {ratingNote} out of 5</FeedBackNote>

            <ThankTitleMessage>Thank you!</ThankTitleMessage>

            <ThankMessage> We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!</ThankMessage>
        </FeedbackRatingComponentContainer>
    )
}