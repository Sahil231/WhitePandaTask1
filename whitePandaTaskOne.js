var title=["Blog / Article","Newsletter / E-mailer","Whitepaper","e-book","Report / Guide","Product Description","Website Content","Video Script","Company Profile","Press Release"]
var price=["500","1000","2000","1000","1000","500","1000","1000","2000","2000"]

for(var i=0; i<title.length; i++)
{
var div = document.createElement("div");
div.classList.add("content")
	div.classList.add("nl")

var img = document.createElement("img");
img.classList.add("image")
img.src="BirdPicture.png"
div.appendChild(img)

var div2 = document.createElement("div");
div2.classList.add("head")
div2.innerHTML=title[i]
div.appendChild(div2)

div2 = document.createElement("div");
div2.classList.add("head2")
div2.innerHTML="from Rs."+price[i]
div.appendChild(div2)

div2 = document.createElement("div");
div2.classList.add("below")
div2.classList.add("greyText")
div2.innerHTML="Typically 450-500 words, an e-book is perfect for your target audience ranging prospective customers to users"
div.appendChild(div2)

var btn = document.createElement("div");
btn.classList.add("button")
btn.classList.add("greenText")
btn.innerHTML="Order"
div.appendChild(btn)

document.body.appendChild(div);
}