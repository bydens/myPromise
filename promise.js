function applyForVisa(documents) {
  console.log('Обрабтка заявления...');
  return new Promise((resolve, reject) => {
    let visa = {visa: 'visa'};
    setTimeout(function() {
      Math.random() > .5 ? resolve(visa) : reject('В визе отказанно: Недостаточно документов.');
    }, 1000);

  })

}

function getVisa(visa) {
  console.info('Виза получена: ', visa);
  return new Promise((resolve, reject) => {
    resolve(visa);
  })
}

function bookHotel(visa) {
  console.log(visa);
  console.log('Бронирование отеля...');
  const numberOfHotel = 7;
  // return numberOfHotel;
  // return Promise.reject('Нет мест.')
  // return Promise.resolve(numberOfHotel);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(numberOfHotel), 2000);
  })
}

function buyTickets(holet) {
  console.log('Hotel: ', holet);
  console.log('Покупка билетов...');
  // return Promise.reject('Нет билетов');
  return Promise.resolve('Билеты куплены.');
}

applyForVisa({})
  .then(getVisa)
  .then(bookHotel)
  .then(buyTickets)
  .then((result) => console.log(result))
  .catch(reason => console.error(reason));