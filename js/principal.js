var banners =
	[ "Os melhores do Brasil!" , " Qualidade e preço baixo!"];
var bannerAtual = 0;

function trocaBanner(){
	bannerAtual = (bannerAtual + 1 ) % 2;
	document.querySelector('h2#mensagem').textcontent = 
	banners[bannerAtual];
}
setInterval(trocaNanner, 1000);