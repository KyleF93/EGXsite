$(document).ready(function() {

  //hover function on gallery
  $('#gallery img').hover(function() {
      $(this).css('opacity', '0.6');
    },
    function() {
      $(this).css('opacity', '1');
    });

  //hover to change image on card1
  $('#card1').hover(function() {
      $(this).attr('src', 'images/cosplay2.jpg');
    },
    function() {
      $(this).attr('src', 'images/cosplay1.jpg');
    });

  //hover to change image on card2
  $('#card2').hover(function() {
      $(this).attr('src', 'images/friends1.jpeg');
    },
    function() {
      $(this).attr('src', 'images/friends.jpg');
    });

  //hover to change image on card3
  $('#card3').hover(function() {
      $(this).attr('src', 'images/tabletop1.jpeg');
    },
    function() {
      $(this).attr('src', 'images/tabletop.jpg');
    });

  //hover to change image on card4
  $('#card4').hover(function() {
      $(this).attr('src', 'images/stage1.jpg');
    },
    function() {
      $(this).attr('src', 'images/stage.jpg');
    });
  //hover to change image on card5
  $('#card5').hover(function() {
      $(this).attr('src', 'images/people1.jpg');
    },
    function() {
      $(this).attr('src', 'images/people.jpg');
    });
  //hover to change image on card6
  $('#card6').hover(function() {
      $(this).attr('src', 'images/crowd1.jpg');
    },
    function() {
      $(this).attr('src', 'images/crowd.jpg');
    });

  //form Validation
  $('form').h5Validate({
    errorClass: 'validationError'
  });

  //Date picker
  $('#date').calendar({
    type: 'date',
    startMode: 'year',
    minDate: new Date('10/18/2019'),
    maxDate: new Date('10/20/2019'),
    monthFirst: false,
    formatter: {
      date: function(date, settings) {
        if (!date) return '';
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return day + '-' + month + '-' + year;
      }
    }
  });


});
