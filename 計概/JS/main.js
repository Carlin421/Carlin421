function load(){
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
    logo2();
}

var logo = 0;

function logo1(){
    
    if (logo == 0) {

        setTimeout(function(){document.getElementById('logo').style.scale = '1';},0);
        setTimeout(function(){document.getElementById('logo').style.left = '50px';},0);
        setTimeout(function(){document.getElementById('logo').style.top = '25px';},0);
        setTimeout(function(){document.getElementById('part_1').style.top = '0%';},0);
        setTimeout(function(){document.getElementById('obj1').style.top = '22%';},0);
        setTimeout(function(){document.getElementById('obj1').style.scale = '1';},0);
        setTimeout(function(){document.getElementById('obj2').style.top = '25%';},0);
        setTimeout(function(){document.getElementById('obj2').style.scale = '1';},0);
        setTimeout(function(){document.getElementById('obj3').style.top = '60%';},0);
        setTimeout(function(){document.getElementById('obj3').style.scale = '1';},0);
        setTimeout(function(){document.getElementById('obj4').style.left = '88%';},0);
        setTimeout(function(){document.getElementById('obj4').style.top = '70%';},0);
        setTimeout(function(){document.getElementById('obj5').style.left = '4%';},0);
        setTimeout(function(){document.getElementById('obj5').style.top = '79%';},0);
        setTimeout(function(){document.getElementById('phone1').style.top = '30%';},0);
        setTimeout(function(){document.getElementById('phone1').style.left = '60%';},0);
        setTimeout(function(){document.getElementById('phone1').style.scale = '1';},0);

        logo += 1;
    }
    else {
        logo2();

        logo = 0;
    }
}

