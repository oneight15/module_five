'use strict';

const ads = document.querySelector('.ads');

ads.remove();

// получаем карточки
const thirdCard = document.querySelector('.item_three');
const fourthCard = document.querySelector('.item_four');
const fifthCard = document.querySelector('.item_five');

thirdCard.after(fourthCard);

// получаем контент-контейнер
const thirdCardContainer = thirdCard.querySelector('.content');
const fifthCardContainer = fifthCard.querySelector('.content');

// получаем списки карточек
const secondPropsList = document.querySelector('.item_two .props__list');
const thirdPropsList = document.querySelector('.item_three .props__list');
const fourthPropsList = document.querySelector('.item_four .props__list');
const fifthPropsList = document.querySelector('.item_five .props__list');
const sixthPropsList = document.querySelector('.item_six .props__list');

thirdCardContainer.append(fifthPropsList);
fifthCardContainer.append(thirdPropsList);

// получаем элементы списков карточек
const propsItemsTwo = secondPropsList.querySelectorAll('.props__item');
const propsItemsFour = fourthPropsList.querySelectorAll('.props__item');
const propsItemsSix = sixthPropsList.querySelectorAll('.props__item');

propsItemsFour[2].after(propsItemsTwo[3]);
secondPropsList.append(propsItemsSix[8]);
secondPropsList.append(propsItemsSix[9]);

