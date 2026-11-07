// ===== Налаштування =====
const VARIANT = 26;            // <-- ЗАМІНІТЬ на свій номер варіанта (номер у журналі)
const MODAL_DELAY = 60000;    // 1 хвилина (для перевірки можна тимчасово поставити 3000)

// ===== 1. Зберігання даних про ОС і браузер у localStorage =====
function saveSystemInfo() {	
    const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        vendor: navigator.vendor,
        language: navigator.language,
        languages: navigator.languages.join(', '),
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        hardwareConcurrency: navigator.hardwareConcurrency,
        screen: screen.width + 'x' + screen.height,
        viewport: window.innerWidth + 'x' + window.innerHeight
    };
    localStorage.setItem('systemInfo', JSON.stringify(info));
}

// Відображення ВСЬОГО вмісту localStorage у футері
function showStorageInfo() {
    const box = document.getElementById('storage-info');
    box.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let value = localStorage.getItem(key);
        try {
            const obj = JSON.parse(value);
            if (obj && typeof obj === 'object') {
                const list = document.createElement('ul');
                list.className = 'storage-list';
                for (const [k, v] of Object.entries(obj)) {
                    const li = document.createElement('li');
                    li.textContent = k + ': ' + v;
                    list.appendChild(li);
                }
                const title = document.createElement('strong');
                title.textContent = 'localStorage["' + key + '"]';
                box.append(title, list);
                continue;
            }
        } catch (e) { /* не JSON - виводимо як рядок */ }
        const p = document.createElement('p');
        p.textContent = key + ': ' + value;
        box.appendChild(p);
    }
}

// ===== 2. Коментарі з сервера (fetch + async/await) =====
async function loadComments() {
    const container = document.getElementById('reviews');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + VARIANT + '/comments');
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const comments = await response.json();
        container.innerHTML = '';
        comments.forEach(function (c) {
            const card = document.createElement('div');
            card.className = 'card';
            const name = document.createElement('h3');
            name.textContent = c.name;
            const email = document.createElement('small');
            email.textContent = c.email;
            const body = document.createElement('p');
            body.textContent = c.body;
            card.append(name, email, body);
            container.appendChild(card);
        });
    } catch (error) {
        container.textContent = 'Не вдалося завантажити відгуки: ' + error.message;
        console.error(error);
    }
}

// ===== 3. Модальне вікно через 1 хвилину =====
function initModal() {
    const modal = document.getElementById('modal');
    document.getElementById('modal-close').addEventListener('click', function () {
        modal.hidden = true;
    });
    setTimeout(function () {
        modal.hidden = false;
    }, MODAL_DELAY);
}

// ===== 4. Нічний/денний режим =====
function applyTheme(theme) {
    const btn = document.getElementById('theme-toggle');
    document.body.classList.toggle('dark-mode', theme === 'dark');
    btn.textContent = theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
}

function themeByTime() {
    const hours = new Date().getHours();      // 0-23
    return (hours >= 7 && hours < 21) ? 'light' : 'dark';   // день: 07:00-21:00
}

function initTheme() {
    applyTheme(themeByTime());                // автоматично за часом доби
    document.getElementById('theme-toggle').addEventListener('click', function () {
        const isDark = document.body.classList.contains('dark-mode');
        applyTheme(isDark ? 'light' : 'dark'); // ручне перемикання
    });
}

// ===== Запуск =====
saveSystemInfo();
showStorageInfo();
loadComments();
initModal();
initTheme();
