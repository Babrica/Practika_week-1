let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: "Vue Mastery",
        altText: "A pair of socks",
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
        inventory: 100,
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        selectedVariant: 0,
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        deleteCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
        },
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        },
    },


    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        sale()
        {
            if(this.onSale == true)
            {
                return 'Проходит распродажа ' + this.brand + ' ' + this.product;
            }
            else
            {
                return 'Скидки нет ;( ' + this.brand + ' ' + this.product;
            }

        },
    }
})


