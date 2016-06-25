System.register(["angular2/core", 'angular2/http', "./mock-contact", 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, mock_contact_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (mock_contact_1_1) {
                mock_contact_1 = mock_contact_1_1;
            },
            function (_1) {}],
        execute: function() {
            ContactService = (function () {
                function ContactService(http) {
                    this.http = http;
                }
                ContactService.prototype.getContacts = function () {
                    return this.http.get('http://localhost:8000/api/salons/')
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                ContactService.prototype.insertContact = function (contact) {
                    Promise.resolve(mock_contact_1.CONTACTS).then(function (contacts) { return contacts.push(contact); });
                };
                ContactService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFDQyx3QkFBb0IsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUFJLENBQUM7Z0JBRW5DLG9DQUFXLEdBQVg7b0JBQ0csTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDO3lCQUN4RCxTQUFTLEVBQUU7eUJBQ1gsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRixzQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzdCLE9BQU8sQ0FBQyxPQUFPLENBQUMsdUJBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQW1CLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7Z0JBQ2pGLENBQUM7Z0JBRU8sb0NBQVcsR0FBbkIsVUFBb0IsS0FBVTtvQkFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFuQkY7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBb0JiLHFCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCwyQ0FrQkMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9jb250YWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0NPTlRBQ1RTfSBmcm9tIFwiLi9tb2NrLWNvbnRhY3RcIjtcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cblx0Z2V0Q29udGFjdHMoKTogUHJvbWlzZTxDb250YWN0W10+IHtcblx0ICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc2Fsb25zLycpXG5cdFx0ICAudG9Qcm9taXNlKClcblx0XHQgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0IH1cblxuXHRpbnNlcnRDb250YWN0KGNvbnRhY3Q6IENvbnRhY3Qpe1xuXHRcdFByb21pc2UucmVzb2x2ZShDT05UQUNUUykudGhlbigoY29udGFjdHM6IENvbnRhY3RbXSkgPT4gY29udGFjdHMucHVzaChjb250YWN0KSk7XG5cdH1cblxuXHRwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcblx0XHRjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==