import { useI18n } from '../../i18n';

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="relative z-10 py-8 text-center text-neutral-400 text-sm border-t border-neutral-100">
      <p>
        © {new Date().getFullYear()} Maxence Poizat. {t.footer.rights}
      </p>
      <p className="mt-2 text-xs text-neutral-300">{t.footer.made_with}</p>
    </footer>
  );
};

export default Footer;
