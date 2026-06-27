const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// ========== РАБОТА С JSON-ФАЙЛОМ ==========
const DATA_FILE = './data.json';

// Функция для загрузки данных из файла
function loadDataFromFile() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const rawData = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(rawData);
        }
    } catch (error) {
        console.error('❌ Ошибка загрузки данных из файла:', error);
    }
    return null;
}

// Функция для сохранения данных в файл
function saveDataToFile(data) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
        console.log('✅ Данные сохранены в файл');
        return true;
    } catch (error) {
        console.error('❌ Ошибка сохранения данных:', error);
        return false;
    }
}

// Загружаем данные из файла
let data = loadDataFromFile();

// Если файл пустой или поврежден - создаем дефолтные данные
if (!data) {
    console.log('📝 Создаем дефолтные данные...');
    data = {
        advantages: [
            { id: 1, title: 'с 2008 года', text: 'создаем инструменты<br>для отельеров' },
            { id: 2, title: '300+', text: 'сотрудников в техотделе<br>и более 700 в компании' },
            { id: 3, title: '12 000+', text: 'клиентов работают с нами' },
            { id: 4, title: 'топ-50', text: 'в рейтинге работодателей hh.ru 2022-2024 гг.' },
            { id: 5, title: '>1,5 млн', text: 'гостей в месяц бронируют через TravelLine' },
            { id: 6, title: '300+', text: 'интеграций со сторонними сервисами' }
        ],
        hero: {
            title: 'Стабильно растем<br>и принимаем новые вызовы<br>TravelTech индустрии'
        },
        team: {
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
        },
        directions: [
            { 
                id: 1, 
                title: 'Backend', 
                technologies: [
                    { name: 'RabbitMQ', icon: './Работа в TravelLine Tech_files/hz.png' },
                    { name: 'Tarantool', icon: './Работа в TravelLine Tech_files/tarantool.png' },
                    { name: 'C#', icon: './Работа в TravelLine Tech_files/cs.png' },
                    { name: 'SQL', icon: './Работа в TravelLine Tech_files/sql.png' },
                    { name: 'Redis', icon: './Работа в TravelLine Tech_files/redis.png' },
                    { name: 'PostgreSQL', icon: './Работа в TravelLine Tech_files/postgresql.png' },
                    { name: 'ClickHouse', icon: './Работа в TravelLine Tech_files/clickhouse.png' },
                    { name: '.NET', icon: './Работа в TravelLine Tech_files/net.png' }
                ], 
                description: '<p>Разрабатываем мозг клиентских и платформенных сервисов компании</p><p>Что внутри:</p><ul><li>Проектирование архитектуры, разработка и поддержка серверной части веб-приложений на платформах .NET, .NET Core, .NET Framework</li><li>Работа с реляционными и нереляционными базами данных, проектирование и оптимизация структуры и запросов к БД</li><li>Проектирование и оптимизация быстрых, безопасных API</li><li>Внедрение и поддержка CI/CD процессов совместно с DevOps для автоматизации развертывания и тестирования</li><li>Обеспечение безопасности и отказоустойчивости сервисов на уровне приложения</li><li>Оптимизация архитектуры, кода приложений и баз данных под высокие нагрузки</li><li>Проектирование и обеспечение целостности данных при возможных инцидентах</li></ul><p>Хостим все в Российских дата-центрах на своем железе в приватном облаке на Hyper-V кластерах. Закладываем отказоустойчивость на всех уровнях от электропитания до веб-приложений. Для хостинга приложений используем IIS, Service Fabric, Kubernetes.</p>' 
            },
            { 
                id: 2, 
                title: 'Frontend', 
                technologies: [
                    { name: 'React 19', icon: './Работа в TravelLine Tech_files/react.png' },
                    { name: 'TypeScript', icon: './Работа в TravelLine Tech_files/typescript.png' },
                    { name: 'Webpack', icon: './Работа в TravelLine Tech_files/webpack.png' },
                    { name: 'Vite', icon: './Работа в TravelLine Tech_files/vite.png' },
                    { name: 'Jest', icon: './Работа в TravelLine Tech_files/jest.png' },
                    { name: 'Testing Library', icon: './Работа в TravelLine Tech_files/testing-library.png' },
                    { name: 'SASS', icon: './Работа в TravelLine Tech_files/sass.png' }
                ], 
                description: '<p>Основной проект B2C фронтенда - форма бронирования, который используют порядка миллиона пользователей в месяц.</p><p>В настоящий момент параллельно происходят два процесса:<br>1) поддержка и развитие проекта по бизнес-запросам<br>2) переписывание проекта с AngularJS на современный стек, основанный на React.</p><p>Каждым из этих процессов занимается отдельная команда. Основная задача «команды переписывания» - постепенно разработать новую версию проекта, при этом каждый релиз сохраняя существующее поведение интерфейса. В этом ей помогает команда тестировщиков и внушительный объём скриншотных E2E-тестов.</p><p>Разрабатываем новую платформу Reactor на базе TypeScript + React. Она позволит продуктовым командам быстро разрабатывать и поддерживать современные SPA фронтенд приложения с качественным UX.</p>' 
            },
            { 
                id: 3, 
                title: 'Тестирование', 
                technologies: [
                    { name: 'Swagger', icon: './Работа в TravelLine Tech_files/swagger.png' },
                    { name: 'GIT', icon: './Работа в TravelLine Tech_files/git.png' },
                    { name: 'Java', icon: './Работа в TravelLine Tech_files/java.png' },
                    { name: 'Selenium', icon: './Работа в TravelLine Tech_files/selenium.png' },
                    { name: 'TestNG', icon: './Работа в TravelLine Tech_files/testng.png' },
                    { name: 'Test IT', icon: './Работа в TravelLine Tech_files/testit.png' },
                    { name: 'Fiddler', icon: './Работа в TravelLine Tech_files/fiddler.png' },
                    { name: 'Jenkins', icon: './Работа в TravelLine Tech_files/jenkins.png' },
                    { name: 'Postman', icon: './Работа в TravelLine Tech_files/postman.png' },
                    { name: 'Stack', icon: './Работа в TravelLine Tech_files/stack.png' }
                ], 
                description: '<p>В команде тестирования внимательные и дотошные специалисты, которые стремятся к совершенству во всем. Если для тебя качество - это приоритет в работе и личной жизни, то мы сработаемся.</p><p>Нам важно влиять на продукт, с которым мы работаем. Инженеры тестирования участвуют на всех этапах создания продуктов: от анализа требований до деплоя в продакшен. У каждого есть возможность вносить свои предложения и улучшать процессы.</p><p>Стэк инструментов:</p><ul><li>Java + Selenoid + Maven + TestNG + Git</li><li>Jenkins</li><li>Test IT</li><li>Postman/Swagger</li><li>Fiddler</li><li>ELK</li></ul>' 
            },
            { 
                id: 4, 
                title: 'Проектирование', 
                technologies: [
                    { name: 'Figma', icon: './Работа в TravelLine Tech_files/figma.png' }
                ], 
                description: '<p>Команда проектирует интерфейсы и опыт взаимодействия отельеров и путешественников с нашими компонентами. Каждый проектировщик закреплен за проектом и работает с полным погружением.</p><p>Поддерживаем две дизайн-системы: Reactor – для личного кабинета отельера, Alma - для инструментов, которыми пользуются путешественники.</p><p>В работе используем Figma, Яндекс.Взгляд для тестов на пользователях, Appcues для онбординга и баннеров в ЛК. Периодически ездим в отели, чтобы понять как процессы происходят в реальной жизни и радуемся, когда удается упростить процессы.</p><p>Организуем митапы, ездим на дизайн-события и ведем телеграм-канал.<br>Еще мы увлеченные люди – коллекционеры, строители своих домов, музыканты, спортсмены и любители вписаться в челленджи.</p><p>Вдохновляемся красотой и порядком. Хорошие интерфейсы спасут мир!</p>' 
            },
            { 
                id: 5, 
                title: 'Аналитика', 
                technologies: [
                    { name: 'Python', icon: './Работа в TravelLine Tech_files/python.png' },
                    { name: 'MS SQL Server', icon: './Работа в TravelLine Tech_files/mssql.png' },
                    { name: 'ClickHouse', icon: './Работа в TravelLine Tech_files/clickhouse.png' }
                ], 
                description: '<ul><li>Аналитики упорядочивают хаос и развеивают неопределенность. Помогают командам принимать решения на основе данных.</li><li>Шарят в матане и анализе (от простых до аб-тестов с bootstrap и causal inference)</li><li>Программируют на Python + VSCode/JupiterNotebook</li><li>Строят отчеты Power BI + Metabase (и в Excel тоже)</li><li>Выгружают данные с помощью MS SQL + ClickHouse</li></ul><p>А еще мы разрабатываем собственные аналитические инструменты (например, у нас есть свои системы логирования действий пользователей)</p>' 
            },
            { 
                id: 6, 
                title: 'Безопасность', 
                technologies: [], 
                description: '<p>Мы обеспечиваем безопасность сложных систем и продуктов, гарантируя надежную защиту для клиентов и сотрудников TravelLine. Наши решения соответствуют высоким стандартам информационной безопасности (ИБ). Применяем смелые и инновационные подходы.</p><p>Что делаем внутри компании:</p><ul><li>разрабатываем и внедряем требования ИБ</li><li>консультируем и обучаем по тематике ИБ</li><li>проводим аудиты на соответствие принятым мерам по защите информации</li><li>расследуем инциденты ИБ</li><li>анализируем защищенность разрабатываемых в компании проектов</li></ul><p>Наши технологии:</p><p>Секретны настолько, что мы не можем о них рассказать.</p>' 
            }
        ],
        vacancies: [
            { id: 1, title: 'Senior Site Reliability Engineer (SRE)', location: 'удаленно', link: 'https://hh.ru/vacancy/132518636' },
            { id: 2, title: 'Аналитик данных (финансовое направление)', location: 'удаленно', link: 'https://kazan.hh.ru/vacancy/132543183' },
            { id: 3, title: 'Python Developer AI team (в офис, г. Йошкар-Ола)', location: 'Йошкар-Ола', link: 'https://kazan.hh.ru/vacancy/133500742' }
        ]
    };
    saveDataToFile(data);
}

