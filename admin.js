// ========== API URL ==========
const API_URL = 'http://localhost:3000/api/advantages';
const HERO_API_URL = 'http://localhost:3000/api/hero';
const TEAM_API_URL = 'http://localhost:3000/api/team';
const DIRECTIONS_API_URL = 'http://localhost:3000/api/directions';
const VACANCIES_API_URL = 'http://localhost:3000/api/vacancies';

// ========== ИСХОДНЫЕ ДАННЫЕ ==========
const DEFAULT_DATA = [
    { id: 1, title: 'с 2008 года', text: 'создаем инструменты<br>для отельеров' },
    { id: 2, title: '300+', text: 'сотрудников в техотделе<br>и более 700 в компании' },
    { id: 3, title: '12 000+', text: 'клиентов работают с нами' },
    { id: 4, title: 'топ-50', text: 'в рейтинге работодателей hh.ru 2022-2024 гг.' },
    { id: 5, title: '>1,5 млн', text: 'гостей в месяц бронируют через TravelLine' },
    { id: 6, title: '300+', text: 'интеграций со сторонними сервисами' }
];

const DEFAULT_HERO = {
    title: 'Стабильно растем<br>и принимаем новые вызовы<br>TravelTech индустрии'
};

const DEFAULT_TEAM = {
    title: 'Любим и бережем свою команду',
    description: '300+ человек, которые вдохновляют своими достижениями',
    members: [
        { id: 1, name: 'Алексей Герасимов', position: 'СТО', photo: './Работа в TravelLine Tech_files/zjpczcqzikerwej1coy74ti6y7sb0y9d.png', telegram: '#', linkedin: '#' },
        { id: 2, name: 'Юра Костин', position: 'СРО', photo: './Работа в TravelLine Tech_files/rsx07xrge1cz7ql0gw8j4ao3fca0z7x0.png', telegram: '#', linkedin: '#' },
        { id: 3, name: 'Ваня Потехин', position: 'старший руководитель проектов', photo: './Работа в TravelLine Tech_files/72mm50028lx702598mu3o564qcbtlxn4.png', telegram: '#', linkedin: '#' },
        { id: 4, name: 'Костя Дмитриев', position: 'специалист по информационным системам', photo: './Работа в TravelLine Tech_files/elpr32rtbthyfs96gyv3e4kl16tasho9.png', telegram: '#', linkedin: '#' },
        { id: 5, name: 'Лена Мочалова', position: 'руководитель HR-отдела', photo: './Работа в TravelLine Tech_files/mbplaw8v373gdxkb6ii9saccgsjghzlv.png', telegram: '#', linkedin: '#' },
        { id: 6, name: 'Гасан Агаев', position: 'руководитель проекта', photo: './Работа в TravelLine Tech_files/lp4sz53lkyjv8p483o9kt4ikpe2xs8pk.png', telegram: '#', linkedin: '#' },
        { id: 7, name: 'Таня Глазырина', position: 'продуктовый дизайнер', photo: './Работа в TravelLine Tech_files/9m2v37w8bboj9zsr34ohimbzboi2rbej.png', telegram: '#', linkedin: '#' },
        { id: 8, name: 'Саша Очеев', position: 'инженер-программист', photo: './Работа в TravelLine Tech_files/aqkl6fr9dl37nsbgbck489ltq9gaxjwj.png', telegram: '#', linkedin: '#' },
        { id: 9, name: 'Настя Волкова', position: 'руководитель отдела дизайна', photo: './Работа в TravelLine Tech_files/3ht0rqk20ni0ox2vb7uqafl4b4d43h2w.png', telegram: '#', linkedin: '#' },
        { id: 10, name: 'Оля Рядова', position: 'руководитель отдела аналитики', photo: './Работа в TravelLine Tech_files/lp0xwm3awi8twhvqovjfzlca8eboax6u.png', telegram: '#', linkedin: '#' },
        { id: 11, name: 'Женя Гермогенов', position: 'старший руководитель проектов', photo: './Работа в TravelLine Tech_files/dmjg21l9b1oqioh6y3bsdmsuo73wwasu.png', telegram: '#', linkedin: '#' },
        { id: 12, name: 'Игорь Егошин', position: 'старший инженер-программист', photo: './Работа в TravelLine Tech_files/0g73x2njkshf9qmujyub0hjp9zl87v1w.png', telegram: '#', linkedin: '#' },
        { id: 13, name: 'Настя Ягодарова', position: 'руководитель проекта', photo: './Работа в TravelLine Tech_files/dh9piduru4t57xz8i7aqpjt6nxysrwc9.png', telegram: '#', linkedin: '#' }
    ]
};

