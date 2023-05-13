'use strict';

const ads = document.querySelector('.ads');

// получаем карточки
const thirdCard = document.querySelector('.item_three');
const fourthCard = document.querySelector('.item_four');
const fifthCard = document.querySelector('.item_five');

// получаем контент-контейнер
const thirdCardContainer = thirdCard.querySelector('.content');
const fifthCardContainer = fifthCard.querySelector('.content');

// получаем заголовки карточек
const firstTitle = document.querySelector('.item_one h2');
const secondTitle = document.querySelector('.item_two .item__title');
const thirdTitle = document.querySelector('.item_three .item__title');
const fifthTitle = document.querySelector('.item_five .item__title');
const sixthTitle = document.querySelector('.item_six .item__title');

// создаем третий заголовок и текст для него
const textThirdTitle = document.createTextNode('This и прототипы объектов');
const correctThirdTitle = thirdTitle.cloneNode();

// получаем списки карточек
const secondPropsList = document.querySelector('.item_two .props__list');
const thirdPropsList = document.querySelector('.item_three .props__list');
const fourthPropsList = document.querySelector('.item_four .props__list');
const fifthPropsList = document.querySelector('.item_five .props__list');
const sixthPropsList = document.querySelector('.item_six .props__list');

// получаем элементы списков карточек
const propsItemsTwo = secondPropsList.querySelectorAll('.props__item');
const propsItemsFour = fourthPropsList.querySelectorAll('.props__item');
const propsItemsSix = sixthPropsList.querySelectorAll('.props__item');

ads.remove();

thirdCard.after(fourthCard);

thirdCardContainer.append(fifthPropsList);
fifthCardContainer.append(thirdPropsList);

propsItemsFour[2].after(propsItemsTwo[3]);
secondPropsList.append(propsItemsSix[8]);
secondPropsList.append(propsItemsSix[9]);

secondPropsList.before(fifthTitle);
sixthPropsList.before(secondTitle);
thirdPropsList.before(sixthTitle);
thirdTitle.remove();

correctThirdTitle.append(textThirdTitle);
fifthPropsList.before(correctThirdTitle);

firstTitle.classList.add('item__title');
