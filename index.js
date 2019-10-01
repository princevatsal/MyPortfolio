var btn=document.querySelector('.toggle')
var bar1=document.querySelector('.animatespan')
var bar2=document.querySelector('.animatespan2')
var ul=document.querySelector('.toggleul')
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