console.log('#54. JavaScript homework example file');
import fs from 'fs/promises';

/*
 * #1
 * Технічне завдання для розробки функції "writeFileAsync"
 */
async function writeFileAsync(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log('Файл успішно записано', `Назва файлу: ${filename}`);
  } catch (error) {
    console.error('Помилка при записі файлу:', error);
    throw error;
  }
}

/*
 * #2
 * Технічне завдання для розробки функції "readFileAsync"
 */
async function readFileAsync(filename) {
  try {
    const content = await fs.readFile(filename, 'utf-8');
    console.log('Файл успішно прочитано:', content);
    return content;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Файл не існує:', filename);
    } else {
      console.error('Помилка при читанні файлу:', error);
    }
    throw error;
  }
}

/*
 * #3
 * Технічне завдання для розробки функції "deleteFileAsync"
 */
async function deleteFileAsync(filename) {
  try {
    await fs.unlink(filename);
    console.log('Файл успішно видалено');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Файл не існує:', filename);
    } else {
      console.error('Помилка при видаленні файлу:', error);
    }
    throw error;
  }
}

async function main() {
  console.log('\n--- Завдання #1: Запис ---');
  try {
    await writeFileAsync('example.txt', 'Привіт, це тестовий файл!');
  } catch (error) {
    console.error('Не вдалося виконати завдання #1');
  }

  console.log('\n--- Завдання #2: Читання ---');
  try {
    await readFileAsync('example.txt');
  } catch (error) {
    console.error('Не вдалося виконати завдання #2');
  }

  console.log('\n--- Завдання #3: Видалення з таймером ---');
  try {
    await writeFileAsync('sometext.txt', 'Привіт, я тестовий файл');
    console.log('Запис завершено, у тебе є 10 секунд, щоб подивитися на файл...' + "Вміст файлу");

    await new Promise((resolve) => setTimeout(resolve, 10000));

    console.log('Час вийшов! Видаляємо файл');
    await deleteFileAsync('sometext.txt');

    console.log('Пробуємо видалити файл ще раз (щоб побачити помилку)...');
    await deleteFileAsync('sometext.txt');
  } catch (error) {
    console.log('(Це очікувана помилка в кінці тесту, все добре)');
  }
}

main();

export { writeFileAsync, readFileAsync, deleteFileAsync };