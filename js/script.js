'use strict';

$(document).ready(function(){
//  $('#first').css('background-color','blue').hide('slow');  
    
    // Manipulowanie obiektami 
//    $('#first p').css('font-size','16px');
//    console.log($('p').text());
//    $('p').text('Hello World!');
    
    console.log($('p').html());
    $('p').html('Hello <b>World</b>');
    
    
    // Dodawanie tresci 
    $('.pierwszy').append(' 123');
    $('.pierwszy').prepend('456 ');
    $('.pierwszy').after('<h3>Zostalem dodany</h3>');
    $('.pierwszy').before('<h4 class="drugi">Jestem przed wszystkimi</h4>');
    
    
    // Usuwanie tresci 
//    remove() usuwa caly element i elemnty wewnatrz niego
//    $('.drugi').remove();
    $('.drugi span').remove();
    
//    empty() usuwa tresc ale nie usuwa elementu
//    $('#first p').empty();
    
    
    // Metoda css()
    
    $('#first p').css({
        'font-size':'16px',
        'background-color':'yellow',
        'color':'red'
    });
    
    
    // Meotda val()
    var zmiennaVal = $('#formularz input').val();
    console.log(zmiennaVal);
    
    $('#formularz input').val('To jest test');
    
    
    // Metody dodajace i usuwajace klasy
    
    $('.trzeci').addClass('czwarty').removeClass('trzeci');
    
    
    // Metody find i each
    
    $('#znajdz').find('span').css({
        'background-color':'blue',
        'color':'white',
        'font-size':'30px'
    });
    
    
    $('#kazdy ul li').each(function(index){
        console.log($(this).text());
        $(this).addClass('list-item-' + index);
    });
    
    
    
    // Eventy 
    
//    $('#eventy button').each(function() {
//        $(this).click(function() {
//            console.log('Przycisk został wcisniety');
//        }) 
//        
//    });
//    
    
//      $('#eventy button').each(function() {
//       $(this).on({
//           'click': function() {
//               console.log('Przycisk zostal wcisniety');
//           }
//       })
//    })  
    clickMouseover();
//    showHide();
//    fades();
//    slides();
    toogleDiv();
    animacja();
});


$(window).resize(function() {
    changeColor();
});


$(window).scroll(function() {
    changePosition();
});


function clickMouseover() {
     $('#eventy button').each(function() {
       $(this).on({
           'click': function() {
               console.log('Przycisk zostal wcisniety');
           },
           
           'mouseover': function() {
               console.log('jestem nad przyciskiem');
           }
       })
    }) 
};


function changeColor() {
    $('#first').css('background-color','blue');
}




function changePosition() {
    var parent = $('#main-nav');
    var wysokosc = $(parent).height();
    var offset = $(window).scrollTop();
    
    if(offset >= wysokosc) {
        $(parent).css({
            'position':'fixed',
            'width':'100%'
        })
    }
    
    else {
        $(parent).css('position','static');
    }
}



function showHide() {
    var parent = $('#showHide');
    
    // Show i Hide steruje wysokoscia, szerokoscia, opacity, marginesami, paddingami -> w wyniku "display-none"
    $(parent).hide(5000).show(5000);
}


function fades() {
    var parent = $('#showHide');
    // Steruje tylko opacity 
    $(parent).fadeOut(5000).fadeIn(5000);
}


function slides() {
    var parent = $('#showHide');
    
    // Steruje wlasciwosciami tak jak hide i show
    $(parent).slideUp(5000).slideDown(5000);
}


//toogle

function toogleDiv() {
    var parent = $('#showHide');
    // Toggle manipuluje tym samym zestawem wlasciwosci co hide i show
    $(parent).click(function(){
        $(this).find('h1').toggle(4000);
    })
}
    

function animacja() {
    var parent = $('#animacja');
    $(parent).find('button').click(function(){
        $(parent).find("#animowany").animate({width: '100%'}, 'slow',function(){
            $(this).animate({width: '200px'}, 'slow');
        });
    })
}







































