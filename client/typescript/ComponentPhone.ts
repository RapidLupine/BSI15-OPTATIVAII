class ComponentPhone {
    private firstElementItem: HTMLDivElement|null;
    private addButton: HTMLButtonElement;

    constructor(
        private elementRoot: HTMLDivElement
    ){ 
        this.firstElementItem = <HTMLDivElement>elementRoot.querySelector('div.item')
        this.addButton = <HTMLButtonElement>elementRoot.querySelector('button.button-add')
    }

    private atachEvents(){
        this.addButton.eventListener('click', ev =>
            var itemCloned = this.firstElementItem.cloneNode(true)
        )}
}