let cars = [
   {
      id: Math.random(),
      company: 'bmw',
      model: 'm5',
      engine: 5,
      color: 'black',
      price: 110000,
      year: 2019,
      image: 'https://images.unsplash.com/photo-1619362280286-f1f8fd5032ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80'
   },
   {
      id: Math.random(),
      company: 'mercedes',
      model: 'img63',
      engine: 6.3,
      color: 'black',
      price: 350000,
      year: 2022
   },
   {
      id: Math.random(),
      company: 'chevrollette',
      model: 'camaro',
      engine: 4,
      color: 'white',
      price: 90000,
      year: 2018
   },
   {
      id: Math.random(),
      company: 'vaz',
      model: 'lada',
      engine: 0.7,
      color: 'blue',
      price: 5000,
      year: 2010
   },
   {
      id: Math.random(),
      company: 'ferrari',
      model: 'spider',
      engine: 6,
      color: 'red',
      price: 250000,
      year: 2015
   },
   {
      id: Math.random(),
      company: 'mclaren',
      model: 'sena',
      engine: 5.6,
      color: 'yellow',
      price: 300000,
      year: 2022
   },
   {
      id: Math.random(),
      company: 'lambargini',
      model: 'diablo',
      engine: 6,
      color: 'black',
      price: 400000,
      year: 2022
   },
   {
      id: Math.random(),
      company: 'gm',
      model: 'malibu 2',
      engine: 2.5,
      color: 'white',
      price: 30000,
      year: 2021
   },
]

let from = +prompt('от')
let up = +prompt('до')

let filtered = cars.filter(car => {
   if (car.price >= from && car.price <= up) {
      return car
   }
})

if (filtered.length !== 0) {
   let names = filtered.map(car => {
      return car.model + ' от компании ' + car.company
   })
   let isAgree = prompt(`Подходящие машина(ы) под вашу сумму ${names} выберите один из них или напишите "cancel"`).trim().toLowerCase()
   let selectedCar;
   if (isAgree === "cancel") {
      alert('урод!')
   } else if (selectedCar = filtered.find(car => car.model === isAgree)) {
      let toBuy = confirm(`
            Ваша машина
            Компания: ${selectedCar.company}
            Модель: ${selectedCar.model}
            Объем двигателя: ${selectedCar.engine}
            Цвет: ${selectedCar.color}
            Год выпуска: ${selectedCar.year}
            Цена с учетем ндс: ${selectedCar.price}
      `)
      if (toBuy === true) {
         let cashOut = +prompt(`К оплате ${selectedCar.price} долларов`)
         if (cashOut === selectedCar.price) {
            alert('Поздравляем с покупкой новой машины')
         } else if (cashOut > selectedCar.price) {
            let returnBack = cashOut - selectedCar.price
            alert('Поздравляем с покупкой новой машины. Ваша сдача ' + returnBack)
         } else if (cashOut < selectedCar.price) {
            let needSum = selectedCar.price - cashOut
            alert('Недостаточно средств. Не достает ' + needSum)
            let needSumBuy = confirm("Хотители вы оплатить" + needSum);
            if (needSumBuy === true) {
               let needCashOut = +prompt(`К оплате ${needSum} долларов`)
               if (needSum === needCashOut) {
                  alert('Поздравляем с новой машиной!')
                  alert("пока!")
               } else if (needSum < needCashOut) {
                  let needSumTwo = needCashOut - needSum;
                  alert('Поздравляем с покупкой новой машины. Ваша сдача ' + needSumTwo)
               } else if (needSum > needCashOut) {
                  let needSumTre = needSum - needCashOut
                  alert('Недостаточно средств. Не достает ' + needSumTre)
                  let needSumBuy = confirm("Хотители вы оплатить" + needSumTre);
                  if (needSumBuy === true) {
                     let needCashOutwo = +prompt(`К оплате ${needSumTre} долларов`)
                     if (needSumTre === needCashOutwo) {
                        alert('Поздравляем с новой машиной!')
                        alert("пока!")
                     } else if (needSumTre < needCashOutwo) {
                        let needSumneed = needCashOutwo - needSumTre;
                        alert('Поздравляем с покупкой новой машины. Ваша сдача ' + needSumneed)
                     } else if (needSumTre > needCashOutwo) {
                        let needSumfou = needSumTre - needCashOutwo
                        alert('Недостаточно средств. Не достает ' + needSumfou)
                        let needSumBuy = confirm("Хотители вы оплатить" + needSumfou);
                        if (needSumBuy === true) {
                           let needCashOutre = +prompt(`К оплате ${needSumfou} долларов`)
                           if (needSumfou === needCashOutre) {
                              alert('Поздравляем с новой машиной!')
                              alert("пока!")
                           } else if (needSumfou < needCashOutre) {
                              let needSumneedtwo = needCashOutre - needSumfou;
                              alert('Поздравляем с покупкой новой машины. Ваша сдача ' + needSumneedtwo)
                           } else if (needSumfou > needCashOutre) {
                              alert('Ты инвалид? Пока!')
                           } else {
                              alert('пошел вон!')
                           }
                        } else {
                           alert('пошел вон!')
                        }
                     }
                  } else {
                     alert('пошел вон!')
                  }
               } else {
                  alert('пошел вон!')
               }
            }
         } else {
            alert('пошел вон!')
         }
      } else {
         alert('пошел вон!')
      }
   } else {
      alert('Такого товара нету!')
   }
} else {
   alert('Таких машин нету! Пока!')
}
