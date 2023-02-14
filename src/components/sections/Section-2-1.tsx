import Lesson from "../../views/Lesson";
import LessonListEl from "../ui/LessonListEl";
import Quiz_2_1 from "../quizzes/Quiz-2-1"
import { SectionProps } from "../../types";

export default function Lesson_2_1({ sectionData }: SectionProps) {
    return (
        <Lesson quiz={<Quiz_2_1 />} title="Transzendentale Ästhetik, § 1" pages="A19/B33-A22/B36">
            <LessonListEl paragraphId={sectionData.sectionNumber + "-1"} pageNumber="A19/B33">
                Hier führt Kant die Lehre von den „zwei Stämmen“ der menschlichen Erkenntnis, die er in A15/B29 erstmals einführt, weiter aus.
                Durch Sinnlichkeit werden Gegenstände „gegeben“, durch den Verstand werden sie „gedacht“.
                Der Akt, wodurch ein Gegenstand gegeben wird, heißt „Anschauung“;
                und wenn Kant sagt, dass das bei „uns Menschen wenigstens“ durch die Sinnlichkeit geschieht,
                dann deutet er damit an, dass das bei anderen Wesen (v.a. Gott) anders sein könnte.
                Es handelt sich bei Sinnlichkeit und Verstand um grundlegend verschiedene Erkenntnisvermögen mit verschiedenen Arten von Vorstellungen.
                So zeichnet sich die Sinnlichkeit durch „Rezeptivität“ aus – sie wartet passiv darauf,
                von Gegenständen Vorstellungen zu empfangen – während der Verstand über „Spontaneität“ verfügt, also selber Vorstellungen hervorbringen kann.
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-2"}>
                Inwiefern sich der Verstand immer auf Anschauungen „beziehen“ muss, wird in der nächsten Lektion erörtert.
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-3"} pageNumber="A19f./B34">
                „Affektion“ ist der Vorgang, wodurch ein Gegenstand eine Anschauung erzeugt.
                Nach Auffassung der meisten Interpret:innen ist Affektion kausal – der affizierende Gegenstand ist also die Ursache einer Anschauung als Wirkung im Subjekt.
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-4"}>
                „Empfindung“ ist die Materie der Anschauung: „Undurchdringlichkeit, Härte, Farbe etc.“ (A20f./B35).
                Empfindungen sind der Gehalt dessen, was in den einzelnen Sinnen (Sehsinn, Gehör, Geruch, Geschmack, Tastsinn) empfunden wird.
                Eine Anschauung mit Empfindung ist deswegen empirisch,
                weil zur Affektion immer Empfindungen gehören und es ohne Affektion keine empirische Anschauung gibt.
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-5"} isQuestion>
                Kannst du weitere Empfindungen benennen?
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-6"}>
                „Der unbestimmte Gegenstand einer empirischen Anschauung heißt <b>Erscheinung</b>.“ – Wir werden später sehen,
                dass es verschiedene Arten von Erscheinungen gibt.
                Hier ist der Gegenstand „unbestimmt“, weil der Gegenstand zwar angeschaut, aber noch nicht gedacht wird.
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-7"}>
                Zu beachten ist, dass als „Anschauung“ sowohl die Erscheinung in mir als auch der Akt,
                wodurch die Erscheinung zustande kommt, bezeichnet wird.
                Die Anschauung eines Computers ist einerseits der Vorgang des Anschauens,
                andererseits die Anschauung des Computers in mir.
                Diese Doppeldeutigkeit gibt es auch bei anderen Begriffen, z.B. „Vorstellung“.
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-8"} pageNumber="A20/B34">
                Eine für Kant sehr wichtige Unterscheidung ist die zwischen „Materie“ und „Form“.
                Diese Begriffe lassen sich abstrakt kaum definieren. Generell kann man sagen,
                dass die Form die Bestimmungen und Relationen der Materie ausmacht.
                Im Fall der Anschauung ist die Materie die Empfindungen – Härte, Farbe, etc. (das „Mannigfaltige“) – die Formen aber sind Raum und Zeit.
                Die Empfindungen sind dabei a posteriori, weil sie kausal durch den affizierenden Gegenstand verursacht werden;
                Raum und Zeit sind hingegen a priori, weil diese Formen von uns verursacht werden.
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-9"}>
                Kant wird manchmal so verstanden, als würde die Sinnlichkeit die Empfindungen in ungeordneter Form liefern,
                die von uns dann erst in Raum und Zeit geordnet werden müssten (vielleicht durch den Verstand).
                Das würde heißen, wir hätten erst Sinneseindrücke von etwas Farbigem, Glänzenden, usw.,
                was wir dann in raumzeitliche Formen brächten. Eine bessere Erklärung ist aber,
                dass Raum und Zeit für sich schon die Ordnung der Empfindungen ausmachen und es Empfindungen nicht geben kann,
                wenn sie nicht räumlich und zeitlich arrangiert sind.
                Wir ordnen nicht aktiv Empfindungen, sondern die Ordnung entsteht dadurch,
                dass wir affiziert werden und automatisch raumzeitliche Vorstellungen als Reaktion auf die Affektion hervorbringen.
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-10"} isQuestion>
                Überlege, ob es philosophisch plausibel ist,
                dass die Ordnung der Empfindungen, welche doch die Wirkung eines äußeren Gegenstands sind, von uns hervorgebracht wird.
                Macht es dabei einen Unterschied, ob der Gegenstand selber die Formen von Raum und Zeit hat?
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-11"} pageNumber="A20f./B34f.">
                Eine „reine“ Vorstellung ist die bloße Form einer Vorstellung ohne Materie.
                Reine Anschauung ist also die Vorstellung von Raum oder Zeit ohne Empfindungen.
                Das kann jedoch auf zwei Weisen geschehen: Entweder, indem man sich leeren Raum oder leere Zeit abstrakt vorstellt,
                oder, indem man sich geometrische Figuren oder Zahlen vorstellt – letzteres ist wichtig für Kants Philosophie der Mathematik.
                Allerdings muss das nicht heißen, dass es möglich ist, sich reine Anschauungen vorzustellen;
                denn es könnte sein, dass es sich dabei nur um Abstraktionen von empirischen Vorstellungen handelt.
                Dieses interpretatorische Problem ist schwer zu klären.
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-12"} isQuestion>
                Hier sind zwei Fragen, die zum weiteren Nachdenken anregen sollen:
                1. Stelle dir vor deinem inneren Auge ein Dreieck vor. Ist das eine reine Anschauung?
                2. Wenn du in einem völlig dunklen Raum bist und gar nichts siehst: Hast du eine reine Anschauung vom Raum oder gar keine Anschauung?
            </LessonListEl>
            <LessonListEl paragraphId={sectionData.sectionNumber + "-13"} pageNumber="A21f./B35f.">
                Wenn Kant von (transzendentaler) „Ästhetik“ spricht, dann ist das für uns zunächst gewöhnungsbedürftig,
                da wir sie mit der Lehre vom Schönen verbinden. Wie er jedoch andeutet, bezeichnet der griechische Begriff <i>„aisthesis“</i> Wahrnehmung.
                Die transzendentale Ästhetik ist daher die philosophische Lehre von der Wahrnehmung.
                Kant lehnt eine wissenschaftliche Theorie vom Schönen, wie sie von Alexander Gottlieb Baumgarten versucht wurde, zwar ab,
                behandelt das Schöne aber philosophisch in der <i>Kritik der Urteilskraft</i>.
            </LessonListEl>
        </Lesson>
    )
}