function logo2(){
    setTimeout(function(){document.getElementById('logo').style.scale = '3';},0);
    setTimeout(function(){document.getElementById('logo').style.left = '570px';},0);
    setTimeout(function(){document.getElementById('logo').style.top = '310px';},0);
    setTimeout(function(){document.getElementById('part_1').style.top = '100%';},0);
    setTimeout(function(){document.getElementById('obj1').style.top = '27%';},0);
    setTimeout(function(){document.getElementById('obj1').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj2').style.top = '30%';},0);
    setTimeout(function(){document.getElementById('obj2').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj3').style.top = '65%';},0);
    setTimeout(function(){document.getElementById('obj3').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj4').style.left = '110%';},0);
    setTimeout(function(){document.getElementById('obj4').style.top = '75%';},0);
    setTimeout(function(){document.getElementById('obj5').style.left = '-4%';},0);
    setTimeout(function(){document.getElementById('obj5').style.top = '84%';},0);
    setTimeout(function(){document.getElementById('phone1').style.top = '15%';},0);
    setTimeout(function(){document.getElementById('phone1').style.left = '70%';},0);
    setTimeout(function(){document.getElementById('phone1').style.scale = '0';},0);
}

var cursor_color = 0;

function home_out_1(){
    setTimeout(function(){document.getElementById('nav').style.top = '-40%';},0);
    setTimeout(function(){document.getElementById('bg').style.backgroundColor = '#101010';},0);
    setTimeout(function(){cursor_color = 1;},0);
    setTimeout(function(){document.getElementById('part_1').style.top = '-110%';},0);
    setTimeout(function(){document.getElementById('part_2').style.top = '0%';},0);
    setTimeout(function(){document.getElementById('phone1').style.top = '-65%';},0);
    setTimeout(function(){document.getElementById('phone1').style.left = '70%';},0);
    setTimeout(function(){document.getElementById('phone1').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj1').style.top = '-48%';},0);
    setTimeout(function(){document.getElementById('obj1').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj2').style.top = '-45%';},0);
    setTimeout(function(){document.getElementById('obj2').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj3').style.top = '-10%';},0);
    setTimeout(function(){document.getElementById('obj3').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj4').style.left = '110%';},0);
    setTimeout(function(){document.getElementById('obj5').style.left = '-10%';},0);
    setTimeout(function(){document.getElementById('obj6').style.top = '10%';},700);
    setTimeout(function(){document.getElementById('obj6').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('obj7').style.top = '25%';},700);
    setTimeout(function(){document.getElementById('obj7').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('obj8').style.top = '45%';},700);
    setTimeout(function(){document.getElementById('obj8').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('obj9').style.left = '97.5%';},700);
    setTimeout(function(){document.getElementById('obj9').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('obj10').style.top = '87%';},700);
    setTimeout(function(){document.getElementById('obj10').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('btn_back').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('btn4').style.scale = '1';},900);
    setTimeout(function(){cursor_color = 1;},700);

}

function home_in_1(){
    setTimeout(function(){document.getElementById('nav').style.top = '0%';},0);
    setTimeout(function(){document.getElementById('bg').style.backgroundColor = '#efefef';},0);
    setTimeout(function(){cursor_color = 0;},0);
    setTimeout(function(){cursor_color = 0;},0);
    setTimeout(function(){document.getElementById('part_1').style.top = '0%';},0);
    setTimeout(function(){document.getElementById('part_2').style.top = '100%';},0);
    setTimeout(function(){document.getElementById('phone1').style.top = '30%';},0);
    setTimeout(function(){document.getElementById('phone1').style.left = '60%';},0);
    setTimeout(function(){document.getElementById('phone1').style.scale = '1';},0);
    setTimeout(function(){document.getElementById('obj1').style.top = '22%';},0);
    setTimeout(function(){document.getElementById('obj1').style.scale = '1';},0);
    setTimeout(function(){document.getElementById('obj2').style.top = '25%';},0);
    setTimeout(function(){document.getElementById('obj2').style.scale = '1';},0);
    setTimeout(function(){document.getElementById('obj3').style.top = '60%';},0);
    setTimeout(function(){document.getElementById('obj3').style.scale = '1';},0);
    setTimeout(function(){document.getElementById('obj4').style.left = '88%';},0);
    setTimeout(function(){document.getElementById('obj5').style.left = '4%';},0);
    setTimeout(function(){document.getElementById('obj6').style.top = '15%';},0);
    setTimeout(function(){document.getElementById('obj6').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj7').style.top = '30%';},0);
    setTimeout(function(){document.getElementById('obj7').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj8').style.top = '50%';},0);
    setTimeout(function(){document.getElementById('obj8').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj9').style.left = '100%';},0);
    setTimeout(function(){document.getElementById('obj9').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj10').style.top = '93%';},0);
    setTimeout(function(){document.getElementById('obj10').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn_back').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn4').style.scale = '0';},0);
}

function about_us_page1(){
    setTimeout(function(){document.getElementById('ecash').style.transition = 'all 0.75s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('web').style.transition = 'all 0.75s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('web').style.transform = 'translateY(0px)';},0);
    setTimeout(function(){document.getElementById('ecash').style.transform = 'translateY(-600px)';},0);
    setTimeout(function(){document.getElementById('ecash').style.transition = 'none';},750);
    setTimeout(function(){document.getElementById('web').style.transition = 'none';},750);
    setTimeout(function(){document.getElementById('ecash').style.transform = 'translateY(600px)';},760);
    setTimeout(function(){document.getElementById('btn2').disabled = true;},0);
    setTimeout(function(){document.getElementById('btn3').disabled = false;},750);
    setTimeout(function(){document.getElementById('card2').style.top = '-140px';},0);
    setTimeout(function(){document.getElementById('card2').style.top = '1.1';},0);
    setTimeout(function(){document.getElementById('card2').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('card2').style.zIndex = '11';},0);
    setTimeout(function(){document.getElementById('card2').style.scale = '0.5';},1049);
    setTimeout(function(){document.getElementById('card2').style.transition = 'none';},1049);
    setTimeout(function(){document.getElementById('card2').style.zIndex = '9';},1049);
    setTimeout(function(){document.getElementById('card2').style.top = '29px';},1050);
    setTimeout(function(){document.getElementById('card2').style.opacity = '1';},1050);
    setTimeout(function(){document.getElementById('card2').style.scale = '0.9';},1050);
    setTimeout(function(){document.getElementById('card2').style.transition = 'all 0.75s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('card1').style.transition = 'none';},0);
    setTimeout(function(){document.getElementById('card1').style.transition = 'all 0.75s cubic-bezier(.6,0,.4,1)';},10);
    setTimeout(function(){document.getElementById('card1').style.top = '0px';},10);
    setTimeout(function(){document.getElementById('card1').style.zIndex = '10';},500);
    setTimeout(function(){document.getElementById('card1').style.opacity = '1';},10);
    setTimeout(function(){document.getElementById('card1').style.scale = '1';},10);
    setTimeout(function(){document.getElementById('card3').style.display = 'block';},0);
    setTimeout(function(){document.getElementById('card3').style.transition = 'none';},0);
    setTimeout(function(){document.getElementById('card3').style.transition = 'all 0.75s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('card3').style.opacity = '1';},100);
    setTimeout(function(){document.getElementById('card3').style.scale = '0.9';},100);
    setTimeout(function(){document.getElementById('card3').style.top = '29px';},100);
    setTimeout(function(){document.getElementById('card3').style.opacity = '0';},1050);
    setTimeout(function(){document.getElementById('card3').style.scale = '0.85';},1050);
    setTimeout(function(){document.getElementById('card3').style.top = '48px';},1050);
    setTimeout(function(){document.getElementById('card3').style.display = 'none';},1050);
}

function about_us_page2(){
    setTimeout(function(){document.getElementById('web').style.transition = 'all 0.75s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ecash').style.transition = 'all 0.75s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ecash').style.transform = 'translateY(0px)';},0);
    setTimeout(function(){document.getElementById('web').style.transform = 'translateY(-600px)';},0);
    setTimeout(function(){document.getElementById('web').style.transition = 'none';},750);
    setTimeout(function(){document.getElementById('ecash').style.transition = 'none';},750);
    setTimeout(function(){document.getElementById('web').style.transform = 'translateY(600px)';},760);
    setTimeout(function(){document.getElementById('btn3').disabled = true;},0);
    setTimeout(function(){document.getElementById('btn2').disabled = false;},750);
    setTimeout(function(){document.getElementById('card1').style.top = '-140px';},0);
    setTimeout(function(){document.getElementById('card1').style.scale = '1.1';},0);
    setTimeout(function(){document.getElementById('card1').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('card1').style.zIndex = '11';},0);
    setTimeout(function(){document.getElementById('card1').style.scale = '0.5';},1049);
    setTimeout(function(){document.getElementById('card1').style.transition = 'none';},1049);
    setTimeout(function(){document.getElementById('card1').style.zIndex = '9';},1049);
    setTimeout(function(){document.getElementById('card1').style.top = '29px';},1050);
    setTimeout(function(){document.getElementById('card1').style.opacity = '1';},1050);
    setTimeout(function(){document.getElementById('card1').style.scale = '0.9';},1050);
    setTimeout(function(){document.getElementById('card1').style.transition = 'all 0.75s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('card2').style.transition = 'none';},0);
    setTimeout(function(){document.getElementById('card2').style.zIndex = '10';},10);
    setTimeout(function(){document.getElementById('card2').style.transition = 'all 0.75s cubic-bezier(.6,0,.4,1)';},10);
    setTimeout(function(){document.getElementById('card2').style.top = '0px';},10);
    setTimeout(function(){document.getElementById('card2').style.opacity = '1';},10);
    setTimeout(function(){document.getElementById('card2').style.scale = '1';},10);
    setTimeout(function(){document.getElementById('card3').style.transition = 'none';},0);
    setTimeout(function(){document.getElementById('card3').style.display = 'block';},0);
    setTimeout(function(){document.getElementById('card3').style.transition = 'all 0.75s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('card3').style.opacity = '1';},100);
    setTimeout(function(){document.getElementById('card3').style.scale = '0.9';},100);
    setTimeout(function(){document.getElementById('card3').style.top = '29px';},100);
    setTimeout(function(){document.getElementById('card3').style.opacity = '0';},1050);
    setTimeout(function(){document.getElementById('card3').style.scale = '0.85';},1050);
    setTimeout(function(){document.getElementById('card3').style.top = '48px';},1050);
    setTimeout(function(){document.getElementById('card3').style.display = 'none';},1050);
}

function about_us_out(){
    
    type = 1;
    setTimeout(function(){document.getElementById('part_2').style.top = '-110%';},0);
    setTimeout(function(){document.getElementById('bg').style.backgroundColor = '#efefef';},0);
    setTimeout(function(){cursor_color = 0;},0);
    setTimeout(function(){document.getElementById('part_3').style.top = '0%';},0);
    setTimeout(function(){document.getElementById('obj6').style.top = '5%';},0);
    setTimeout(function(){document.getElementById('obj6').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj7').style.top = '20%';},0);
    setTimeout(function(){document.getElementById('obj7').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj8').style.top = '40%';},0);
    setTimeout(function(){document.getElementById('obj8').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj9').style.left = '100%';},0);
    setTimeout(function(){document.getElementById('obj9').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj10').style.top = '83%';},0);
    setTimeout(function(){document.getElementById('obj10').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn_back').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn4').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn5').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('ch1').style.left = '0px';},700);
    setTimeout(function(){document.getElementById('ch1').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('ch1_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},700);
    setTimeout(function(){document.getElementById('ch1_icon').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('ch1_icon').style.left = '50px';},700);
    setTimeout(function(){document.getElementById('ch1_icon').style.top = '50px';},700);
    setTimeout(function(){document.getElementById('ch1_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1700);
    setTimeout(function(){document.getElementById('ch2').style.left = '360px';},900);
    setTimeout(function(){document.getElementById('ch2').style.opacity = '1';},900);
    setTimeout(function(){document.getElementById('ch2_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},900);
    setTimeout(function(){document.getElementById('ch2_icon').style.scale = '1';},900);
    setTimeout(function(){document.getElementById('ch2_icon').style.left = '50px';},900);
    setTimeout(function(){document.getElementById('ch2_icon').style.top = '50px';},900);
    setTimeout(function(){document.getElementById('ch2_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1900);
    setTimeout(function(){document.getElementById('ch3').style.left = '720px';},1100);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '1';},1100);
    setTimeout(function(){document.getElementById('ch3_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},1100);
    setTimeout(function(){document.getElementById('ch3_icon').style.scale = '1';},1100);
    setTimeout(function(){document.getElementById('ch3_icon').style.left = '50px';},1100);
    setTimeout(function(){document.getElementById('ch3_icon').style.top = '50px';},1100);
    setTimeout(function(){document.getElementById('ch3_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},2100);
    setTimeout(function(){document.getElementById('ch4').style.left = '0px';},1300);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '1';},1300);
    setTimeout(function(){document.getElementById('ch4_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},1300);
    setTimeout(function(){document.getElementById('ch4_icon').style.scale = '0.5';},1300);
    setTimeout(function(){document.getElementById('ch4_icon').style.left = '50px';},1300);
    setTimeout(function(){document.getElementById('ch4_icon').style.top = '100px';},1300);
    setTimeout(function(){document.getElementById('ch4_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},2300);
    setTimeout(function(){document.getElementById('ch5').style.left = '360px';},1500);
    setTimeout(function(){document.getElementById('ch5').style.opacity = '1';},1500);
    setTimeout(function(){document.getElementById('ch5_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch5_icon').style.scale = '0.5';},1500);
    setTimeout(function(){document.getElementById('ch5_icon').style.left = '50px';},1500);
    setTimeout(function(){document.getElementById('ch5_icon').style.top = '100px';},1500);
    setTimeout(function(){document.getElementById('ch5_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},2500);
    setTimeout(function(){document.getElementById('ch6').style.left = '720px';},1700);
    setTimeout(function(){document.getElementById('ch6').style.opacity = '1';},1700);
    setTimeout(function(){document.getElementById('ch6_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},1700);
    setTimeout(function(){document.getElementById('ch6_icon').style.scale = '0.5';},1700);
    setTimeout(function(){document.getElementById('ch6_icon').style.left = '50px';},1700);
    setTimeout(function(){document.getElementById('ch6_icon').style.top = '100px';},1700);
    setTimeout(function(){document.getElementById('ch6_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},2700);
    setTimeout(function(){document.getElementById('mask1').style.display = 'block';},0);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},2100);
    setTimeout(function(){document.getElementById('mask2').style.transition = 'block';},0);
    setTimeout(function(){document.getElementById('mask2').style.transition = 'block';},2100);
    setTimeout(function(){document.getElementById('obj11').style.top = '32%';},0);
    setTimeout(function(){document.getElementById('obj11').style.left = '0%';},0);
    setTimeout(function(){document.getElementById('obj11').style.scale = '1';},0);
    setTimeout(function(){document.getElementById('obj12').style.top = '20%';},0);
    setTimeout(function(){document.getElementById('obj12').style.scale = '1';},0);
    setTimeout(function(){document.getElementById('obj13').style.top = '40%';},0);
    setTimeout(function(){document.getElementById('obj13').style.scale = '1';},0);
    setTimeout(function(){document.getElementById('obj14').style.top = '75%';},0);
    setTimeout(function(){document.getElementById('obj14').style.left = '90%';},0);
    setTimeout(function(){document.getElementById('obj14').style.scale = '1';},0);
    setTimeout(function(){document.getElementById('obj15').style.top = '79%';},0);
    setTimeout(function(){document.getElementById('obj15').style.scale = '1';},0);
    setTimeout(function(){cursor_color = 0;},700);
    
    setTimeout(function(){type = 0;},1500);


}

function about_us_in(){
    type = 1;
    chapters_page_1(1);
    setTimeout(function(){document.getElementById('part_2').style.top = '0%';},0);
    setTimeout(function(){document.getElementById('bg').style.backgroundColor = '#101010';},0);
    setTimeout(function(){cursor_color = 1;},0);
    setTimeout(function(){document.getElementById('part_3').style.top = '110%';},0);
    setTimeout(function(){document.getElementById('obj6').style.top = '10%';},700);
    setTimeout(function(){document.getElementById('obj6').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('obj7').style.top = '25%';},700);
    setTimeout(function(){document.getElementById('obj7').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('obj8').style.top = '45%';},700);
    setTimeout(function(){document.getElementById('obj8').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('obj9').style.left = '97.5%';},700);
    setTimeout(function(){document.getElementById('obj9').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('obj10').style.top = '87%';},700);
    setTimeout(function(){document.getElementById('obj10').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('obj11').style.top = '37%';},0);
    setTimeout(function(){document.getElementById('obj11').style.left = '8%';},0);
    setTimeout(function(){document.getElementById('obj11').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj12').style.top = '25%';},0);
    setTimeout(function(){document.getElementById('obj12').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj13').style.top = '45%';},0);
    setTimeout(function(){document.getElementById('obj13').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj14').style.top = '80%';},0);
    setTimeout(function(){document.getElementById('obj14').style.left = '88%';},0);
    setTimeout(function(){document.getElementById('obj14').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('obj15').style.top = '84%';},0);
    setTimeout(function(){document.getElementById('obj15').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn_back').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('btn4').style.scale = '1';},900);
    setTimeout(function(){document.getElementById('btn5').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('ch1').style.left = '80px';},600);
    setTimeout(function(){document.getElementById('ch1').style.opacity = '0';},600);
    setTimeout(function(){document.getElementById('ch1_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch1_icon').style.scale = '0.3';},600);
    setTimeout(function(){document.getElementById('ch1_icon').style.left = '90px';},600);
    setTimeout(function(){document.getElementById('ch1_icon').style.top = '70px';},600);
    setTimeout(function(){document.getElementById('ch1_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1000);
    setTimeout(function(){document.getElementById('ch2').style.left = '440px';},400);
    setTimeout(function(){document.getElementById('ch2').style.opacity = '0';},400);
    setTimeout(function(){document.getElementById('ch2_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch2_icon').style.scale = '0.3';},400);
    setTimeout(function(){document.getElementById('ch2_icon').style.left = '90px';},400);
    setTimeout(function(){document.getElementById('ch2_icon').style.top = '70px';},400);
    setTimeout(function(){document.getElementById('ch2_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1000);
    setTimeout(function(){document.getElementById('ch3').style.left = '800px';},200);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '0';},200);
    setTimeout(function(){document.getElementById('ch3_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch3_icon').style.scale = '0.3';},200);
    setTimeout(function(){document.getElementById('ch3_icon').style.left = '90px';},200);
    setTimeout(function(){document.getElementById('ch3_icon').style.top = '70px';},200);
    setTimeout(function(){document.getElementById('ch3_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1000);
    setTimeout(function(){document.getElementById('ch4').style.left = '80px';},0);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('ch4_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch4_icon').style.scale = '0.3';},0);
    setTimeout(function(){document.getElementById('ch4_icon').style.left = '90px';},0);
    setTimeout(function(){document.getElementById('ch4_icon').style.top = '100px';},0);
    setTimeout(function(){document.getElementById('ch4_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1000);
    setTimeout(function(){document.getElementById('ch5').style.left = '440px';},0);
    setTimeout(function(){document.getElementById('ch5').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('ch5_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch5_icon').style.scale = '0.3';},0);
    setTimeout(function(){document.getElementById('ch5_icon').style.left = '90px';},0);
    setTimeout(function(){document.getElementById('ch5_icon').style.top = '100px';},0);
    setTimeout(function(){document.getElementById('ch5_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1000);
    setTimeout(function(){document.getElementById('ch6').style.left = '800px';},0);
    setTimeout(function(){document.getElementById('ch6').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('ch6_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch6_icon').style.scale = '0.3';},0);
    setTimeout(function(){document.getElementById('ch6_icon').style.left = '90px';},0);
    setTimeout(function(){document.getElementById('ch6_icon').style.top = '100px';},0);
    setTimeout(function(){document.getElementById('ch6_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1000);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('mask1').style.display = 'block';},2000);
    setTimeout(function(){document.getElementById('mask2').style.transition = 'block';},0);
    setTimeout(function(){document.getElementById('mask2').style.transition = 'block';},2000);
    setTimeout(function(){cursor_color = 1;},700);
    setTimeout(function(){type = 0;},1500);
}


function chapters_page_2(){
    type  = 1;
    setTimeout(function(){document.getElementById('btn7').disabled = true;},0);
    setTimeout(function(){document.getElementById('btn6').disabled = false;},1500);
    setTimeout(function(){document.getElementById('ch_g_1').style.left = '-980px';},0);
    setTimeout(function(){document.getElementById('ch1_icon').style.scale = '0.5';},300);
    setTimeout(function(){document.getElementById('ch1_icon').style.top = '100px';},300);
    setTimeout(function(){document.getElementById('ch2_icon').style.scale = '0.5';},600);
    setTimeout(function(){document.getElementById('ch2_icon').style.top = '100px';},600);
    setTimeout(function(){document.getElementById('ch3_icon').style.scale = '0.5';},800);
    setTimeout(function(){document.getElementById('ch3_icon').style.top = '100px';},800);
    setTimeout(function(){document.getElementById('ch_g_2').style.left = '100px';},300);
    setTimeout(function(){document.getElementById('ch4_icon').style.scale = '1';},600);
    setTimeout(function(){document.getElementById('ch4_icon').style.top = '50px';},600);
    setTimeout(function(){document.getElementById('ch5_icon').style.scale = '1';},900);
    setTimeout(function(){document.getElementById('ch5_icon').style.top = '50px';},900);
    setTimeout(function(){document.getElementById('ch6_icon').style.scale = '1';},1100);
    setTimeout(function(){document.getElementById('ch6_icon').style.top = '50px';},1100);
    setTimeout(function(){document.getElementById('mask1').style.display = 'block';},1500);
    setTimeout(function(){document.getElementById('mask2').style.display = 'none';},1500);
    setTimeout(function(){type = 0;},1500);
}

function chapters_page_1(e){
    type = 1;
    setTimeout(function(){document.getElementById('btn6').disabled = true;},0);
    setTimeout(function(){document.getElementById('btn7').disabled = false;},1500);
    setTimeout(function(){document.getElementById('ch_g_1').style.left = '100px';},300);
    setTimeout(function(){document.getElementById('ch3_icon').style.top = '50px';},600);
    setTimeout(function(){document.getElementById('ch2_icon').style.top = '50px';},900);
    setTimeout(function(){document.getElementById('ch1_icon').style.top = '50px';},600);
    setTimeout(function(){document.getElementById('ch_g_2').style.left = '1180px';},0);
    setTimeout(function(){document.getElementById('ch6_icon').style.scale = '0.5';},300);
    setTimeout(function(){document.getElementById('ch6_icon').style.top = '100px';},300);
    setTimeout(function(){document.getElementById('ch5_icon').style.scale = '0.5';},600);
    setTimeout(function(){document.getElementById('ch5_icon').style.top = '100px';},600);
    setTimeout(function(){document.getElementById('ch4_icon').style.scale = '0.5';},800);
    setTimeout(function(){document.getElementById('ch4_icon').style.top = '100px';},800);
    setTimeout(function(){document.getElementById('mask2').style.display = 'block';},1500);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},1500);
    setTimeout(function(){type = 0;},1500);
    if (e == 1){
        setTimeout(function(){document.getElementById('ch3_icon').style.scale = '0.3';},200);
        setTimeout(function(){document.getElementById('ch2_icon').style.scale = '0.3';},400);
        setTimeout(function(){document.getElementById('ch1_icon').style.scale = '0.3';},600);
    }
    else{
        setTimeout(function(){document.getElementById('ch3_icon').style.scale = '1';},600);
        setTimeout(function(){document.getElementById('ch2_icon').style.scale = '1';},900);
        setTimeout(function(){document.getElementById('ch1_icon').style.scale = '1';},1100);
    }
}

let type = 0;


function chapter1_hover1(){
    if (type == 0){
        document.getElementById('readmore1').style.top = '340px';
        document.getElementById('readmore1').style.height = '40px';
        document.getElementById('ch1_icon').style.top = '30px';
        document.getElementById('ch1_icon').style.scale = '1.1';
        document.getElementById('ch1_bg').style.boxShadow = 'rgba(210, 165, 250, 0.5) 0 7px 10px';
        document.getElementById('ch1_title').style.top = '250px';
        document.getElementById('ch1_subtitle').style.top = '310px';
    } 
}

function chapter1_hover2(){
    if (type == 0){
        document.getElementById('readmore1').style.top = '370px';
        document.getElementById('readmore1').style.height = '0px';
        document.getElementById('ch1_icon').style.top = '50px';
        document.getElementById('ch1_icon').style.scale = '1';
        document.getElementById('ch1_bg').style.boxShadow = 'rgba(210, 165, 250, 0.3) 0 5px 10px';
        document.getElementById('ch1_title').style.top = '280px';
        document.getElementById('ch1_subtitle').style.top = '340px';
    }
}

function chapter2_hover1(){
    if (type == 0){
        document.getElementById('readmore2').style.top = '340px';
        document.getElementById('readmore2').style.height = '40px';
        document.getElementById('ch2_icon').style.top = '30px';
        document.getElementById('ch2_icon').style.scale = '1.1';
        document.getElementById('ch2_bg').style.boxShadow = 'rgba(146, 219, 163, 0.5) 0 7px 10px';
        document.getElementById('ch2_title').style.top = '250px';
        document.getElementById('ch2_subtitle').style.top = '310px';
    } 
}

function chapter2_hover2(){
    if (type == 0){
        document.getElementById('readmore2').style.top = '370px';
        document.getElementById('readmore2').style.height = '0px';
        document.getElementById('ch2_icon').style.top = '50px';
        document.getElementById('ch2_icon').style.scale = '1';
        document.getElementById('ch2_bg').style.boxShadow = 'rgba(146, 219, 163, 0.3) 0 5px 10px';
        document.getElementById('ch2_title').style.top = '280px';
        document.getElementById('ch2_subtitle').style.top = '340px';
    }
}

function chapter3_hover1(){
    if (type == 0){
        document.getElementById('readmore3').style.top = '340px';
        document.getElementById('readmore3').style.height = '40px';
        document.getElementById('ch3_icon').style.top = '30px';
        document.getElementById('ch3_icon').style.scale = '1.1';
        document.getElementById('ch3_bg').style.boxShadow = 'rgba(168, 218, 220, 0.5) 0 7px 10px';
        document.getElementById('ch3_title').style.top = '250px';
        document.getElementById('ch3_subtitle').style.top = '310px';
    } 
}

function chapter3_hover2(){
    if (type == 0){
        document.getElementById('readmore3').style.top = '370px';
        document.getElementById('readmore3').style.height = '0px';
        document.getElementById('ch3_icon').style.top = '50px';
        document.getElementById('ch3_icon').style.scale = '1';
        document.getElementById('ch3_bg').style.boxShadow = 'rgba(168, 218, 220, 0.3) 0 5px 10px';
        document.getElementById('ch3_title').style.top = '280px';
        document.getElementById('ch3_subtitle').style.top = '340px';
    }
}

function chapter4_hover1(){
    if (type == 0){
        document.getElementById('readmore4').style.top = '340px';
        document.getElementById('readmore4').style.height = '40px';
        document.getElementById('ch4_icon').style.top = '30px';
        document.getElementById('ch4_icon').style.scale = '1.1';
        document.getElementById('ch4_bg').style.boxShadow = 'rgba(255, 173, 173, 0.5) 0 7px 10px';
        document.getElementById('ch4_title').style.top = '250px';
        document.getElementById('ch4_subtitle').style.top = '310px';
    } 
}

function chapter4_hover2(){
    if (type == 0){
        document.getElementById('readmore4').style.top = '370px';
        document.getElementById('readmore4').style.height = '0px';
        document.getElementById('ch4_icon').style.top = '50px';
        document.getElementById('ch4_icon').style.scale = '1';
        document.getElementById('ch4_bg').style.boxShadow = 'rgba(255, 173, 173, 0.3) 0 5px 10px';
        document.getElementById('ch4_title').style.top = '280px';
        document.getElementById('ch4_subtitle').style.top = '340px';
    }
}

function chapter5_hover1(){
    if (type == 0){
        document.getElementById('readmore5').style.top = '340px';
        document.getElementById('readmore5').style.height = '40px';
        document.getElementById('ch5_icon').style.top = '30px';
        document.getElementById('ch5_icon').style.scale = '1.1';
        document.getElementById('ch5_bg').style.boxShadow = 'rgba(243, 245, 194, 0.5) 0 7px 10px';
        document.getElementById('ch5_title').style.top = '250px';
        document.getElementById('ch5_subtitle').style.top = '310px';
    } 
}

function chapter5_hover2(){
    if (type == 0){
        document.getElementById('readmore5').style.top = '370px';
        document.getElementById('readmore5').style.height = '0px';
        document.getElementById('ch5_icon').style.top = '50px';
        document.getElementById('ch5_icon').style.scale = '1';
        document.getElementById('ch5_bg').style.boxShadow = 'rgba(243, 245, 194, 0.3) 0 5px 10px';
        document.getElementById('ch5_title').style.top = '280px';
        document.getElementById('ch5_subtitle').style.top = '340px';
    }
}

function chapter6_hover1(){
    if (type == 0){
        document.getElementById('readmore6').style.top = '340px';
        document.getElementById('readmore6').style.height = '40px';
        document.getElementById('ch6_icon').style.top = '30px';
        document.getElementById('ch6_icon').style.scale = '1.1';
        document.getElementById('ch6_bg').style.boxShadow = 'rgba(241, 187, 142, 0.5) 0 7px 10px';
        document.getElementById('ch6_title').style.top = '250px';
        document.getElementById('ch6_subtitle').style.top = '310px';
    } 
}

function chapter6_hover2(){
    if (type == 0){
        document.getElementById('readmore6').style.top = '370px';
        document.getElementById('readmore6').style.height = '0px';
        document.getElementById('ch6_icon').style.top = '50px';
        document.getElementById('ch6_icon').style.scale = '1';
        document.getElementById('ch6_bg').style.boxShadow = 'rgba(241, 187, 142, 0.3) 0 5px 10px';
        document.getElementById('ch6_title').style.top = '280px';
        document.getElementById('ch6_subtitle').style.top = '340px';
    }
}

function chapter1_in(){
    type = 1;
    setTimeout(function(){document.getElementById('btn5').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn6').style.left = '73%';},0);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn6').disabled = true;},0);
    setTimeout(function(){document.getElementById('btn7').style.left = '90%';},0);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn7').disabled = true;},0);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('mask2').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('ch1').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch2').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch3').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore1').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore2').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore3').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore4').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch2').style.top = '500px';},300);
    setTimeout(function(){document.getElementById('ch2').style.opacity = '0';},300);
    setTimeout(function(){document.getElementById('ch3').style.top = '500px';},500);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch4').style.top = '500px';},600);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '0';},600);
    setTimeout(function(){document.getElementById('ch_next1').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next2').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next3').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next4').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next5').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch1_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch1_icon').style.scale = '1.5';},300);
    setTimeout(function(){document.getElementById('ch1_icon').style.left = '120px';},500);
    setTimeout(function(){document.getElementById('ch1_icon').style.top = '60px';},500);
    setTimeout(function(){document.getElementById('ch1_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch1_bg').style.scale = '5';},500);
    setTimeout(function(){document.getElementById('ch1_bg').style.left = '570px';},500);
    setTimeout(function(){document.getElementById('ch1_bg').style.top = '420px';},500);
    setTimeout(function(){document.getElementById('readmore1').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore1').style.left = '300px';},500);
    setTimeout(function(){document.getElementById('readmore1').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch1_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch1_title').style.scale = '1 0';},500);
    setTimeout(function(){document.getElementById('ch1_title').style.left = '440px';},500);
    setTimeout(function(){document.getElementById('ch1_title').style.top = '-60px';},500);
    setTimeout(function(){document.getElementById('ch1_title').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.scale = '1.5';},500);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.left = '530px';},500);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.width = '500px';},500);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.fontSize = '28px';},500);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.color = '#313131';},500);
    setTimeout(function(){document.getElementById('ch_next1').style.top = '420px';},1200);
    setTimeout(function(){document.getElementById('ch_next1').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('ch_g_2').style.display = 'none';},1200);
    setTimeout(function(){document.getElementById('ch1_slide_2').style.top = '305px';},1400);
    setTimeout(function(){document.getElementById('ch1_slide_2').style.opacity = '1';},1400);
    setTimeout(function(){document.getElementById('ch1_slide_1').style.top = '140px';},1600);
    setTimeout(function(){document.getElementById('ch1_slide_1').style.opacity = '1';},1600);
    setTimeout(function(){document.getElementById('close1').style.left = '1050px';},1200);
    setTimeout(function(){document.getElementById('close1').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('ch1_content').style.height = '360px';},2000);
    setTimeout(function(){document.getElementById('ch1_content_class1').style.top = '20px';},1800);
    setTimeout(function(){document.getElementById('ch1_content_class2').style.top = '100px';},2000);
    setTimeout(function(){document.getElementById('ch1_content_class3').style.top = '180px';},2200);
}

function chapter1_out(){

    if (document.getElementById('ch1_content_1_page').style.height == '280px'){
        a = 1;
        ch1_content_1();
    }
    if (document.getElementById('ch1_content_2_page').style.height == '280px'){
        a = 1;
        ch1_content_2();
    }
    if (document.getElementById('ch1_content_3_page').style.height == '280px'){
        a = 1;
        ch1_content_3();
    }
    setTimeout(function(){document.getElementById('close1').style.left = '1090px';},0);
    setTimeout(function(){document.getElementById('close1').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('ch_g_2').style.display = 'block';},0);
    setTimeout(function(){document.getElementById('ch1_content').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('ch1_content_class1').style.top = '360px';},400);
    setTimeout(function(){document.getElementById('ch1_content_class2').style.top = '360px';},200);
    setTimeout(function(){document.getElementById('ch1_content_class3').style.top = '360px';},0);
    setTimeout(function(){document.getElementById('ch_next1').style.top = '320px';},400);
    setTimeout(function(){document.getElementById('ch_next1').style.opacity = '0';},400);
    setTimeout(function(){document.getElementById('ch_next1').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next2').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next3').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next4').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next5').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch1_slide_2').style.top = '205px';},200);
    setTimeout(function(){document.getElementById('ch1_slide_2').style.opacity = '0';},200);
    setTimeout(function(){document.getElementById('ch1_slide_1').style.top = '40px';},0);
    setTimeout(function(){document.getElementById('ch1_slide_1').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('mask2').style.display = 'block';},1500);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},1500);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.top = '340px';},300);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.width = '500px';},300);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.fontSize = '14px';},300);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.color = '#575757';},300);
    setTimeout(function(){document.getElementById('ch1_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch1_bg').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch1_bg').style.left = '20px';},300);
    setTimeout(function(){document.getElementById('ch1_bg').style.top = '160px';},300);
    setTimeout(function(){document.getElementById('readmore1').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore1').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore1').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('readmore1').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('readmore1').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('readmore1').disabled = false;},1300);
    setTimeout(function(){document.getElementById('ch1_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch1_title').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch1_title').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch1_title').style.top = '280px';},300);
    setTimeout(function(){document.getElementById('ch1_title').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('ch1_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch1_icon').style.scale = '1';},500);
    setTimeout(function(){document.getElementById('ch1_icon').style.left = '50px';},300);
    setTimeout(function(){document.getElementById('ch1_icon').style.top = '50px';},300);
    setTimeout(function(){document.getElementById('ch4').style.top = '0px';},400);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '1';},400);
    setTimeout(function(){document.getElementById('ch3').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '1';},500);
    setTimeout(function(){document.getElementById('ch2').style.top = '0px';},600);
    setTimeout(function(){document.getElementById('ch2').style.opacity = '1';},600);
    setTimeout(function(){document.getElementById('btn5').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('btn6').style.left = '78%';},700);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn6').disabled = false;},700);
    setTimeout(function(){document.getElementById('btn7').style.left = '85%';},700);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn7').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch1').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch2').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch3').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore1').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore2').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore3').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore4').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch1_subtitle').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore1').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore1').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch1_title').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch1_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){type = 0;},1500);
}


function chapter2_in(){
    type = 1;
    
    setTimeout(function(){document.getElementById('btn5').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn6').style.left = '73%';},0);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn6').disabled = true;},0);
    setTimeout(function(){document.getElementById('btn7').style.left = '90%';},0);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn7').disabled = true;},0);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('mask2').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('ch1').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch2').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch3').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore1').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore2').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore3').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore4').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch3').style.top = '500px';},300);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '0';},300);
    setTimeout(function(){document.getElementById('ch4').style.top = '500px';},600);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '0';},600);
    setTimeout(function(){document.getElementById('ch1').style.top = '500px';},500);
    setTimeout(function(){document.getElementById('ch1').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch2_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch2_icon').style.scale = '1.5';},300);
    setTimeout(function(){document.getElementById('ch2_icon').style.left = '-220px';},500);
    setTimeout(function(){document.getElementById('ch2_icon').style.top = '60px';},500);
    setTimeout(function(){document.getElementById('ch2_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch2_bg').style.scale = '5';},500);
    setTimeout(function(){document.getElementById('ch2_bg').style.left = '230px';},500);
    setTimeout(function(){document.getElementById('ch2_bg').style.top = '420px';},500);
    setTimeout(function(){document.getElementById('readmore2').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore2').style.left = '300px';},500);
    setTimeout(function(){document.getElementById('readmore2').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch2_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch2_title').style.scale = '1 0';},500);
    setTimeout(function(){document.getElementById('ch2_title').style.left = '100px';},500);
    setTimeout(function(){document.getElementById('ch2_title').style.top = '-60px';},500);
    setTimeout(function(){document.getElementById('ch2_title').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.scale = '1.5';},500);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.left = '190px';},500);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.width = '500px';},500);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.fontSize = '28px';},500);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.color = '#313131';},500);
    setTimeout(function(){document.getElementById('ch_next2').style.top = '420px';},1200);
    setTimeout(function(){document.getElementById('ch_next2').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('ch_next2').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next1').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next3').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next4').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next5').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch2_slide_2').style.top = '305px';},1400);
    setTimeout(function(){document.getElementById('ch2_slide_2').style.opacity = '1';},1400);
    setTimeout(function(){document.getElementById('ch2_slide_1').style.top = '140px';},1600);
    setTimeout(function(){document.getElementById('ch2_slide_1').style.opacity = '1';},1600);
    setTimeout(function(){document.getElementById('close2').style.left = '710px';},1200);
    setTimeout(function(){document.getElementById('close2').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('ch_g_2').style.display = 'none';},1200);
    setTimeout(function(){document.getElementById('ch2_content').style.height = '360px';},2000);
    setTimeout(function(){document.getElementById('ch2_content_class1').style.top = '20px';},1800);
    setTimeout(function(){document.getElementById('ch2_content_class2').style.top = '100px';},2000);
}

function chapter2_out(){
    
    if (document.getElementById('ch2_content_1_page').style.height == '280px'){
        a = 1;
        ch2_content_1();
    }
    if (document.getElementById('ch2_content_2_page').style.height == '280px'){
        a = 1;
        ch2_content_2();
    }
    setTimeout(function(){document.getElementById('close2').style.left = '750px';},0);
    setTimeout(function(){document.getElementById('close2').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('ch_g_2').style.display = 'block';},0);
    setTimeout(function(){document.getElementById('ch2_content').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('ch2_content_class1').style.top = '360px';},400);
    setTimeout(function(){document.getElementById('ch2_content_class2').style.top = '360px';},200);
    setTimeout(function(){document.getElementById('ch_next2').style.top = '320px';},400);
    setTimeout(function(){document.getElementById('ch_next2').style.opacity = '0';},400);
    setTimeout(function(){document.getElementById('ch_next1').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next2').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next3').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next4').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next5').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch2_slide_2').style.top = '205px';},200);
    setTimeout(function(){document.getElementById('ch2_slide_2').style.opacity = '0';},200);
    setTimeout(function(){document.getElementById('ch2_slide_1').style.top = '40px';},0);
    setTimeout(function(){document.getElementById('ch2_slide_1').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('mask2').style.display = 'block';},1500);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},1500);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.top = '340px';},300);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.width = '500px';},300);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.fontSize = '14px';},300);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.color = '#575757';},300);
    setTimeout(function(){document.getElementById('ch2_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch2_bg').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch2_bg').style.left = '20px';},300);
    setTimeout(function(){document.getElementById('ch2_bg').style.top = '160px';},300);
    setTimeout(function(){document.getElementById('readmore2').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore2').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore2').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('readmore2').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('readmore2').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('readmore2').disabled = false;},1300);
    setTimeout(function(){document.getElementById('ch2_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch2_title').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch2_title').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch2_title').style.top = '280px';},300);
    setTimeout(function(){document.getElementById('ch2_title').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('ch2_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch2_icon').style.scale = '1';},500);
    setTimeout(function(){document.getElementById('ch2_icon').style.left = '50px';},300);
    setTimeout(function(){document.getElementById('ch2_icon').style.top = '50px';},300);
    setTimeout(function(){document.getElementById('ch1').style.top = '0px';},400);
    setTimeout(function(){document.getElementById('ch1').style.opacity = '1';},400);
    setTimeout(function(){document.getElementById('ch4').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '1';},500);
    setTimeout(function(){document.getElementById('ch3').style.top = '0px';},600);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '1';},600);
    setTimeout(function(){document.getElementById('btn5').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('btn6').style.left = '78%';},700);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn6').disabled = false;},700);
    setTimeout(function(){document.getElementById('btn7').style.left = '85%';},700);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn7').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch1').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch2').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch3').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore1').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore2').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore3').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore4').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch2_subtitle').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore2').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore2').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch2_title').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch2_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){type = 0;},1500);
}

function chapter3_in(){
    type = 1;
    setTimeout(function(){document.getElementById('btn5').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn6').style.left = '73%';},0);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn6').disabled = true;},0);
    setTimeout(function(){document.getElementById('btn7').style.left = '90%';},0);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn7').disabled = true;},0);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('mask2').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('ch1').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch2').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch3').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore1').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore2').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore3').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore4').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch2').style.top = '500px';},300);
    setTimeout(function(){document.getElementById('ch2').style.opacity = '0';},300);
    setTimeout(function(){document.getElementById('ch4').style.top = '500px';},600);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '0';},600);
    setTimeout(function(){document.getElementById('ch1').style.top = '500px';},500);
    setTimeout(function(){document.getElementById('ch1').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch3_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch3_icon').style.scale = '1.5';},300);
    setTimeout(function(){document.getElementById('ch3_icon').style.left = '-580px';},500);
    setTimeout(function(){document.getElementById('ch3_icon').style.top = '60px';},500);
    setTimeout(function(){document.getElementById('ch3_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch3_bg').style.scale = '5';},500);
    setTimeout(function(){document.getElementById('ch3_bg').style.left = '-130px';},500);
    setTimeout(function(){document.getElementById('ch3_bg').style.top = '420px';},500);
    setTimeout(function(){document.getElementById('readmore3').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore3').style.left = '300px';},500);
    setTimeout(function(){document.getElementById('readmore3').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch3_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch3_title').style.scale = '1 0';},500);
    setTimeout(function(){document.getElementById('ch3_title').style.left = '-240px';},500);
    setTimeout(function(){document.getElementById('ch3_title').style.top = '-60px';},500);
    setTimeout(function(){document.getElementById('ch3_title').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.scale = '1.5';},500);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.left = '-150px';},500);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.width = '500px';},500);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.fontSize = '28px';},500);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.color = '#313131';},500);
    setTimeout(function(){document.getElementById('ch_next3').style.top = '420px';},1200);
    setTimeout(function(){document.getElementById('ch_next3').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('ch_next1').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next2').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next3').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next4').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next5').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch3_slide_2').style.top = '305px';},1400);
    setTimeout(function(){document.getElementById('ch3_slide_2').style.opacity = '1';},1400);
    setTimeout(function(){document.getElementById('ch3_slide_1').style.top = '140px';},1600);
    setTimeout(function(){document.getElementById('ch3_slide_1').style.opacity = '1';},1600);
    setTimeout(function(){document.getElementById('close3').style.left = '350px';},1200);
    setTimeout(function(){document.getElementById('close3').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('ch_g_2').style.display = 'none';},1200);
    setTimeout(function(){document.getElementById('ch3_content').style.height = '360px';},2000);
    setTimeout(function(){document.getElementById('ch3_content_class1').style.top = '20px';},1800);
    setTimeout(function(){document.getElementById('ch3_content_class2').style.top = '100px';},2000);
    setTimeout(function(){document.getElementById('ch3_content_class3').style.top = '180px';},2200);
}

function chapter3_out(){
    
    if (document.getElementById('ch3_content_1_page').style.height == '280px'){
        a = 1;
        ch3_content_1();
    }
    if (document.getElementById('ch3_content_2_page').style.height == '280px'){
        a = 1;
        ch3_content_2();
    }
    if (document.getElementById('ch3_content_3_page').style.height == '280px'){
        a = 1;
        ch3_content_3();
    }
    setTimeout(function(){document.getElementById('close3').style.left = '390px';},0);
    setTimeout(function(){document.getElementById('close3').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('ch_g_2').style.display = 'block';},0);
    setTimeout(function(){document.getElementById('ch3_content').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('ch3_content_class1').style.top = '360px';},400);
    setTimeout(function(){document.getElementById('ch3_content_class2').style.top = '360px';},200);
    setTimeout(function(){document.getElementById('ch3_content_class3').style.top = '360px';},0);
    setTimeout(function(){document.getElementById('ch_next3').style.top = '320px';},400);
    setTimeout(function(){document.getElementById('ch_next3').style.opacity = '0';},400);
    setTimeout(function(){document.getElementById('ch_next1').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next2').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next3').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next4').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next5').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch3_slide_2').style.top = '205px';},200);
    setTimeout(function(){document.getElementById('ch3_slide_2').style.opacity = '0';},200);
    setTimeout(function(){document.getElementById('ch3_slide_1').style.top = '40px';},0);
    setTimeout(function(){document.getElementById('ch3_slide_1').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('mask2').style.display = 'block';},1500);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},1500);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.top = '340px';},300);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.width = '500px';},300);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.fontSize = '14px';},300);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.color = '#575757';},300);
    setTimeout(function(){document.getElementById('ch3_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch3_bg').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch3_bg').style.left = '20px';},300);
    setTimeout(function(){document.getElementById('ch3_bg').style.top = '160px';},300);
    setTimeout(function(){document.getElementById('readmore3').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore3').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore3').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('readmore3').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('readmore3').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('readmore3').disabled = false;},1300);
    setTimeout(function(){document.getElementById('ch3_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch3_title').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch3_title').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch3_title').style.top = '280px';},300);
    setTimeout(function(){document.getElementById('ch3_title').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('ch3_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch3_icon').style.scale = '1';},500);
    setTimeout(function(){document.getElementById('ch3_icon').style.left = '50px';},300);
    setTimeout(function(){document.getElementById('ch3_icon').style.top = '50px';},300);
    setTimeout(function(){document.getElementById('ch1').style.top = '0px';},400);
    setTimeout(function(){document.getElementById('ch1').style.opacity = '1';},400);
    setTimeout(function(){document.getElementById('ch4').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '1';},500);
    setTimeout(function(){document.getElementById('ch2').style.top = '0px';},600);
    setTimeout(function(){document.getElementById('ch2').style.opacity = '1';},600);
    setTimeout(function(){document.getElementById('btn5').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('btn6').style.left = '78%';},700);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn6').disabled = false;},700);
    setTimeout(function(){document.getElementById('btn7').style.left = '85%';},700);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn7').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch1').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch2').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch3').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore1').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore2').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore3').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore4').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch3_subtitle').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore3').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore3').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch3_title').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch3_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){type = 0;},1500);
}


