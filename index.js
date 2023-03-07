import {Scenes, Telegraf} from "telegraf";
import {BOT_TOKEN, channels} from "./config/config.js";
import {
    additional,
    applicationsMenu, asu, backToStart,
    chemistry,
    electricity, equipmentService,
    mainMenu,
    obbk,
    offerMenu, other1, other2, other3,
    remarkMenu,
    reviewMenu,
    servicesMenu, techEco, weekWebs
} from "./markup/markup.js";
import {message} from "telegraf/filters";
const path = "./static/Резидентам_Финиш_2.pdf"
import * as http from "http";

export const bot = new Telegraf(BOT_TOKEN);

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const host = 'localhost';
const port = 8000;

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

bot.context.db = {
    previous: '0',
    message_type: ''
}

bot.start((msg) => {
    msg.reply(`Привет, ${msg.message.chat.first_name}`)
    msg.reply(`Вот, что я умею`)
    msg.reply(`/Перечень услуг
/Презентация
/Предложения
/Отзывы
/Замечания выполненным работам`, mainMenu)
})

bot.hears('Перечень услуг', (msg) => {
    msg.db.previous = '0'
    msg.reply("/BIM-моделирование\n" +
        "/ОВ и ВК\n" +
        "/Электроснабжение\n" +
        "/Отбор проб и проведение хим. анализов\n" +
        "/Техническое обслуживание средств обеспечения пожарной безопасности\n" +
        "/Другое..", servicesMenu)
})

bot.hears('BIM-моделирование', (msg) => {
    msg.db.previous = '1'
    msg.reply("Описание:\n" +
        "Разработка BIM-модели по существующему объекту. Паспортизация объектов в BIM. Объединение с системой ТОиР",
        applicationsMenu)
})

bot.hears('ОВ и ВК', (msg) => {
    msg.db.previous = '1'
    msg.reply("1) Техническое обслуживание и ремонт теплопунктов и внутренних систем отопления\n" +
        "2) Тепловизионный контроль систем теплоснабжения и оборудования на наличие нагрева\n" +
        "3) Монтаж/демонтаж трубопроводов из полипропилена \n" +
        "4) Гидравлическое испытание трубопроводов", obbk)
})

bot.hears('Техническое обслуживание и ремонт теплоп', (msg) => {
    msg.db.previous = '2'
    msg.reply("Описание:\n" +
        "Поддержание в исправном состоянии трубопроводов и оборудования, строительных и других конструкции тепловых сетей, проводя своевременно их осмотр и ремонт; наблюдение за работой компенсаторов, опор, арматуры, дренажей, контрольно измерительных приборов и других элементов, своевременно устранять выявленные дефекты; своевременное удаление воздуха из теплопроводов, поддержание избыточного давления во всех точках сети и системах теплопотребления; осуществление контроля состояния тепловой изоляции и антикоррозионного покрытия с применением современных приборов и методов диагностики, а также путем осмотра, испытаний и других методов; ведение учета всех повреждений и выявленных дефектов по всем видам оборудования и анализ вызвавших их причин.", applicationsMenu)
})

bot.hears('Тепловизионный контроль систем теплоснаб', (msg) => {
    msg.db.previous = '2'
    msg.reply("Описание:\n" +
        "Дистанционное измерении тепловизором полей температур поверхностей и визуализация температурных аномалий для определения дефектов в виде областей повышенных теплопотерь, связанных с нарушением теплоизоляции, а также участков внутренних поверхностей, температура которых в процессе эксплуатации может опускаться ниже точки росы.", applicationsMenu)
})

bot.hears('Монтаж/демонтаж трубопроводов из полипр', (msg) => {
    msg.db.previous = '2'
    msg.reply("Сообщение не распознано - такой команды не существует 🤨")
})

bot.hears('Гидравлическое испытание трубопроводов', (msg) => {
    msg.db.previous = '2'
    msg.reply("Описание:\n" +
        "Проверка закрытой системы избыточным давлением, превышающим нормальное рабочее значение для определение прочности и герметичности системы", applicationsMenu)
})

bot.hears('Другое...', (msg) => {
    msg.db.previous = '2'
    msg.reply("5) Техническое обслуживание насосного оборудования\n" +
        "6) Ремонт сантехнических изделий\n" +
        "7) Аварийно-восстановительные работы\n" +
        "8) ТО вентиляционных систем, чиллеров, систем кондиционирования", other2)
})

