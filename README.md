# npm start - запуск приложения
# npm dev - liveserve приложения

* TASK
1. Монго. Створити 3 моделі монго, products, orders, profiles.
- orders: _id: (type string, index), profile_id(type String, index), products (type
array [{product_id(type String, index, ref: productModel), quantity (type
Number)}])
- products: _id (type string, index), title (type string), price: (type Number),
quantity (type number)
- profiles: _id (type: String, index), first_name (type String) last_name (type
String), email (type String, index)
тут же засобамми mongoose preSave, postSave, postDelete обновити записи в інших таблицях, зробити так, щоб система працювала наступним чином:
● При створення замовлення повинно автоматично змінюватись кількіть стовару на складію наприклад в замовленні є 2 продукта [{product_id: “id1”, quantity: 5}, {product_id: “id2”, quantity: 3}]. В таблиці продуктів з _id=”id1” поле quantity повинно зменшитись на 5 (значення з замовлення) і в продукті з _id=”id2” поле quantity повинно зменшитись на 3
● При зміні кількості продукту в замовлення відповідно також повинно збільшитись/зменшитись quantity в таблиці продуктів для тих продуктів, які змінились в замовленні (це зробити останнім по пріоритету, якщо буде час і бажання)
● При видалення замовлення потрібно змінити кількість продукту в таблиці продуктів (для вищенаведенного прикладу для продукту з _id=”id1” - повинно збільшитись на 5, для _id=”id1” - збільшитись на 3). тобто якщо замовлення видалено - повертаємо продукти на склад
● При видалення профайла - повинно автоматично видалитись всі його замовлення, а це в свою чергу буде запускати оновлення продуктів (перші 3 пункти)
2. NodeJs. створити скрипт (не обовязково цілий проект можно простий файл де підключаються моделі монго) з такими функціями:
2.1. функція для наповнення БД. підключити моделі, запустити один за одним запити для створення 10 продуктів, 3 профайлів. Всі данні тестові, може бути будь-які значення.
2.2. Функція для створення замовлення. Простий запит для створення замовленняю при цьому перевірити чи правильно обновляється поле quantity в таблиці продуктів
2.3. Функція видалення замовлення. При цьому також перевірити чи правильно обновляється кількість продукту
2.4. Функція для видалення користувачаю при цьому перевірити чи видаляються всі його замовлення і чи правильно обновляється quantity в таблиці продуктів 2.5. Обновлення продуктів у замовленні, і перевірка чи правильно змінюється в таблиці продуктів (це зробити останнім по пріоритету, якщо буде час і бажання)
2.6. почергово запустити і перевірити різні ситуації і чи все правильно працює.
