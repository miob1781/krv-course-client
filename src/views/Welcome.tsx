import ToC from "../components/ui/ToC"
import { SectionData } from "../types"
import "../style/Welcome.css"

interface Props {
    sectionsData: SectionData[]
}

export default function Welcome({ sectionsData }: Props) {
    return (
        <div className="Welcome">
            <h1>Lies die Kritik der reinen Vernunft!</h1>
            <div className="welcome-text-cont">
                <img
                    className="book-cover-img"
                    src="../../assets/images/cpr_image.jpg"
                    alt="Deckblatt der ersten Ausgabe der Kritik der reinen Vernunft von 1781"
                    title="Deckblatt der ersten Ausgabe der Kritik der reinen Vernunft von 1781"
                />
                <p>
                    Studiere Immanuel Kants berühmtestes Werk in deiner eigenen Geschwindigkeit - wann und wo immer du willst.
                    Mit detallierten Lektürehinweisen und Quizzes, die dich Stück für Stück durch das schwierige Werk begleiten.
                    Zudem hast du Platz für deine eigenen Notizen und du behältst jederzeit deinen Lernfortschritt im Blick.
                </p>
            </div>
            <ToC sectionsData={sectionsData} tocType="welcome" />
        </div>
    )
}