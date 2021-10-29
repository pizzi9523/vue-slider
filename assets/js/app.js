const app = new Vue({
    el: "#root",
    data: {
        counter: 0,
        slides: [
            {
                image: "img/01.jpg",
                title: "Svezia",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
            },

            {
                image: "img/02.jpg",
                title: "Svizzera",
                text: "Lorem ipsum"
            },

            {
                image: "img/03.jpg",
                title: "Gran Bretagna",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },

            {
                image: "img/04.jpg",
                title: "Germania",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam"
            },

            {
                image: "img/05.jpg",
                title: "Paradise",
                text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam"
            }
        ]

    },
    methods: {
        slideUp: function () {
            this.counter--;
            if (this.counter < 0) {
                this.counter = this.slides.length - 1;
            }
            //console.log(this.counter);

        },
        slideDown: function () {
            this.counter++;

            if (this.counter == this.slides.length) {
                this.counter = 0;
            }
            console.log(this.counter);
        },

        timeSlide: function () {
            console.log(this);
            console.log(this.counter);
            setInterval(function () {
                this.counter++
                console.log(this.counter);
                console.log(this);
            }, 1000)
        },



    }
})