function chapter4_in(){
    type = 1;
    setTimeout(function(){document.getElementById('btn5').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn6').style.left = '73%';},0);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn6').disabled = true;},0);
    setTimeout(function(){document.getElementById('btn7').style.left = '90%';},0);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn7').disabled = true;},0);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('mask2').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('ch4').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch5').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch6').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore3').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore4').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore5').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore6').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch3').style.top = '500px';},300);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '0';},300);
    setTimeout(function(){document.getElementById('ch5').style.top = '500px';},500);
    setTimeout(function(){document.getElementById('ch5').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch6').style.top = '500px';},600);
    setTimeout(function(){document.getElementById('ch6').style.opacity = '0';},600);
    setTimeout(function(){document.getElementById('ch4_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch4_icon').style.scale = '1.5';},300);
    setTimeout(function(){document.getElementById('ch4_icon').style.left = '120px';},500);
    setTimeout(function(){document.getElementById('ch4_icon').style.top = '60px';},500);
    setTimeout(function(){document.getElementById('ch4_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch4_bg').style.scale = '5';},500);
    setTimeout(function(){document.getElementById('ch4_bg').style.left = '570px';},500);
    setTimeout(function(){document.getElementById('ch4_bg').style.top = '420px';},500);
    setTimeout(function(){document.getElementById('readmore4').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore4').style.left = '300px';},500);
    setTimeout(function(){document.getElementById('readmore4').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch4_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch4_title').style.scale = '1 0';},500);
    setTimeout(function(){document.getElementById('ch4_title').style.left = '440px';},500);
    setTimeout(function(){document.getElementById('ch4_title').style.top = '-60px';},500);
    setTimeout(function(){document.getElementById('ch4_title').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.scale = '1.5';},500);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.left = '530px';},500);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.width = '500px';},500);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.fontSize = '28px';},500);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.color = '#313131';},500);
    setTimeout(function(){document.getElementById('ch_next4').style.top = '420px';},1200);
    setTimeout(function(){document.getElementById('ch_next4').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('ch_next1').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next2').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next3').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next4').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next5').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch4_slide_2').style.top = '305px';},1400);
    setTimeout(function(){document.getElementById('ch4_slide_2').style.opacity = '1';},1400);
    setTimeout(function(){document.getElementById('ch4_slide_1').style.top = '140px';},1600);
    setTimeout(function(){document.getElementById('ch4_slide_1').style.opacity = '1';},1600);
    setTimeout(function(){document.getElementById('close4').style.left = '1050px';},1200);
    setTimeout(function(){document.getElementById('close4').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('ch4_content').style.height = '360px';},2000);
    setTimeout(function(){document.getElementById('ch4_content_class1').style.top = '20px';},1800);
    setTimeout(function(){document.getElementById('ch4_content_class2').style.top = '100px';},2000);
    setTimeout(function(){document.getElementById('ch4_content_class3').style.top = '180px';},2200);
}