console.log('📁 Данные загружены из файла');

// ========== API РОУТЫ ==========

// Преимущества
app.get('/api/advantages', (req, res) => {
    res.json(data.advantages);
});

app.post('/api/advantages', (req, res) => {
    const newData = req.body;
    if (Array.isArray(newData)) {
        data.advantages = newData;
        if (saveDataToFile(data)) {
            res.json({ success: true, message: 'Данные успешно сохранены!' });
        } else {
            res.status(500).json({ success: false, message: 'Ошибка сохранения' });
        }
    } else {
        res.status(400).json({ success: false, message: 'Неверный формат данных' });
    }
});

// Hero
app.get('/api/hero', (req, res) => {
    res.json(data.hero);
});

app.post('/api/hero', (req, res) => {
    const newData = req.body;
    if (newData && typeof newData.title === 'string') {
        data.hero = newData;
        if (saveDataToFile(data)) {
            res.json({ success: true, message: 'Данные успешно сохранены!' });
        } else {
            res.status(500).json({ success: false, message: 'Ошибка сохранения' });
        }
    } else {
        res.status(400).json({ success: false, message: 'Неверный формат данных' });
    }
});

// Команда
app.get('/api/team', (req, res) => {
    res.json(data.team);
});

app.post('/api/team', (req, res) => {
    const newData = req.body;
    if (newData && typeof newData === 'object') {
        data.team = newData;
        if (saveDataToFile(data)) {
            res.json({ success: true, message: 'Данные успешно сохранены!' });
        } else {
            res.status(500).json({ success: false, message: 'Ошибка сохранения' });
        }
    } else {
        res.status(400).json({ success: false, message: 'Неверный формат данных' });
    }
});