bot.hears('Техническое обслуживание насосного обору', (msg) => {
    msg.db.previous = '2.1'
    msg.reply("Описание:\n" +
        "Комплекс работ по уходу за насосным оборудованием, проведение осмотров, систематическое наблюдение за их исправным состоянием, соблюдением правил эксплуатации и инструкций заводов-изготовителей, устранение мелких неисправностей, а также чистка, проверка, замена быстроизнашивающихся частей, наладка и регулировкой оборудования.", applicationsMenu)
})

bot.hears('Ремонт сантехнических изделий', (msg) => {
    msg.db.previous = '2.1'
    msg.reply("Описание:\n" +
        "Ремонт и обслуживание сантехнического оборудования (бойлеров, унитазов смесителей и др.)", applicationsMenu)
})

bot.hears('Аварийно-восстановительные работы', (msg) => {
    msg.db.previous = '2.1'
    msg.reply("Описание:\n" +
        "Комплекс работ по восстановлению работоспособности систем отопления, вентиляции, кондиционирования, водоснабжения и водоотведения.", applicationsMenu)
})

bot.hears('ТО вентиляционных систем, чиллеров, сис', (msg) => {
    msg.db.previous = '2.1'
    msg.reply("Сообщение не распознано - такой команды не существует 🤨")
})

bot.hears('Электроснабжение', (msg) => {
    msg.db.previous = '1'
    msg.reply("1) Тепловизионный контроль силового оборудования\n" +
        "2) Аварийно-восстановительные работы в сетях электроснабжения\n" +
        "3) ТО электрооборудования и сетей электроснабжения до 1000В\n" +
        "4) ТР электрооборудования и сетей электроснабжения до 1000В", electricity)
})

bot.hears('Тепловизионный контроль силового оборудо', (msg) => {
    msg.db.previous = '3'
    msg.reply("Дистанционное измерении тепловизором полей температур поверхностей и визуализация температурных аномалий для определение дефектов энергетического оборудования, которые выявляются без отключения электроустановки", applicationsMenu)
})

bot.hears('Аварийно-восстановительные работы в сетя', (msg) => {
    msg.db.previous = '3'
    msg.reply("Описание:\n" +
        "Комплекс работ по восстановлению работоспособности сетей электроснабжения", applicationsMenu)
})

bot.hears('ТО электрооборудования и сетей электросн', (msg) => {
    msg.db.previous = '3'
    msg.reply("Описание: \n" +
        "Проверка исправности подключенной к аппаратам электропроводки и сетей заземления;\n" +
        "наружный осмотр автоматических выключателей; ликвидация видимых повреждений;\n" +
        "затяжка крепежных деталей; проверка герметичности панелей, ящиков, проверка\n" +
        "исправности кожухов, рукояток. Удаление пыли.", applicationsMenu)
})

bot.hears('ТР электрооборудования и сетей электросн', (msg) => {
    msg.db.previous = '3'
    msg.reply("Описание:\n" +
        "частичная разборка аппаратов, чистка и промывка механических и контактных деталей,\n" +
        "выявление дефектных деталей и узлов, их ремонт или замена; опиловка, зачистка и\n" +
        "шлифовка всех контактных поверхностей проверка наконечников и выводов, а также\n" +
        "внутренней цепи аппарата; проверка и восстановление проходных изоляционных втулок\n" +
        "и других видов изоляции выводных концов; восстановление надписей и маркировки;\n" +
        "смазка шарнирных соединений. Контроль распределения нагрузки по фазам на вводе.", applicationsMenu)
})

bot.hears('Другое....', (msg) => {
    msg.db.previous = '3'
    msg.reply("1) ТО электрооборудования и сетей электроснабжения свыше 1000В\n" +
        "2) ТР электрооборудования и сетей электроснабжения свыше 1000В", other3)
})

