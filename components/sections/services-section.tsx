import { BookOpen, MessagesSquare, Users } from "lucide-react";
import { siteContent } from "../../data/config";
import type { ServiceGroup, ServiceItem } from "../../data/types";
import { Card, SectionHeading } from "../ui";

function joinText(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" - ");
}

function serviceMeta(item: ServiceItem) {
  return joinText([item.organization, item.role, item.year]);
}

function ServiceIcon({ icon }: { icon?: ServiceGroup["icon"] }) {
  const Icon = icon === "BookOpen" ? BookOpen : icon === "MessagesSquare" ? MessagesSquare : Users;

  return <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.8} />;
}

export function ServicesSection() {
  const { services } = siteContent;

  if (services.length === 0) {
    return null;
  }

  return (
    <section aria-label="Services">
      <SectionHeading
        description="Selected service across committees, journals, and conferences."
        title="Services"
      />

      <Card>
        <div className="grid gap-card lg:grid-cols-3">
          {services.map((group) => (
            <div
              className="border-b border-academic-border pb-card last:border-b-0 last:pb-0 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-card lg:last:border-r-0 lg:last:pr-0 dark:border-academic-dark-border"
              key={group.id}
            >
              <div className="mb-card flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-academic-border bg-academic-accent-subtle text-academic-accent dark:border-academic-dark-border dark:bg-academic-dark-accent-soft dark:text-academic-dark-accent">
                  <ServiceIcon icon={group.icon} />
                </div>
                <h3 className="text-lg font-semibold text-academic-text dark:text-academic-dark-text">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li className="flex gap-3" key={item.id}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-academic-accent dark:bg-academic-dark-accent" />
                    <div>
                      <p className="text-sm font-semibold text-academic-text dark:text-academic-dark-text">
                        {item.title}
                      </p>
                      {serviceMeta(item) ? (
                        <p className="mt-1 text-sm text-academic-muted dark:text-academic-dark-muted">
                          {serviceMeta(item)}
                        </p>
                      ) : null}
                      {item.description ? (
                        <p className="mt-2 text-sm text-academic-muted dark:text-academic-dark-muted">
                          {item.description}
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