const DEFAULT_DIRECTIONS = [
    { id: 1, title: 'Backend', technologies: [{ name: 'RabbitMQ', icon: './Работа в TravelLine Tech_files/hz.png' }, { name: 'Tarantool', icon: './Работа в TravelLine Tech_files/tarantool.png' }, { name: 'C#', icon: './Работа в TravelLine Tech_files/cs.png' }, { name: 'SQL', icon: './Работа в TravelLine Tech_files/sql.png' }, { name: 'Redis', icon: './Работа в TravelLine Tech_files/redis.png' }, { name: 'PostgreSQL', icon: './Работа в TravelLine Tech_files/postgresql.png' }, { name: 'ClickHouse', icon: './Работа в TravelLine Tech_files/clickhouse.png' }, { name: '.NET', icon: './Работа в TravelLine Tech_files/net.png' }], description: '<p>Разрабатываем мозг клиентских и платформенных сервисов компании</p><p>Что внутри:</p><ul><li>Проектирование архитектуры, разработка и поддержка серверной части веб-приложений на платформах .NET, .NET Core, .NET Framework</li><li>Работа с реляционными и нереляционными базами данных, проектирование и оптимизация структуры и запросов к БД</li><li>Проектирование и оптимизация быстрых, безопасных API</li><li>Внедрение и поддержка CI/CD процессов совместно с DevOps для автоматизации развертывания и тестирования</li><li>Обеспечение безопасности и отказоустойчивости сервисов на уровне приложения</li><li>Оптимизация архитектуры, кода приложений и баз данных под высокие нагрузки</li><li>Проектирование и обеспечение целостности данных при возможных инцидентах</li></ul><p>Хостим все в Российских дата-центрах на своем железе в приватном облаке на Hyper-V кластерах. Закладываем отказоустойчивость на всех уровнях от электропитания до веб-приложений. Для хостинга приложений используем IIS, Service Fabric, Kubernetes.</p>' },
    { id: 2, title: 'Frontend', technologies: [{ name: 'React 19', icon: './Работа в TravelLine Tech_files/react.png' }, { name: 'TypeScript', icon: './Работа в TravelLine Tech_files/typescript.png' }, { name: 'Webpack', icon: './Работа в TravelLine Tech_files/webpack.png' }, { name: 'Vite', icon: './Работа в TravelLine Tech_files/vite.png' }, { name: 'Jest', icon: './Работа в TravelLine Tech_files/jest.png' }, { name: 'Testing Library', icon: './Работа в TravelLine Tech_files/testing-library.png' }, { name: 'SASS', icon: './Работа в TravelLine Tech_files/sass.png' }], description: '<p>Основной проект B2C фронтенда - форма бронирования, который используют порядка миллиона пользователей в месяц.</p><p>В настоящий момент параллельно происходят два процесса:<br>1) поддержка и развитие проекта по бизнес-запросам<br>2) переписывание проекта с AngularJS на современный стек, основанный на React.</p><p>Каждым из этих процессов занимается отдельная команда. Основная задача «команды переписывания» - постепенно разработать новую версию проекта, при этом каждый релиз сохраняя существующее поведение интерфейса. В этом ей помогает команда тестировщиков и внушительный объём скриншотных E2E-тестов.</p><p>Разрабатываем новую платформу Reactor на базе TypeScript + React. Она позволит продуктовым командам быстро разрабатывать и поддерживать современные SPA фронтенд приложения с качественным UX.</p>' },
    { id: 3, title: 'Тестирование', technologies: [{ name: 'Swagger', icon: './Работа в TravelLine Tech_files/swagger.png' }, { name: 'GIT', icon: './Работа в TravelLine Tech_files/git.png' }, { name: 'Java', icon: './Работа в TravelLine Tech_files/java.png' }, { name: 'Selenium', icon: './Работа в TravelLine Tech_files/selenium.png' }, { name: 'TestNG', icon: './Работа в TravelLine Tech_files/testng.png' }, { name: 'Test IT', icon: './Работа в TravelLine Tech_files/testit.png' }, { name: 'Fiddler', icon: './Работа в TravelLine Tech_files/fiddler.png' }, { name: 'Jenkins', icon: './Работа в TravelLine Tech_files/jenkins.png' }, { name: 'Postman', icon: './Работа в TravelLine Tech_files/postman.png' }, { name: 'Stack', icon: './Работа в TravelLine Tech_files/stack.png' }], description: '<p>В команде тестирования внимательные и дотошные специалисты, которые стремятся к совершенству во всем. Если для тебя качество - это приоритет в работе и личной жизни, то мы сработаемся.</p><p>Нам важно влиять на продукт, с которым мы работаем. Инженеры тестирования участвуют на всех этапах создания продуктов: от анализа требований до деплоя в продакшен. У каждого есть возможность вносить свои предложения и улучшать процессы.</p><p>Стэк инструментов:</p><ul><li>Java + Selenoid + Maven + TestNG + Git</li><li>Jenkins</li><li>Test IT</li><li>Postman/Swagger</li><li>Fiddler</li><li>ELK</li></ul>' },
    { id: 4, title: 'Проектирование', technologies: [{ name: 'Figma', icon: './Работа в TravelLine Tech_files/figma.png' }], description: '<p>Команда проектирует интерфейсы и опыт взаимодействия отельеров и путешественников с нашими компонентами. Каждый проектировщик закреплен за проектом и работает с полным погружением.</p><p>Поддерживаем две дизайн-системы: Reactor – для личного кабинета отельера, Alma - для инструментов, которыми пользуются путешественники.</p><p>В работе используем Figma, Яндекс.Взгляд для тестов на пользователях, Appcues для онбординга и баннеров в ЛК. Периодически ездим в отели, чтобы понять как процессы происходят в реальной жизни и радуемся, когда удается упростить процессы.</p><p>Организуем митапы, ездим на дизайн-события и ведем телеграм-канал.<br>Еще мы увлеченные люди – коллекционеры, строители своих домов, музыканты, спортсмены и любители вписаться в челленджи.</p><p>Вдохновляемся красотой и порядком. Хорошие интерфейсы спасут мир!</p>' },
    { id: 5, title: 'Аналитика', technologies: [{ name: 'Python', icon: './Работа в TravelLine Tech_files/python.png' }, { name: 'MS SQL Server', icon: './Работа в TravelLine Tech_files/mssql.png' }, { name: 'ClickHouse', icon: './Работа в TravelLine Tech_files/clickhouse.png' }], description: '<ul><li>Аналитики упорядочивают хаос и развеивают неопределенность. Помогают командам принимать решения на основе данных.</li><li>Шарят в матане и анализе (от простых до аб-тестов с bootstrap и causal inference)</li><li>Программируют на Python + VSCode/JupiterNotebook</li><li>Строят отчеты Power BI + Metabase (и в Excel тоже)</li><li>Выгружают данные с помощью MS SQL + ClickHouse</li></ul><p>А еще мы разрабатываем собственные аналитические инструменты (например, у нас есть свои системы логирования действий пользователей)</p>' },
    { id: 6, title: 'Безопасность', technologies: [], description: '<p>Мы обеспечиваем безопасность сложных систем и продуктов, гарантируя надежную защиту для клиентов и сотрудников TravelLine. Наши решения соответствуют высоким стандартам информационной безопасности (ИБ). Применяем смелые и инновационные подходы.</p><p>Что делаем внутри компании:</p><ul><li>разрабатываем и внедряем требования ИБ</li><li>консультируем и обучаем по тематике ИБ</li><li>проводим аудиты на соответствие принятым мерам по защите информации</li><li>расследуем инциденты ИБ</li><li>анализируем защищенность разрабатываемых в компании проектов</li></ul><p>Наши технологии:</p><p>Секретны настолько, что мы не можем о них рассказать.</p>' }
];