function chapter4_out(){
    
    if (document.getElementById('ch4_content_1_page').style.height == '280px'){
        a = 1;
        ch4_content_1();
    }
    if (document.getElementById('ch4_content_2_page').style.height == '280px'){
        a = 1;
        ch4_content_2();
    }
    if (document.getElementById('ch4_content_3_page').style.height == '280px'){
        a = 1;
        ch4_content_3();
    }
    setTimeout(function(){document.getElementById('close4').style.left = '1090px';},0);
    setTimeout(function(){document.getElementById('close4').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('ch4_content').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('ch4_content_class1').style.top = '360px';},400);
    setTimeout(function(){document.getElementById('ch4_content_class2').style.top = '360px';},200);
    setTimeout(function(){document.getElementById('ch4_content_class3').style.top = '360px';},0);
    setTimeout(function(){document.getElementById('ch_next4').style.top = '320px';},400);
    setTimeout(function(){document.getElementById('ch_next4').style.opacity = '0';},400);
    setTimeout(function(){document.getElementById('ch_next1').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next2').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next3').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next4').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next5').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch4_slide_2').style.top = '205px';},200);
    setTimeout(function(){document.getElementById('ch4_slide_2').style.opacity = '0';},200);
    setTimeout(function(){document.getElementById('ch4_slide_1').style.top = '40px';},0);
    setTimeout(function(){document.getElementById('ch4_slide_1').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('mask1').style.display = 'block';},1500);
    setTimeout(function(){document.getElementById('mask2').style.display = 'none';},1500);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.top = '340px';},300);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.width = '500px';},300);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.fontSize = '14px';},300);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.color = '#575757';},300);
    setTimeout(function(){document.getElementById('ch4_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch4_bg').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch4_bg').style.left = '20px';},300);
    setTimeout(function(){document.getElementById('ch4_bg').style.top = '160px';},300);
    setTimeout(function(){document.getElementById('readmore4').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore4').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore4').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('readmore4').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('readmore4').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('readmore4').disabled = false;},1300);
    setTimeout(function(){document.getElementById('ch4_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch4_title').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch4_title').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch4_title').style.top = '280px';},300);
    setTimeout(function(){document.getElementById('ch4_title').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('ch4_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch4_icon').style.scale = '1';},500);
    setTimeout(function(){document.getElementById('ch4_icon').style.left = '50px';},300);
    setTimeout(function(){document.getElementById('ch4_icon').style.top = '50px';},300);
    setTimeout(function(){document.getElementById('ch6').style.top = '0px';},400);
    setTimeout(function(){document.getElementById('ch6').style.opacity = '1';},400);
    setTimeout(function(){document.getElementById('ch5').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch5').style.opacity = '1';},500);
    setTimeout(function(){document.getElementById('ch3').style.top = '0px';},600);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '1';},600);
    setTimeout(function(){document.getElementById('btn5').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('btn6').style.left = '78%';},700);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn6').disabled = false;},700);
    setTimeout(function(){document.getElementById('btn7').style.left = '85%';},700);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn7').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch4').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch5').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch6').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore3').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore4').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore5').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore6').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch4_subtitle').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore4').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore4').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch4_title').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch4_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){type = 0;},1500);
}


