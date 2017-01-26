jQuery(document).ready(function () {

    $('.footer__img img').on('mouseover', function (e) {
        $(this).attr('src','assets/templates/vygoda/img/logo-txt.png');
    });
 
    $('.footer__img img').on('mouseout', function (e) {
        $(this).attr('src','assets/templates/vygoda/img/logo-light.png');
    });

    // aside menu
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70,
        'side' : 'right'
      });

    $('.hamburger').on('click', function (e) {
        slideout.open();
    });

    $('#menu .btn-close').on('click', function (e) {
        slideout.close();
    });

    // popup window
    $('.alert .btn-close').on('click', function (e) {
        $(this).closest('.alert').hide();
    });

    $('.alert').on('click', function (e) {
        e.stopPropagation();
        $(this).hide();
    });

    function validate () {
       
        var valid = true,
            inputs =  $('#orderForm input').not('#agree'),
            textarea = $('#message');

       inputs.each( function () {

            if ( $(this).val() === '' ) {
                valid = false;
                return false;
            } 
       });

       if (valid) {
            valid = !(textarea.val() === '');

            if (valid) {
                valid = agree.checked;
            }
       } 
      
      return valid;
    }

    // ajax send form
    $('#orderForm .button').on('click', function (e) {
        e.preventDefault();
        
        var win = $('.alert'),
            message = $('.alert__body'),
            errorMsg = $('.msg'),
            form = document.querySelector('#orderForm'),
            valid = validate ();

        function showMessage(data) {
            message.text(data);
            win.css('display','flex');
        }

        if (valid) {

             $.ajax({    
                url: $("#orderForm").attr('action'),
                data: $("#orderForm").serialize(),
                type: 'POST',
                success: function(data){
                    showMessage(data);
                },
                error: function(){
                    showMessage('Ошибка отправки. Пожалуйста, повторите попытку.');
                },
                complete: function(){
                    setTimeout(function () {
                        win.fadeOut(500);
                    }, 3000);

                    form.reset();
                }
            });
         } else {
            errorMsg.css('opacity', '1');
            setTimeout( function () {
                errorMsg.css('opacity', '0');
            }, 5000);
         }
    });
});