const DEFAULT_VACANCIES = [
    { id: 1, title: 'Senior Site Reliability Engineer (SRE)', location: 'удаленно', link: 'https://hh.ru/vacancy/132518636' },
    { id: 2, title: 'Аналитик данных (финансовое направление)', location: 'удаленно', link: 'https://kazan.hh.ru/vacancy/132543183' },
    { id: 3, title: 'Python Developer AI team (в офис, г. Йошкар-Ола)', location: 'Йошкар-Ола', link: 'https://kazan.hh.ru/vacancy/133500742' }
];

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentData = [];
let teamData = { title: '', description: '', members: [] };
let directionsData = [];
let vacanciesData = [];

// ========== ЗАГРУЗКА ==========
async function loadData() {
    try {
        const response = await fetch(API_URL);
        currentData = await response.json();
        renderItems(currentData);

        try {
            const heroResponse = await fetch(HERO_API_URL);
            const hero = await heroResponse.json();
            document.getElementById('hero-title-input').value = hero.title || '';
        } catch (e) {
            document.getElementById('hero-title-input').value = DEFAULT_HERO.title;
        }

        await loadTeamData();
        await loadDirectionsData();
        await loadVacanciesData();

    } catch (error) {
        console.error('Ошибка загрузки:', error);
        showStatus('Не удалось загрузить данные с сервера', 'error');
        currentData = DEFAULT_DATA;
        renderItems(currentData);
        document.getElementById('hero-title-input').value = DEFAULT_HERO.title;
    }
}

