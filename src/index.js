import './styles.css';

// ---------------------------> Сделали импорт кода по изменению темы
import { bodyRef, switchRef } from './js/theme';

// ----------------------------> Сделали импорт данных
import menu from './menu.json'; 
console.table(menu);
// ----------------------------> Создали шабон разметки и импортировали его
import ltemsTemplete from './template/list.hbs';

// ----------------------------> Привязали наши данные к разметке
const cardOfMenu = ltemsTemplete(menu);

// ----------------------------> Привязали нашиу разметку к списку в HTML
const listRef = document.querySelector('.js-menu');
listRef.insertAdjacentHTML('beforeend', cardOfMenu);
