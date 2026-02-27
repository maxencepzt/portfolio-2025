import { motion } from 'framer-motion';
import Card from '../common/Card';
import SectionHeader from '../common/SectionHeader';
import ContactLink from './ContactLink';
import { useI18n } from '../../i18n';
import posthog from 'posthog-js';

const ContactSection = () => {
  const { t } = useI18n();

  const contacts = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: 'Email',
      value: 'maxence.poizat@gmail.com',
      href: 'mailto:maxence.poizat@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'maxencepoizat',
      href: 'https://www.linkedin.com/in/maxencepoizat/',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: 'GitHub',
      value: 'maxencepzt',
      href: 'https://github.com/maxencepzt',
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      label: t.contact.website,
      value: 'maxencepzt.fr',
      href: 'https://maxencepzt.fr',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={t.contact.title} />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white text-xl mb-6">
                  ✉️
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {t.contact.cta_title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {t.contact.cta_desc_start}{' '}
                  <strong className="text-neutral-700">
                    {t.contact.cta_desc_strong}
                  </strong>{' '}
                  {t.contact.cta_desc_end}
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="mailto:maxence.poizat@gmail.com"
                  onClick={() => posthog.capture('contact_email_clicked')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-medium hover:bg-neutral-800 transition-all text-sm shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {t.contact.send_email}
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Contact Links */}
          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() =>
                  posthog.capture('contact_link_clicked', {
                    platform: contact.label,
                  })
                }
              >
                <ContactLink
                  icon={contact.icon}
                  label={contact.label}
                  value={contact.value}
                  href={contact.href}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-300 text-sm">
            💡 {t.contact.hint}{' '}
            <kbd className="px-2 py-1 bg-neutral-100 rounded text-neutral-500 text-xs font-mono">
              G
            </kbd>{' '}
            {t.contact.hint_end}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
