import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Reviews from './components/Reviews.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичний вибір теми за часом доби: 07:00-21:00 - light, інакше - dark
  useEffect(() => {
    const hours = new Date().getHours();
    setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');
  }, []);

  // Ручне перемикання
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 p-4 font-sans text-gray-800 md:p-8 dark:bg-gray-900 dark:text-gray-100">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex justify-end">
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-purple-500 px-4 py-2 font-semibold text-purple-600 hover:bg-purple-500 hover:text-white dark:text-purple-300"
            >
              {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
            </button>
          </div>

          <Header />
          <Skills />
          <Education />
          <Reviews />
          <Footer />
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

export default App;