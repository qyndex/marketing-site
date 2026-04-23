-- Seed data for the marketing site
-- Realistic content that makes the template look great out of the box

-- 6 testimonials from credible-sounding people
INSERT INTO public.testimonials (author_name, author_role, company, content, featured, sort_order) VALUES
(
  'Sarah Chen',
  'VP of Engineering',
  'Meridian Labs',
  'We evaluated a dozen platforms before choosing this one. Within two weeks our deploy frequency doubled and incident count dropped by 40%. The onboarding was the smoothest I have seen in fifteen years of building software.',
  TRUE,
  1
),
(
  'Marcus Thompson',
  'CTO',
  'Stackflow',
  'The API ergonomics are best-in-class. Our team was productive on day one without reading a single page of documentation. That never happens.',
  TRUE,
  2
),
(
  'Elena Rodriguez',
  'Head of Product',
  'Canopy Health',
  'Our compliance team was skeptical, but the built-in audit trail and SOC 2 controls won them over. We went from proof-of-concept to production in three weeks.',
  TRUE,
  3
),
(
  'James Okafor',
  'Founder & CEO',
  'NovaPay',
  'As a two-person startup we needed something that would scale with us. Eighteen months and fifty engineers later, we have not outgrown it. The free tier alone saved us six figures in year one.',
  FALSE,
  4
),
(
  'Priya Patel',
  'Staff Engineer',
  'Luminary AI',
  'I was tired of gluing five different tools together. This replaced our CI runner, feature-flag service, and half our observability stack. Less moving parts means fewer 2 AM pages.',
  FALSE,
  5
),
(
  'David Kim',
  'Director of Platform',
  'Atlas Commerce',
  'Migration was painless. We moved 200 microservices over a holiday weekend with zero customer-facing downtime. Support responded to our questions in minutes, not days.',
  FALSE,
  6
);

-- 3 blog posts with real-looking content
INSERT INTO public.blog_posts (title, slug, excerpt, content, author_name, published_at) VALUES
(
  'Why We Built an Open Platform',
  'why-we-built-an-open-platform',
  'Closed ecosystems create lock-in. We chose a different path: open APIs, portable data, and no vendor lock-in. Here is why.',
  E'When we started building this platform, the first decision we made was that customers should never feel trapped.\n\n## The problem with lock-in\n\nMost developer tools make it easy to get data in and nearly impossible to get it out. Export buttons are buried, APIs are incomplete, and migration guides are conspicuously absent from documentation.\n\nWe have been on the receiving end of that experience, and it erodes trust faster than any feature can build it.\n\n## Our approach\n\nEvery byte of data you store with us is accessible through a documented, versioned API. We publish Terraform providers so your infrastructure-as-code story stays coherent. And if you decide to leave, our CLI can export everything into an open format in under a minute.\n\n## Open source where it matters\n\nOur SDK, CLI, and all client libraries are MIT-licensed. The deployment agent that runs in your infrastructure is source-available so your security team can audit it line by line.\n\nWe believe the best way to earn long-term customers is to make it trivially easy to stop being one. That confidence is what keeps people around.',
  'Alex Rivera',
  NOW() - INTERVAL '5 days'
),
(
  'Achieving SOC 2 Without Slowing Down',
  'soc-2-without-slowing-down',
  'Compliance does not have to kill velocity. We share the engineering patterns that let us ship daily while maintaining SOC 2 Type II certification.',
  E'Getting SOC 2 Type II certified while maintaining a daily release cadence sounds contradictory. Here is how we did it.\n\n## Automate the evidence\n\nThe biggest time sink in compliance is not implementing controls -- it is proving they work. We instrumented our CI/CD pipeline to emit audit events for every deploy, review, and access change. When auditors ask for evidence, we run a query instead of digging through spreadsheets.\n\n## Policy as code\n\nOur access-control policies live in version-controlled YAML files. Changes go through the same pull-request workflow as product code: peer review, automated tests, and a deploy pipeline. This means our policies are always current and always auditable.\n\n## Continuous monitoring\n\nInstead of point-in-time assessments, we run compliance checks on every commit. A failing check blocks the deploy, just like a failing test. This turns compliance from a quarterly fire drill into a background process.\n\n## The result\n\nOur last audit took three days instead of three weeks. Engineers spent less than two hours total answering questions. The rest was handled by automation.',
  'Jordan Lee',
  NOW() - INTERVAL '12 days'
),
(
  'From Monolith to Microservices: A Practical Guide',
  'monolith-to-microservices-guide',
  'The internet is full of microservices advice. Most of it is wrong for teams under fifty engineers. Here is what actually works.',
  E'Every architecture talk begins with "it depends." Here is what it depends on, specifically, and how to make the right call for your team.\n\n## When to stay monolithic\n\nIf your team is under ten engineers and your deploy pipeline takes less than fifteen minutes, a monolith is almost certainly the right choice. The coordination overhead of microservices will slow you down more than any scaling bottleneck.\n\n## The strangler fig pattern\n\nWhen you do need to extract a service, do it at the boundary where the pain is worst. Route traffic through a thin proxy, stand up the new service behind it, and migrate endpoints one at a time. Never do a big-bang rewrite.\n\n## Data ownership\n\nThe hardest part of microservices is not the network calls -- it is deciding which service owns which data. Get this wrong and you end up with a distributed monolith that is slower and harder to debug than what you started with.\n\n## Our recommended stack\n\nFor most teams, we recommend starting with a modular monolith, extracting services only when you hit a concrete scaling or team-autonomy bottleneck. Our platform supports both patterns equally well, so you can migrate incrementally without re-platforming.',
  'Sam Nakamura',
  NOW() - INTERVAL '20 days'
);

-- 5 waitlist entries (example signups)
INSERT INTO public.waitlist (email, name, company) VALUES
('early.adopter@techstartup.io', 'Riley Morgan', 'TechStartup'),
('dev.lead@enterprise.com', 'Casey Brooks', 'Enterprise Corp'),
('founder@newco.dev', 'Jordan Walsh', 'NewCo'),
('cto@scaleup.io', 'Taylor Reed', 'ScaleUp'),
('engineer@bigcorp.com', 'Avery Quinn', 'BigCorp');

-- 3 contact form submissions (example inquiries)
INSERT INTO public.contact_submissions (name, email, company, message) VALUES
(
  'Morgan Blake',
  'morgan@acmetech.com',
  'AcmeTech',
  'We are evaluating platforms for our engineering team of 30. Can you share details about your Enterprise plan and compliance certifications?'
),
(
  'Chris Donovan',
  'chris@retailnow.com',
  'RetailNow',
  'Interested in migrating from our current CI/CD solution. Do you offer migration assistance for teams on Jenkins?'
),
(
  'Pat Hernandez',
  'pat@finserv.io',
  'FinServ',
  'Our security team needs to review your SOC 2 report and penetration test results before we can proceed. Who should I contact?'
);