bot.hears('ТО электрооборудования и сетей электросно', (msg) => {
    msg.db.previous = '3.1'
    msg.reply("Описание:\n" +
        "осмотры аппаратов высокого напряжения и преобразователей, осмотры концевых\n" +
        "кабельных муфт. Обнаруженные в ходе осмотра аппаратов незначительные\n" +
        "неисправности устраняются во время перерывов в работе питающих от них установок, а\n" +
        "для устранения технических неполадок, способных создать аварийные ситуации,\n" +
        "производятся отключения оборудования.", applicationsMenu)
})

bot.hears('ТР электрооборудования и сетей электросно', (msg) => {
    msg.db.previous = '3.1'
    msg.reply("Описание:\n" +
        "В объем текущего ремонта входят работы, выполняемые при техническом\n" +
        "обслуживании и, кроме того: для выключателей нагрузки, разъединителей,\n" +
        "заземляющих ножей и их приборов: разборка аппарата, ремонт или замена подвижных\n" +
        "контактов ,осей, шарниров, измерение и регулировка хода подвижной части, вжима\n" +
        "(хода) контактов, одновременности замыкания контактов , проверка и регулировка\n" +
        "механизма свободного расцепления, измерение и регулировка между бойком и рычагом\n" +
        "отключающего устройства, ремонт приводов и приводных механизмов, тяг и рычагов,\n" +
        "замена дефектных изоляторов, замена масла (при необходимости), смазка трущихся\n" +
        "частей привода и приводного механизма, проверка и ремонт сигнализации блокировок,\n" +
        "проверк проверка состояния контактов а и замена трансформаторов тока, измерение сопротивления постоянному току,\n" +
        "для трансформаторов тока и напряжения: чистка\n" +
        "изоляторов, проверка и ремонт присоединений шин первичной и проводов (кабелей)\n" +
        "вторичной цепи, проверка заземляющих болтов и шунтирующих перемычек. для\n" +
        "предохранителей : проверка целостности, соответствия схемам, действующим нагрузкам\n" +
        "и нормам, замена плавких вставок и токоограничивающих сопротивлений (при\n" +
        "необходимости), проверка и регулировка плотности вжима контактной части; для\n" +
        "силовых трансформаторов: чистка изоляторов, масломерных стекол, бака и крышки\n" +
        "трансформатора; подтяжка всех болтовых соединений; удаление грязи из расширителя;\n" +
        "проверка ,разборка и очистка (при необходимости) маслоуказателей; доливка масла в\n" +
        "трансформатор ,регулировка давления масла во вводах; проверка трансформаторов на герметичность (для газонаполненных).осмотр, чистка и ремонт охлаждающих\n" +
        "устройств; проверка состояния частей переключающих устройств, доступных к осмотру;\n" +
        "проверка положения по напряжению; ремонт заземляющей сети; проверка\n" +
        "термосифонных фильтров (при необходимости - замена сорбента); проверка приборов\n" +
        "контроля температуры и давления ( для газонаполненных трансформаторов);измерение\n" +
        "изоляции обмоток до и после ремонта.", applicationsMenu)
})

bot.hears('Отбор проб и проведение хим. анализов', (msg) => {
    msg.db.previous = '1'
    msg.reply("1) Отбор проб и проведение хим. анализов\n" +
        "2) Замер точки росы газов\n" +
        "3) Замер содержания кислорода в газе", chemistry)
})

bot.hears('Отбор проб и проведение хим.анализов', (msg) => {
    msg.db.previous = '4'
    msg.reply("Описание:\n" +
        "Оксид кремния, железо общее, хлор общий, хлор свободный, жесткость общая, мутность, электропроводность, рН", applicationsMenu)
})

bot.hears('Замер точки росы газов', (msg) => {
    msg.db.previous = '4'
    msg.reply("Описание:\n" +
        "Комплекс мероприятий по замеру точки росы газов", applicationsMenu)
})

bot.hears('Замер содержания кислорода в газе', (msg) => {
    msg.db.previous = '4'
    msg.reply("Описание:\n" +
        "Комплекс мероприятий по замеру содержания кислорода в газе", applicationsMenu)
})

bot.hears('Техническое обслуживание средств обеспеч', (msg) => {
    msg.db.previous = '1'
    msg.reply("Описание:\n" +
        "Замена и ремонт механических узлов, деталей и сборочных единиц технологических агрегатов. Программирование и наладка систем автоматики технологического процесса. (ПЛК, HMI-панели, блоки питания и управления, ЧРП, ремонт промышленной электроники) Проведение смазочных мероприятий.", applicationsMenu)
})