// ========== ПРЕИМУЩЕСТВА ==========
function renderItems(items) {
    const container = document.getElementById('items-container');
    container.innerHTML = '';
    
    items.forEach((item, index) => {
        const block = document.createElement('div');
        block.className = 'item-block';
        block.innerHTML = `
            <span class="item-number">#${index + 1}</span>
            <div class="item-fields">
                <div class="field-group">
                    <label for="title-${item.id}">Заголовок (Title)</label>
                    <input type="text" id="title-${item.id}" value="${escapeHtml(item.title)}" data-id="${item.id}" data-field="title">
                </div>
                <div class="field-group">
                    <label for="text-${item.id}">Описание (Text)</label>
                    <input type="text" id="text-${item.id}" value="${escapeHtml(item.text)}" data-id="${item.id}" data-field="text">
                </div>
            </div>
        `;
        container.appendChild(block);
    });
}

function collectDataFromForm() {
    const inputs = document.querySelectorAll('#items-container input');
    const itemsMap = new Map();

    inputs.forEach(input => {
        const id = parseInt(input.dataset.id);
        const field = input.dataset.field;
        const value = input.value;

        if (!itemsMap.has(id)) {
            const original = currentData.find(d => d.id === id);
            itemsMap.set(id, { id: id, title: '', text: original ? original.text : '' });
        }
        
        const item = itemsMap.get(id);
        if (field === 'title') item.title = value;
        else if (field === 'text') item.text = value;
    });

    return Array.from(itemsMap.values());
}

// ========== КОМАНДА ==========
async function loadTeamData() {
    try {
        const response = await fetch(TEAM_API_URL);
        const data = await response.json();
        teamData = data;
        
        document.getElementById('team-title-input').value = data.title || '';
        document.getElementById('team-desc-input').value = data.description || '';
        
        renderTeamMembers(data.members || []);
    } catch (error) {
        console.error('Ошибка загрузки команды:', error);
        teamData = DEFAULT_TEAM;
        document.getElementById('team-title-input').value = DEFAULT_TEAM.title;
        document.getElementById('team-desc-input').value = DEFAULT_TEAM.description;
        renderTeamMembers(DEFAULT_TEAM.members);
    }
}

function renderTeamMembers(members) {
    const container = document.getElementById('team-members-container');
    container.innerHTML = '';
    
    if (!members || members.length === 0) {
        container.innerHTML = '<div class="empty-members">Нет участников. Нажмите "Добавить участника".</div>';
        return;
    }
    
    members.forEach((member, index) => {
        const block = document.createElement('div');
        block.className = 'team-member-block';
        block.dataset.index = index;
        block.innerHTML = `
            <div class="field-group" style="min-width: 100px;">
                <label>Имя</label>
                <input type="text" class="team-member-name" value="${escapeHtml(member.name)}" placeholder="Имя">
            </div>
            <div class="field-group" style="min-width: 100px;">
                <label>Должность</label>
                <input type="text" class="team-member-position" value="${escapeHtml(member.position)}" placeholder="Должность">
            </div>
            <div class="field-group" style="min-width: 80px;">
                <label>Фото (URL)</label>
                <input type="text" class="team-member-photo" value="${escapeHtml(member.photo)}" placeholder="URL фото">
            </div>
            <div class="field-group" style="min-width: 80px;">
                <label>Telegram</label>
                <input type="text" class="team-member-telegram" value="${escapeHtml(member.telegram)}" placeholder="Ссылка">
            </div>
            <div class="field-group" style="min-width: 80px;">
                <label>LinkedIn</label>
                <input type="text" class="team-member-linkedin" value="${escapeHtml(member.linkedin)}" placeholder="Ссылка">
            </div>
            <button class="btn-remove" onclick="removeTeamMember(${index})">✕</button>
        `;
        container.appendChild(block);
    });
}

