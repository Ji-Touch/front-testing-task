/*
Требования к заданию:
1) Получить адреса по API и вывести их в .input-addresses (ul).
2) При клике на адрес:
   - вставлять этот адрес в input,
   - скрывать остальные варианты.
3) По кнопке "Подтвердить":
   - выводить адрес из input под "Список адресов",
   - очищать input.
4) Оформить элементы аналогично https://www.nabeads.ru/lk/address
*/

var url =
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
var token = '5c104c089f12284afd287722ef20a1f7827adef1';
var query = 'москва улица льва тол';

var options = {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Token ' + token,
    },
    body: JSON.stringify({ query: query }),
};

// fetch(url, options)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log('error', error));