bot.hears('Другое..', (msg) => {
    msg.db.previous = '1'
    msg.reply("/Слаботочные сети\n" +
        "/Обслуживание спец. оборудования\n" +
        "/АСУТП\n" +
        "/Технологическое хозяйство", other1)
})

bot.hears('Слаботочные сети', (msg) => {
    msg.db.previous = '5'
    msg.reply("/ТО громкоговорящей связи\n" +
        "/ТО систем видеонаблюдения\n" +
        "/ТО систем контроля учета\n" +
        "доступа\n" +
        "/ТО газоанализаторов\n" +
        "/ТО сетей связи", weekWebs)
})

bot.hears('ТО громкоговорящей связи', (msg) => {
    msg.db.previous = '5.1'
    msg.reply("Описание:\n" +
        "Комплекс мероприятий по монтажу, наладке и обслуживанию систем\n" +
        "громкоговорящей связи", applicationsMenu)
})

bot.hears('ТО систем видеонаблюдения', (msg) => {
    msg.db.previous = '5.1'
    msg.reply("Описание:\n" +
        "Комплекс мероприятий по монтажу, наладке и обслуживанию систем видеонаблюдения", applicationsMenu)
})

bot.hears('ТО систем контроля учета доступа', (msg) => {
    msg.db.previous = '5.1'
    msg.reply("Описание:\n" +
        "Комплекс мероприятий по монтажу, наладке и обслуживанию систем контроля учета\n" +
        "доступа", applicationsMenu)
})

bot.hears('ТО газоанализаторов', (msg) => {
    msg.db.previous = '5.1'
    msg.reply("Описание:\n" +
        "Настройка, калибровка и испытание поверочными смесями", applicationsMenu)
})

bot.hears('ТО сетей связи', (msg) => {
    msg.db.previous = '5.1'
    msg.reply("Описание:\n" +
        "Комплекс мероприятий по монтажу, наладке и обслуживанию сетей связи", applicationsMenu)
})

bot.hears('Обслуживание спец. оборудования', (msg) => {
    msg.db.previous = '5'
    msg.reply("/ТО котельных\n" +
        "/ТО водоподготовительных установок\n" +
        "/ТО градирен\n" +
        "/ТО редукционных установок\n" +
        "/ТО холодильных машин\n" +
        "/ТО компрессорных станций", equipmentService)
})

bot.hears('ТО котельных', (msg) => {
    msg.db.previous = '5.2'
    msg.reply("Описание:\n" +
        "Комплекс технологических операций и организационных действий по поддержанию\n" +
        "работоспособности или исправности оборудования, проверка работоспособности\n" +
        "отдельных компонентов, калибровка сенсоров и датчиков, тестирование\n" +
        "функциональности всей системы, анализ причин выявленных неполадок с\n" +
        "последующей организацией работ по их ликвидации и предупреждению в будущем,\n" +
        "устранение неисправностей путем ремонта (восстановления) или замены частично или\n" +
        "полностью нефункционирующих компонентов, настройка оборудования, обновление\n" +
        "или установка нового программного обеспечения", applicationsMenu)
})

bot.hears('ТО водоподготовительных установок', (msg) => {
    msg.db.previous = '5.2'
    msg.reply("Описание:\n" +
        "Замена фильтрующего материала фильтров, режимная наладка", applicationsMenu)
})

bot.hears('ТО градирен', (msg) => {
    msg.db.previous = '5.2'
    msg.reply("Описание:\n" +
        "Внешний осмотр агрегата на предмет посторонних шумов или вибраций, проверку\n" +
        "температуры вентиляторов, их приводных электродвигателей при работе, проверку\n" +
        "сепараторов мусорозадерживающих решеток бака, их очистка, замена поврежденных\n" +
        "деталей (при необходимости), проверку наличие ила на дне бака, смазка подшипников\n" +
        "вала вентилятора, проверку состояния и натяжения приводных ремней вентилятора,\n" +
        "проверку и затяжку элементов крепления электродвигателей, других движущихся\n" +
        "частей, корпуса градирни, при необходимости – их ремонт", applicationsMenu)
})

