import { useState } from "react";
import { RatingButtons } from "../../../utils/interfaces/ratingButtons";
import { NoteOptionValue, NoteValuesContainer } from "./style";

const NoteOptions = [1, 2, 3, 4, 5]

export function RatingButtons({ getRatingNote }: RatingButtons) {

    const [selectedOption, setSelectedOption] = useState<number>()

    return (
        <NoteValuesContainer role={'list'}>
            {NoteOptions.map(option => {
                return <NoteOptionValue role={'listitem'} className={selectedOption == option ? 'selected' : ''} key={option} onClick={() => {
                    setSelectedOption(option)
                    getRatingNote(option)
                }}>{option}</NoteOptionValue>
            })}
        </NoteValuesContainer>
    )
}