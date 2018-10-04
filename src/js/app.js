
$(() => {

  const $buttons = $('button');
  let $li = $('li');

  $buttons.on('click',(e) => {
      if ($buttons){
        for (var i=1; i < 101; i++){
           if (i % 15 === 0)
            console.log("FizzBuzz");
          else if (i % 3 === 0)
            console.log("Fizz");
          else if (i % 5 === 0)
            console.log("Buzz");
          else console.log(i);
        }
      }
    });

    function fizz (num){

      for (let i = 0; i <= num; i++){
      let element = document.createElement('li')
      element.innerText = "";
      if(i % 3 === 0 ) {element.innerText += "Fizz";}
      if(i % 5 === 0 ) {element.innerText += "Buzz";}
      if(element.innerText === ""){element.innerText = i;}

      document.getElementById('output').appendChild(element);

       }

    }

    fizz(100)

});
