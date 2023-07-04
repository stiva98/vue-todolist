const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: 'pane',
                    done: false
                },
                {
                    text: 'acqua',
                    done: false
                },
                {
                    text: 'farina',
                    done: true
                },
                {
                    text: 'frutta',
                    done: true
                },
                {
                    text: 'carne',
                    done: false
                },
                {
                    text: 'patate',
                    done: false
                },
            ]

        }
    },
    methods: {
        remove(index) {
            this.toDoList.splice(index, 1)
        }
    }
}).mount('#app')