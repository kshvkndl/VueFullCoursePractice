export default {
    data() {
        timeOut: ""
    },
    methods: {
        debounce(func, wait = 1000) {
            cleartimeOut(this.timeOut);
            this.timeOut = setTimeout(func, wait);
        },
    }
}