function addTeamMember() {
    const members = teamData.members || [];
    members.push({
        id: Date.now() + Math.random(),
        name: 'Новый участник',
        position: 'Должность',
        photo: './Работа в TravelLine Tech_files/tl-logo.svg',
        telegram: '#',
        linkedin: '#'
    });
    renderTeamMembers(members);
}

function removeTeamMember(index) {
    if (!confirm('Удалить этого участника?')) return;
    const members = teamData.members || [];
    members.splice(index, 1);
    renderTeamMembers(members);
}

function collectTeamData() {
    const blocks = document.querySelectorAll('.team-member-block');
    const members = [];
    
    blocks.forEach(block => {
        const name = block.querySelector('.team-member-name').value;
        const position = block.querySelector('.team-member-position').value;
        const photo = block.querySelector('.team-member-photo').value;
        const telegram = block.querySelector('.team-member-telegram').value;
        const linkedin = block.querySelector('.team-member-linkedin').value;
        
        if (name.trim()) {
            members.push({
                id: Date.now() + Math.random(),
                name: name.trim(),
                position: position.trim() || 'Должность',
                photo: photo.trim() || './Работа в TravelLine Tech_files/tl-logo.svg',
                telegram: telegram.trim() || '#',
                linkedin: linkedin.trim() || '#'
            });
        }
    });
    
    return {
        title: document.getElementById('team-title-input').value || 'Любим и бережем свою команду',
        description: document.getElementById('team-desc-input').value || '300+ человек, которые вдохновляют своими достижениями',
        members: members
    };
}

function toggleTeamEditor() {
    const editor = document.getElementById('team-editor');
    if (editor.style.display === 'none') {
        editor.style.display = 'block';
        loadTeamData();
        console.log('🔄 Загружаем данные команды...');
    } else {
        editor.style.display = 'none';
    }
}

// ========== НАПРАВЛЕНИЯ ==========
async function loadDirectionsData() {
    try {
        const response = await fetch(DIRECTIONS_API_URL);
        directionsData = await response.json();
        renderDirections(directionsData);
    } catch (error) {
        console.error('Ошибка загрузки направлений:', error);
        directionsData = DEFAULT_DIRECTIONS;
        renderDirections(DEFAULT_DIRECTIONS);
    }
}

function renderDirections(directions) {
    const container = document.getElementById('directions-container');
    container.innerHTML = '';
    
    if (!directions || directions.length === 0) {
        container.innerHTML = '<div class="empty-members">Нет направлений. Нажмите "Добавить направление".</div>';
        return;
    }
    
    directions.forEach((direction, index) => {
        const block = document.createElement('div');
        block.className = 'direction-block';
        block.dataset.index = index;
        
        let techsStr = '';
        if (direction.technologies && direction.technologies.length > 0) {
            techsStr = direction.technologies.map(t => t.name + '|' + t.icon).join(', ');
        }
        
        block.innerHTML = `
            <div class="direction-header">
                <span class="item-number">#${index + 1}</span>
                <button class="btn-remove-direction" onclick="removeDirection(${index})">✕ Удалить</button>
            </div>
            <div class="field-group">
                <label>Название направления</label>
                <input type="text" class="direction-title" value="${escapeHtml(direction.title)}" placeholder="Название">
            </div>
            <div class="field-group">
                <label>Технологии (формат: Название|путь_к_иконке, через запятую)</label>
                <input type="text" class="direction-technologies" value="${escapeHtml(techsStr)}" placeholder="React 19|./img/react.png, TypeScript|./img/ts.png">
                <div style="font-size: 11px; color: #718096; margin-top: 4px;">💡 Пример: React 19|./Работа в TravelLine Tech_files/react.png, TypeScript|./Работа в TravelLine Tech_files/typescript.png</div>
            </div>
            <div class="field-group">
                <label>Описание (HTML)</label>
                <textarea class="direction-description" rows="5" placeholder="Введите описание...">${escapeHtml(direction.description)}</textarea>
            </div>
        `;
        container.appendChild(block);
    });
}

