"use strict";
var WindowControll = /** @class */ (function () {
    function WindowControll() {
        if (WindowControll.instance)
            return WindowControll.instance;
        this.windows = document.querySelectorAll('div.window');
        this.openByElement(this.windows[0]);
        return WindowControll.instance
            || (WindowControll.instance = this);
    }
    WindowControll.prototype.closeAll = function () {
        this.windows.forEach(function (el) { return el.classList.remove('open'); });
    };
    WindowControll.prototype.openByElement = function (element) {
        this.closeAll();
        this.currentWindow = element;
        element.classList.add('open');
    };
    WindowControll.prototype.open = function (querySelector) {
        return this.openByElement(document.querySelector(querySelector));
    };
    return WindowControll;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2luZG93Q29udHJvbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90eXBlc2NyaXB0L1dpbmRvd0NvbnRyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQU1JO1FBQ0ksRUFBRSxDQUFBLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUN2QixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQTtRQUVsQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVuQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVE7ZUFDdkIsQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUE7UUFDNUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELDZCQUFJLEdBQUosVUFBSyxhQUFxQjtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7SUFDcEUsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQyJ9