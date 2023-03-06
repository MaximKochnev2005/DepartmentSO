import {Markup} from "telegraf";

export const mainMenu = Markup.keyboard([
    ['Перечень услуг'],
    ['Презентация'],
    ['Предложения'],
    ['Отзывы'],
    ['Замечания выполненным работам']
]).oneTime().resize();

export const servicesMenu = Markup.keyboard([
    ['BIM-моделирование'],
    ['ОВ и ВК'],
    ['Электроснабжение'],
    ['Отбор проб и проведение хим. анализов'],
    ['Техническое обслуживание средств обеспеч'],
    ['Другое..'],
    ['Назад']
]).oneTime().resize();

export const applicationsMenu = Markup.keyboard([
    ['Подать заявку'],
    ['Назад']
]).oneTime().resize();

export const remarkMenu = Markup.keyboard([
    ['Замечание'],
    ['Назад']
]).oneTime().resize();

export const reviewMenu = Markup.keyboard([
    ['Оставить отзыв'],
    ['Назад']
]).oneTime().resize();

export const offerMenu = Markup.keyboard([
    ['Оставить предложение'],
    ['Назад']
]).oneTime().resize();

export const obbk = Markup.keyboard([
    ['Техническое обслуживание и ремонт теплоп'],
    ['Тепловизионный контроль систем теплоснаб'],
    ['Монтаж/демонтаж трубопроводов из полипр'],
    ['Гидравлическое испытание трубопроводов'],
    ['Другое...'],
    ['Назад']
]).oneTime().resize();

export const electricity = Markup.keyboard([
    ['Тепловизионный контроль силового оборудо'],
    ['Аварийно-восстановительные работы в сетя'],
    ['ТО электрооборудования и сетей электросн'],
    ['ТР электрооборудования и сетей электросн'],
    ['Другое....'],
    ['Назад']
]).oneTime().resize();

export const chemistry = Markup.keyboard([
    ['Отбор проб и проведение хим.анализов'],
    ['Замер точки росы газов'],
    ['Замер содержания кислорода в газе'],
    ['Назад']
]).oneTime().resize();

export const other1 = Markup.keyboard([
    ['Слаботочные сети'],
    ['Обслуживание спец. оборудования'],
    ['АСУТП'],
    ['Технологическое хозяйство'],
    ['Дополнительно'],
    ['Назад']
]).oneTime().resize();

export const other2 = Markup.keyboard([
    ['Техническое обслуживание насосного обору'],
    ['Ремонт сантехнических изделий'],
    ['Аварийно-восстановительные работы'],
    ['ТО вентиляционных систем, чиллеров, сис'],
    ['Назад']
]).oneTime().resize();

export const other3 = Markup.keyboard([
    ['ТО электрооборудования и сетей электросно'],
    ['ТР электрооборудования и сетей электросно'],
    ['Назад']
]).oneTime().resize();

export const weekWebs = Markup.keyboard([
    ['ТО громкоговорящей связи'],
    ['ТО систем видеонаблюдения'],
    ['ТО систем контроля учета доступа'],
    ['ТО газоанализаторов'],
    ['ТО сетей связи'],
    ['Назад']
]).oneTime().resize();

export const equipmentService = Markup.keyboard([
    ['ТО котельных'],
    ['ТО водоподготовительных установок'],
    ['ТО градирен'],
    ['ТО редукционных установок'],
    ['ТО холодильных машин'],
    ['ТО компрессорных станций'],
    ['Назад']
]).oneTime().resize();

export const asu = Markup.keyboard([
    ['ТО систем диспетчеризации'],
    ['Обслуживание, настройка,'],
    ['Модернизация систем'],
    ['Назад']
]).oneTime().resize();

export const techEco = Markup.keyboard([
    ['Техническое обслуживание и ремонт'],
    ['Назад']
]).oneTime().resize();

export const additional = Markup.keyboard([
    ['Контроль работы водоподготовительных уст'],
    ['Системы вентиляции и кондиционирования'],
    ['Систем электроснабжения'],
    ['Назад']
]).oneTime().resize();

export const backToStart = Markup.keyboard([
    ['Назад']
]).oneTime().resize();