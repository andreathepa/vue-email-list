const {createApp} = Vue;

createApp({
    data() {
      return{
        randomEmail:'',
        arrayEmail:[]
      }

    },
    mounted() {
        this.generateRandomEmail();
    },
    methods: {
        generateRandomEmail(){
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                this.arrayEmail.push(result.data.response);
                });
            }
        }
    }
      
    
  }).mount('#app');