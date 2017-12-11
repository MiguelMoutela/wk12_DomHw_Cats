var app = function () {

  const addCat = function(name, favFood, link, tagClassUl, tagClassSection){
    var ul = unorderedList(tagClassUl);
    var nameLi = nameListItem(name);
    var favFoodLi = favFoodListItem(favFood);
    var photoLi = photoListItem(link);
    appendElements(ul, nameLi, favFoodLi, photoLi, tagClassSection);
  };


  const unorderedList = function(tagClassUl){
    const ul = document.createElement('ul');
    ul.classList.add(tagClassUl)
    return ul;
  };

  const nameListItem = function(name){
    const liName = document.createElement('li');
    liName.innerText = name;
    return liName;
  };

  const favFoodListItem = function(favFood){
    const liFood =  document.createElement('li');
    liFood.innerText = favFood;
    return liFood;
  };

  const photoListItem = function(link){
    const liPhoto = document.createElement('li');
    const image = document.createElement('img');
    image.src = link;
    liPhoto.appendChild(image);
    return liPhoto;
  };

  // const section = function(){
  //   document.querySelector('#cats')
  // }
  //

  const appendElements = function(unorderedList, nameListItem, favFoodListItem, photoListItem, tagClassSection){

  let section = document.querySelector(tagClassSection);

  section.appendChild(unorderedList);
  unorderedList.appendChild(nameListItem);
  unorderedList.appendChild(favFoodListItem);
  unorderedList.appendChild(photoListItem);
  };

  addCat('CannibalCat', 'Cat','https://www.valeofcats.com/wp-content/uploads/2016/09/cat-eating-1-e1474989266265.jpg', 'cat', '#cats');

};

document.addEventListener('DOMContentLoaded', app);
