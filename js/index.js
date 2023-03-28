const {createApp} = Vue;

createApp({
    data(){
        return{
            imageJumbo: 'bg-jumbo',
            titolo: 'Ciao questo è il mio Titolo',
            images: ['./img/item1.svg', './img/item2.svg', './img/item3.svg',],
            settingTitle: 'text-center text-white p-5',
            settingImage: 'm-auto d-block img-sizing p-3',
            settingText: 'text-center min-w',
            settingBtn: 'btn btn-primary m-auto',
            settingMain: 'd-flex justify-content-center align-items-center flex-wrap container mt-4',
            col: 'col-12 col-sm-6 col-md-4 d-flex flex-column align-items-center',
            text: 'Clicca per generare il main',
            textImage: 'Questo è il text content che ho deciso di utilizzare per questo test',
        }
    },
    methods: {
        createElement(){
            const row = document.querySelector("[data-generate]")
            let form = document.querySelector("form").innerHTML = ""
            
            this.images.forEach((element, index) => {
                
                let content= document.createElement("div")
                let img= document.createElement("img")
                let text= document.createElement("p")
                content.className = this.col
                img.src = this.images[index]
                img.className = this.settingImage
                text.innerHTML = this.textImage
                text.className = this.settingText
                row.appendChild(content)
                content.appendChild(img)
                content.appendChild(text)
            });



            
        }
    }
}).mount('#app');