function chapter5_in(){
    type = 1;
    setTimeout(function(){document.getElementById('btn5').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn6').style.left = '73%';},0);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn6').disabled = true;},0);
    setTimeout(function(){document.getElementById('btn7').style.left = '90%';},0);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn7').disabled = true;},0);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('mask2').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('ch4').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch5').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch6').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore3').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore4').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore5').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore6').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch4').style.top = '500px';},300);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '0';},300);
    setTimeout(function(){document.getElementById('ch6').style.top = '500px';},600);
    setTimeout(function(){document.getElementById('ch6').style.opacity = '0';},600);
    setTimeout(function(){document.getElementById('ch3').style.top = '500px';},500);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch5_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch5_icon').style.scale = '1.5';},300);
    setTimeout(function(){document.getElementById('ch5_icon').style.left = '-220px';},500);
    setTimeout(function(){document.getElementById('ch5_icon').style.top = '60px';},500);
    setTimeout(function(){document.getElementById('ch5_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch5_bg').style.scale = '5';},500);
    setTimeout(function(){document.getElementById('ch5_bg').style.left = '230px';},500);
    setTimeout(function(){document.getElementById('ch5_bg').style.top = '420px';},500);
    setTimeout(function(){document.getElementById('readmore5').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore5').style.left = '300px';},500);
    setTimeout(function(){document.getElementById('readmore5').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch5_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch5_title').style.scale = '1 0';},500);
    setTimeout(function(){document.getElementById('ch5_title').style.left = '100px';},500);
    setTimeout(function(){document.getElementById('ch5_title').style.top = '-60px';},500);
    setTimeout(function(){document.getElementById('ch5_title').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.scale = '1.5';},500);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.left = '190px';},500);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.width = '500px';},500);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.fontSize = '28px';},500);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.color = '#313131';},500);
    setTimeout(function(){document.getElementById('ch_next5').style.top = '420px';},1200);
    setTimeout(function(){document.getElementById('ch_next5').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('ch_next1').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next2').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next3').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next4').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch_next5').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch5_slide_2').style.top = '305px';},1400);
    setTimeout(function(){document.getElementById('ch5_slide_2').style.opacity = '1';},1400);
    setTimeout(function(){document.getElementById('ch5_slide_1').style.top = '140px';},1600);
    setTimeout(function(){document.getElementById('ch5_slide_1').style.opacity = '1';},1600);
    setTimeout(function(){document.getElementById('close5').style.left = '710px';},1200);
    setTimeout(function(){document.getElementById('close5').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('ch5_content').style.height = '360px';},2000);
    setTimeout(function(){document.getElementById('ch5_content_class1').style.top = '20px';},1800);
    setTimeout(function(){document.getElementById('ch5_content_class2').style.top = '100px';},2000);
    setTimeout(function(){document.getElementById('ch5_content_class3').style.top = '180px';},2200);
}

function chapter5_out(){
    
    if (document.getElementById('ch5_content_1_page').style.height == '280px'){
        a = 1;
        ch5_content_1();
    }
    if (document.getElementById('ch5_content_2_page').style.height == '280px'){
        a = 1;
        ch5_content_2();
    }
    if (document.getElementById('ch5_content_3_page').style.height == '280px'){
        a = 1;
        ch5_content_3();
    }
    setTimeout(function(){document.getElementById('close5').style.left = '750px';},0);
    setTimeout(function(){document.getElementById('close5').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('ch5_content').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('ch5_content_class1').style.top = '360px';},400);
    setTimeout(function(){document.getElementById('ch5_content_class2').style.top = '360px';},200);
    setTimeout(function(){document.getElementById('ch5_content_class3').style.top = '360px';},0);
    setTimeout(function(){document.getElementById('ch_next5').style.top = '320px';},400);
    setTimeout(function(){document.getElementById('ch_next5').style.opacity = '0';},400);
    setTimeout(function(){document.getElementById('ch_next1').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next2').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next3').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next4').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch_next5').disabled = false;},0);
    setTimeout(function(){document.getElementById('ch5_slide_2').style.top = '205px';},200);
    setTimeout(function(){document.getElementById('ch5_slide_2').style.opacity = '0';},200);
    setTimeout(function(){document.getElementById('ch5_slide_1').style.top = '40px';},0);
    setTimeout(function(){document.getElementById('ch5_slide_1').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('mask1').style.display = 'block';},1500);
    setTimeout(function(){document.getElementById('mask2').style.display = 'none';},1500);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.top = '340px';},300);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.width = '500px';},300);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.fontSize = '14px';},300);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.color = '#575757';},300);
    setTimeout(function(){document.getElementById('ch5_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch5_bg').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch5_bg').style.left = '20px';},300);
    setTimeout(function(){document.getElementById('ch5_bg').style.top = '160px';},300);
    setTimeout(function(){document.getElementById('readmore5').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore5').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore5').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('readmore5').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('readmore5').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('readmore5').disabled = false;},1300);
    setTimeout(function(){document.getElementById('ch5_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch5_title').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch5_title').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch5_title').style.top = '280px';},300);
    setTimeout(function(){document.getElementById('ch5_title').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('ch5_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch5_icon').style.scale = '1';},500);
    setTimeout(function(){document.getElementById('ch5_icon').style.left = '50px';},300);
    setTimeout(function(){document.getElementById('ch5_icon').style.top = '50px';},300);
    setTimeout(function(){document.getElementById('ch3').style.top = '0px';},400);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '1';},400);
    setTimeout(function(){document.getElementById('ch6').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch6').style.opacity = '1';},500);
    setTimeout(function(){document.getElementById('ch4').style.top = '0px';},600);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '1';},600);
    setTimeout(function(){document.getElementById('btn5').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('btn6').style.left = '78%';},700);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn6').disabled = false;},700);
    setTimeout(function(){document.getElementById('btn7').style.left = '85%';},700);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn7').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch4').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch5').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch6').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore3').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore4').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore5').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore6').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch5_subtitle').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore5').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore5').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch5_title').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch5_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){type = 0;},1500);
}

function chapter6_in(){
    type = 1;
    setTimeout(function(){document.getElementById('btn5').style.scale = '0';},0);
    setTimeout(function(){document.getElementById('btn6').style.left = '73%';},0);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn6').disabled = true;},0);
    setTimeout(function(){document.getElementById('btn7').style.left = '90%';},0);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('btn7').disabled = true;},0);
    setTimeout(function(){document.getElementById('mask1').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('mask2').style.display = 'none';},0);
    setTimeout(function(){document.getElementById('ch4').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch5').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch6').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore3').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore4').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore5').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore6').disabled = true;},0);
    setTimeout(function(){document.getElementById('ch5').style.top = '500px';},300);
    setTimeout(function(){document.getElementById('ch5').style.opacity = '0';},300);
    setTimeout(function(){document.getElementById('ch4').style.top = '500px';},500);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch3').style.top = '500px';},600);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '0';},600);
    setTimeout(function(){document.getElementById('ch6_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch6_icon').style.scale = '1.5';},300);
    setTimeout(function(){document.getElementById('ch6_icon').style.left = '-580px';},500);
    setTimeout(function(){document.getElementById('ch6_icon').style.top = '60px';},500);
    setTimeout(function(){document.getElementById('ch6_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch6_bg').style.scale = '5';},500);
    setTimeout(function(){document.getElementById('ch6_bg').style.left = '-130px';},500);
    setTimeout(function(){document.getElementById('ch6_bg').style.top = '420px';},500);
    setTimeout(function(){document.getElementById('readmore6').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore6').style.left = '300px';},500);
    setTimeout(function(){document.getElementById('readmore6').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch6_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch6_title').style.scale = '1 0';},500);
    setTimeout(function(){document.getElementById('ch6_title').style.left = '-240px';},500);
    setTimeout(function(){document.getElementById('ch6_title').style.top = '-60px';},500);
    setTimeout(function(){document.getElementById('ch6_title').style.opacity = '0';},500);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.scale = '1.5';},500);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.left = '-150px';},500);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.width = '500px';},500);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.fontSize = '28px';},500);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.color = '#313131';},500);
    setTimeout(function(){document.getElementById('ch6_slide_1').style.top = '140px';},1200);
    setTimeout(function(){document.getElementById('ch6_slide_1').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('close6').style.left = '350px';},1200);
    setTimeout(function(){document.getElementById('close6').style.opacity = '1';},1200);
    setTimeout(function(){document.getElementById('ch6_content').style.height = '360px';},2000);
    setTimeout(function(){document.getElementById('ch6_content_class1').style.top = '20px';},1800);
    setTimeout(function(){document.getElementById('ch6_content_class2').style.top = '100px';},2000);
    setTimeout(function(){document.getElementById('ch6_content_class3').style.top = '180px';},2200);
}

