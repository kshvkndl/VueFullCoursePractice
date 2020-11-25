export default debounce = {
    data() {
        timeOut: ""
    },
    methods: {
        debounce(func, wait = 1000) {
            cleartimeOut(this.timeOut);
            this.timeOut = settimeOut(func, wait);
        },
    }
}