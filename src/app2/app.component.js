var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var AppComponent = (function () {
    function AppComponent() {
        this.firstName = 'Joe';
        this.formSubmitted = false;
    }
    AppComponent.prototype.onSubmit = function () {
        this.formSubmitted = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app2',
        template: "<div class=\"demo\">\n                <h2>FormsModule</h2> \n                <h4>Add Person</h4>\n                <form (ngSubmit)=\"onSubmit()\" #personForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input #name=\"ngModel\" required [(ngModel)]=\"firstName\" name=\"firstName\">\n                    <button [disabled]=\"!personForm.form.valid\" type=\"submit\" class=\"btn btn-default\">Submit</button>\n                  </div>\n                  <div [hidden]=\"name.valid || name.pristine\">\n                    Name is required\n                  </div>   \n                </form>\n                <div *ngIf=\"formSubmitted\">Form was submitted</div>\n             </div>"
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map