bot.hears('ТО редукционных установок', (msg) => {
    msg.db.previous = '5.2'
    msg.reply("Описание:\n" +
        "Планируется...")
})

bot.hears('ТО холодильных машин', (msg) => {
    msg.db.previous = '5.2'
    msg.reply("Описание:\n" +
        "Внешний осмотр техники для выявления механических повреждений корпуса,\n" +
        "внутреннего объема, осмотр и проверка приборов автоматики, электроаппаратуры,\n" +
        "осветительных приборов, фурнитуры и затяжка соединений, проверка герметичности\n" +
        "установки, системы оттайки, компрессора, электродвигателя, работоспособности\n" +
        "холодильного оборудования и его составных частей, замена тепловых элементов;\n" +
        "устранение утечек масла и хладона, а также неисправностей, вызывающих\n" +
        "повышенный уровень шума работающего холодильного оборудования; дозаправка\n" +
        "систем холодильных машин маслом и хладагентом, установка технологических\n" +
        "фильтров; подтяжка ремней вентиляторов, креплений и приводов;", applicationsMenu)
})

bot.hears('ТО компрессорных станций', (msg) => {
    msg.db.previous = '5.2'
    msg.reply("Описание:\n" +
        "Наружный осмотр установки на отсутствие механических повреждений, посторонних\n" +
        "шумов и стуков, подтеков масла, проверка уровня масла, проверка показаний и работы\n" +
        "приборов и аппаратуры, проверка герметичности пневмосоединений, проверка\n" +
        "состояния радиатора, техническое обслуживание электроаппаратуры, питающего\n" +
        "провода и клеммных соединений, замена воздушного фильтра, проверка натяжения\n" +
        "ремней, замена масла, замена фильтра масляного, замена фильтра-маслоотделителя\n" +
        "(сепаратора), проверка клапанов предохранительных, проверка состояния ресивера.", applicationsMenu)
})

bot.hears('АСУТП', (msg) => {
    msg.db.previous = '5'
    msg.reply("ТО систем диспетчеризации\n" +
        "/Обслуживание, настройка,\n" +
        "ремонт систем автоматизации и\n" +
        "автоматики\n" +
        "/Модернизация систем\n" +
        "управления", asu)
})

bot.hears('ТО систем диспетчеризации', (msg) => {
    msg.db.previous = '5.3'
    msg.reply("Описание:\n" +
        "Мониторинг состояния и механическая очистка всех коммуникаций, проверка\n" +
        "работоспособности отдельных компонентов, калибровка сенсоров и датчиков,\n" +
        "тестирование функциональности всей системы, анализ причин выявленных неполадок с\n" +
        "последующей организацией работ по их ликвидации и предупреждению в будущем,\n" +
        "устранение неисправностей путем ремонта (восстановления) или замены частично или\n" +
        "полностью нефункционирующих компонентов, настройка оборудования, обновление\n" +
        "или установка нового программного обеспечения", applicationsMenu)
})

bot.hears('Обслуживание, настройка,', (msg) => {
    msg.db.previous = '5.3'
    msg.reply("Описание:\n" +
        "Технический осмотр (внешний осмотр, очистка от пыли, осмотр, очистка и поджатие\n" +
        "клемм, ревизия кинематики и ее смазка)\n" +
        ", проверка работоспособности, проверка по\n" +
        "контрольным точкам, выявление и устранение мелких дефектов, возникших в процессе\n" +
        "эксплуатации; снятие средств измерения и автоматизации для ремонта и своевременное представление их на проверку, поиск и устранение причин отказов\n" +
        "работы систем автоматизации и автоматики", applicationsMenu)
})

bot.hears('Модернизация систем', (msg) => {
    msg.db.previous = '5.3'
    msg.reply("Описание:\n" +
        "Планируется...", applicationsMenu)
})

bot.hears('Технологическое хозяйство', (msg) => {
    msg.db.previous = '5'
    msg.reply("/Техническое обслуживание и\n" +
        "ремонт", techEco)
})

bot.hears('Техническое обслуживание и ремонт', (msg) => {
    msg.db.previous = '5.4'
    msg.reply("Описание:\n" +
        "Замена и ремонт механических узлов, деталей и сборочных единиц технологических\n" +
        "агрегатов.\n" +
        "Программирование и наладка систем автоматики технологического процесса. (ПЛК,\n" +
        "HMI-панели, блоки питания и управления, ЧРП, ремонт промышленной электроники)\n" +
        "Проведение смазочных мероприятий.", techEco)
})

