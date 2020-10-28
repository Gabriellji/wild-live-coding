// huge variable of all students, it's an array of objects. Each student is an object with different properties
let students = [
    {
      name: 'Jeanloup',
      living: 'London',
      shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
      longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz7L26mZeMjYhNBvYVnG0R6b7WaaXwWGz2dQ&usqp=CAU',
      hobbies: ['Games', 'Sports', 'Running']
    },
    {
      name: 'Victoriya',
      living: 'Minsk',
      shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
      longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFswRIpsAe1k37Mn9Ve8Xe2fLdby2MfXuxVQ&usqp=CAU',
      hobbies: ['food', 'Dancing', 'Beer']
    },
    {
      name: 'Lennart',
      living: 'Amsterdam',
      shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
      longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz7L26mZeMjYhNBvYVnG0R6b7WaaXwWGz2dQ&usqp=CAU',
      hobbies: ['Sports', 'Games', 'Beer']
    },
    {
      name: 'Nadine',
      living: 'Berlin',
      shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
      longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD-6nX4ap2_WsgYHAylgx5bPAWiohySeRzcw&usqp=CAU',
      hobbies: ['Running', 'Games', 'Dancing']
    },
    {
      name: 'Naomi',
      living: 'Madrid',
      shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
      longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
      picture: 'https://cdn.akc.org/content/hero/funny_dog_pictures_header.jpg',
      hobbies: ['Food', 'Games', 'Beer']
    },
    {
      name: 'Nikolai',
      living: 'Scottsdale',
      shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
      longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFfo5vMUf8N8QfkKjUIaJHjLMvxHajQgiAXA&usqp=CAU',
      hobbies: ['Coding', 'Games', 'Running']
    },
    {
      name: 'Roxana',
      living: 'London',
      shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
      longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz7L26mZeMjYhNBvYVnG0R6b7WaaXwWGz2dQ&usqp=CAU',
      hobbies: ['Games', 'Dancing', 'Beer']
    },
  ]

  
  // I store in this variable the html element where I'll want to add all my stuff
  let classContainer = document.getElementById('class')
  // Initialize an empty variable where I'll be adding all the html content
  let classToHtml = '';
  
  // Function that will convert and return any given array in a <li>SOMETHING</li> structure

  const converArrayToHtmlTag = function(array, tag) {
    let arrayToHtml = '';
    for(let i = 0; i < array.length; i++) {
      arrayToHtml += `<${tag}>${array[i]}<${tag}>`;
    }
  
    return arrayToHtml;
  }
  
   let buttons = document.querySelectorAll('.categories-option');

   for (let i = 0; i < buttons.length; i++) {
       buttons[i].addEventListener('click', (event) => {
           let filteredStudents = [];
           for (let j = 0; j < students.length; j++) {
            if (students[i].hobbies.includes(event.target.innerHTML)) {
                filteredStudents.push(students[j]);
            }
           }
           classContainer.innerHTML = filteredStudents;
       })
   }  
  // Loop to iterate over all students we have in the students array
  for(let i=0; i < students.length; i++) {
  
    // On each iteration is adding this html code with some variable content to the classToHtml variable, so at the end of the for loop, this variable will be filled of this html structure for each student
    // At line 236, it calls the createListFromArray function to receive the hobbies as an html list
    classToHtml += `
    <div class="col-sm">
      <div class="card" style="width: 18rem;">
        <img src="${students[i].picture}" class="card-img-top img-student" alt="${students[i].name}">
        <div class="card-body">
          <h5 class="card-title">${students[i].name} <small class="text-muted">living in ${students[i].living}</small></h5>
          <p class="card-text">${students[i].shortAbout}</p>
          <p>List of hobbies:
            <ul>
              ${converArrayToHtmlTag(students[i].hobbies, 'li')}
            </ul>
          </p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${students[i].name}Modal">
            learn more
            </button>
        </div>
      </div>
    </div>
    <div class="modal fade" id="${students[i].name}Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${students[i].name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <img src="${students[i].picture}" class="card-img-top img-student" alt="${students[i].name}">
        <div>${converArrayToHtmlTag(students[i].longAbout, 'p')}</div>
        <div>${converArrayToHtmlTag(students[i].hobbies, 'li')}</div>
        <p>Some text will come</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `;
  }
  
  // It changes the innerHtml of the classContainer (the eelement we selected before with the id) to the content that classToHtml has after the loop has finished
  classContainer.innerHTML = classToHtml
  