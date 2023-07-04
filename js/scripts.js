const { createApp } = Vue;

createApp({
    data() {
        return {
            newProduct: '',
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
            //console.log('remove')
            this.toDoList.splice(index, 1)
        },
        add() {
            //console.log('add')
            const newFood = {
                text: this.newProduct,
                done: false,
            };
            this.toDoList.push(newFood);
            this.newProduct = '';
        },
        invertion(index) {
            //console.log('invertion')
            this.toDoList[index].done = !this.toDoList[index].done
        }

    }
}).mount('#app')