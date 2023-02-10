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
      year: 2022,
      image: 'https://bigfoto.top/uploads/posts/2022-10/1666484109_1-bigfoto-top-p-mersedes-c63-1.jpg'
   },
   {
      id: Math.random(),
      company: 'chevrollette',
      model: 'camaro',
      engine: 4,
      color: 'white',
      price: 90000,
      year: 2018,
      image: 'https://proaveo.ru/wp-content/uploads/7/3/1/7316f3d748b75f84181babe1d24cdc38.jpeg'
   },
   {
      id: Math.random(),
      company: 'vaz',
      model: 'lada',
      engine: 0.7,
      color: 'blue',
      price: 5000,
      year: 2010,
      image: 'https://discover24.ru/wp-content/uploads/2018/05/1526629759_1.jpg'
   },
   {
      id: Math.random(),
      company: 'ferrari',
      model: 'spider',
      engine: 6,
      color: 'red',
      price: 250000,
      year: 2015,
      image: 'https://mobimg.b-cdn.net/v3/fetch/3b/3bb17b2c5dc07f1521d2eddf3eb61fc2.jpeg'
   },
   {
      id: Math.random(),
      company: 'mclaren',
      model: 'sena',
      engine: 5.6,
      color: 'yellow',
      price: 300000,
      year: 2022,
      image: 'https://i.pinimg.com/originals/22/4d/3e/224d3ef4c492f2f2d5be8a5bd199b791.jpg'
   },
   {
      id: Math.random(),
      company: 'lambargini',
      model: 'diablo',
      engine: 6,
      color: 'black',
      price: 400000,
      year: 2022,
      image: 'https://wroom.ru/i2/carpic/10577.jpg'
   },
   {
      id: Math.random(),
      company: 'gm',
      model: 'malibu 2',
      engine: 2.5,
      color: 'white',
      price: 30000,
      year: 2021,
      image: 'https://replicadisk.ru/wp-content/uploads/4/c/f/4cf5d0f6b24c10333ea27a38591c5219.jpeg'
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
            } else {
               alert('пошел вон!')
            }
         } else {
            alert('пошел вон!')
         }
      } else if(toBuy === false){
         alert('пошел вон!')
      }
   } else {
      alert('Такого товара нету!')
   }
} else {
   alert('Таких машин нету! Пока!')
}
