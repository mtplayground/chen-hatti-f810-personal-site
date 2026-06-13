import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  profile: {
    name: "Your Name",
    title: "Your Title",
    affiliation: "Your Affiliation",
    location: "Your Location",
    email: "your.email@example.com",
    bio: [
      "Write a concise first-person biography that introduces your academic background, current role, and research direction.",
      "Use this space for a second short paragraph about your methods, collaborations, and long-term research goals."
    ],
    researchIntro:
      "A short research intro describing your core interests, current projects, and the problems you care about.",
    researchInterests: [
      "Human-centered AI",
      "Machine learning systems",
      "Data visualization",
      "Responsible computing"
    ],
    avatar: {
      src: "/assets/profile-placeholder.svg",
      alt: "Portrait of Your Name",
      width: 640,
      height: 640
    },
    heroImage: {
      src: "/assets/hero-placeholder.svg",
      alt: "Research network illustration",
      width: 1200,
      height: 720
    },
    cvHref: "/cv.pdf",
    socials: [
      {
        platform: "Email",
        label: "Email",
        href: "mailto:your.email@example.com",
        icon: "Mail",
        ariaLabel: "Send email to Your Name"
      },
      {
        platform: "Google Scholar",
        label: "Scholar",
        href: "https://scholar.google.com/",
        external: true,
        icon: "GraduationCap",
        ariaLabel: "Open Google Scholar profile"
      },
      {
        platform: "GitHub",
        label: "GitHub",
        href: "https://github.com/",
        external: true,
        icon: "Github",
        ariaLabel: "Open GitHub profile"
      },
      {
        platform: "LinkedIn",
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        external: true,
        icon: "Linkedin",
        ariaLabel: "Open LinkedIn profile"
      }
    ]
  },
  nav: [
    { label: "Home", href: "/", activeMatch: "/" },
    { label: "Research", href: "/research", activeMatch: "/research" },
    { label: "Publications", href: "/publications", activeMatch: "/publications" },
    { label: "Blog", href: "/blog", activeMatch: "/blog" },
    { label: "CV", href: "/cv.pdf", external: true, ariaLabel: "Open CV PDF" }
  ],
  news: [
    {
      id: "news-paper-accepted",
      date: "2026-05-15",
      title: "Paper accepted at Placeholder Conference",
      description:
        "A representative news item for a publication, award, talk, or project milestone.",
      venue: "Placeholder Conference",
      links: [{ label: "Details", href: "/news" }]
    },
    {
      id: "news-talk",
      date: "2026-03-08",
      title: "Invited talk on responsible AI systems",
      description: "Use this item to highlight talks, seminars, visits, or community events.",
      venue: "Placeholder Seminar Series",
      links: [{ label: "View all news", href: "/news" }]
    }
  ],
  education: [
    {
      id: "education-current",
      institution: "Your University",
      degree: "Ph.D.",
      field: "Computer Science",
      location: "Your City",
      startDate: "2022",
      endDate: "Present",
      logo: {
        src: "/assets/school-logo-placeholder.svg",
        alt: "Your University logo",
        width: 320,
        height: 320
      },
      description: "Placeholder education entry for the current or most recent degree.",
      highlights: ["Advisor: Your Advisor", "Research area: Your Research Area"]
    },
    {
      id: "education-previous",
      institution: "Previous University",
      degree: "B.S.",
      field: "Computer Science",
      location: "Previous City",
      startDate: "2018",
      endDate: "2022",
      logo: {
        src: "/assets/school-logo-placeholder.svg",
        alt: "Previous University logo",
        width: 320,
        height: 320
      },
      description: "Placeholder education entry for a previous degree."
    }
  ],
  awards: [
    {
      id: "award-fellowship",
      title: "Placeholder Fellowship",
      organization: "Your Organization",
      year: "2026",
      description: "Representative award entry for a fellowship, scholarship, or honor.",
      logo: {
        src: "/assets/award-logo-placeholder.svg",
        alt: "Fellowship award mark",
        width: 320,
        height: 320
      }
    },
    {
      id: "award-best-paper",
      title: "Best Paper Honorable Mention",
      organization: "Placeholder Conference",
      year: "2025",
      description: "Representative award entry for a publication or presentation recognition.",
      logo: {
        src: "/assets/award-logo-placeholder.svg",
        alt: "Best Paper Honorable Mention award mark",
        width: 320,
        height: 320
      }
    }
  ],
  publications: [
    {
      id: "publication-systems",
      title: "Placeholder Paper Title on Human-Centered AI Systems",
      authors: [
        { name: "Your Name", isSelf: true },
        { name: "Collaborator One" },
        { name: "Collaborator Two" }
      ],
      venue: "Proceedings of Placeholder Conference",
      year: "2026",
      type: "conference",
      selected: true,
      abstract:
        "A short placeholder abstract summarizing the research question, method, and contribution.",
      thumbnail: {
        src: "/assets/publication-thumbnail-1.svg",
        alt: "Line chart thumbnail for the human-centered AI systems paper",
        width: 640,
        height: 420
      },
      tags: ["AI", "Systems", "Human-centered computing"],
      links: {
        pdf: "/cv.pdf",
        code: "https://github.com/",
        bibtex: "@inproceedings{placeholder2026systems,title={Placeholder Paper Title}}"
      }
    },
    {
      id: "publication-visualization",
      title: "Placeholder Paper Title on Interactive Data Visualization",
      authors: [{ name: "Collaborator Three" }, { name: "Your Name", isSelf: true }],
      venue: "Journal of Placeholder Research",
      year: "2025",
      type: "journal",
      selected: true,
      abstract: "A representative journal publication entry for the selected publications section.",
      thumbnail: {
        src: "/assets/publication-thumbnail-2.svg",
        alt: "Document cards thumbnail for the interactive data visualization paper",
        width: 640,
        height: 420
      },
      tags: ["Visualization", "Interaction"],
      links: {
        pdf: "/cv.pdf",
        doi: "https://doi.org/10.0000/placeholder"
      }
    },
    {
      id: "publication-workshop",
      title: "Placeholder Workshop Paper on Responsible Computing",
      authors: [{ name: "Your Name", isSelf: true }, { name: "Collaborator Four" }],
      venue: "Placeholder Workshop",
      year: "2024",
      type: "workshop",
      thumbnail: {
        src: "/assets/publication-thumbnail-3.svg",
        alt: "Responsible computing publication thumbnail",
        width: 640,
        height: 420
      },
      tags: ["Responsible AI"],
      links: {
        pdf: "/cv.pdf"
      }
    }
  ],
  blogs: [
    {
      id: "blog-research-notes",
      title: "Research Notes Placeholder",
      slug: "research-notes-placeholder",
      date: "2026-04-20",
      excerpt: "A placeholder blog entry for research notes, project updates, or reading lists.",
      tags: ["Research", "Notes"],
      readingTime: "4 min read",
      href: "/blog/research-notes-placeholder"
    },
    {
      id: "blog-building-site",
      title: "Building an Academic Website",
      slug: "building-an-academic-website",
      date: "2026-02-10",
      excerpt: "A representative blog entry for writing about tools, workflow, or teaching.",
      tags: ["Website", "Workflow"],
      readingTime: "3 min read",
      href: "/blog/building-an-academic-website"
    }
  ],
  experience: [
    {
      id: "experience-research-intern",
      organization: "Placeholder Lab",
      role: "Research Intern",
      location: "Remote",
      startDate: "2025-06",
      endDate: "2025-09",
      description: "Representative industry or research lab experience entry.",
      highlights: [
        "Built a prototype research system.",
        "Collaborated with a cross-functional research team."
      ],
      links: [{ label: "Organization", href: "https://example.com", external: true }]
    },
    {
      id: "experience-assistant",
      organization: "Your University",
      role: "Graduate Research Assistant",
      location: "Your City",
      startDate: "2022-09",
      current: true,
      description: "Representative academic research experience entry.",
      highlights: ["Designed experiments.", "Prepared manuscripts and presentations."]
    }
  ],
  teaching: [
    {
      id: "teaching-ai-course",
      courseTitle: "Introduction to Artificial Intelligence",
      courseCode: "CS 101",
      role: "Teaching Assistant",
      institution: "Your University",
      term: "Spring",
      year: "2026",
      description: "Representative teaching entry for a course, lab, or guest lecture."
    },
    {
      id: "teaching-visualization",
      courseTitle: "Data Visualization",
      courseCode: "CS 202",
      role: "Guest Lecturer",
      institution: "Your University",
      term: "Fall",
      year: "2025",
      description: "Representative entry for a lecture or workshop."
    }
  ],
  services: [
    {
      id: "service-chair-committee",
      title: "Chair and Committee",
      icon: "Users",
      items: [
        {
          id: "service-program-committee",
          title: "Program Committee Member",
          organization: "Placeholder Conference",
          year: "2026"
        },
        {
          id: "service-student-committee",
          title: "Student Committee Representative",
          organization: "Your University",
          year: "2025"
        }
      ]
    },
    {
      id: "service-journal-reviewer",
      title: "Journal Reviewer",
      icon: "BookOpen",
      items: [
        {
          id: "service-journal-review",
          title: "Reviewer",
          organization: "Journal of Placeholder Research",
          year: "2026"
        }
      ]
    },
    {
      id: "service-conference-reviewer",
      title: "Conference Reviewer",
      icon: "MessagesSquare",
      items: [
        {
          id: "service-conference-review",
          title: "Reviewer",
          organization: "Placeholder Conference",
          year: "2025"
        }
      ]
    }
  ]
};

export const profile = siteContent.profile;
export const nav = siteContent.nav;
export const news = siteContent.news;
export const education = siteContent.education;
export const awards = siteContent.awards;
export const publications = siteContent.publications;
export const blogs = siteContent.blogs;
export const experience = siteContent.experience;
export const teaching = siteContent.teaching;
export const services = siteContent.services;

export default siteContent;