function chapter6_out(){
    
    if (document.getElementById('ch6_content_1_page').style.height == '280px'){
        a = 1;
        ch6_content_1();
    }
    if (document.getElementById('ch6_content_2_page').style.height == '280px'){
        a = 1;
        ch6_content_2();
    }
    if (document.getElementById('ch6_content_3_page').style.height == '280px'){
        a = 1;
        ch6_content_3();
    }
    setTimeout(function(){document.getElementById('close6').style.left = '390px';},0);
    setTimeout(function(){document.getElementById('close6').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('ch6_content').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('ch6_content_class1').style.top = '360px';},400);
    setTimeout(function(){document.getElementById('ch6_content_class2').style.top = '360px';},200);
    setTimeout(function(){document.getElementById('ch6_content_class3').style.top = '360px';},0);
    setTimeout(function(){document.getElementById('ch6_slide_1').style.top = '40px';},0);
    setTimeout(function(){document.getElementById('ch6_slide_1').style.opacity = '0';},0);
    setTimeout(function(){document.getElementById('mask1').style.display = 'block';},1500);
    setTimeout(function(){document.getElementById('mask2').style.display = 'none';},1500);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.top = '340px';},300);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.width = '500px';},300);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.fontSize = '14px';},300);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.color = '#575757';},300);
    setTimeout(function(){document.getElementById('ch6_bg').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch6_bg').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch6_bg').style.left = '20px';},300);
    setTimeout(function(){document.getElementById('ch6_bg').style.top = '160px';},300);
    setTimeout(function(){document.getElementById('readmore6').disabled = true;},0);
    setTimeout(function(){document.getElementById('readmore6').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('readmore6').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('readmore6').style.height = '0px';},0);
    setTimeout(function(){document.getElementById('readmore6').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('readmore6').disabled = false;},1300);
    setTimeout(function(){document.getElementById('ch6_title').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch6_title').style.scale = '1';},300);
    setTimeout(function(){document.getElementById('ch6_title').style.left = '40px';},300);
    setTimeout(function(){document.getElementById('ch6_title').style.top = '280px';},300);
    setTimeout(function(){document.getElementById('ch6_title').style.opacity = '1';},300);
    setTimeout(function(){document.getElementById('ch6_icon').style.transition = 'all 1s cubic-bezier(.6,0,.4,1)';},0);
    setTimeout(function(){document.getElementById('ch6_icon').style.scale = '1';},500);
    setTimeout(function(){document.getElementById('ch6_icon').style.left = '50px';},300);
    setTimeout(function(){document.getElementById('ch6_icon').style.top = '50px';},300);
    setTimeout(function(){document.getElementById('ch3').style.top = '0px';},400);
    setTimeout(function(){document.getElementById('ch3').style.opacity = '1';},400);
    setTimeout(function(){document.getElementById('ch4').style.top = '0px';},500);
    setTimeout(function(){document.getElementById('ch4').style.opacity = '1';},500);
    setTimeout(function(){document.getElementById('ch5').style.top = '0px';},600);
    setTimeout(function(){document.getElementById('ch5').style.opacity = '1';},600);
    setTimeout(function(){document.getElementById('btn5').style.scale = '1';},700);
    setTimeout(function(){document.getElementById('btn6').style.left = '78%';},700);
    setTimeout(function(){document.getElementById('btn6').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn6').disabled = false;},700);
    setTimeout(function(){document.getElementById('btn7').style.left = '85%';},700);
    setTimeout(function(){document.getElementById('btn7').style.opacity = '1';},700);
    setTimeout(function(){document.getElementById('btn7').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch4').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch5').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch6').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore3').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore4').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore5').disabled = false;},700);
    setTimeout(function(){document.getElementById('readmore6').disabled = false;},700);
    setTimeout(function(){document.getElementById('ch6_subtitle').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore6').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('readmore6').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch6_title').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){document.getElementById('ch6_icon').style.transition = 'all 0.3s cubic-bezier(.6,0,.4,1)';},1500);
    setTimeout(function(){type = 0;},1500);
}

function ch1_to_2(){
    setTimeout(function(){chapter1_out();},0);
    setTimeout(function(){chapter2_in();},1550);
}

function ch2_to_3(){
    setTimeout(function(){chapter2_out();},0);
    setTimeout(function(){chapter3_in();},1550);
}

function ch3_to_4(){
    setTimeout(function(){chapter3_out();},0);
    setTimeout(function(){chapters_page_2();},1550);
    setTimeout(function(){chapter4_in();},3100);
}

function ch4_to_5(){
    setTimeout(function(){chapter4_out();},0);
    setTimeout(function(){chapter5_in();},1550);
}

function ch5_to_6(){
    setTimeout(function(){chapter5_out();},0);
    setTimeout(function(){chapter6_in();},1550);
}

var a = 0;

function ch1_content_1() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch1_content_1_btn_2').style.rotate = '0deg';
        document.getElementById('ch1_content_1_btn_2').style.left = '600px';
        document.getElementById('ch1_content_1_btn_2').style.top = '34px';
        document.getElementById('ch1_content_1_page').style.height = '280px';
        document.getElementById('ch1_content_1_pages_container').style.top = '0px';
        document.getElementById('ch1_content_class2').style.top = '360px';
        document.getElementById('ch1_content_class2').style.borderTop = '2px solid rgba(207, 184, 230, 1)';
        document.getElementById('ch1_content_class3').style.top = '440px';
        document.getElementById('ch1_content_class3').style.borderTop = '2px solid rgba(207, 184, 230, 1)';

        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch1_content_1_btn_2').style.rotate = '-90deg';
        document.getElementById('ch1_content_1_btn_2').style.left = '600px';
        document.getElementById('ch1_content_1_btn_2').style.top = '25px';
        document.getElementById('ch1_content_1_page').style.height = '0px';
        document.getElementById('ch1_content_1_pages_container').style.top = '-180px';
        document.getElementById('ch1_content_class2').style.top = '100px';
        document.getElementById('ch1_content_class2').style.borderTop = '2px solid rgba(207, 184, 230, 1)';
        document.getElementById('ch1_content_class3').style.top = '180px';
        document.getElementById('ch1_content_class3').style.borderTop = '2px solid rgba(207, 184, 230, 1)';
        a = 0;
    }
}

function ch1_content_2() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch1_content_class1').style.height = '0px';
        document.getElementById('ch1_content_class2').style.borderTop = '2px solid rgba(207, 184, 230, 0)';
        document.getElementById('ch1_content_class2').style.top = '20px';
        document.getElementById('ch1_content_class3').style.borderTop = '2px solid rgba(207, 184, 230, 0)';
        document.getElementById('ch1_content_class3').style.top = '360px';
        document.getElementById('ch1_content_2_btn_2').style.rotate = '0deg';
        document.getElementById('ch1_content_2_btn_2').style.left = '600px';
        document.getElementById('ch1_content_2_btn_2').style.top = '34px';
        document.getElementById('ch1_content_2_page').style.top = '100px';
        document.getElementById('ch1_content_2_page').style.height = '280px';
        document.getElementById('ch1_content_2_pages_container').style.top = '0px';

        
        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch1_content_class1').style.height = '80px';
        document.getElementById('ch1_content_class2').style.borderTop = '2px solid rgba(207, 184, 230, 1)';
        document.getElementById('ch1_content_class2').style.top = '100px';
        document.getElementById('ch1_content_class3').style.borderTop = '2px solid rgba(207, 184, 230, 1)';
        document.getElementById('ch1_content_class3').style.top = '180px';
        document.getElementById('ch1_content_2_btn_2').style.rotate = '-90deg';
        document.getElementById('ch1_content_2_btn_2').style.left = '600px';
        document.getElementById('ch1_content_2_btn_2').style.top = '25px';
        document.getElementById('ch1_content_2_page').style.top = '180px';
        document.getElementById('ch1_content_2_page').style.height = '0px';
        document.getElementById('ch1_content_2_pages_container').style.top = '-180px';
        a = 0;
    }
}

function ch1_content_3() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch1_content_class1').style.top = '-60px';
        document.getElementById('ch1_content_class2').style.height = '0px';
        document.getElementById('ch1_content_class2').style.borderTop = '2px solid rgba(207, 184, 230, 0)';
        document.getElementById('ch1_content_class2').style.top = '20px';
        document.getElementById('ch1_content_class3').style.borderTop = '2px solid rgba(207, 184, 230, 0)';
        document.getElementById('ch1_content_class3').style.top = '20px';
        document.getElementById('ch1_content_3_btn_2').style.rotate = '0deg';
        document.getElementById('ch1_content_3_btn_2').style.left = '600px';
        document.getElementById('ch1_content_3_btn_2').style.top = '34px';
        document.getElementById('ch1_content_3_page').style.top = '100px';
        document.getElementById('ch1_content_3_page').style.height = '280px';
        document.getElementById('ch1_content_3_pages_container').style.top = '0px';

        
        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch1_content_class1').style.top = '20px';
        document.getElementById('ch1_content_class2').style.height = '80px';
        document.getElementById('ch1_content_class2').style.borderTop = '2px solid rgba(207, 184, 230, 1)';
        document.getElementById('ch1_content_class2').style.top = '100px';
        document.getElementById('ch1_content_class3').style.borderTop = '2px solid rgba(207, 184, 230, 1)';
        document.getElementById('ch1_content_class3').style.top = '180px';
        document.getElementById('ch1_content_3_btn_2').style.rotate = '-90deg';
        document.getElementById('ch1_content_3_btn_2').style.left = '600px';
        document.getElementById('ch1_content_3_btn_2').style.top = '25px';
        document.getElementById('ch1_content_3_page').style.top = '260px';
        document.getElementById('ch1_content_3_page').style.height = '0px';
        document.getElementById('ch1_content_3_pages_container').style.top = '-180px';
        a = 0;
    }
}

var p = 1;
// function ch1_content_2_pages_prev() {
//     p -= 1;
//     if (p < 1) {
//         p = 1;
//     }
//     if (p == 1) {
//         document.getElementById('ch1_content_2_page1').style.top = '0px';
//         document.getElementById('ch1_content_2_page2').style.top = '360px';
//     }
//     if (p == 2) {
//         document.getElementById('ch1_content_2_page2').style.top = '0px';
//         document.getElementById('ch1_content_2_page3').style.top = '360px';
//     }
// }

// function ch1_content_2_pages_next() {
//     p +=1;
//     if (p > 3){
//         p = 3;
//     }
//     if (p == 2){
//         document.getElementById('ch1_content_2_page1').style.top = '-360px';
//         document.getElementById('ch1_content_2_page2').style.top = '0px';
//     }
//     if (p == 3) {
//         document.getElementById('ch1_content_2_page2').style.top = '-360px';
//         document.getElementById('ch1_content_2_page3').style.top = '0px';

//     }
    
// }



function ch2_content_1() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch2_content_1_btn_2').style.rotate = '0deg';
        document.getElementById('ch2_content_1_btn_2').style.left = '600px';
        document.getElementById('ch2_content_1_btn_2').style.top = '34px';
        document.getElementById('ch2_content_1_page').style.height = '280px';
        document.getElementById('ch2_content_1_pages_container').style.top = '0px';
        document.getElementById('ch2_content_class2').style.top = '360px';
        document.getElementById('ch2_content_class2').style.borderTop = '2px solid rgba(162, 210, 174, 1)';

        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch2_content_1_btn_2').style.rotate = '-90deg';
        document.getElementById('ch2_content_1_btn_2').style.left = '600px';
        document.getElementById('ch2_content_1_btn_2').style.top = '25px';
        document.getElementById('ch2_content_1_page').style.height = '0px';
        document.getElementById('ch2_content_1_pages_container').style.top = '-180px';
        document.getElementById('ch2_content_class2').style.top = '100px';
        document.getElementById('ch2_content_class2').style.borderTop = '2px solid rgba(162, 210, 174, 1)';
        a = 0;
    }
}

function ch2_content_2() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch2_content_class1').style.height = '0px';
        document.getElementById('ch2_content_class2').style.borderTop = '2px solid rgba(162, 210, 174, 0)';
        document.getElementById('ch2_content_class2').style.top = '20px';
        document.getElementById('ch2_content_2_btn_2').style.rotate = '0deg';
        document.getElementById('ch2_content_2_btn_2').style.left = '600px';
        document.getElementById('ch2_content_2_btn_2').style.top = '34px';
        document.getElementById('ch2_content_2_page').style.top = '100px';
        document.getElementById('ch2_content_2_page').style.height = '280px';
        document.getElementById('ch2_content_2_pages_container').style.top = '0px';

        
        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch2_content_class1').style.height = '80px';
        document.getElementById('ch2_content_class2').style.borderTop = '2px solid rgba(162, 210, 174, 1)';
        document.getElementById('ch2_content_class2').style.top = '100px';
        document.getElementById('ch2_content_2_btn_2').style.rotate = '-90deg';
        document.getElementById('ch2_content_2_btn_2').style.left = '600px';
        document.getElementById('ch2_content_2_btn_2').style.top = '25px';
        document.getElementById('ch2_content_2_page').style.top = '180px';
        document.getElementById('ch2_content_2_page').style.height = '0px';
        document.getElementById('ch2_content_2_pages_container').style.top = '-180px';
        a = 0;
    }
}


function ch2_content_2_pages_prev() {
    p -= 1;
    if (p < 1) {
        p = 1;
    }
    if (p == 1) {
        document.getElementById('ch2_content_2_page1').style.top = '0px';
        document.getElementById('ch2_content_2_page2').style.top = '360px';
    }
    if (p == 2) {
        document.getElementById('ch2_content_2_page2').style.top = '0px';
        document.getElementById('ch2_content_2_page3').style.top = '360px';
    }
}

