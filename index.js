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
	console.log('click',button1ul)
	if(button1ul.style.display!='block'){
		console.log('!!!')
		button1ul.style.display='block'
		i1.style.transform="rotate(-48deg)"
		i2.style.transform='rotate(46deg)'
	}else{
		button1ul.style.display='none'
	}
})
button2.addEventListener('click',()=>{
	if(button2ul.style.display=='none'){
		button2ul.style.display='block'
	}else{
		button2ul.style.display='none'
	}
})