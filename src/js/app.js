$(() => {

  const $feelingDiv = $('#feeling');
  const $buttons = $('button');

  // //looping through elements
  //   $buttons.each((i, button) =>{
  //     const $button = $(button);
  //     //do somthing ...
  //
  //   });

  console.log('Im here');;

    //assigining event handlers to multiple elements
  $buttons.on(/*nameOfEvent*/ 'click', /*callback*/(e) => {
      const newFeeling = $(e.target).text();
      $feelingDiv.text(newFeeling);
      if(newFeeling === 'Sassy') {
        $feelingDiv.css({ color: 'pink', fontFamily: 'cursive', fontSize: '40px' });
       }
       if(newFeeling === 'Silly') {
         $feelingDiv.css({ color: 'orange', fontFamily: 'fantasy', fontSize: '32px' });
       }
       if(newFeeling === 'Sad') {
         $feelingDiv.css({ color: 'grey', fontFamily: 'serif', fontSize: '36px' });
       }
       if(newFeeling === 'Submarine') {
         $feelingDiv.css({ color: 'lightBlue', fontFamily: 'sans-serif', fontSize: '30px' });
       }
    });




});
