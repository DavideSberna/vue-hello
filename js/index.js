const {createApp} = Vue;

createApp({
    data(){
        return{
            imageJumbo: 'bg-jumbo',
            titolo: 'Ciao questo è il mio Titolo',
            images: ['./img/item1.svg', './img/item2.svg', './img/item3.svg',],
            settingTitle: 'text-center text-white p-5',
            settingImage: 'm-auto d-block img-sizing',
            settingText: 'text-center',
            settingMain: 'd-flex justify-content-center align-items-center flex-wrap container',
            col: 'col-sm-12 col-md-4',
        }
    },
    methods: {
        createElement(){
            const row = document.querySelector("[data-generate]")
            
            this.images.forEach((element, index) => {
                
                let content= document.createElement("div")
                let img= document.createElement("img")
                let text= document.createElement("p")
                content.className = this.col
                img.src = this.images[index]
                img.className = this.settingImage
                text.innerHTML = "Questo è il text content che ho deciso di utilizzare per questo test"
                text.className = this.settingText
                row.appendChild(content)
                content.appendChild(img)
                content.appendChild(text)
            });



            
        }
    }
}).mount('#app');