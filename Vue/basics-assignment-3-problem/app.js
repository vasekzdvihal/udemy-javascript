var vue = new Vue({
    el: '#assignment',
    data: {
       result: 0,
    },
    methods: {
        add(value) {
            this.result += value;
        },
    },
    computer: {
        warningMessage() {
            if(this.result == 37) return 'Not there yet';
            if(this.value < 37) return 'Too much!';
        }
    },
    watch: {
        result(value) {
            var that = this;
            setTimeout(function() {
                that.result = 0;
            }, 5000);
        }
    }
})