function addDirection() {
    directionsData.push({
        id: Date.now() + Math.random(),
        title: 'Новое направление',
        technologies: [],
        description: '<p>Описание направления</p>'
    });
    renderDirections(directionsData);
}

function removeDirection(index) {
    if (!confirm('Удалить это направление?')) return;
    directionsData.splice(index, 1);
    renderDirections(directionsData);
}

function collectDirectionsData() {
    const blocks = document.querySelectorAll('#directions-container .direction-block');
    const directions = [];
    
    blocks.forEach(block => {
        const title = block.querySelector('.direction-title').value;
        const techsStr = block.querySelector('.direction-technologies').value;
        const description = block.querySelector('.direction-description').value;
        
        const technologies = [];
        if (techsStr.trim()) {
            techsStr.split(',').forEach(item => {
                const parts = item.trim().split('|');
                if (parts.length === 2 && parts[0].trim()) {
                    technologies.push({
                        name: parts[0].trim(),
                        icon: parts[1].trim()
                    });
                }
            });
        }
        
        if (title.trim()) {
            directions.push({
                id: Date.now() + Math.random(),
                title: title.trim(),
                technologies: technologies,
                description: description || '<p>Описание направления</p>'
            });
        }
    });
    
    return directions;
}

function toggleDirectionsEditor() {
    const editor = document.getElementById('directions-editor');
    if (editor.style.display === 'none') {
        editor.style.display = 'block';
        loadDirectionsData();
        console.log('🔄 Загружаем данные направлений...');
    } else {
        editor.style.display = 'none';
    }
}

// ========== ВАКАНСИИ ==========
async function loadVacanciesData() {
    try {
        const response = await fetch(VACANCIES_API_URL);
        vacanciesData = await response.json();
        renderVacancies(vacanciesData);
    } catch (error) {
        console.error('❌ Ошибка загрузки вакансий:', error);
        vacanciesData = DEFAULT_VACANCIES;
        renderVacancies(DEFAULT_VACANCIES);
    }
}

function renderVacancies(vacancies) {
    const container = document.getElementById('vacancies-container');
    container.innerHTML = '';
    
    if (!vacancies || vacancies.length === 0) {
        container.innerHTML = '<div class="empty-members">Нет вакансий. Нажмите "Добавить вакансию".</div>';
        return;
    }
    
    vacancies.forEach((vacancy, index) => {
        const block = document.createElement('div');
        block.className = 'vacancy-block';
        block.dataset.index = index;
        
        block.innerHTML = `
            <div class="field-group" style="min-width: 200px;">
                <label>Название вакансии</label>
                <input type="text" class="vacancy-title" value="${escapeHtml(vacancy.title)}" placeholder="Название вакансии">
            </div>
            <div class="field-group" style="min-width: 150px;">
                <label>Формат работы</label>
                <input type="text" class="vacancy-location" value="${escapeHtml(vacancy.location)}" placeholder="удаленно / Йошкар-Ола">
            </div>
            <div class="field-group" style="min-width: 200px;">
                <label>Ссылка на HH.ru</label>
                <input type="url" class="vacancy-link" value="${escapeHtml(vacancy.link)}" placeholder="https://hh.ru/vacancy/...">
            </div>
            <button class="btn-remove" onclick="removeVacancy(${index})">✕</button>
        `;
        container.appendChild(block);
    });
}

function addVacancy() {
    vacanciesData.push({
        id: Date.now() + Math.random(),
        title: 'Новая вакансия',
        location: 'удаленно',
        link: '#'
    });
    renderVacancies(vacanciesData);
}

function removeVacancy(index) {
    if (!confirm('Удалить эту вакансию?')) return;
    vacanciesData.splice(index, 1);
    renderVacancies(vacanciesData);
}

function collectVacanciesData() {
    const blocks = document.querySelectorAll('#vacancies-container .vacancy-block');
    const vacancies = [];
    
    blocks.forEach(block => {
        const title = block.querySelector('.vacancy-title').value;
        const location = block.querySelector('.vacancy-location').value;
        const link = block.querySelector('.vacancy-link').value;
        
        if (title.trim()) {
            vacancies.push({
                id: Date.now() + Math.random(),
                title: title.trim(),
                location: location.trim() || 'удаленно',
                link: link.trim() || '#'
            });
        }
    });
    
    return vacancies;
}

