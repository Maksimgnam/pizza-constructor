let speedHide = 300;
let speedShow = 300;

let summary = 50;

let currency = 'грн';

$('.item1').hide(0);
$('.choseOpen').hide(0);

$('#chease').click(function(){
	$('#chooseChease').slideToggle(speedShow)
})

$('#meet').click(function(){
	$('#chooseMeet').slideToggle(speedShow)
})

$('#sous').click(function(){
	$('#chooseSous').slideToggle(speedShow)
})

$('#veg').click(function(){
	$('#choseVeg').slideToggle(speedShow)
})

//---------------------------------------------------------------

$('#feta').click(function(){
	$('.fetaGroup').fadeToggle(speedHide);
	$('#fetaHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#fetaHide').click(function(){
	$('.fetaGroup').fadeToggle(speedHide);
	$('#fetaHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#moza').click(function(){
	$('.mozaGroup').fadeToggle(speedHide);
	$('#mozaHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#mozaHide').click(function(){
	$('.mozaGroup').fadeToggle(speedHide);
	$('#mozaHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#cheder').click(function(){
	$('.chederGroup').fadeToggle(speedHide);
	$('#chederHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#chederHide').click(function(){
	$('.chederGroup').fadeToggle(speedHide);
	$('#chederHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#blu').click(function(){
	$('.bluGroup').fadeToggle(speedHide);
	$('#bluHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#bluHide').click(function(){
	$('.bluGroup').fadeToggle(speedHide);
	$('#bluHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#parm').click(function(){
	$('.parmGroup').fadeToggle(speedHide);
	$('#parmHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#parmHide').click(function(){
	$('.parmGroup').fadeToggle(speedHide);
	$('#parmHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#chicken').click(function(){
	$('.chickenGroup').fadeToggle(speedHide);
	$('#chikenHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#chikenHide').click(function(){
	$('.chickenGroup').fadeToggle(speedHide);
	$('#chikenHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#bekon').click(function(){
	$('.bekonGroup').fadeToggle(speedHide);
	$('#bekonHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#bekonHide').click(function(){
	$('.bekonGroup').fadeToggle(speedHide);
	$('#bekonHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#shynka').click(function(){
	$('.shynkaGroup').fadeToggle(speedHide);
	$('#shynkaHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#shynkaHide').click(function(){
	$('.shynkaGroup').fadeToggle(speedHide);
	$('#shynkaHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#paperoni').click(function(){
	$('.paperoniGroup').fadeToggle(speedHide);
	$('#paperoniHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#paperoniHide').click(function(){
	$('.paperoniGroup').fadeToggle(speedHide);
	$('#paperoniHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#alfredo').click(function(){
	$('.alfredoGroup').fadeToggle(speedHide);
	$('#alfredoHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#alfredoHide').click(function(){
	$('.alfredoGroup').fadeToggle(speedHide);
	$('#alfredoHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#barbequ').click(function(){
	$('.barbequGroup').fadeToggle(speedHide);
	$('#barbequHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#barbequHide').click(function(){
	$('.barbequGroup').fadeToggle(speedHide);
	$('#barbequHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#chasnyk').click(function(){
	$('.chasnykGroup').fadeToggle(speedHide);
	$('#chasnykHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#chasnykHide').click(function(){
	$('.chasnykGroup').fadeToggle(speedHide);
	$('#chasnykHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#kukurudza').click(function(){
	$('.kukurudzaGroup').fadeToggle(speedHide);
	$('#kukurudzaHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#kukurudzaHide').click(function(){
	$('.kukurudzaGroup').fadeToggle(speedHide);
	$('#kukurudzaHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#ananas').click(function(){
	$('.ananasGroup').fadeToggle(speedHide);
	$('#ananasHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#ananasHide').click(function(){
	$('.ananasGroup').fadeToggle(speedHide);
	$('#ananasHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#tomato').click(function(){
	$('.tomatoGroup').fadeToggle(speedHide);
	$('#tomatoHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#tomatoHide').click(function(){
	$('.tomatoGroup').fadeToggle(speedHide);
	$('#tomatoHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#grub').click(function(){
	$('.grubGroup').fadeToggle(speedHide);
	$('#grubHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#grubHide').click(function(){
	$('.grubGroup').fadeToggle(speedHide);
	$('#grubHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#shpunat').click(function(){
	$('.shpunatGroup').fadeToggle(speedHide);
	$('#shpunatHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#shpunatHide').click(function(){
	$('.shpunatGroup').fadeToggle(speedHide);
	$('#shpunatHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})

//---------------------------------------------------------------

$('#perets').click(function(){
	$('.peretsGroup').fadeToggle(speedHide);
	$('#peretsHide').fadeToggle(speedHide);
	summary+=30;
	$('.total').html('Оплатити: '+summary+currency)
})

$('#peretsHide').click(function(){
	$('.peretsGroup').fadeToggle(speedHide);
	$('#peretsHide').fadeToggle(speedHide);
	summary-=30;
	$('.total').html('Оплатити: '+summary+currency)
})