function ch2_content_2_pages_next() {
    p +=1;
    if (p > 2){
        p = 2;
    }
    if (p == 2){
        document.getElementById('ch2_content_2_page1').style.top = '-360px';
        document.getElementById('ch2_content_2_page2').style.top = '0px';
    }
    
}







function ch3_content_1() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch3_content_1_btn_2').style.rotate = '0deg';
        document.getElementById('ch3_content_1_btn_2').style.left = '600px';
        document.getElementById('ch3_content_1_btn_2').style.top = '34px';
        document.getElementById('ch3_content_1_page').style.height = '280px';
        document.getElementById('ch3_content_1_pages_container').style.top = '0px';
        document.getElementById('ch3_content_class2').style.top = '360px';
        document.getElementById('ch3_content_class2').style.borderTop = '2px solid rgba(176, 203, 206, 1)';
        document.getElementById('ch3_content_class3').style.top = '440px';
        document.getElementById('ch3_content_class3').style.borderTop = '2px solid rgba(176, 203, 206, 1)';

        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch3_content_1_btn_2').style.rotate = '-90deg';
        document.getElementById('ch3_content_1_btn_2').style.left = '600px';
        document.getElementById('ch3_content_1_btn_2').style.top = '25px';
        document.getElementById('ch3_content_1_page').style.height = '0px';
        document.getElementById('ch3_content_1_pages_container').style.top = '-180px';
        document.getElementById('ch3_content_class2').style.top = '100px';
        document.getElementById('ch3_content_class2').style.borderTop = '2px solid rgba(176, 203, 206, 1)';
        document.getElementById('ch3_content_class3').style.top = '180px';
        document.getElementById('ch3_content_class3').style.borderTop = '2px solid rgba(176, 203, 206, 1)';
        a = 0;
    }
}

function ch3_content_2() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch3_content_class1').style.height = '0px';
        document.getElementById('ch3_content_class2').style.borderTop = '2px solid rgba(176, 203, 206, 0)';
        document.getElementById('ch3_content_class2').style.top = '20px';
        document.getElementById('ch3_content_class3').style.borderTop = '2px solid rgba(176, 203, 206, 0)';
        document.getElementById('ch3_content_class3').style.top = '360px';
        document.getElementById('ch3_content_2_btn_2').style.rotate = '0deg';
        document.getElementById('ch3_content_2_btn_2').style.left = '600px';
        document.getElementById('ch3_content_2_btn_2').style.top = '34px';
        document.getElementById('ch3_content_2_page').style.top = '100px';
        document.getElementById('ch3_content_2_page').style.height = '280px';
        document.getElementById('ch3_content_2_pages_container').style.top = '0px';

        
        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch3_content_class1').style.height = '80px';
        document.getElementById('ch3_content_class2').style.borderTop = '2px solid rgba(176, 203, 206, 1)';
        document.getElementById('ch3_content_class2').style.top = '100px';
        document.getElementById('ch3_content_class3').style.borderTop = '2px solid rgba(176, 203, 206, 1)';
        document.getElementById('ch3_content_class3').style.top = '180px';
        document.getElementById('ch3_content_2_btn_2').style.rotate = '-90deg';
        document.getElementById('ch3_content_2_btn_2').style.left = '600px';
        document.getElementById('ch3_content_2_btn_2').style.top = '25px';
        document.getElementById('ch3_content_2_page').style.top = '180px';
        document.getElementById('ch3_content_2_page').style.height = '0px';
        document.getElementById('ch3_content_2_pages_container').style.top = '-180px';
        a = 0;
    }
}

function ch3_content_3() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch3_content_class1').style.top = '-60px';
        document.getElementById('ch3_content_class2').style.height = '0px';
        document.getElementById('ch3_content_class2').style.borderTop = '2px solid rgba(176, 203, 206, 0)';
        document.getElementById('ch3_content_class2').style.top = '20px';
        document.getElementById('ch3_content_class3').style.borderTop = '2px solid rgba(176, 203, 206, 0)';
        document.getElementById('ch3_content_class3').style.top = '20px';
        document.getElementById('ch3_content_3_btn_2').style.rotate = '0deg';
        document.getElementById('ch3_content_3_btn_2').style.left = '600px';
        document.getElementById('ch3_content_3_btn_2').style.top = '34px';
        document.getElementById('ch3_content_3_page').style.top = '100px';
        document.getElementById('ch3_content_3_page').style.height = '280px';
        document.getElementById('ch3_content_3_pages_container').style.top = '0px';

        
        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch3_content_class1').style.top = '20px';
        document.getElementById('ch3_content_class2').style.height = '80px';
        document.getElementById('ch3_content_class2').style.borderTop = '2px solid rgba(176, 203, 206, 1)';
        document.getElementById('ch3_content_class2').style.top = '100px';
        document.getElementById('ch3_content_class3').style.borderTop = '2px solid rgba(176, 203, 206, 1)';
        document.getElementById('ch3_content_class3').style.top = '180px';
        document.getElementById('ch3_content_3_btn_2').style.rotate = '-90deg';
        document.getElementById('ch3_content_3_btn_2').style.left = '600px';
        document.getElementById('ch3_content_3_btn_2').style.top = '25px';
        document.getElementById('ch3_content_3_page').style.top = '260px';
        document.getElementById('ch3_content_3_page').style.height = '0px';
        document.getElementById('ch3_content_3_pages_container').style.top = '-180px';
        a = 0;
    }
}

function ch3_content_1_pages_prev() {
    p -= 1;
    if (p < 1) {
        p = 1;
    }
    if (p == 1) {
        document.getElementById('ch3_content_1_page1').style.top = '0px';
        document.getElementById('ch3_content_1_page2').style.top = '360px';
    }
    if (p == 2) {
        document.getElementById('ch3_content_1_page2').style.top = '0px';
        document.getElementById('ch3_content_1_page3').style.top = '360px';
    }
    if (p == 3) {
        document.getElementById('ch3_content_1_page3').style.top = '0px';
        document.getElementById('ch3_content_1_page4').style.top = '360px';
    }
    if (p == 4) {
        document.getElementById('ch3_content_1_page4').style.top = '0px';
        document.getElementById('ch3_content_1_page5').style.top = '360px';
    }
}

function ch3_content_1_pages_next() {
    p +=1;
    if (p > 5){
        p = 5;
    }
    if (p == 2){
        document.getElementById('ch3_content_1_page1').style.top = '-360px';
        document.getElementById('ch3_content_1_page2').style.top = '0px';
    }
    if (p == 3) {
        document.getElementById('ch3_content_1_page2').style.top = '-360px';
        document.getElementById('ch3_content_1_page3').style.top = '0px';
    }
    if (p == 4) {
        document.getElementById('ch3_content_1_page3').style.top = '-360px';
        document.getElementById('ch3_content_1_page4').style.top = '0px';
    }
    if (p == 5) {
        document.getElementById('ch3_content_1_page4').style.top = '-360px';
        document.getElementById('ch3_content_1_page5').style.top = '0px';
    }
    
}


function ch3_content_2_pages_prev() {
    p -= 1;
    if (p < 1) {
        p = 1;
    }
    if (p == 1) {
        document.getElementById('ch3_content_2_page1').style.top = '0px';
        document.getElementById('ch3_content_2_page2').style.top = '360px';
    }
    if (p == 2) {
        document.getElementById('ch3_content_2_page2').style.top = '0px';
        document.getElementById('ch3_content_2_page3').style.top = '360px';
    }
}

function ch3_content_2_pages_next() {
    p +=1;
    if (p > 3){
        p = 3;
    }
    if (p == 2){
        document.getElementById('ch3_content_2_page1').style.top = '-360px';
        document.getElementById('ch3_content_2_page2').style.top = '0px';
    }
    if (p == 3) {
        document.getElementById('ch3_content_2_page2').style.top = '-360px';
        document.getElementById('ch3_content_2_page3').style.top = '0px';

    }
    
}

function ch3_content_3_pages_prev() {
    p -= 1;
    if (p < 1) {
        p = 1;
    }
    if (p == 1) {
        document.getElementById('ch3_content_3_page1').style.top = '0px';
        document.getElementById('ch3_content_3_page2').style.top = '360px';
    }
}

function ch3_content_3_pages_next() {
    p +=1;
    if (p > 2){
        p = 2;
    }
    if (p == 2){
        document.getElementById('ch3_content_3_page1').style.top = '-360px';
        document.getElementById('ch3_content_3_page2').style.top = '0px';
    }
    
}








function ch4_content_1() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch4_content_1_btn_2').style.rotate = '0deg';
        document.getElementById('ch4_content_1_btn_2').style.left = '600px';
        document.getElementById('ch4_content_1_btn_2').style.top = '34px';
        document.getElementById('ch4_content_1_page').style.height = '280px';
        document.getElementById('ch4_content_1_pages_container').style.top = '0px';
        document.getElementById('ch4_content_class2').style.top = '360px';
        document.getElementById('ch4_content_class2').style.borderTop = '2px solid rgba(231, 192, 192, 1)';
        document.getElementById('ch4_content_class3').style.top = '440px';
        document.getElementById('ch4_content_class3').style.borderTop = '2px solid rgba(231, 192, 192, 1)';

        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch4_content_1_btn_2').style.rotate = '-90deg';
        document.getElementById('ch4_content_1_btn_2').style.left = '600px';
        document.getElementById('ch4_content_1_btn_2').style.top = '25px';
        document.getElementById('ch4_content_1_page').style.height = '0px';
        document.getElementById('ch4_content_1_pages_container').style.top = '-180px';
        document.getElementById('ch4_content_class2').style.top = '100px';
        document.getElementById('ch4_content_class2').style.borderTop = '2px solid rgba(231, 192, 192, 1)';
        document.getElementById('ch4_content_class3').style.top = '180px';
        document.getElementById('ch4_content_class3').style.borderTop = '2px solid rgba(231, 192, 192, 1)';
        a = 0;
    }
}

function ch4_content_2() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch4_content_class1').style.height = '0px';
        document.getElementById('ch4_content_class2').style.borderTop = '2px solid rgba(231, 192, 192, 0)';
        document.getElementById('ch4_content_class2').style.top = '20px';
        document.getElementById('ch4_content_class3').style.borderTop = '2px solid rgba(231, 192, 192, 0)';
        document.getElementById('ch4_content_class3').style.top = '360px';
        document.getElementById('ch4_content_2_btn_2').style.rotate = '0deg';
        document.getElementById('ch4_content_2_btn_2').style.left = '600px';
        document.getElementById('ch4_content_2_btn_2').style.top = '34px';
        document.getElementById('ch4_content_2_page').style.top = '100px';
        document.getElementById('ch4_content_2_page').style.height = '280px';
        document.getElementById('ch4_content_2_pages_container').style.top = '0px';

        
        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch4_content_class1').style.height = '80px';
        document.getElementById('ch4_content_class2').style.borderTop = '2px solid rgba(231, 192, 192, 1)';
        document.getElementById('ch4_content_class2').style.top = '100px';
        document.getElementById('ch4_content_class3').style.borderTop = '2px solid rgba(231, 192, 192, 1)';
        document.getElementById('ch4_content_class3').style.top = '180px';
        document.getElementById('ch4_content_2_btn_2').style.rotate = '-90deg';
        document.getElementById('ch4_content_2_btn_2').style.left = '600px';
        document.getElementById('ch4_content_2_btn_2').style.top = '25px';
        document.getElementById('ch4_content_2_page').style.top = '180px';
        document.getElementById('ch4_content_2_page').style.height = '0px';
        document.getElementById('ch4_content_2_pages_container').style.top = '-180px';
        a = 0;
    }
}

function ch4_content_3() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch4_content_class1').style.top = '-60px';
        document.getElementById('ch4_content_class2').style.height = '0px';
        document.getElementById('ch4_content_class2').style.borderTop = '2px solid rgba(231, 192, 192, 0)';
        document.getElementById('ch4_content_class2').style.top = '20px';
        document.getElementById('ch4_content_class3').style.borderTop = '2px solid rgba(231, 192, 192, 0)';
        document.getElementById('ch4_content_class3').style.top = '20px';
        document.getElementById('ch4_content_3_btn_2').style.rotate = '0deg';
        document.getElementById('ch4_content_3_btn_2').style.left = '600px';
        document.getElementById('ch4_content_3_btn_2').style.top = '34px';
        document.getElementById('ch4_content_3_page').style.top = '100px';
        document.getElementById('ch4_content_3_page').style.height = '280px';
        document.getElementById('ch4_content_3_pages_container').style.top = '0px';

        
        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch4_content_class1').style.top = '20px';
        document.getElementById('ch4_content_class2').style.height = '80px';
        document.getElementById('ch4_content_class2').style.borderTop = '2px solid rgba(231, 192, 192, 1)';
        document.getElementById('ch4_content_class2').style.top = '100px';
        document.getElementById('ch4_content_class3').style.borderTop = '2px solid rgba(231, 192, 192, 1)';
        document.getElementById('ch4_content_class3').style.top = '180px';
        document.getElementById('ch4_content_3_btn_2').style.rotate = '-90deg';
        document.getElementById('ch4_content_3_btn_2').style.left = '600px';
        document.getElementById('ch4_content_3_btn_2').style.top = '25px';
        document.getElementById('ch4_content_3_page').style.top = '260px';
        document.getElementById('ch4_content_3_page').style.height = '0px';
        document.getElementById('ch4_content_3_pages_container').style.top = '-180px';
        a = 0;
    }
}


