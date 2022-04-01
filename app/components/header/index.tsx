interface Props {
    t: Function
}
export const Header = ({ t }: Props) => {
    return (
        <header className="p-6 bg-bone flex justify-around text-xl">
            <div>{t("header.people")}</div>
            <div>{t("header.party")}</div>
            <div>{t("header.place")}</div>
            <div>{t("header.accomodations")}</div>
            <div>{t("header.rsvp")}</div>
            <div>{t("header.photos")}</div>
        </header>
    )
}