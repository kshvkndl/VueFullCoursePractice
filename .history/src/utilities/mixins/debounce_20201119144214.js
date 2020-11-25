export default debounce = {
    data() {
        timeOut: "",
    },
    methods: {
        debounce(func, wait = 1000) {
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(func, wait);
        },
    }
}