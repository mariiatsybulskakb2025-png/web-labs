import { useEffect, useState } from 'react';

const DELAY = 60000; // 1 хвилина (для перевірки можна тимчасово поставити 3000)

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // не показувати знову, якщо користувач уже закрив вікно під час сесії
    if (sessionStorage.getItem('contactClosed')) return;

    const timer = setTimeout(() => setIsOpen(true), DELAY);
    return () => clearTimeout(timer); // очищення таймера
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('contactClosed', '1');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 text-gray-800 shadow-2xl">
            <h2 className="mb-4 text-xl font-bold">Зворотний зв'язок</h2>

            {/* Замініть YOUR_ENDPOINT на ендпоінт вашої форми з formspree.io */}
            <form action="https://formspree.io/f/YOUR_ENDPOINT" method="POST" className="space-y-3">
              <label className="block font-medium">
                Ім'я
                <input type="text" name="name" required
                  className="mt-1 w-full rounded border border-gray-300 p-2" />
              </label>
              <label className="block font-medium">
                Email
                <input type="email" name="email" required
                  className="mt-1 w-full rounded border border-gray-300 p-2" />
              </label>
              <label className="block font-medium">
                Номер телефону
                <input type="tel" name="phone" required
                  className="mt-1 w-full rounded border border-gray-300 p-2" />
              </label>
              <label className="block font-medium">
                Повідомлення
                <textarea name="message" rows="4" required
                  className="mt-1 w-full rounded border border-gray-300 p-2" />
              </label>

              <div className="flex justify-end gap-2">
                <button type="submit"
                  className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
                  Надіслати
                </button>
                <button type="button" onClick={handleClose}
                  className="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
                  Закрити
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;