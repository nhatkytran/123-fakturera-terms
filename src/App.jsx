import { LanguageTranslationsProvider } from './shared/contexts';
import Layout from './features/layout';
import Terms from './features/terms';

/** App component. */
export default function App() {
  return (
    <LanguageTranslationsProvider>
      <Layout>
        <Terms />
      </Layout>
    </LanguageTranslationsProvider>
  );
}
