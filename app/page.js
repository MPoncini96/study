const navItems = [
  { label: "Home", href: "#home" },
  { label: "Financials", href: "#financials" },
  { label: "Staff Directory", href: "#staff-directory" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Athletics", href: "#athletics" },
  { label: "Cafeteria", href: "#cafeteria" },
  { label: "Physical Education", href: "#physical-education" },
  { label: "Community Service", href: "#community-service" },
  { label: "Graduate Profile", href: "#graduate-profile" }
];

const pillars = [
  {
    title: "High School Formation",
    description: "A four-year school built to form mind, body, work ethic, and faith."
  },
  {
    title: "All-Male Environment",
    description: "A focused brotherhood with clear standards, shared discipline, and strong accountability."
  },
  {
    title: "Work-Study Model",
    description: "Students attend school four days a week and complete internships one day a week."
  },
  {
    title: "Independent Scholarship",
    description: "Students learn actively through study, exams, presentations, and discussion."
  }
];

const schedule = [
  { time: "5:20-5:30", activity: "Arrival" },
  { time: "5:30-6:30", activity: "Physical Education" },
  { time: "6:30-7:30", activity: "Hygiene" },
  { time: "7:00-7:55", activity: "Breakfast" },
  { time: "7:30-8:00", activity: "Confession" },
  { time: "7:30-17:00", activity: "Internship Day Schedule" },
  { time: "8:00-9:00", activity: "Daily Mass" },
  { time: "9:00-12:00", activity: "Classroom Time" },
  { time: "12:00-13:00", activity: "Lunch" },
  { time: "13:00-15:30", activity: "Classroom Time" }
];

const differences = [
  "We are not a traditional school model.",
  "Physical and spiritual health are central to daily life here.",
  "Our staff are tutors and moderators, not conventional teachers.",
  "Students prove mastery through exams and presentations.",
  "Each student keeps a journal and writes about his four-year experience."
];

const sectionCards = {
  financials: [
    {
      title: "Campus & Facilities",
      description: "Our campus includes dedicated classrooms, a chapel, athletic facilities, and operational reserves to sustain the mission."
    },
    {
      title: "Tuition & Support",
      description: "Tuition is supported through donors, scholarships, and internship partnerships that keep the school accessible."
    }
  ],
  staff: [
    {
      title: "Tutors",
      description: "Tutors guide study, prepare students for exams, and support mastery across every subject."
    },
    {
      title: "Moderators",
      description: "Moderators lead discipline, culture, order, and daily formation throughout the school day."
    }
  ],
  curriculum: [
    {
      title: "Core Studies",
      description: "Scripture, theology, literature, history, math, science, writing, and rhetoric form the backbone of our academic program."
    },
    {
      title: "Mastery",
      description: "Students prove learning through exams, presentations, and written work — not grades alone."
    }
  ],
  athletics: [
    {
      title: "Competition",
      description: "Athletics build courage, teamwork, endurance, and composure through organized competition."
    },
    {
      title: "Discipline",
      description: "Sports reinforce the larger mission of strength, stamina, and self-command in every student."
    }
  ],
  cafeteria: [
    {
      title: "Ordered Meals",
      description: "Meals are structured to reinforce gratitude, routine, health, and brotherhood at the table."
    },
    {
      title: "Nutrition",
      description: "Food is simple, healthy, and built to fuel long, demanding days of study and training."
    }
  ],
  pe: [
    {
      title: "Morning Training",
      description: "Physical education opens every school day with effort, order, and disciplined conditioning."
    },
    {
      title: "Lifelong Strength",
      description: "Students build lasting habits of training, recovery, posture, and physical self-command."
    }
  ],
  communityService: [
    {
      title: "Local Partnerships",
      description: "Students serve alongside parishes, food banks, and community organizations throughout the academic year."
    },
    {
      title: "Works of Mercy",
      description: "Service is rooted in the corporal and spiritual works of mercy, shaping men who give rather than consume."
    }
  ],
  graduate: [
    {
      title: "Man of Discipline",
      description: "Our graduates are prayerful, capable, dependable, and self-directed — formed through four years of demanding formation."
    },
    {
      title: "Man of Substance",
      description: "Each graduate leaves with knowledge, real work experience, and a tested character ready for responsibility."
    }
  ]
};

function PageSection({ id, eyebrow, title, description, cards, placeholderTitle, placeholderText }) {
  return (
    <section className="section section-page" id={id}>
      <div className="section-heading page-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-intro">{description}</p>
      </div>
      <div className="page-layout">
        <div className="page-grid">
          {cards.map((card) => (
            <article className="panel" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
        <aside className="image-placeholder page-placeholder">
          <p className="placeholder-label">Image Placeholder</p>
          <h3>{placeholderTitle}</h3>
          <p>{placeholderText}</p>
        </aside>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <header className="site-nav">
        <div className="nav-shell">
          <a className="brand" href="#home">Saint Carlo Acutis High School</a>
          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-shell" id="home">
        <section className="hero hero-offset">
          <div className="hero-copy">
            <p className="eyebrow">Saint Carlo Acutis High School</p>
            <h1>A blueprint for a modern education.</h1>
            <p className="hero-text">
              An all-male work-study school built around scholarship, daily training, and spiritual formation.
            </p>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <p className="card-label">Core Structure</p>
              <ul>
                <li>Four-year high school</li>
                <li>All-male student body</li>
                <li>School four days a week</li>
                <li>Internship one day a week</li>
              </ul>
            </div>
            <div className="image-placeholder hero-placeholder">
              <p className="placeholder-label">Image Placeholder</p>
              <h3>Confident student group</h3>
              <p>Add a strong opening image of students standing with unity and discipline.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">The Foundation</p>
            <h2>Education here forms the whole person.</h2>
          </div>
          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <article className="panel" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-layout">
          <div className="panel large-panel">
            <p className="eyebrow">Daily Rhythm</p>
            <h2>A demanding schedule with order and purpose.</h2>
            <div className="image-placeholder section-placeholder">
              <p className="placeholder-label">Image Placeholder</p>
              <h3>Discipline, training, or study</h3>
              <p>Add an image of a student training, reading, or preparing for the day.</p>
            </div>
            <div className="schedule-list">
              {schedule.map((item) => (
                <div className="schedule-row" key={`${item.time}-${item.activity}`}>
                  <span>{item.time}</span>
                  <strong>{item.activity}</strong>
                </div>
              ))}
            </div>
            <p className="schedule-note">
              The internship block shows the work-study day. The class blocks show the four academic days.
            </p>
          </div>

          <div className="panel quote-panel">
            <p className="eyebrow">Work-Study</p>
            <h2>Learning is tested in real work.</h2>
            <div className="image-placeholder work-placeholder">
              <p className="placeholder-label">Image Placeholder</p>
              <h3>Professional or practical setting</h3>
              <p>Add an image of a student in an internship, trade, or professional setting.</p>
            </div>
            <p className="work-study-copy">
              One day each week is reserved for internships that build punctuality, communication, and judgment.
            </p>
            <p className="eyebrow subsection">What Makes Us Different</p>
            <ul className="difference-list">
              {differences.map((difference) => (
                <li key={difference}>{difference}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section manifesto">
          <div className="section-heading">
            <p className="eyebrow">Learning Model</p>
            <h2>Students carry the weight of their own formation.</h2>
          </div>
          <div className="manifesto-grid">
            <div className="panel">
              <h3>Independent Learning</h3>
              <p>Students study with intention and build habits for lifelong learning.</p>
            </div>
            <div className="panel">
              <h3>Public Demonstration</h3>
              <p>Mastery is shown through exams, presentations, and discussion.</p>
            </div>
            <div className="panel">
              <h3>Written Reflection</h3>
              <p>Each student keeps a journal and writes a record of his four years.</p>
            </div>
          </div>
        </section>

        <PageSection
          id="financials"
          eyebrow="Financials"
          title="A serious school runs on a serious plan."
          description="Our financials are built to sustain the mission — covering campus operations, tuition support, and long-term stability."
          cards={sectionCards.financials}
          placeholderTitle="Funding or planning visual"
          placeholderText="Place a chart, campus rendering, or financial roadmap here."
        />

        <PageSection
          id="staff-directory"
          eyebrow="Staff Directory"
          title="Our adults are formators."
          description="Our staff includes tutors, moderators, chaplains, and coordinators — each chosen for their role in shaping young men."
          cards={sectionCards.staff}
          placeholderTitle="Tutor and moderator portraits"
          placeholderText="Add a faculty collage, team portrait, or profile images here."
        />

        <PageSection
          id="curriculum"
          eyebrow="Curriculum"
          title="Our curriculum builds judgment and mastery."
          description="Our academic structure is built around proof of learning — not seat time."
          cards={sectionCards.curriculum}
          placeholderTitle="Books or study environment"
          placeholderText="Place an image of books, writing, or classroom discussion here."
        />

        <PageSection
          id="athletics"
          eyebrow="Athletics"
          title="Athletics build courage and endurance."
          description="Our program includes team sports, conditioning, and competitive standards that serve the school's larger mission."
          cards={sectionCards.athletics}
          placeholderTitle="Athletic training or competition"
          placeholderText="Place an image of running, lifting, or team sport here."
        />

        <PageSection
          id="cafeteria"
          eyebrow="Cafeteria"
          title="Meals support health and order."
          description="Our cafeteria reinforces routine, nutrition, and the culture of shared meals among brothers."
          cards={sectionCards.cafeteria}
          placeholderTitle="Dining hall or meal service"
          placeholderText="Add an image of a dining space, healthy food, or communal meals here."
        />

        <PageSection
          id="physical-education"
          eyebrow="Physical Education"
          title="Physical education is daily and serious."
          description="Training is not optional — it is part of the school's core rhythm, woven into every morning."
          cards={sectionCards.pe}
          placeholderTitle="Morning training or conditioning"
          placeholderText="Place an image of calisthenics, running, or organized training here."
        />

        <PageSection
          id="community-service"
          eyebrow="Community Service"
          title="Service is part of what we do."
          description="Our students give back to the community as an expression of their faith and formation — not as a requirement to check off, but as a way of life."
          cards={sectionCards.communityService}
          placeholderTitle="Students serving the community"
          placeholderText="Add an image of students volunteering, building, or serving alongside others."
        />

        <PageSection
          id="graduate-profile"
          eyebrow="Graduate Profile"
          title="We graduate men with tested character."
          description="Our graduates leave with discipline, faith, practical experience, and the habits needed to lead and serve."
          cards={sectionCards.graduate}
          placeholderTitle="Graduate outcome portrait"
          placeholderText="Add an image of a mature graduate or closing milestone moment here."
        />

        <section className="closing-card">
          <p className="eyebrow">Our Mission</p>
          <h2>To graduate men with discipline, faith, stamina, and practical experience.</h2>
          <p>
            Saint Carlo Acutis High School prepares young men for responsibility, leadership, and meaningful work.
          </p>
        </section>
      </main>
    </>
  );
}
