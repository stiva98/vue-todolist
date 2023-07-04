const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: 'pane',
                    done: true
                },
                {
                    text: 'acqua',
                    done: true
                },
                {
                    text: 'farina',
                    done: false
                },
                {
                    text: 'frutta',
                    done: false
                },
                {
                    text: 'carne',
                    done: true
                },
                {
                    text: 'patate',
                    done: true
                },
            ]

        }
    }
}).mount('#app')