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

  return <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />;
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
        <div className="divide-y divide-academic-border lg:grid lg:grid-cols-3 lg:divide-x lg:divide-y-0 dark:divide-academic-dark-border">
          {services.map((group) => (
            <div
              className="py-card first:pt-0 last:pb-0 lg:px-card lg:py-0 lg:first:pl-0 lg:last:pr-0"
              key={group.id}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card border border-academic-border bg-academic-accent-subtle text-academic-accent dark:border-academic-dark-border dark:bg-academic-dark-accent-soft dark:text-academic-dark-accent">
                  <ServiceIcon icon={group.icon} />
                </div>
                <h3 className="text-base font-semibold text-academic-text dark:text-academic-dark-text">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li className="flex gap-2" key={item.id}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-academic-accent dark:bg-academic-dark-accent" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-academic-text dark:text-academic-dark-text">
                        {item.title}
                      </p>
                      {serviceMeta(item) ? (
                        <p className="mt-0.5 text-xs text-academic-muted dark:text-academic-dark-muted">
                          {serviceMeta(item)}
                        </p>
                      ) : null}
                      {item.description ? (
                        <p className="mt-1.5 text-sm text-academic-muted dark:text-academic-dark-muted">
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
