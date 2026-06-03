export function Footer() {
  return (
    <footer className="bg-[#f5f5f5] dark:bg-zinc-900 py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex gap-6">
          <a href="/feedback" className="hover:underline">
            Обратная связь
          </a>

          <a href="/terms" className="hover:underline">
            Пользовательское соглашение
          </a>

          <a href="/privacy" className="hover:underline">
            Политика конфиденциальности
          </a>
        </div>

        <div className="text-center">
          © 2026 Murakami Web. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
