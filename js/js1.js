
	function AddCarrinho(produto, qtd, valor, posicao)
	{
		localStorage.setItem("produto" + posicao, produto);
		localStorage.setItem("qtd" + posicao, qtd);
		valor = valor * qtd;
		localStorage.setItem("valor" + posicao, valor);
		alert("Produto adicionado ao carrinho!");
	}
/*
    function getItems () 
        {
        const productName = document.querySelector('.product-name').innerText;
        const productPrice = document.querySelector('.product-price').innerText;
        const productImage = document.querySelector('.image').getAttribute('src');
        }
    
        const product = {
            productName: productName,
            productPrice: productPrice,
            productImage: productImage,
        }
        if (window.localStorage.getItem(`productId-${allProducts[product.productName]}`)) {
            updateProductQuantity(productName);
        } else {
            const productJSON = JSON.stringify(product);
            window.localStorage.setItem(`productId-${allProducts[product.productName]}`, productJSON);
            updateProductQuantity(productName);
        }
    */