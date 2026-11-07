function Skills() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Про мене та Навички</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        Я — цілеспрямована студентка, яка захоплюється створенням вебзастосунків. 
        Активно вивчаю сучасні вебтехнології та маю велике бажання розвиватися в IT-сфері.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li className="hover:text-purple-600 transition-colors">Розуміння принципів роботи Інтернету та клієнт-серверної архітектури</li>
        <li className="hover:text-purple-600 transition-colors">Тайм-менеджмент та вміння працювати в команді</li>
        <li className="hover:text-purple-600 transition-colors">Англійська мова на рівні читання технічної документації</li>
      </ul>
    </section>
  );
}

export default Skills;