function toggleVacanciesEditor() {
    const editor = document.getElementById('vacancies-editor');
    if (editor.style.display === 'none') {
        editor.style.display = 'block';
        loadVacanciesData();
        console.log('🔄 Загружаем вакансии...');
    } else {
        editor.style.display = 'none';
    }
}

// ========== СОХРАНЕНИЕ ==========
async function saveData() {
    const dataToSave = collectDataFromForm();
    const heroTitle = document.getElementById('hero-title-input').value;
    const teamDataToSave = collectTeamData();
    const directionsDataToSave = collectDirectionsData();
    const vacanciesDataToSave = collectVacanciesData();
    
    try {
        // Сохраняем преимущества
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSave),
        });
        const result = await response.json();
        if (!result.success) {
            showStatus('❌ Ошибка сохранения преимуществ', 'error');
            return;
        }

        // Сохраняем Hero
        const heroResponse = await fetch(HERO_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: heroTitle }),
        });
        const heroResult = await heroResponse.json();
        if (!heroResult.success) {
            showStatus('❌ Ошибка сохранения заголовка', 'error');
            return;
        }

        // Сохраняем команду
        const teamResponse = await fetch(TEAM_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(teamDataToSave),
        });
        const teamResult = await teamResponse.json();
        if (!teamResult.success) {
            showStatus('❌ Ошибка сохранения команды', 'error');
            return;
        }

        // Сохраняем направления
        const directionsResponse = await fetch(DIRECTIONS_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(directionsDataToSave),
        });
        const directionsResult = await directionsResponse.json();
        if (!directionsResult.success) {
            showStatus('❌ Ошибка сохранения направлений', 'error');
            return;
        }

        // Сохраняем вакансии
        const vacanciesResponse = await fetch(VACANCIES_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vacanciesDataToSave),
        });
        const vacanciesResult = await vacanciesResponse.json();
        
        if (vacanciesResult.success) {
            vacanciesData = vacanciesDataToSave;
            showStatus('✅ Все данные успешно сохранены! Обновите главную страницу.', 'success');
            currentData = dataToSave;
            teamData = teamDataToSave;
            directionsData = directionsDataToSave;
        } else {
            showStatus('❌ Ошибка сохранения вакансий', 'error');
        }

    } catch (error) {
        console.error('Ошибка сохранения:', error);
        showStatus('❌ Не удалось соединиться с сервером.', 'error');
    }
}

// ========== СБРОС ==========
async function resetToDefault() {
    if (!confirm('Вы уверены, что хотите сбросить все изменения?')) return;

    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(DEFAULT_DATA),
        });

        await fetch(HERO_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(DEFAULT_HERO),
        });

        await fetch(TEAM_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(DEFAULT_TEAM),
        });

        await fetch(DIRECTIONS_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(DEFAULT_DIRECTIONS),
        });

        await fetch(VACANCIES_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(DEFAULT_VACANCIES),
        });

        currentData = DEFAULT_DATA;
        renderItems(currentData);
        document.getElementById('hero-title-input').value = DEFAULT_HERO.title;
        teamData = DEFAULT_TEAM;
        document.getElementById('team-title-input').value = DEFAULT_TEAM.title;
        document.getElementById('team-desc-input').value = DEFAULT_TEAM.description;
        renderTeamMembers(DEFAULT_TEAM.members);
        directionsData = DEFAULT_DIRECTIONS;
        renderDirections(DEFAULT_DIRECTIONS);
        vacanciesData = DEFAULT_VACANCIES;
        renderVacancies(DEFAULT_VACANCIES);
        
        showStatus('🔄 Данные сброшены к исходным значениям.', 'success');

    } catch (error) {
        console.error('Ошибка сброса:', error);
        showStatus('❌ Не удалось соединиться с сервером.', 'error');
    }
}

// ========== ВСПОМОГАТЕЛЬНЫЕ ==========
function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function showStatus(message, type = 'success') {
    const el = document.getElementById('status-message');
    el.style.display = 'block';
    el.textContent = message;
    el.className = 'status-message';
    if (type === 'error') el.classList.add('error');
    else if (type === 'success') el.classList.add('success');
    
    clearTimeout(window.statusTimeout);
    window.statusTimeout = setTimeout(() => {
        el.style.display = 'none';
    }, 5000);
}

// ========== ЗАПУСК ==========
document.addEventListener('DOMContentLoaded', loadData);