bot.hears('Дополнительно', (msg) => {
    msg.db.previous = '5'
    msg.reply("/Контроль работы водоподготовительных установок\n" +
        "/Системы вентиляции и кондиционирования\n" +
        "/Систем электроснабжения", additional)
})

bot.hears('Контроль работы водоподготовительных уст', (msg) => {
    msg.db.previous = '5.5'
    msg.reply("Описание:\n" +
        "• Замер электропроводности\n" +
        "• Замер рН\n" +
        "• Замер жесткость общая\n" +
        "• Замер мутность\n" +
        "• Замер точки росы газов\n" +
        "• Замер содержания кислорода в газе", applicationsMenu)
})

bot.hears('Системы вентиляции и кондиционирования', (msg) => {
    msg.db.previous = '5.5'
    msg.reply("Описание:\n" +
        "• Замер эффективности производительности вентиляционного оборудования и систем\n" +
        "кондиционирования\n" +
        "• Диагностика вентиляционного оборудования и систем кондиционирования\n" +
        "• Тепловизионный контроль теплообменников, шкафов управления", applicationsMenu)
})

bot.hears('Систем электроснабжения', (msg) => {
    msg.db.previous = '5.5'
    msg.reply("Описание:\n" +
        "• Тепловизионный контроль силового оборудования", applicationsMenu)
})

bot.hears('Презентация', (msg) => {
    msg.reply("Презентация ДСО")
    msg.telegram.sendDocument(msg.message.chat.id, {source: path})
    msg.telegram.sendChatAction(msg.message.chat.id,"upload_document")
})

bot.hears('Предложения', (msg) => {
    msg.db.previous = '0'
    msg.reply("Здесь вы можете оставить свои предложения по улучшению работы", offerMenu)
})

bot.hears('Оставить предложение', (msg) => {
    msg.db.previous = '0'
    msg.db.message_type = "offer"
    msg.reply("Оставьте свое предложение здесь и мы его обязательно прочтем")
})

bot.hears('Отзывы', (msg) => {
    msg.db.previous = '0'
    msg.reply("Оставьте свой отзыв здесь и мы его обязательно прочтем", reviewMenu)
})

bot.hears('Оставить отзыв', (msg) => {
    msg.db.previous = '0'
    msg.db.message_type = "review"
    msg.reply("Оставьте отзыв прямо сейчас!", reviewMenu)
})

bot.hears('Замечания выполненным работам', (msg) => {
    msg.db.previous = '0'
    msg.reply("Есть какие-то замечания по выполненной работе? " +
        "Напишите об этом здесь, и мы сделаем все для их исправления!", remarkMenu)
})

bot.hears('Замечание', (msg) => {
    msg.db.previous = '0'
    msg.db.message_type = "remark"
    msg.reply("Оставь своё замечание прямо здесь!", remarkMenu)
})

bot.hears('Подать заявку', (msg) => {
    msg.db.previous = '0'
    msg.db.message_type = "application"
    msg.reply("Подайте заявку прямо сейчас!\n" +
    "Пожалуйста укажите в заявке:\n"+
    "1. Название компании\n"+
    "2. Контактные данные\n"+
    "3. Описание заявки")
})

