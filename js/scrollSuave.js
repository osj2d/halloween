export default class ScrollSuave{
    constructor (links){
        this.linksInternos = document.querySelectorAll(links);
        this.scrollToSection = this.scrollToSection.bind(this);
    }

    scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    addLinkEvent(){
        this.linksInternos.forEach((link) => {
            link.addEventListener('click', this.scrollToSection);
        })
    }

    init(){
        if(this.linksInternos.length){
            this.addLinkEvent();
        }
        return this;
    }
}