(() => {
  "use strict";
  const translations = {
    nav_about: "About", nav_work: "Experience", nav_education: "Education", nav_contact: "Contact",
    eyebrow: "PROFESSIONAL PROFILE",
    headline: "Customer service <span class=\"role-divider\">&amp;</span><br>administrative support.",
    intro: "Bilingual professional with experience in customer service, document management and operations coordination in public institutions and private companies.",
    view_experience: "View my experience", write_me: "Get in touch",
    photo_note: "PEOPLE · SERVICE · ORGANIZATION",
    highlights_roles: "Professional roles",
    highlights_sectors: "Sectors: public and private",
    highlights_languages: "Languages: Spanish and English",
    section_about: "About me",
    profile_label: "A PEOPLE-CENTERED, ORGANIZED APPROACH",
    about_heading: "Great service starts with <em>listening and solving.</em>",
    about_text: "My background combines customer service, administrative support, and operations coordination. I have worked across public institutions and private organizations, assisting people, organizing documentation, and following up on processes and requests. Communication, organization, and problem-solving are central to my work.",
    experience_heading: "Experience<span class=\"heading-period\">.</span>",
    experience_subheading: "A professional path focused on service, coordination, and efficient process management.",
    present: "Present",
    org_migration: "National Institute of Migration",
    job_migration: "Administrative Support",
    migration_1: "Managed and organized migration files and official documentation.",
    migration_2: "Provided administrative support in document processing and data organization.",
    migration_3: "Assisted clients with information and support during migration procedures.",
    org_congress: "State Congress",
    job_congress: "Administrative Assistant / Community Support",
    congress_1: "Coordinated communication between citizens and government institutions.",
    congress_2: "Assisted in resolving community issues related to public services.",
    congress_3: "Managed documentation and follow-up on community requests.",
    job_redtrack: "Transportation Operations Assistant",
    redtrack_1: "Supported daily transportation operations for employees in factories.",
    redtrack_2: "Assisted in scheduling and coordination of transportation services.",
    redtrack_3: "Reported incidents and operational issues.",
    org_security: "State Council of Public Security",
    job_security: "Receptionist / Customer Service",
    security_1: "Handled incoming calls and scheduled appointments.",
    security_2: "Maintained organized records and administrative documentation.",
    security_3: "Provided customer service and supported internal administrative processes.",
    education_heading: "Education <span class=\"heading-period\">&amp;</span> skills.",
    education_label: "EDUCATION",
    degree: "Bachelor's Degree in Administration and Public Policy",
    university: "Universidad Autónoma de San Luis Potosí",
    skill_label: "KEY SKILLS",
    skill_1: "Administrative support and document management",
    skill_2: "Scheduling and agenda management",
    skill_3: "Problem-solving",
    skill_4: "Data entry and records organization",
    languages_label: "LANGUAGES",
    spanish: "Spanish", spanish_level: "Native",
    english: "English", english_level: "Professional working proficiency",
    contact_label: "CONTACT",
    contact_heading: "Let's connect<span class=\"heading-period\">.</span>",
    contact_body: "If you would like to learn more about my professional experience, I would be happy to connect.",
    phone: "PHONE",
    save_pdf: "Save this profile as PDF",
    back_top: "Back to top ↑"
  };
  const translatable = [...document.querySelectorAll("[data-i18n]")];
  const spanish = new Map(translatable.map(node => [node, node.innerHTML]));
  const toggle = document.getElementById("languageSwitch");
  let language = "es";
  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    for (const node of translatable) {
      const key = node.dataset.i18n;
      node.innerHTML = next === "en" ? translations[key] ?? spanish.get(node) : spanish.get(node);
    }
    toggle.innerHTML = (next === "es" ? "EN" : "ES") + " <span aria-hidden=\"true\">↗</span>";
    toggle.setAttribute("aria-label", next === "es" ? "Switch to English" : "Cambiar a español");
    toggle.setAttribute("title", next === "es" ? "Switch to English" : "Cambiar a español");
    document.title = next === "es" ? "Melissa Lara Cruz · Perfil profesional" : "Melissa Lara Cruz · Professional Profile";
  }
  toggle?.addEventListener("click", () => setLanguage(language === "es" ? "en" : "es"));
  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("navigation");
  function closeMenu() {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", language === "es" ? "Abrir menú" : "Open menu");
  }
  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? (language === "es" ? "Cerrar menú" : "Close menu") : (language === "es" ? "Abrir menú" : "Open menu"));
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
  document.getElementById("printButton")?.addEventListener("click", () => window.print());
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
