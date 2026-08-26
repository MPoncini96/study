import Link from "next/link";
import SiteNav from "../SiteNav";

export const metadata = {
  title: "Saint Carlo Acutis | Saint Carlo Acutis High School",
  description:
    "The life of Carlo Acutis (1991-2006), the first millennial saint, and why this school carries his name."
};

const facts = [
  { label: "Born", value: "3 May 1991, London, England" },
  { label: "Died", value: "12 October 2006, Monza, Italy, aged 15" },
  { label: "Parents", value: "Andrea Acutis and Antonia Salzano" },
  { label: "Beatified", value: "10 October 2020, Assisi" },
  { label: "Canonised", value: "7 September 2025, by Pope Leo XIV" },
  { label: "Feast Day", value: "12 October" },
  { label: "Buried", value: "Sanctuary of the Spoliation, Assisi" }
];

const lessons = [
  {
    title: "He was ordinary on purpose",
    description:
      "He played the PlayStation, followed Spider-Man and Pokemon, played football, and kept dogs. He simply refused to let those things run him. Two hours of video games a week, by his own rule."
  },
  {
    title: "He built rather than consumed",
    description:
      "He taught himself to code and then used it for something. Our students learn the same order of operations: acquire a real skill, then point it at something outside yourself."
  },
  {
    title: "He went daily",
    description:
      "From about the age of seven he asked to be taken to Mass every day, and he kept going. Our daily order rests on the same conviction, that formation is what you repeat."
  },
  {
    title: "He noticed who was alone",
    description:
      "He carried food to homeless men in Milan and stood with classmates who were bullied, especially those with disabilities. He is the reason our first measure is brotherhood over isolation."
  }
];

export default function SaintPage() {
  return (
    <>
      <SiteNav />

      <main className="page-shell saint-page" id="saint">
        <section className="section hero hero-offset">
          <div className="hero-copy">
            <p className="eyebrow">Our Patron</p>
            <h1>Saint Carlo Acutis</h1>
            <p className="hero-text">
              A fifteen-year-old Milanese schoolboy who taught himself to code, catalogued the Eucharistic miracles of
              the world, and died of leukaemia in a matter of days. In 2025 he became the first saint of the millennial
              generation.
            </p>
          </div>
          <div className="hero-visual">
            <aside className="panel fact-card">
              <p className="card-label">In Brief</p>
              <dl className="fact-list">
                {facts.map((fact) => (
                  <div className="fact-row" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section className="section saint-body">
          <article className="prose">
            <h2>A London birth and a Milanese boyhood</h2>
            <p>
              Carlo Acutis was born in London on 3 May 1991 to Andrea Acutis and Antonia Salzano, and was raised in
              Milan. His family was comfortable and, by his mother&apos;s own later account, not especially devout. She
              has said she had attended Mass only a handful of times in her life before her son&apos;s faith obliged
              her to take the question seriously. The devotion in that household ran upward, from the child to the
              parents.
            </p>
            <p>
              He made his First Communion on 16 June 1998, at the age of seven, and from around that age asked to be
              taken to Mass daily. He was confirmed in 2003 and was teaching catechism to younger children by twelve.
              He attended the Jesuit-run Istituto Leone XIII in Milan.
            </p>

            <h2>The boy at the keyboard</h2>
            <p>
              Carlo taught himself to program. He worked through university-level computing manuals, wrote code, built
              in web design, and by fourteen was making websites for his parish and his school. He was a genuinely
              capable amateur engineer, not a boy who dabbled.
            </p>
            <p>
              In 2004 he began the project he is remembered for: a catalogue of the reported Eucharistic miracles of
              the world, and of the Marian apparitions recognised by the Church, assembled and published online so that
              anyone could examine them. He worked on it for roughly two and a half years and pulled his family in to
              help. The travelling exhibition drawn from it was unveiled on 4 October 2006 at the Church of San Carlo
              Borromeo in Rome. He had eight days to live.
            </p>

            <h2>What he did with an ordinary life</h2>
            <p>
              He was not a solemn child. He played PlayStation, Xbox and Game Boy, liked Spider-Man and Pokemon, played
              football, took up the saxophone, and kept dogs. He also capped his own video game playing at two hours a
              week, having decided that the machine should not be permitted to own him.
            </p>
            <p>
              He filled containers with food and carried them to men sleeping rough in Milan. He made a point of
              standing with children at school who were being bullied, particularly those with disabilities, and of
              drawing in a friend whose parents were divorcing. None of this was arranged for him by an adult.
            </p>

            <h2>Four days in October</h2>
            <p>
              In early October 2006 Carlo felt unwell, and it was taken for influenza. On roughly 8 October he was
              diagnosed with acute promyelocytic leukaemia, an aggressive cancer of the blood. Within days he suffered
              a brain haemorrhage and fell into a coma. He died on 12 October 2006 at the San Gerardo Hospital in
              Monza. He was fifteen.
            </p>
            <p>
              Told what lay ahead, he answered that there were people who suffered a great deal more than he did. He
              asked that his suffering be put to use:{" "}
              <q>
                I offer all of my suffering to the Lord for the pope and for the Church in order not to go to purgatory
                but to go straight to heaven.
              </q>{" "}
              To his mother, near the end, he said not to be afraid, because since Jesus became man, death had become
              the passage towards life.
            </p>

            <h2>Assisi, and what followed</h2>
            <p>
              He had asked to be buried in Assisi, which he loved for St Francis. His body was taken there and in 2019
              laid in a tomb at the Sanctuary of the Spoliation, where it can be seen. He is dressed as he lived, in
              jeans and a pair of Nike trainers, which unsettles some visitors and is very much the point.
            </p>
            <p>
              Two healings were investigated and approved as miracles through his intercession: a Brazilian boy,
              Matheus Vianna, born with a malformed pancreas, and Valeria Valverde, a Costa Rican student in Florence
              who suffered catastrophic head injuries in a bicycle accident and whose mother prayed at Carlo&apos;s
              tomb. He was beatified in Assisi on 10 October 2020, and canonised in St Peter&apos;s Square on 7
              September 2025 by Pope Leo XIV, alongside Pier Giorgio Frassati. He is popularly called God&apos;s
              influencer, and the patron saint of the internet, though that last is affection rather than an official
              title.
            </p>
          </article>

          <aside className="quote-stack">
            <blockquote className="pull-quote">
              <p>The Eucharist is the highway to heaven.</p>
              <footer>Carlo Acutis</footer>
            </blockquote>
            <blockquote className="pull-quote">
              <p>All people are born as originals, but many die as photocopies.</p>
              <footer>Carlo Acutis</footer>
            </blockquote>
          </aside>
        </section>

        <section className="section measure-section">
          <div className="section-heading">
            <p className="eyebrow">Why His Name</p>
            <h2>We did not choose a saint who withdrew from the world.</h2>
            <p className="section-intro">
              Carlo Acutis is the patron of this school because his life answers the question we are actually asking:
              what does an ordinary teenage boy do with his attention, his talent, and his time. He had a computer, a
              games console, and the whole of the early internet in front of him. He used them, refused to be used by
              them, and pointed them at something worth pointing them at. That is close to the whole curriculum.
            </p>
          </div>
          <div className="measure-grid">
            {lessons.map((lesson) => (
              <article className="panel" key={lesson.title}>
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
              </article>
            ))}
          </div>
          <p className="saint-return">
            <Link href="/#wellbeing">See how we measure this school &rarr;</Link>
          </p>
        </section>
      </main>
    </>
  );
}