// Направления
app.get('/api/directions', (req, res) => {
    res.json(data.directions);
});

app.post('/api/directions', (req, res) => {
    const newData = req.body;
    if (Array.isArray(newData)) {
        data.directions = newData;
        if (saveDataToFile(data)) {
            res.json({ success: true, message: 'Данные успешно сохранены!' });
        } else {
            res.status(500).json({ success: false, message: 'Ошибка сохранения' });
        }
    } else {
        res.status(400).json({ success: false, message: 'Неверный формат данных' });
    }
});

// Вакансии
app.get('/api/vacancies', (req, res) => {
    res.json(data.vacancies);
});

app.post('/api/vacancies', (req, res) => {
    const newData = req.body;
    if (Array.isArray(newData)) {
        data.vacancies = newData;
        if (saveDataToFile(data)) {
            res.json({ success: true, message: 'Данные успешно сохранены!' });
        } else {
            res.status(500).json({ success: false, message: 'Ошибка сохранения' });
        }
    } else {
        res.status(400).json({ success: false, message: 'Неверный формат данных' });
    }
});

// ========== ЗАПУСК СЕРВЕРА ==========
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
    console.log(`Данные хранятся в файле: ${DATA_FILE}`);
    console.log(`Загружено: ${data.advantages.length} преимуществ, ${data.team.members.length} членов команды, ${data.directions.length} направлений, ${data.vacancies.length} вакансий`);
});

module.exports = app;