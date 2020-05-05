$(function(){

    var slider=$('.slider'),
    list=slider.find('ul.slider_liste'),
    length=list.find('li').length,
    width=slider.outerWidth(),
    totalWidth=width*length,
    index=0,
    next=$('a.sonraki',slider),
    prev=$('a.onceki',slider);


    list.find('li').width(width).end().width(totalWidth);

      
    $(window).resize(function(){
      width=slider.outerWidth();
      totalWidth=width*length;
      list.find('li').width(width).end().width(totalWidth).css('margin-left','-'+(index*width)+'px');
    });

   // sonraki
   next.on('click',function(){

     if(index<length-1) index++;
     else index=0;
     list.stop().animate({
         marginLeft:'-'+(index*width)
     },500)
     return false

   });

   // onceki
   prev.on('click',function(){

    if(index>0) index--;
    else index=0;
    list.stop().animate({
        marginLeft:'-'+(index*width)
    },500)
    return false

    
  });

  dag=$('a.dag',slider),
  bulvar=$('a.bulvar',slider),
  icerisehir=$('a.icerisehir',slider),
  nizami=$('a.nizami',slider);
   
  dag.on('click',function(){

   document.getElementById('metin').innerHTML="Dağüstü park, Şehitler parkı olarak'da "+
   "söyleniyor.Dağüstü parkda Bakü'nü çok iyi göre bilirsiniz.Türk ve Azerbaycan "
   +"şehitlerini ziyaret ede bilirsiniz . ";

  });
  bulvar.on('click',function(){

    document.getElementById('metin').innerHTML="Park, Hazar Denizi'ndeki güneye bakan bir körfez boyunca uzanmaktadır. "+
    " Yeni Bulvar, 2012 yılından bu yana 3.75 km'ye neredeyse iki katına çıktı ve gezi yerlerini Devlet Bayrağı Meydanı'na kadar genişletildi. ";
 
   });
   icerisehir.on('click',function(){

    document.getElementById('metin').innerHTML=" UNESCO'nun Dünya Miras Komitesi'nin 2000."
    +" yılında Avustralya'nın Cairns kentinde yaptığı 24. oturumda Şirvanşahlar Sarayı ve" 
    +"Kız Kulesi ile birlikte Dünya Mirası olarak kabul edilen Eski Şehir, Azerbaycan'dan" 
   " listeye dahil olan ilk yapıdır. ";
   });
   nizami.on('click',function(){

    document.getElementById('metin').innerHTML=" Nizami Caddesi, bankalardan moda"+
    " mağazalarına kadar çeşitli mağazalara ev sahipliği yapıyor ve dünyanın en pahalı"+
    " caddelerinden biri. Sokakta ayrıca Almanya, Norveç, Hollanda ve Avusturya"+
    " büyükelçiliklerinin yanı sıra Avrupa Birliği Azerbaycan Delegasyonu da bulunuyor";


   });


});