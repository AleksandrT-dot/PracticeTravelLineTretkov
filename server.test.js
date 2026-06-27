const request = require('supertest');
const fs = require('fs');
const path = require('path');

const DATA_FILE = './data.json';
const BACKUP_FILE = './data.backup.json';

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

function loadDataFromFile() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const rawData = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(rawData);
        }
    } catch (error) {
        console.error('❌ Ошибка загрузки:', error);
    }
    return null;
}

function saveDataToFile(data) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error('❌ Ошибка сохранения:', error);
        return false;
    }
}

// ========== ДЕФОЛТНЫЕ ДАННЫЕ ==========
const DEFAULT_DATA = {
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
        members: []
    },
    directions: [],
    vacancies: []
};

// ========== ПОДГОТОВКА ==========

beforeAll(() => {
    if (fs.existsSync(DATA_FILE)) {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        fs.writeFileSync(BACKUP_FILE, data, 'utf8');
    }
    saveDataToFile(JSON.parse(JSON.stringify(DEFAULT_DATA)));
});

afterEach(() => {
    saveDataToFile(JSON.parse(JSON.stringify(DEFAULT_DATA)));
});

afterAll(() => {
    if (fs.existsSync(BACKUP_FILE)) {
        const data = fs.readFileSync(BACKUP_FILE, 'utf8');
        fs.writeFileSync(DATA_FILE, data, 'utf8');
        fs.unlinkSync(BACKUP_FILE);
    } else {
        saveDataToFile(DEFAULT_DATA);
    }
});

// ========== ТЕСТЫ ХРАНИЛИЩА ==========

describe('📁 Хранилище данных', () => {
    test('Файл data.json должен существовать', () => {
        expect(fs.existsSync(DATA_FILE)).toBe(true);
    });

    test('Данные должны загружаться из файла', () => {
        const data = loadDataFromFile();
        expect(data).toBeDefined();
        expect(data).toHaveProperty('advantages');
        expect(data).toHaveProperty('hero');
        expect(data).toHaveProperty('team');
        expect(data).toHaveProperty('directions');
        expect(data).toHaveProperty('vacancies');
    });

    test('При поврежденном JSON должна возвращаться ошибка', () => {
        fs.writeFileSync(DATA_FILE, 'это не json{');
        const data = loadDataFromFile();
        expect(data).toBeNull();
    });
});

// ========== ТЕСТЫ API ==========

describe('🌐 API Эндпоинты', () => {
    let app;

    beforeEach(() => {
        jest.resetModules();
        app = require('./server');
    });

    // GET-тесты
    test('GET /api/advantages должен возвращать массив', async () => {
        const response = await request(app).get('/api/advantages');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('GET /api/hero должен возвращать объект с title', async () => {
        const response = await request(app).get('/api/hero');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('title');
    });

    test('GET /api/team должен возвращать объект', async () => {
        const response = await request(app).get('/api/team');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('title');
        expect(response.body).toHaveProperty('description');
        expect(response.body).toHaveProperty('members');
    });

    test('GET /api/directions должен возвращать массив', async () => {
        const response = await request(app).get('/api/directions');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('GET /api/vacancies должен возвращать массив', async () => {
        const response = await request(app).get('/api/vacancies');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('GET /api/all-data должен возвращать все данные', async () => {
        const response = await request(app).get('/api/all-data');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('advantages');
        expect(response.body).toHaveProperty('hero');
        expect(response.body).toHaveProperty('team');
        expect(response.body).toHaveProperty('directions');
        expect(response.body).toHaveProperty('vacancies');
    });

    // POST-тесты
    test('POST /api/advantages должен обновлять данные', async () => {
        const newData = [
            { id: 1, title: 'Обновленный', text: 'Описание' }
        ];
        const response = await request(app)
            .post('/api/advantages')
            .send(newData);
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        
        const getResponse = await request(app).get('/api/advantages');
        expect(getResponse.body[0].title).toBe('Обновленный');
    });

    test('POST /api/hero должен обновлять заголовок', async () => {
        const response = await request(app)
            .post('/api/hero')
            .send({ title: 'Новый заголовок' });
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        
        const getResponse = await request(app).get('/api/hero');
        expect(getResponse.body.title).toBe('Новый заголовок');
    });

    test('POST /api/advantages с неверным форматом должен возвращать 400', async () => {
        const response = await request(app)
            .post('/api/advantages')
            .send({ notArray: true });
        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });

    test('POST /api/hero с неверным форматом должен возвращать 400', async () => {
        const response = await request(app)
            .post('/api/hero')
            .send({ wrongField: 'test' });
        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });
});

// ========== ТЕСТЫ СУЩНОСТЕЙ ==========

describe('📋 Преимущества', () => {
    let data;

    beforeEach(() => {
        data = loadDataFromFile();
    });

    test('Должно быть 6 преимуществ', () => {
        expect(data.advantages.length).toBe(6);
    });

    test('Каждое преимущество должно иметь id, title и text', () => {
        data.advantages.forEach(item => {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('title');
            expect(item).toHaveProperty('text');
        });
    });

    test('Можно добавить новое преимущество', () => {
        const newAdv = { id: 999, title: 'Тест', text: 'Описание' };
        data.advantages.push(newAdv);
        saveDataToFile(data);
        
        const updated = loadDataFromFile();
        expect(updated.advantages.length).toBe(7);
        expect(updated.advantages.find(a => a.id === 999)).toBeDefined();
    });
});

// ========== ТЕСТЫ ГРАНИЧНЫХ СЛУЧАЕВ ==========

describe('⚠️ Граничные случаи', () => {
    let data;

    beforeEach(() => {
        data = loadDataFromFile();
    });

    test('Пустое поле title должно сохраняться', () => {
        data.advantages.push({ id: 888, title: '', text: 'Описание' });
        saveDataToFile(data);
        
        const updated = loadDataFromFile();
        const found = updated.advantages.find(a => a.id === 888);
        expect(found.title).toBe('');
    });

    test('HTML-теги в описании должны сохраняться', () => {
        const html = '<p>Тест <b>жирный</b></p>';
        data.advantages[0].text = html;
        saveDataToFile(data);
        
        const updated = loadDataFromFile();
        expect(updated.advantages[0].text).toBe(html);
    });

    test('Пустой массив technologies должен сохраняться', () => {
        data.directions = [{ id: 1, title: 'Test', technologies: [], description: '<p>Test</p>' }];
        saveDataToFile(data);
        
        const updated = loadDataFromFile();
        expect(updated.directions[0].technologies).toEqual([]);
    });
});

console.log('🧪 Запуск тестов...');