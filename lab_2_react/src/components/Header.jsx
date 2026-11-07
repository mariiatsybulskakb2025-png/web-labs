function Header() {
  return (
    <header className="bg-purple-100 p-6 rounded-lg text-center shadow-sm mb-6">
      <h1 className="text-3xl font-bold text-purple-900 mb-2">Марія Цибульська</h1>
      <p className="text-gray-700">
        Контактна інформація:{" "}
        <a href="mailto:mariia.tsybulmska.kb.2025@lpnu.ua" className="text-purple-600 hover:underline">
          mariia.tsybulmska.kb.2025@lpnu.ua
        </a>
      </p>
    </header>
  );
}

export default Header;