function ch4_content_2_pages_prev() {
    p -= 1;
    if (p < 1) {
        p = 1;
    }
    if (p == 1) {
        document.getElementById('ch4_content_2_page1').style.top = '0px';
        document.getElementById('ch4_content_2_page2').style.top = '360px';
    }
    if (p == 2) {
        document.getElementById('ch4_content_2_page2').style.top = '0px';
        document.getElementById('ch4_content_2_page3').style.top = '360px';
    }
}

function ch4_content_2_pages_next() {
    p +=1;
    if (p > 3){
        p = 3;
    }
    if (p == 2){
        document.getElementById('ch4_content_2_page1').style.top = '-360px';
        document.getElementById('ch4_content_2_page2').style.top = '0px';
    }
    if (p == 3) {
        document.getElementById('ch4_content_2_page2').style.top = '-360px';
        document.getElementById('ch4_content_2_page3').style.top = '0px';

    }
    
}







function ch5_content_1() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch5_content_1_btn_2').style.rotate = '0deg';
        document.getElementById('ch5_content_1_btn_2').style.left = '600px';
        document.getElementById('ch5_content_1_btn_2').style.top = '34px';
        document.getElementById('ch5_content_1_page').style.height = '280px';
        document.getElementById('ch5_content_1_pages_container').style.top = '0px';
        document.getElementById('ch5_content_class2').style.top = '360px';
        document.getElementById('ch5_content_class2').style.borderTop = '2px solid rgba(214, 212, 171, 1)';
        document.getElementById('ch5_content_class3').style.top = '440px';
        document.getElementById('ch5_content_class3').style.borderTop = '2px solid rgba(214, 212, 171, 1)';

        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch5_content_1_btn_2').style.rotate = '-90deg';
        document.getElementById('ch5_content_1_btn_2').style.left = '600px';
        document.getElementById('ch5_content_1_btn_2').style.top = '25px';
        document.getElementById('ch5_content_1_page').style.height = '0px';
        document.getElementById('ch5_content_1_pages_container').style.top = '-180px';
        document.getElementById('ch5_content_class2').style.top = '100px';
        document.getElementById('ch5_content_class2').style.borderTop = '2px solid rgba(214, 212, 171, 1)';
        document.getElementById('ch5_content_class3').style.top = '180px';
        document.getElementById('ch5_content_class3').style.borderTop = '2px solid rgba(214, 212, 171, 1)';
        a = 0;
    }
}

function ch5_content_2() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch5_content_class1').style.height = '0px';
        document.getElementById('ch5_content_class2').style.borderTop = '2px solid rgba(214, 212, 171, 0)';
        document.getElementById('ch5_content_class2').style.top = '20px';
        document.getElementById('ch5_content_class3').style.borderTop = '2px solid rgba(214, 212, 171, 0)';
        document.getElementById('ch5_content_class3').style.top = '360px';
        document.getElementById('ch5_content_2_btn_2').style.rotate = '0deg';
        document.getElementById('ch5_content_2_btn_2').style.left = '600px';
        document.getElementById('ch5_content_2_btn_2').style.top = '34px';
        document.getElementById('ch5_content_2_page').style.top = '100px';
        document.getElementById('ch5_content_2_page').style.height = '280px';
        document.getElementById('ch5_content_2_pages_container').style.top = '0px';

        
        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch5_content_class1').style.height = '80px';
        document.getElementById('ch5_content_class2').style.borderTop = '2px solid rgba(214, 212, 171, 1)';
        document.getElementById('ch5_content_class2').style.top = '100px';
        document.getElementById('ch5_content_class3').style.borderTop = '2px solid rgba(214, 212, 171, 1)';
        document.getElementById('ch5_content_class3').style.top = '180px';
        document.getElementById('ch5_content_2_btn_2').style.rotate = '-90deg';
        document.getElementById('ch5_content_2_btn_2').style.left = '600px';
        document.getElementById('ch5_content_2_btn_2').style.top = '25px';
        document.getElementById('ch5_content_2_page').style.top = '180px';
        document.getElementById('ch5_content_2_page').style.height = '0px';
        document.getElementById('ch5_content_2_pages_container').style.top = '-180px';
        a = 0;
    }
}

function ch5_content_3() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch5_content_class1').style.top = '-60px';
        document.getElementById('ch5_content_class2').style.height = '0px';
        document.getElementById('ch5_content_class2').style.borderTop = '2px solid rgba(214, 212, 171, 0)';
        document.getElementById('ch5_content_class2').style.top = '20px';
        document.getElementById('ch5_content_class3').style.borderTop = '2px solid rgba(214, 212, 171, 0)';
        document.getElementById('ch5_content_class3').style.top = '20px';
        document.getElementById('ch5_content_3_btn_2').style.rotate = '0deg';
        document.getElementById('ch5_content_3_btn_2').style.left = '600px';
        document.getElementById('ch5_content_3_btn_2').style.top = '34px';
        document.getElementById('ch5_content_3_page').style.top = '100px';
        document.getElementById('ch5_content_3_page').style.height = '280px';
        document.getElementById('ch5_content_3_pages_container').style.top = '0px';

        
        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch5_content_class1').style.top = '20px';
        document.getElementById('ch5_content_class2').style.height = '80px';
        document.getElementById('ch5_content_class2').style.borderTop = '2px solid rgba(214, 212, 171, 1)';
        document.getElementById('ch5_content_class2').style.top = '100px';
        document.getElementById('ch5_content_class3').style.borderTop = '2px solid rgba(214, 212, 171, 1)';
        document.getElementById('ch5_content_class3').style.top = '180px';
        document.getElementById('ch5_content_3_btn_2').style.rotate = '-90deg';
        document.getElementById('ch5_content_3_btn_2').style.left = '600px';
        document.getElementById('ch5_content_3_btn_2').style.top = '25px';
        document.getElementById('ch5_content_3_page').style.top = '260px';
        document.getElementById('ch5_content_3_page').style.height = '0px';
        document.getElementById('ch5_content_3_pages_container').style.top = '-180px';
        a = 0;
    }
}


function ch5_content_2_pages_prev() {
    p -= 1;
    if (p < 1) {
        p = 1;
    }
    if (p == 1) {
        document.getElementById('ch5_content_2_page1').style.top = '0px';
        document.getElementById('ch5_content_2_page2').style.top = '360px';
    }
    if (p == 2) {
        document.getElementById('ch5_content_2_page2').style.top = '0px';
        document.getElementById('ch5_content_2_page3').style.top = '360px';
    }
}

function ch5_content_2_pages_next() {
    p +=1;
    if (p > 3){
        p = 3;
    }
    if (p == 2){
        document.getElementById('ch5_content_2_page1').style.top = '-360px';
        document.getElementById('ch5_content_2_page2').style.top = '0px';
    }
    if (p == 3) {
        document.getElementById('ch5_content_2_page2').style.top = '-360px';
        document.getElementById('ch5_content_2_page3').style.top = '0px';

    }
    
}







function ch6_content_1() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch6_content_1_btn_2').style.rotate = '0deg';
        document.getElementById('ch6_content_1_btn_2').style.left = '600px';
        document.getElementById('ch6_content_1_btn_2').style.top = '34px';
        document.getElementById('ch6_content_1_page').style.height = '280px';
        document.getElementById('ch6_content_1_pages_container').style.top = '0px';
        document.getElementById('ch6_content_class2').style.top = '360px';
        document.getElementById('ch6_content_class2').style.borderTop = '2px solid #a3d3af';
        document.getElementById('ch6_content_class3').style.top = '440px';
        document.getElementById('ch6_content_class3').style.borderTop = '2px solid #a3d3af';

        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch6_content_1_btn_2').style.rotate = '-90deg';
        document.getElementById('ch6_content_1_btn_2').style.left = '600px';
        document.getElementById('ch6_content_1_btn_2').style.top = '25px';
        document.getElementById('ch6_content_1_page').style.height = '0px';
        document.getElementById('ch6_content_1_pages_container').style.top = '-180px';
        document.getElementById('ch6_content_class2').style.top = '100px';
        document.getElementById('ch6_content_class2').style.borderTop = '2px solid rgba(212, 192, 174, 1)';
        document.getElementById('ch6_content_class3').style.top = '180px';
        document.getElementById('ch6_content_class3').style.borderTop = '2px solid rgba(212, 192, 174, 1)';
        a = 0;
    }
}

function ch6_content_2() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch6_content_class1').style.height = '0px';
        document.getElementById('ch6_content_class2').style.borderTop = '2px solid rgba(212, 192, 174, 0)';
        document.getElementById('ch6_content_class2').style.top = '20px';
        document.getElementById('ch6_content_class3').style.borderTop = '2px solid rgba(212, 192, 174, 0)';
        document.getElementById('ch6_content_class3').style.top = '360px';
        document.getElementById('ch6_content_2_btn_2').style.rotate = '0deg';
        document.getElementById('ch6_content_2_btn_2').style.left = '600px';
        document.getElementById('ch6_content_2_btn_2').style.top = '34px';
        document.getElementById('ch6_content_2_page').style.top = '100px';
        document.getElementById('ch6_content_2_page').style.height = '280px';
        document.getElementById('ch6_content_2_pages_container').style.top = '0px';

        
        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch6_content_class1').style.height = '80px';
        document.getElementById('ch6_content_class2').style.borderTop = '2px solid rgba(212, 192, 174, 1)';
        document.getElementById('ch6_content_class2').style.top = '100px';
        document.getElementById('ch6_content_class3').style.borderTop = '2px solid rgba(212, 192, 174, 1)';
        document.getElementById('ch6_content_class3').style.top = '180px';
        document.getElementById('ch6_content_2_btn_2').style.rotate = '-90deg';
        document.getElementById('ch6_content_2_btn_2').style.left = '600px';
        document.getElementById('ch6_content_2_btn_2').style.top = '25px';
        document.getElementById('ch6_content_2_page').style.top = '180px';
        document.getElementById('ch6_content_2_page').style.height = '0px';
        document.getElementById('ch6_content_2_pages_container').style.top = '-180px';
        a = 0;
    }
}

function ch6_content_3() {
    if (a == 0) {
        p = 1;
        document.getElementById('ch6_content_class1').style.top = '-60px';
        document.getElementById('ch6_content_class2').style.height = '0px';
        document.getElementById('ch6_content_class2').style.borderTop = '2px solid rgba(212, 192, 174, 0)';
        document.getElementById('ch6_content_class2').style.top = '20px';
        document.getElementById('ch6_content_class3').style.borderTop = '2px solid rgba(212, 192, 174, 0)';
        document.getElementById('ch6_content_class3').style.top = '20px';
        document.getElementById('ch6_content_3_btn_2').style.rotate = '0deg';
        document.getElementById('ch6_content_3_btn_2').style.left = '600px';
        document.getElementById('ch6_content_3_btn_2').style.top = '34px';
        document.getElementById('ch6_content_3_page').style.top = '100px';
        document.getElementById('ch6_content_3_page').style.height = '280px';
        document.getElementById('ch6_content_3_pages_container').style.top = '0px';

        
        a+=1;
    }
    else{
        p = 1;
        document.getElementById('ch6_content_class1').style.top = '20px';
        document.getElementById('ch6_content_class2').style.height = '80px';
        document.getElementById('ch6_content_class2').style.borderTop = '2px solid rgba(212, 192, 174, 1)';
        document.getElementById('ch6_content_class2').style.top = '100px';
        document.getElementById('ch6_content_class3').style.borderTop = '2px solid rgba(212, 192, 174, 1)';
        document.getElementById('ch6_content_class3').style.top = '180px';
        document.getElementById('ch6_content_3_btn_2').style.rotate = '-90deg';
        document.getElementById('ch6_content_3_btn_2').style.left = '600px';
        document.getElementById('ch6_content_3_btn_2').style.top = '25px';
        document.getElementById('ch6_content_3_page').style.top = '260px';
        document.getElementById('ch6_content_3_page').style.height = '0px';
        document.getElementById('ch6_content_3_pages_container').style.top = '-180px';
        a = 0;
    }
}


function ch6_content_2_pages_prev() {
    p -= 1;
    if (p < 1) {
        p = 1;
    }
    if (p == 1) {
        document.getElementById('ch6_content_2_page1').style.top = '0px';
        document.getElementById('ch6_content_2_page2').style.top = '360px';
    }
    if (p == 2) {
        document.getElementById('ch6_content_2_page2').style.top = '0px';
        document.getElementById('ch6_content_2_page3').style.top = '360px';
    }
}

function ch6_content_2_pages_next() {
    p +=1;
    if (p > 3){
        p = 3;
    }
    if (p == 2){
        document.getElementById('ch6_content_2_page1').style.top = '-360px';
        document.getElementById('ch6_content_2_page2').style.top = '0px';
    }
    if (p == 3) {
        document.getElementById('ch6_content_2_page2').style.top = '-360px';
        document.getElementById('ch6_content_2_page3').style.top = '0px';

    }
    
}