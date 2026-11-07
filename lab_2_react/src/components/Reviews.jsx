import { useEffect, useState } from 'react';

const VARIANT = 1; // <-- ЗАМІНІТЬ на свій номер варіанта

function Reviews() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then((response) => {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json();
      })
      .then((data) => setComments(data))
      .catch((err) => setError(err.message));
  }, []); // [] - виконати один раз при монтуванні

  return (
    <section className="mt-8">
      <h2 className="mb-4 border-b-2 border-purple-500 pb-1 text-2xl font-bold">
        Відгуки колишніх роботодавців
      </h2>

      {error && <p className="text-red-600">Не вдалося завантажити відгуки: {error}</p>}

      <div className="grid gap-4 md:grid-cols-2">
        {comments.map((c) => (
          <div
            key={c.id}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-purple-500 dark:border-gray-700 dark:bg-gray-800"
          >
            <h3 className="font-semibold">{c.name}</h3>
            <small className="text-gray-500 dark:text-gray-400">{c.email}</small>
            <p className="mt-2 text-sm">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;