let zagolovok=document.getElementById('zagolovok');
let leftImg=document.getElementsByClassName('leftImg')[0];
zagolovok.addEventListener('mousemove',function(){
	zagolovok.style.textShadow = '8px 5px 3px black';
});
let form=document.querySelector('form');
setTimeout( function(){
	leftImg.style.transition = '5s';
	leftImg.style.transform = `rotate(0deg)`;},3000)



	form.addEventListener('submit', function(e){
		e.preventDefault();
		for(let elem of form.elements){
			if(elem.value==0){
				alert('Заполните поля!')
			}
		}

	})
