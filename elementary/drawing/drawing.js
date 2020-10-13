    const wordsEng = [
    ['Unit 1-12'],
    ['Unit1',
    'Camera', 'Mobile phone', 'Shampoo', 'Diary', 'Passport', 'Magazine', 'Credit card', 'Headphones', 'Newspaper', 'Sweater', 'Sunglasses', 'Watch', 'Purse', 'Ticket', 'Laptop', 'Postcard'],
    
    ['Unit2',
    'Have', 'Read', 'Listen to', 'Do', 'Eat', 'Play', 'Go', 'Watch TV', 'Speak', 'Meet', 'Get up', 'Go to bed', 'Have breakfast', 'Have lunch', 'Get home', 'Start work', 'Leave home', 'Finish work', 'Have dinner'],
    
    ['Unit3',
    'Wife husband', 'Brother sister', 'Father', 'Children', 'Mother', 'Daughter', 'Son', 'Grandmother grandfather', 'Parents', 'Aunt', 'Uncle', 'Cousin'],

    ['Unit4',
    'Garage', 'Balcony', 'Hall', 'Kitchen', 'Dining room', 'Living room', 'Stairs', 'Home office', 'Bedroom', 'Bathroom', 'Roof', 'Garden', 'Armchair', 'Bath', 'Bed', 'Carpet', 'Cupboard', 'Plant', 'Rug', 'Television', 'Shower', 'Sink', 'Sofa', 'Shelves', 'Wardrobe', 'Lamp', 'Washbasin'],

    ['Unit5',
    'Cheese', 'Chicken', 'Banana', 'Egg', 'Fruit juice', 'Pear', 'Pepper', 'Butter', 'Garlic', 'Milk', 'Potatoes', 'Broccoli', 'Strawberry', 'Salmon', 'Shrimp', 'Bowl', 'Jar', 'Bottle', 'Bag', 'Cup', 'Tin', 'Carton', 'Packet'],

    ['Unit6',
    'Go to the gym', 'Go for a walk', 'See friends', 'Do nothing', 'Stay at home', 'Do the housework', 'Stay with friends', 'Write an e-mail', 'Go shopping', 'Read a book', 'Talk on the phone'],


    ];
    const drawingWrap = document.querySelector('.drawing');
    const drawingBtn = document.querySelectorAll('.drawing__btn');
    const imgBox = document.querySelector('.drawing-img-box');
    const imgBoxList = document.querySelector('.drawing-img');
    const chosenWrap = document.querySelectorAll('.chosen-img-wrap');
    const chosenImg = document.querySelectorAll('.chosen-img');
    const chosenImgTitle = document.querySelectorAll('.chosen-img-text');
    const title = document.querySelector('.drawing-title');
    const unitList = document.querySelector('.unit-list');
    const unitItem = document.querySelectorAll('.unit-item');
    let unitNumber = document.querySelector('.drawing-title').innerText;
    let imageCount = 17;

    defineUnit();
    drawingWrap.style.backgroundImage = `url(${defineUnit()}.jpg)`;
    orderBtn('37%','15%','37%','47%','37%','72%','15%','15%','15%','60%');
    orderImg('37%','15%','37%','44%','37%','72%','15%','15%','15%','60%', '24%');

    function orderBtn(b1,l1,b2,l2,b3,l3,b4,l4,b5,l5) {
      drawingBtn[0].style.bottom = b1;
      drawingBtn[0].style.left = l1;

      drawingBtn[1].style.bottom = b2;
      drawingBtn[1].style.left = l2;
      
      drawingBtn[2].style.bottom = b3;
      drawingBtn[2].style.left = l3;

      drawingBtn[3].style.bottom = b4;
      drawingBtn[3].style.left = l4;

      drawingBtn[4].style.bottom = b5;
      drawingBtn[4].style.left = l5;
    }
    function orderImg(b1,l1,b2,l2,b3,l3,b4,l4,b5,l5,w) {
      chosenWrap[0].style.bottom = b1;
      chosenWrap[0].style.left = l1;

      chosenWrap[1].style.bottom = b2;
      chosenWrap[1].style.left = l2;
      
      chosenWrap[2].style.bottom = b3;
      chosenWrap[2].style.left = l3;

      chosenWrap[3].style.bottom = b4;
      chosenWrap[3].style.left = l4;

      chosenWrap[4].style.bottom = b5;
      chosenWrap[4].style.left = l5;

      chosenWrap.forEach(eachImg => eachImg.style.width = w);
    }

    drawingBtn.forEach( (element, arr) => {
      element.onclick = () => openBox(element, arr);      
    });
    
    function openBox(btn, numberArr) {
      createImgList(imageCount);
      imgBox.hidden = false;
      const imgItem = document.querySelectorAll('.drawing-img__item');

      imgItem.forEach( (elementImg, arrImg) => {
        elementImg.onclick = () => {
          imgBox.hidden = true;

          removeImgList();

          btn.style.display = 'none';
          let numberImg = arrImg + 1;
          chosenImg[numberArr].src = `../${defineUnit()}/img/${numberImg}.jpg`;
          chosenImgTitle[numberArr].innerText = wordsEng[defineUnit()][numberImg];
          chosenWrap[numberArr].style.display = 'flex';
        }
      });
      chosenImg.forEach((imgChosen) => {
        imgChosen.onclick = () => openBox(btn, numberArr);
      });
    }
    function createImgList(count) {
      for(let i = 1; i < count; i++) {
        let img = document.createElement('img');
        imgBoxList.append(img);
        img.classList.add('drawing-img__item');
        img.src = `../${defineUnit()}/img/${i}.jpg`;
      }
    }

    function removeImgList() {
      document.querySelectorAll('.drawing-img__item').forEach(element => element.remove());
    }
    
    title.onclick = () => unitList.style.display = 'block';

    unitItem.forEach( (element, arr) => {
      element.onclick = () => {
        let titleName = arr + 1;
        unitList.style.display = 'none';
        title.innerText = `Unit ${titleName}`;
        unitNumber = `Unit ${titleName}`;
        defineUnit();
        drawingWrap.style.backgroundImage = `url(${defineUnit()}.jpg)`;
        chosenWrap.forEach(element => element.style.display = 'none');
        drawingBtn.forEach(element => element.style.display = 'block');

        if (unitNumber == 'Unit 1') {
          imageCount = 17;
          orderBtn('37%','15%','37%','47%','37%','72%','15%','15%','15%','60%');
          orderImg('37%','15%','37%','44%','37%','72%','15%','15%','15%','60%', '24%');
        }
        if (unitNumber == 'Unit 2') {
          imageCount = 20;
          orderBtn('75%','50%','63%','50%','45%','50%','22%','50%','10%','50%');
          orderImg('74%','74%','58%','48%','42%','74%','24%','48%','6%','74%', '25%');
        }
        if (unitNumber == 'Unit 3') {
          imageCount = 13;
          orderBtn('25%','11%','25%','37%','25%','63%','50%','25%','50%','55%');
          orderImg('25%','11%','25%','37%','25%','63%','50%','20%','50%','50%', '25%');
        }
        if (unitNumber == 'Unit 4') {
          imageCount = 28;
          orderBtn('2%','3%','2%','37%','2%','72%','25%','7%','25%','54%');
          orderImg('2%','3%','2%','37%','2%','72%','25%','7%','25%','54%', '25%');
        }
        if (unitNumber == 'Unit 5') {
          imageCount = 25;
          orderBtn('38%','20%','16%','20%','16%','64%','75%','20%','58%','64%');
          orderImg('38%','20%','16%','20%','16%','62%','75%','20%','58%','62%', '25%');
        }
        if (unitNumber == 'Unit 6') {
          imageCount = 12;
          orderBtn('82%','44%','48%','13%','47%','66%','71%','14%','70%','70%');
          orderImg('76%','39%','40%','10%','40%','68%','65%','10%','65%','68%', '25%');
        }
      } 
  });

    function defineUnit() {
      let length = unitNumber.length;
      let unit = unitNumber.slice(length-2,length);
      if(unit[0] == 0) {
        unit = unitNumber.slice(length-1,length)
      }
      return unit;
    }