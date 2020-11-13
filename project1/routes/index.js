var express = require('express');
var router = express.Router();

const params = {
};
router.get('/', (req, res) => {
    params.one = '1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quam ipsam molestias quaerat quae voluptatem voluptatum soluta. Maiores tenetur nulla expedita esse, dignissimos ullam vero alias mollitia cumque vel animi!';
    res.render('index', params);
})
router.get('/a', (req, res) => {
  params.two = 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной';
  res.render('index-two', params);
})
router.get('/a/b', (req, res) => {
  params.three = 'вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).';
  res.render('index-three', params);
})
router.get('/a/b/c', (req, res) => {
  params.four = 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие';
  res.render('index-four', params);
})
router.get('/a/b/c/d', (req, res) => {
  params.five = 'текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов';
  res.render('index-five', params);
})
router.get('/a/b/c/d/e', (req, res) => {
  params.six = 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год';
  res.render('index-six', params);
})
router.get('/a/b/c/d/e/f', (req, res) => {
  params.seven = 'занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32';
  res.render('index-seven', params);
})
router.get('/a/b/c/d/e/f/g', (req, res) => {
  params.eight = 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и';
  res.render('index-eight', params);
})
module.exports = router;