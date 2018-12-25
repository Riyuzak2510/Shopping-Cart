$(function() {
    let productName = $('#Product-Name')
    let productManufacturer = $('#Product-Manufacturer')
    let ProductPrice = $('#Product-Price')
    $('#btnProductAdd').click(function() {
        addProduct(
            productName.val(),
            productManufacturer.val(),
            ProductPrice.val(),
            function(addedProduct) {
                window.alert('Added' + addedProduct.name + " to Database")
            }
        )
    })
})