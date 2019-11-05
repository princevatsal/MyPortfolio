const btn=document.querySelector('.toggle')
const bar1=document.querySelector('.animatespan')
const bar2=document.querySelector('.animatespan2')
const ul=document.querySelector('.toggleul')
const cont1=document.querySelector('.cont1')
const cont2=document.querySelector('.cont2')
const pcont1=document.querySelector('.cont1 p')
const pcont2=document.querySelector('.cont2 p')
const icont1=document.querySelector('.cont1 img')
const icont2=document.querySelector('.cont2 img')
const view=document.querySelector('.viewmore')
const lis=document.querySelectorAll('.navul li')
const button1=document.querySelector('.bar .btn1')
const button1ul=document.querySelector('.bar .ul1')
const button2=document.querySelector('.bar .btn2')
const button2ul=document.querySelector('.bar .ul2')
const i1=document.querySelector('.icon1 .l1')
const i2=document.querySelector('.icon1 .l2')
const icon2=document.querySelector('.icon2')
const listlis=document.querySelectorAll('.ul1 li')
const listlis2=document.querySelectorAll('.ul2 li')
const togglelis=document.querySelectorAll('.toggleul li')
const contactme=document.querySelector('.contactme')
const  second=document.querySelector('.second')
btn.addEventListener('click',()=>{
	if(bar1.className=='animatespan')
	{
		bar1.className='animatespan animatespanw'
		bar2.className='animatespan2 animatespan2w'
		ul.className='toggleul toggle2'
	}
	else{
		bar1.className='animatespan'
		bar2.className='animatespan2'	
		ul.className='toggleul'
	}

})
cont1.addEventListener('click',()=>{
	if(pcont1.innerHTML!='priyanshvatsal<br>@gmail.com')
	{
		pcont1.innerHTML='priyanshvatsal<br>@gmail.com'
		cont1.style.paddingBottom='33px'
		icont1.style.display='none'
	}else{
		pcont1.innerHTML='Email'
		cont1.style.paddingBottom='15px'
		icont1.style.display='block'
	}
})
cont2.addEventListener('click',()=>{
	if(pcont2.innerHTML!='+919870617494')
	{
		pcont2.innerHTML='+919870617494'
		icont2.style.display='none'
	}else{
		pcont2.innerHTML='Phone'
		icont2.style.display='block'
	}
})
view.addEventListener('click',()=>{
	window.scroll(0,490)
})
lis[1].addEventListener('click',()=>{
		window.scroll(0,490)
		lis[1].style.color='white'
		setTimeout(()=>{lis[1].style.color='#999'},1000)	
})
lis[2].addEventListener('click',()=>{
		window.scroll(0,1300)	
		lis[2].style.color='white'
		setTimeout(()=>{lis[2].style.color='#999'},1000)
})
button1.addEventListener('click',()=>{
	if(button1ul.style.display!='block'){
		button1ul.style.display='block'
		i1.style.transform="rotate(-48deg)"
		i2.style.transform='rotate(46deg)'
	}else{
		button1ul.style.display='none'
		i1.style.transform="rotate(35deg)"
		i2.style.transform='rotate(-35deg)'
	}
})
button2.addEventListener('click',()=>{
	if(button2ul.style.display!='block'){
		button2ul.style.display='block'
		icon2.style.flexDirection='column-reverse'
	}else{
		button2ul.style.display='none'
		icon2.style.flexDirection='column'
	}
})
document.addEventListener('click', function(event) {
  var isClickInside = button1ul.contains(event.target) || button1.contains(event.target);

  if (!isClickInside) {
    if(button1ul.style.display!='none'){button1ul.style.display='none'}
  }
});
document.addEventListener('click', function(event) {
  var isClickInside = button2ul.contains(event.target) || button2.contains(event.target);

  if (!isClickInside) {
    if(button2ul.style.display!='none'){button2ul.style.display='none'}
  }
});
listlis.forEach((li)=>{
	li.addEventListener('click',(e)=>{
		counter=null;
		e.target.className='liactive'
		for(let i=0;i<3;i++){
			if(listlis[i].innerHTML!=e.target.innerHTML){
				listlis[i].className=''
			}else{
				counter=i+1;
			}
		}
		if(counter==1){
			window.scroll(0,500)
		}
		if(counter==2){
			window.scroll(0,1000)
		}
		if(counter==3){
			window.scroll(0,1300)
		}
	})
})
listlis2.forEach((li)=>{
	li.addEventListener('click',(e)=>{
		e.target.className='liactive'
		for(let i=0;i<3;i++){
			if(listlis2[i].innerHTML!=e.target.innerHTML){
				listlis2[i].className=''
			}
		}
	})
})
togglelis[0].addEventListener('click',(e)=>{
	second.scrollIntoView();
})
togglelis[1].addEventListener('click',(e)=>{
	button1.scrollIntoView();
})
togglelis[2].addEventListener('click',(e)=>{
	contactme.scrollIntoView();
})