bot.hears('Назад', (msg) => {
    let mark
    let text
    switch (msg.db.previous) {
        case '0':
            text = "/Перечень услуг\n" +
                "/Презентация\n" +
                "/Предложения\n" +
                "/Отзывы\n" +
                "/Замечания выполненным работам\n"
            mark = mainMenu
            break

        case '1':
            msg.db.previous = '0'
            text = "/BIM-моделирование\n" +
                "/ОВ и ВК\n" +
                "/Электроснабжение\n" +
                "/Отбор проб и проведение хим. анализов\n" +
                "/Техническое обслуживание средств обеспечения пожарной безопасности\n" +
                "/Другое.."
            mark = servicesMenu
            break

        case '2':
            msg.db.previous = '1'
            text = "1) Техническое обслуживание и ремонт теплопунктов и внутренних систем отопления\n" +
            "2) Тепловизионный контроль систем теплоснабжения и оборудования на наличие нагрева\n" +
            "3) Монтаж/демонтаж трубопроводов из полипропилена \n" +
            "4) Гидравлическое испытание трубопроводов"
            mark = obbk
            break

        case '2.1':
            msg.db.previous = '2'
            text = "5) Техническое обслуживание насосного оборудования\n" +
                "6) Ремонт сантехнических изделий\n" +
                "7) Аварийно-восстановительные работы\n" +
                "8) ТО вентиляционных систем, чиллеров, систем кондиционирования"
            mark = other2
            break

        case '3':
            msg.db.previous = '1'
            text = "1) Тепловизионный контроль силового оборудования\n" +
                "2) Аварийно-восстановительные работы в сетях электроснабжения\n" +
                "3) ТО электрооборудования и сетей электроснабжения до 1000В\n" +
                "4) ТР электрооборудования и сетей электроснабжения до 1000В"
            mark = electricity
            break

        case '3.1':
            msg.db.previous = '3'
            text = "1) ТО электрооборудования и сетей электроснабжения свыше 1000В\n" +
                "2) ТР электрооборудования и сетей электроснабжения свыше 1000В"
            mark = other3
            break

        case '4':
            msg.db.previous = '1'
            text = "1) Отбор проб и проведение хим. анализов\n" +
                "2) Замер точки росы газов\n" +
                "3) Замер содержания кислорода в газе"
            mark = chemistry
            break

        case '5':
            msg.db.previous = '1'
            text = "/Слаботочные сети\n" +
                "/Обслуживание спец. оборудования\n" +
                "/АСУТП\n" +
                "/Технологическое хозяйство"
            mark = other1
            break

        case '5.1':
            msg.db.previous = '5'
            text = "/ТО громкоговорящей связи\n" +
                "/ТО систем видеонаблюдения\n" +
                "/ТО систем контроля учета\n" +
                "доступа\n" +
                "/ТО газоанализаторов\n" +
                "/ТО сетей связи"
            mark = weekWebs
            break

        case '5.2':
            msg.db.previous = '5'
            text = "/ТО котельных\n" +
                "/ТО водоподготовительных установок\n" +
                "/ТО градирен\n" +
                "/ТО редукционных установок\n" +
                "/ТО холодильных машин\n" +
                "/ТО компрессорных станций"
            mark = equipmentService
            break

        case '5.3':
            msg.db.previous = '5'
            text = "ТО систем диспетчеризации\n" +
                "/Обслуживание, настройка,\n" +
                "ремонт систем автоматизации и\n" +
                "автоматики\n" +
                "/Модернизация систем\n" +
                "управления"
            mark = asu
            break

        case '5.4':
            msg.db.previous = '5'
            text = "/Техническое обслуживание и\n" +
                "ремонт"
            mark = techEco
            break

        case '5.5':
            msg.db.previous = '5'
            text = "/Контроль работы водоподготовительных установок\n" +
                "/Системы вентиляции и кондиционирования\n" +
                "/Систем электроснабжения"
            mark = additional
            break
    }
    msg.reply(text, mark)
})

bot.on(message('text'), (msg) => {
    if (msg.message.text !== "Назад" && msg.db.message_type !== ''){
        switch (msg.db.message_type) {
            case 'application':
                bot.telegram.sendMessage(channels[msg.db.message_type], msg.message.text)
                msg.reply("Заявка была записана", backToStart)
                msg.db.message_type = ''
                break;

            case 'remark':
                bot.telegram.sendMessage(channels[msg.db.message_type], msg.message.text)
                msg.reply("Спасибо, ваше замечание было отправлено.", backToStart)
                msg.db.message_type = ''
                break;

            case 'review':
                bot.telegram.sendMessage(channels[msg.db.message_type], msg.message.text)
                msg.reply(`${msg.message.chat.first_name}, спасибо за ваш отзыв!😁`, backToStart)
                msg.db.message_type = ''
                break;

            case 'offer':
                bot.telegram.sendMessage(channels[msg.db.message_type], msg.message.text)
                msg.reply(`${msg.message.chat.first_name}, спасибо за ваше предложение!`, backToStart)
                msg.db.message_type = ''
                break;
        }
    }
})
bot.launch()
