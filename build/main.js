webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiculeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehiculeService = (function () {
    function VehiculeService(_http) {
        this._http = _http;
        this.vehicules = [];
        this.toastyAdd = false;
        this.toastyUpdate = false;
        this.groupLabels = [];
        this.driverLabels = [];
        this.deviceLabels = [];
        this.bigCurrentPage = 1;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    VehiculeService.prototype.add = function (vehicule, idDevice, idGroups, idDriver, deviceNumber) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(vehicule);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/?idDevice=' + idDevice + '&idGroups=' + idGroups + '&idDriver=' + idDriver + '&deviceNumber=' + deviceNumber, vehicule, options).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.update = function (vehicule, idGroups, idDriver, deviceNumber) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(vehicule);
        return this._http.put(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/?idGroups=' + idGroups + '&idDriver=' + idDriver + '&deviceNumber=' + deviceNumber, vehicule, options).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.addGroup = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/byName/?groupeName=' + name, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.addDriver = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'drivers/byName/?driverName=' + name, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getGroupsVehicule = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/groups/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getOne = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.assignement = function (idVehicule, idDriver) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/assignement/?idVehicule=' + idVehicule + '&idDriver=' + idDriver, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getListVehicules = function (page, size) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/list' + '?page=' + page + '&size=' + size, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.delete = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getGroupsLabel = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/labels', { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getDriversLabel = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'drivers/labels', { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getDevicesLabel = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'devices/labels', { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getVehicule = function (idVehicule) {
        if (this.vehicules.length != 0) {
            console.log(this.vehicules);
            return this.vehicules.find(function (vehicule) { return vehicule.idVehicule === idVehicule; });
        }
        return null;
    };
    return VehiculeService;
}());
VehiculeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], VehiculeService);

//# sourceMappingURL=vehicule.service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Poi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_map_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_data_management__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_config__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Poi = (function () {
    function Poi(navParams, mapService, alertCtrl, toastr, dataManagementService, viewCtrl, geocodingService) {
        this.navParams = navParams;
        this.mapService = mapService;
        this.alertCtrl = alertCtrl;
        this.toastr = toastr;
        this.dataManagementService = dataManagementService;
        this.viewCtrl = viewCtrl;
        this.geocodingService = geocodingService;
        this.pointInterests = [];
        this.pointInterestsPoint = [];
        this.pointInterestsPolygon = [];
        this.images = [
            { text: "marker1", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "marker1.png" },
            { text: "marker2", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "marker2.png" },
            { text: "marker3", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "marker3.png" },
            { text: "marker4", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "marker4.png" },
            { text: "marker5", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "marker5.png" },
            { text: "marker6", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "marker6.png" },
            { text: "marker7", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "marker7.png" },
            { text: "marker8", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "marker8.png" },
            { text: "marker9", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "marker9.png" },
            { text: "marker10", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "marker10.png" },
            { text: "marker11", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "marker11.png" },
            { text: "flag1", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "flag1.png" },
            { text: "flag2", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "flag2.png" },
            { text: "house1", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "house1.png" },
            { text: "house2", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "house.png" }
        ];
        this.pointinterest = new __WEBPACK_IMPORTED_MODULE_3__objects_data_management__["a" /* PointInterest */]();
        this.selectedImage = this.images[0];
        this.pointinterest = navParams.get('pointInterest');
    }
    //fermer modal with point d'interet non null
    Poi.prototype.closeModal = function () {
        this.pointinterest.name = null;
        this.viewCtrl.dismiss({ pointinterest: this.pointinterest });
    };
    //ajouter poi
    Poi.prototype.addpoi = function () {
        if (this.pointinterest.name == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert',
                subTitle: 'Ajouter un Nom',
                buttons: ['Ok']
            });
            alert_1.present();
        }
        else {
            this.pointinterest.type = 'MARKER';
            this.pointinterest.imageUri = this.selectedImage.uri;
            this.viewCtrl.dismiss({ pointinterest: this.pointinterest });
        }
    };
    return Poi;
}());
Poi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'app-poi',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\poi\poi.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <ion-title style="text-align: center"><a> Ajouter POI</a> </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="closeModal()">\n\n        <ion-icon name="arrow-down"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n  <ion-content padding text-center style="background-color: rgba(255, 255, 255, 0.69) ;">\n\n        <ion-list style="margin-top:40px;" >\n\n                <ion-item  style=" background-color:rgba(0,0,0,0.1)!important;" >\n\n               \n\n                  <ion-input placeholder="Nom..."[(ngModel)]="pointinterest.name"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item style=" background-color:rgba(0,0,0,0.1)!important;">\n\n                    \n\n                    <textarea id="note" rows="4" placeholder="Adresse ..."[(ngModel)]="pointinterest.address" style="color:white; background-color:rgba(0,0,0,0)!important;"></textarea>\n\n                </ion-item>\n\n                <ion-item style=" background-color:rgba(0,0,0,0.1)!important;">\n\n                        <ion-input type="number" placeholder="Rayon" [(ngModel)]="pointinterest.ray"></ion-input>\n\n                </ion-item>\n\n       </ion-list>\n\n       <p>[lat],[lng]\n\n       \n\n        {{pointinterest.coordinate.lat}},{{pointinterest.coordinate.lng}}\n\n       </p>\n\n       \n\n    <!-- <div class="form-group">\n\n        <div class="dropdown">\n\n            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"\n\n                    data-toggle="dropdown" aria-haspopup="true"\n\n                    aria-expanded="true" style="border-radius: 0px;">\n\n                <img src="{{selectedImage.uri}}" width="17px"/> {{selectedImage.text}}\n\n                <span class="caret"></span>\n\n            </button>\n\n            <ul class="dropdown-menu" style="border-radius: 0px;">\n\n                <li *ngFor="let image of images" (click)="selectedImage = image;"style=" list-style-type: none; ">\n\n                    <a>\n\n                        <img src="{{image.uri}}" width="25px"/> {{image.text}}\n\n                    </a>\n\n                </li>\n\n            </ul>\n\n        </div>\n\n    </div> -->\n\n            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"\n\n            data-toggle="dropdown" aria-haspopup="true"\n\n            aria-expanded="true" style="border-radius: 0px;">\n\n        <img src="{{selectedImage.uri}}" width="17px"/> {{selectedImage.text}}\n\n        <span class="caret"></span>\n\n        </button>\n\n    <ion-slides style="background-color:rgba(0,0,0,0.1); height:auto;width:auto;align-items:center; justify-content:center;">\n\n        <ion-slide *ngFor="let image of images" style="background-color:rgba(0,0,0,0);height:auto;width:auto;">\n\n          <ion-item class="item item-trns item-stable" style="background-color:rgba(0,0,0,0);" >\n\n            <li (click)="selectedImage = image;"style=" list-style-type: none; ">\n\n                <a>\n\n                    <img src="{{image.uri}}" width="25px"/> {{image.text}}\n\n                </a>\n\n            </li>\n\n           </ion-item> \n\n        </ion-slide>\n\n       </ion-slides>   \n\n                       \n\n                      \n\n                       \n\n       <button ion-button center round (click)="addpoi()">Ajouter comme Point d\'Intérêt\n\n            <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n        </button>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\poi\poi.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__utils_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__["a" /* GeocodingService */]])
], Poi);

//# sourceMappingURL=poi.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_config__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeocodingService = (function () {
    function GeocodingService(_http) {
        this._http = _http;
    }
    GeocodingService.prototype.distance = function (lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
                (1 - c((lon2 - lon1) * p)) / 2;
        var distance = 12742 * Math.asin(Math.sqrt(a));
        return distance;
    };
    GeocodingService.prototype.inverseGeoconding = function (latitude, longitude, zoom) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2__providers_global_config__["c" /* nominatim_dns */] + '/reverse.php?format=json&lat=' + latitude + '&lon=' + longitude + '&zoom=' + zoom + '&accept-language=fr&addressdetails=1').map(function (res) { return res.json(); });
    };
    GeocodingService.prototype.getMyIpAdress = function () {
        return this._http.get('http://api.ipify.org/?format=json').map(function (res) { return res.json(); });
    };
    GeocodingService.prototype.getMyLocation = function (ip) {
        return this._http.get('freegeoip.net/json/' + ip).map(function (res) { return res.json(); });
    };
    return GeocodingService;
}());
GeocodingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GeocodingService);

//# sourceMappingURL=geocoding.service.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointInterest; });
/* unused harmony export Driver */
var PointInterest = (function () {
    function PointInterest() {
        this.ray = 100;
        this.decode = [];
        this.coordinate = { lat: 0, lng: 0 };
    }
    return PointInterest;
}());

var Driver = (function () {
    function Driver() {
    }
    return Driver;
}());

//# sourceMappingURL=data-management.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Historical; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_global_config__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_real_time__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stop_list_stop_list__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_data_management__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_map_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_historical_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_management_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__historical_form_historical_form__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__paths_list_paths_list__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_global_config__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_geocoding_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_leaflet__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_real_time_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_Rx__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__groups_page_groups_page__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__objects_real_time__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__poi_poi__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__mileage_mileage__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};















var Polygon = L.Polygon;
var Marker = L.Marker;
var Icon = L.Icon;











var Routing = __webpack_require__(597);
var Historical = (function () {
    function Historical(menu, statusBar, alertCtrl, geolocation, actionSheetCtrl, viewCtrl, callNumber, storage, pipe, toastController, realTimeService, geocodingService, dataManagementService, _app, historicalService, loadingCtrl, modalCtrl, navCtrl, navParams, mapService) {
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.actionSheetCtrl = actionSheetCtrl;
        this.viewCtrl = viewCtrl;
        this.callNumber = callNumber;
        this.storage = storage;
        this.pipe = pipe;
        this.toastController = toastController;
        this.realTimeService = realTimeService;
        this.geocodingService = geocodingService;
        this.dataManagementService = dataManagementService;
        this._app = _app;
        this.historicalService = historicalService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mapService = mapService;
        this.stops = [];
        this.pointInterests = null;
        this.searchWord = '';
        this.newRealTimeRecords = null;
        this.oldRealTimeRecords = null;
        this.angles = new Map();
        this.isCurrentPathClicked = false;
        this.pathDrawn = false;
        this.previousPathdrawn = false;
        this.pathDraw = false;
        this.currentPathClickedDeviceIds = null;
        this.modalopen = false;
        this.dismissbutton = false;
        this.poisInMap = false;
        this.itineaire = false;
        this.ajoutpoi = false;
        this.mapchoice = true;
        this.mapclicked = false;
        this.resultopened = false;
        this.openStopResult = false;
        this.openMileageResult = false;
        this.mileages = [];
        this.pathpoirealtime = false;
        this.navCtrl.swipeBackEnabled = false;
        this.totalMileage = new __WEBPACK_IMPORTED_MODULE_2__objects_real_time__["a" /* Mileage */]();
        statusBar.show();
    }
    // initialisation du map + get current coordinate user
    Historical.prototype.ngOnInit = function () {
        this.initMap();
        this.init();
        // this.geolocation.getCurrentPosition().then((resp) => {
        //   this.currentlocationlat=resp.coords.latitude;
        //   this.currentlocationlng=resp.coords.longitude;
        //   this.coords=resp.coords;
        //  }).catch((error) => {
        //    console.log('Error getting location', error);
        //  });
        this.getlocation();
    };
    Historical.prototype.getlocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var coords;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        coords = (_a.sent()).coords;
                        this.currentlocationlat = coords.latitude;
                        this.currentlocationlng = coords.longitude;
                        return [2 /*return*/];
                }
            });
        });
    };
    // open menu
    Historical.prototype.openmenu = function () {
        this.menu.open();
    };
    //Loading groups and all real time records
    Historical.prototype.init = function () {
        var _this = this;
        this.mapService.removeAllRtMarkers();
        this.loadGroups();
        __WEBPACK_IMPORTED_MODULE_17_rxjs_Rx__["Observable"].interval(1000 * 60).subscribe(function (x) {
            _this.getAllRealTimeRecords();
        });
    };
    //get all groups methods
    Historical.prototype.loadGroups = function () {
        var _this = this;
        this.allGroups = this.realTimeService.getAllGroups(this.searchWord).subscribe(function (groupes) {
            _this.groups = groupes;
            _this.openGroupsModal();
            _this.groups.forEach(function (group) {
                group.vehicules.forEach(function (vehicule) {
                    vehicule.realTimeRecord = new __WEBPACK_IMPORTED_MODULE_19__objects_real_time__["b" /* RealTimeRecord */]();
                    _this.getAllRealTimeRecords();
                });
            });
        });
    };
    // All records real time method
    Historical.prototype.getAllRealTimeRecords = function () {
        var _this = this;
        this.allRealTimeRecords = this.realTimeService.getAllRealTimeRecords().subscribe(function (realTimeRecords) {
            if (_this.newRealTimeRecords) {
                _this.oldRealTimeRecords = _this.newRealTimeRecords;
            }
            _this.newRealTimeRecords = realTimeRecords;
            realTimeRecords.forEach(function (realTimeRecord) {
                realTimeRecord.vehicule = _this.getVehicule(realTimeRecord.idRealTimeRecord);
                _this.trackRealTimeRecord(realTimeRecord);
                if (_this.oldRealTimeRecords) {
                    _this.oldRealTimeRecords.map(function (oldRealTimeRecord) {
                        if (oldRealTimeRecord.idRealTimeRecord === realTimeRecord.idRealTimeRecord) {
                            if (realTimeRecord.speed > 0 && _this.previousPathdrawn == false && realTimeRecord.idRealTimeRecord == _this.selectedDevice) {
                                _this.displayCurrentPath(realTimeRecord.idRealTimeRecord);
                            }
                            if (oldRealTimeRecord.speed == 0 && realTimeRecord.speed > 0) {
                                _this.isCurrentPathClicked = true;
                                if (_this.currentPathClickedDeviceIds != null)
                                    _this.currentPathClickedDeviceIds.push(realTimeRecord.idRealTimeRecord);
                                if (_this.previousPathdrawn == false && realTimeRecord.idRealTimeRecord == _this.selectedDevice) {
                                    _this.displayCurrentPath(realTimeRecord.idRealTimeRecord);
                                }
                            }
                            if ((oldRealTimeRecord.speed > 0 && realTimeRecord.speed == 0) && realTimeRecord.ignition == false) {
                                _this.isCurrentPathClicked = false;
                                _this.currentPathClickedDeviceIds = null;
                            }
                        }
                    });
                }
            });
        });
    };
    //initialisation du map
    Historical.prototype.initMap = function () {
        if (this.mapService.map)
            this.mapService.map.remove();
        var map = L.map('historicalMap', {
            zoomControl: false,
            center: L.latLng(32.586163, -9.912118),
            zoom: 6,
            minZoom: 3,
            maxZoom: 20,
            maxNativeZoom: 17,
            layers: [this.mapService.baseMaps.googlehybride]
        });
        L.control.layers(this.mapService.baseMaps, null, { position: 'bottomright' }).addTo(map);
        L.control.zoom({ position: 'topright' }).addTo(map);
        this.mapService.map = map;
    };
    //draw itineraire
    Historical.prototype.drawpath = function () {
        if (this.itineaire) {
            this.itineaire = false;
            this.initMap();
            this.goToRealTimeRecord(this.selectedDevice);
            return;
        }
        else {
            console.log(this.iconitineraire);
            var L = __webpack_require__(134);
            if (this.mapService.map)
                this.mapService.map.remove();
            var map = L.map('historicalMap', {
                zoomControl: false,
                center: L.latLng(32.586163, -9.912118),
                zoom: 6,
                minZoom: 3,
                maxZoom: 20,
                maxNativeZoom: 17,
                layers: [this.mapService.baseMaps.googlehybride]
            });
            L.control.layers(this.mapService.baseMaps, null, { position: 'bottomright' }).addTo(map);
            L.control.zoom({ position: 'topright' }).addTo(map);
            this.mapService.map = map;
            this.control = L.Routing.control({
                createMarker: function (i, wp, n) {
                    var url = null;
                    if (i == 0) {
                        url = __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + 'startMarker.png';
                    }
                    else if (i == n - 1) {
                        return null;
                    }
                    return L.marker(wp.latLng, {
                        draggable: true,
                        icon: L.icon({
                            iconSize: [20, 20],
                            iconUrl: url,
                            iconAnchor: [-2, 30],
                            popupAnchor: [10, -25]
                        })
                    });
                },
                waypoints: [
                    L.latLng(this.currentlocationlat, this.currentlocationlng),
                    L.latLng(this.latpoi, this.lngpoi),
                ],
                language: 'fr',
                lineOptions: {
                    styles: [
                        { color: 'blue', opacity: 1, weight: 3 }
                    ],
                },
            }).addTo(this.mapService.map);
            this.itineaire = true;
        }
    };
    // (open modal) liste des groupes et véhicules (temps réel) 
    Historical.prototype.openGroupsModal = function () {
        var _this = this;
        this.itineaire = false;
        this.pathpoirealtime = true;
        this.initMap();
        this.resultopened = false;
        this.openStopResult = false;
        this.openMileageResult = false;
        var groupModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_18__groups_page_groups_page__["a" /* GroupsPage */], { groups: this.groups });
        groupModal.present();
        groupModal.onDidDismiss(function (selectedDevice) {
            if (selectedDevice != null && selectedDevice != 0) {
                _this.mapService.removeAllRtMarkers();
                _this.clearPolylines();
                _this.selectedDevice = selectedDevice;
                _this.goToRealTimeRecord(selectedDevice);
            }
        });
        this.modalopen = false;
        this.dismissbutton = true;
        this.DeviceId = null;
    };
    //open POI Modal
    Historical.prototype.openPoiModal = function () {
        var _this = this;
        var pointInterest = new __WEBPACK_IMPORTED_MODULE_4__objects_data_management__["a" /* PointInterest */]();
        pointInterest.address = this.addresspoi;
        pointInterest.coordinate.lat = this.latpoi;
        pointInterest.coordinate.lng = this.lngpoi;
        var PoiModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_20__poi_poi__["a" /* Poi */], { pointInterest: pointInterest });
        PoiModal.present();
        PoiModal.onDidDismiss(function (form) {
            if (form.pointinterest.name != null) {
                _this.dataManagementService.addPointInterest(form.pointinterest).subscribe(function (pointInterest) {
                    if (pointInterest.type == "MARKER") {
                        var circle = L.circle(pointInterest.coordinate, {
                            color: 'red',
                            fillColor: '#f03',
                            fillOpacity: 0.1,
                            radius: pointInterest.ray
                        });
                        _this.mapService.addCircle(circle);
                        setTimeout(function () {
                            _this.mapService.removeCirclesFromMap();
                        }, 3000);
                    }
                    _this.dataManagementService.pointInterests.push(pointInterest);
                }, function (err) {
                });
            }
        });
    };
    //remove polylines and markers from map
    Historical.prototype.clearPolylines = function () {
        /* this.removecurrentpath();*/
        this.mapService.removePolylinesFromMap();
        this.mapService.removeMarkersFromMap();
        this.pathDrawn = false;
    };
    //Getting old real time record
    Historical.prototype.getOldRealTimeRecord = function (id) {
        var result = this.oldRealTimeRecords.filter(function (rt) {
            return rt.idRealTimeRecord == id;
        });
        if (result)
            return result[0];
        else
            return null;
    };
    //go to real time and gets historique records
    Historical.prototype.goToRealTimeRecord = function (idRealTimeRecord) {
        var _this = this;
        this.newRealTimeRecords.forEach(function (realTimeRecord) {
            if (realTimeRecord.idRealTimeRecord == idRealTimeRecord) {
                //this.clearPolylines();
                _this.mapService.map.setView(realTimeRecord.coordinate, 15);
                _this.trackRealTimeRecord(realTimeRecord);
            }
        });
    };
    // Compare two coordinate
    Historical.prototype.compareTwoCoordinate = function (p1, p2) {
        if (p1.lat == p2.lat && p1.lng == p2.lng)
            return true;
        else
            false;
    };
    //
    Historical.prototype.getGeocoding = function (address) {
        var geocoding = null;
        if (address) {
            if (address.road != null) {
                geocoding = address.road;
            }
            if (address.neighbourhood != null) {
                geocoding = geocoding ? geocoding + ' ' + address.neighbourhood : address.neighbourhood;
            }
            if (address.city != null) {
                geocoding = geocoding ? geocoding + ' (' + address.city + ')' : address.city;
            }
            if (geocoding == null) {
                geocoding = 'chargement..';
            }
        }
        return geocoding;
    };
    // get vehicule
    Historical.prototype.getVehicule = function (idDevice) {
        var foundVehicule = new __WEBPACK_IMPORTED_MODULE_19__objects_real_time__["d" /* Vehicule */]();
        for (var i = 0; i < this.groups.length; i++) {
            for (var j = 0; j < this.groups[i].vehicules.length; j++) {
                if (this.groups[i].vehicules[j].idDevice == idDevice) {
                    foundVehicule = this.groups[i].vehicules[j];
                    break;
                }
            }
        }
        return foundVehicule;
    };
    //temps reel 
    Historical.prototype.trackRealTimeRecord = function (realTimeRecord) {
        var _this = this;
        var angle = 0;
        var date = new Date(realTimeRecord.recordTime);
        realTimeRecord.recordTime = new Date(new Date(realTimeRecord.recordTime).setHours(new Date(realTimeRecord.recordTime).getHours() - 1));
        var minutes = date.getMinutes() + "";
        if (minutes.length == 1) {
            minutes = "0" + date.getMinutes();
        }
        var icon;
        var marker;
        var popup;
        if (!this.dataManagementService.pointInterests) {
            this.dataManagementService.getAllPointInterests().subscribe(function (pointInterests) {
                _this.dataManagementService.pointInterests = pointInterests;
                realTimeRecord.relativePosition = _this.dataManagementService.getRelativePosition(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng);
            });
        }
        else {
            realTimeRecord.relativePosition = this.dataManagementService.getRelativePosition(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng);
        }
        if (realTimeRecord.type === "AA") {
            angle = realTimeRecord.rotationAngle * 8;
        }
        if (this.oldRealTimeRecords && realTimeRecord.type === "GPRMC") {
            var oldRealTimeRecord = this.getOldRealTimeRecord(realTimeRecord.idRealTimeRecord);
            if (oldRealTimeRecord) {
                if (!this.compareTwoCoordinate(oldRealTimeRecord.coordinate, realTimeRecord.coordinate)) {
                    angle = Math.atan2(realTimeRecord.coordinate.lng - oldRealTimeRecord.coordinate.lng, realTimeRecord.coordinate.lat - oldRealTimeRecord.coordinate.lat) * 180 / Math.PI;
                    this.angles.set(realTimeRecord.idRealTimeRecord, angle);
                }
                else {
                    angle = this.angles.get(realTimeRecord.idRealTimeRecord);
                }
            }
        }
        popup = '<b>Chauffeur:</b> ' + this.dataManagementService.getDriverName(realTimeRecord.vehicule.driver) +
            '<br><b>Matricule:</b> ' + realTimeRecord.vehicule.matricule +
            '<br><b>Mark:</b> ' + realTimeRecord.vehicule.mark +
            '<br><b>Lat,Lng:</b><i> [' + this.PipeLngLat(realTimeRecord.coordinate.lat) + ',' + this.PipeLngLat(realTimeRecord.coordinate.lng) + ']</i><br><b>Vitesse :</b>' + realTimeRecord.speed +
            "<br><b>date et l'heure:</b> " + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + minutes +
            "<br><b>Signal GSM:</b> " + realTimeRecord.signal +
            " <i class='fa fa-wifi' aria-hidden='true'></i><br><b>Sat en vue:</b> " + realTimeRecord.satInView + " <i class='fa fa-globe' aria-hidden='true'></i>";
        this.realtimecoord = realTimeRecord.coordinate;
        this.latpoi = this.PipeLngLat(realTimeRecord.coordinate.lat);
        this.lngpoi = this.PipeLngLat(realTimeRecord.coordinate.lng);
        this.dataManagementService.inverseGeoconding(this.latpoi, this.lngpoi, 17).subscribe(function (res) {
            _this.addresspoi = res.display_name;
        }, function (err) {
        });
        if (realTimeRecord.vehicule.driver) {
            this.driverphone = realTimeRecord.vehicule.driver.telephone;
        }
        marker = new Marker(realTimeRecord.coordinate, {
            rotationAngle: angle
        });
        var imageUri = "http://37.187.171.84/images/c1x0.png";
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition == true) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -10]
            });
            imageUri = __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed > 0) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            imageUri = __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition == false) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            imageUri = __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'NON_VALID' || realTimeRecord.realTimeRecordStatus == 'TECHNICAL_ISSUE') {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            imageUri = __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        realTimeRecord.icon = imageUri;
        this.geocodingService.inverseGeoconding(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng, 18).subscribe(function (adress) {
            popup = popup + '<hr><b>' + adress.display_name + '</b><br>';
            if (realTimeRecord.relativePosition) {
                popup = popup + '<hr><center><span class="leaflet-pelias-layer-icon-container"><div class="leaflet-pelias-layer-icon leaflet-pelias-layer-icon-point"></div></span><strong>' + realTimeRecord.relativePosition + '</strong></center>';
            }
            realTimeRecord.geocoding = _this.getGeocoding(adress.address);
            realTimeRecord.geocodingDetails = adress.display_name;
            _this.updateSpecificGroups(realTimeRecord);
            var displaycurrentPath = false;
            if (_this.currentPathClickedDeviceIds != null && _this.currentPathClickedDeviceIds.indexOf(realTimeRecord.idRealTimeRecord) != -1) {
                displaycurrentPath = true;
                _this.pathDrawn = true;
            }
            if (realTimeRecord.idRealTimeRecord == _this.selectedDevice) {
                _this.mapService.removeAllRtMarkers();
                _this.mapService.updateRtMarkertest(realTimeRecord.coordinate, popup, icon, realTimeRecord.idRealTimeRecord, displaycurrentPath);
                if (_this.pathDrawn == false && realTimeRecord.speed > 0) {
                    _this.displayCurrentPath(realTimeRecord.idRealTimeRecord);
                }
            }
        }, function (err) {
            var displaycurrentPath = false;
            if (_this.currentPathClickedDeviceIds != null && _this.currentPathClickedDeviceIds.indexOf(realTimeRecord.idRealTimeRecord) != -1) {
                displaycurrentPath = true;
            }
            if (realTimeRecord.idRealTimeRecord == _this.selectedDevice) {
                marker.bindPopup(popup);
                _this.mapService.updateRtMarkertest(realTimeRecord.coordinate, popup, icon, realTimeRecord.idRealTimeRecord, displaycurrentPath);
            }
        });
    };
    //
    Historical.prototype.PipeLngLat = function (value) {
        return this.pipe.transform(value, '2.2-6');
    };
    //update du groupe
    Historical.prototype.updateSpecificGroups = function (realTimeRecord) {
        if (this.groups)
            this.groups.forEach(function (group) {
                if (group)
                    group.vehicules.forEach(function (vehicule) {
                        if (vehicule.idDevice == realTimeRecord.idRealTimeRecord)
                            vehicule.realTimeRecord = realTimeRecord;
                    });
            });
    };
    //alert lancement Moteur
    Historical.prototype.AlertLancementMoteur = function (deviceId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Êtes-vous sûr ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Start',
                    handler: function () {
                        _this.startEngine(deviceId);
                    }
                }
            ]
        });
        alert.present();
    };
    //start moteur
    Historical.prototype.startEngine = function (deviceId) {
        this.realTimeService.startEngine(deviceId).subscribe(function (cmdSended) {
            alert("commande Lancement moteur envoyé !");
        });
    };
    //alert arret moteur
    Historical.prototype.AlertArretMoteur = function (deviceId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Êtes-vous sûr ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Arrêt',
                    handler: function () {
                        _this.stopEngine(deviceId);
                    }
                }
            ]
        });
        alert.present();
    };
    //stop moteur
    Historical.prototype.stopEngine = function (deviceId) {
        this.realTimeService.stopEngine(deviceId).subscribe(function (cmdSended) {
            alert("commande Arrêt moteur envoyé !");
        });
    };
    //open result "historique des trajets"
    Historical.prototype.openResultsModal = function () {
        var _this = this;
        this.mapService.removePolylinesFromMap();
        this.mapService.removeMarkersFromMap();
        var pathsListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__paths_list_paths_list__["a" /* PathsList */], { paths: this.paths });
        if (this.paths == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Historique',
                subTitle: 'Aucune informations',
                buttons: ['Ok']
            });
            alert_1.present();
        }
        else {
            pathsListModal.present();
            pathsListModal.onDidDismiss(function (pathClicked) {
                if (pathClicked != null)
                    _this.drawPath(pathClicked);
                _this.resultopened = true;
                _this.openStopResult = false;
                _this.openMileageResult = false;
            });
        }
    };
    // desiner le trajet
    Historical.prototype.drawPath = function (path) {
        var _this = this;
        this.mapService.removePolylinesFromMap();
        this.mapService.removeMarkersFromMap();
        this.historicalService.getPathDetails(path.deviceId, {
            startDate: path.beginPathTime,
            endDate: path.endPathTime
        }).subscribe(function (points) {
            var stopMarkers = [];
            points.stops.forEach(function (stop) {
                var popup = "<img src='" + __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "stop_smal.png" + "'/> Durée d'arrêt : " + stop.stopDurationStr;
                var stopMarker = L.marker({ lat: stop.stopLatitude, lng: stop.stopLongitude });
                stopMarker.addTo(_this.mapService.map);
                stopMarker.on('click', function () { _this.mapService.map.setView({ lat: stop.stopLatitude, lng: stop.stopLongitude }, 14); });
                _this.dataManagementService.inverseGeoconding(stop.stopLatitude, stop.stopLongitude, 18).subscribe(function (adress) {
                    var truncatedDisplayName = adress.display_name;
                    var countCommas = 0;
                    for (var i = 0, len = adress.display_name.length; i < len; i++) {
                        if (adress.display_name[i] == ',') {
                            countCommas = countCommas + 1;
                        }
                        else if (countCommas >= 5) {
                            truncatedDisplayName = adress.display_name.substring(0, i - 1);
                            break;
                        }
                    }
                    popup = popup + '<br><hr><b>' + truncatedDisplayName + '</b>';
                    stopMarker.bindPopup(popup);
                });
                stopMarker.setIcon(new Icon({
                    iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "stop_smal.png",
                    iconAnchor: [-2, 30],
                    popupAnchor: [10, -25]
                }));
                _this.mapService.addMarker(stopMarker);
            });
            var polyline = L.polyline(points.coordinates, { color: '#0031D9', weight: 3 });
            points.coordinates.forEach(function (coordinate, i) {
                var marker = L.marker(coordinate);
                if (i != 0 && i != points.coordinates.length - 1) {
                    marker.setIcon(new Icon({
                        iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                        iconAnchor: [2, 2]
                    }));
                    var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](coordinate.date);
                    var popup = '<b>Heure:</b> ' + pointDatePipe.transform(coordinate.date, 'dd/MM/yyyy HH:mm:ss') + '<b><br>vitesse:</b> ' + coordinate.speed + ' Km/h';
                    marker.bindPopup(popup);
                    marker.on('click', function () {
                        _this.mapService.map.setView(coordinate, 17);
                    });
                    _this.mapService.addMarker(marker);
                }
            });
            var startMarker = L.marker({ lat: path.beginPathLatitude, lng: path.beginPathLongitude });
            var startTime = path.beginPathTime;
            var startDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](startTime);
            startMarker.bindPopup('<b> Lieu de début: </b>' + path.beginPathGeocoding + '<b></i><br>Temps de début du trajet : </b>' + startDatePipe.transform(startTime, 'dd/MM/yyyy HH:mm:ss'));
            startMarker.setIcon(new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "startMarker.png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            }));
            _this.mapService.addMarker(startMarker);
            if (path.endPathLatitude != null && path.endPathLongitude != null && path.endPathTime != null) {
                var endMarker = L.marker({ lat: path.endPathLatitude, lng: path.endPathLongitude });
                var endTime = path.endPathTime;
                var endDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](endTime);
                endMarker.bindPopup('<b> Lieu de fin: </b>' + path.endPathGeocoding + '<br><b>Temps de fin du trajet : </b>' + endDatePipe.transform(endTime, 'dd/MM/yyyy HH:mm:ss')
                    + '<br><b> Durée du trajet : </b>' + path.pathDurationStr + "<br><b> Durée d'arrêt : </b>" + path.nextStopDurationStr + "<br><b> Vitesse maximum : </b>"
                    + path.maxSpeed + " Km/h <br><b> Kilometrage parcouru : </b>" + path.distanceDriven.toFixed(2) + ' Km');
                endMarker.setIcon(new Icon({
                    iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "endMarker.png",
                    iconAnchor: [-2, 30],
                    popupAnchor: [10, -25]
                }));
                _this.mapService.addMarker(endMarker);
            }
            _this.mapService.addPolyline(polyline);
            var middle = points.coordinates[Math.round((points.coordinates.length - 1) / 2)];
            _this.mapService.map.setView(middle, 12);
        });
        this.modalopen = true;
    };
    // trajet en courant temps reel
    Historical.prototype.displayCurrentPath = function (deviceId) {
        var _this = this;
        this.realTimeService.getCurrentPath(deviceId).subscribe(function (currentPath) {
            if (currentPath != null) {
                var polyline = L.polyline(currentPath.coordinates, { color: '#0031D9', weight: 3 });
                currentPath.coordinates.forEach(function (coordinate, i) {
                    var marker = new Marker(coordinate);
                    if (i != 0 && i != currentPath.coordinates.length - 1) {
                        marker.setIcon(new Icon({
                            iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                            iconAnchor: [2, 2]
                        }));
                        _this.mapService.addMarker(marker);
                    }
                });
                var startMarker = L.marker({ lat: currentPath.beginPathLatitude, lng: currentPath.beginPathLongitude });
                startMarker.setIcon(new Icon({
                    iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "startMarker.png",
                    iconAnchor: [-2, 30],
                    popupAnchor: [10, -25]
                }));
                startMarker.on('click', function () { _this.mapService.map.setView({ lat: currentPath.beginPathLatitude, lng: currentPath.beginPathLongitude }, 14); });
                _this.mapService.addMarker(startMarker);
                _this.mapService.addPolyline(polyline);
                _this.pathDrawn = true;
            }
            _this.previousPathdrawn = true;
        }, function (err) {
            _this.previousPathdrawn = false;
        });
        this.DeviceId = deviceId;
    };
    //
    Historical.prototype.processGeocoding = function (geocoding) {
        if (geocoding != null) {
            var array = geocoding.split(',', 3);
            var smallerGeocoding_1 = '';
            array.forEach(function (word) {
                smallerGeocoding_1 = smallerGeocoding_1 + ', ' + word;
            });
            smallerGeocoding_1 = smallerGeocoding_1.slice(2, smallerGeocoding_1.length);
            return smallerGeocoding_1;
        }
        else
            return null;
    };
    //l'appel du chauffeur
    Historical.prototype.calldriver = function (number) {
        if (number) {
            this.callNumber.callNumber(number, true)
                .then(function () { return console.log('Launched dialer!'); })
                .catch(function () { return console.log('Error launching dialer'); });
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Numéro introuvable',
                buttons: ['Ok']
            });
            alert_2.present();
        }
    };
    //draw all point interests
    Historical.prototype.drawPointInterests = function () {
        var _this = this;
        this.mapService.removeMarkersPoiFromMap();
        this.mapService.removePolygonsPoiFromMap();
        this.mapService.removeCirclesFromMap();
        if (this.poisInMap) {
            this.poisInMap = false;
            return;
        }
        else {
            this.initMap();
            if (this.dataManagementService.pointInterests == null) {
                this.dataManagementService.getAllPointInterests().subscribe(function (pointInterests) {
                    _this.dataManagementService.pointInterests = pointInterests;
                    _this.pointInterests = pointInterests;
                    pointInterests.forEach(function (pointInterest) {
                        _this.drawPointInterest(pointInterest);
                    });
                });
            }
            else {
                this.dataManagementService.pointInterests.forEach(function (pointInterest) {
                    _this.drawPointInterest(pointInterest);
                });
            }
            this.poisInMap = true;
        }
    };
    //draw une seule point d'interet
    Historical.prototype.drawPointInterest = function (pointInterest) {
        var _this = this;
        var popup = "<b>Nom : </b> " + pointInterest.name + "<b>Adresse</b>" + pointInterest.address + "";
        var marker = null;
        if (pointInterest.type == "POLYGON") {
            var polygon = new Polygon(pointInterest.decode);
            this.mapService.addPolygonPoi(polygon);
        }
        marker = L.marker(pointInterest.coordinate);
        marker.setIcon(new Icon({
            iconUrl: pointInterest.imageUri,
            iconAnchor: [-2, 10],
            popupAnchor: [10, -25]
        }));
        this.mapService.addMarkerPoi(marker);
        marker.on("click", function () {
            _this.mapService.map.setView(pointInterest.coordinate, 17);
        });
        marker.bindPopup('<b> Lieu de fin: </b>' + pointInterest.name + '<br><b>Temps de fin du trajet : </b>');
    };
    // historique des trajet + historique des stops + historique de kilometrage
    Historical.prototype.openFormModal = function (fab) {
        var _this = this;
        this.pathpoirealtime = false;
        this.initMap();
        if (fab !== undefined) {
            fab.close();
        }
        this.pathDrawn = false;
        this.previousPathdrawn = false;
        this.mapService.removeAllRtMarkers();
        var formModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__historical_form_historical_form__["a" /* HistoricalForm */]);
        formModal.present();
        formModal.onDidDismiss(function (form) {
            //historique des trajets
            if (form.endDate != "" && form.startDate != "" && form.list == "trajet") {
                var firstDateTime = new Date(form.startDate);
                var lastDateTime = new Date(form.endDate);
                _this.loader = _this.loadingCtrl.create({
                    content: "Veuillez attendre..."
                });
                _this.loader.present();
                if (form.startDate == null && form.endDate == null) {
                    _this.loader.dismiss();
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Informations erronées',
                        buttons: ['Ok']
                    });
                    alert_3.present();
                }
                _this.allPaths = _this.historicalService.getAllPaths(_this.selectedDevice, {
                    startDate: firstDateTime,
                    endDate: new Date(lastDateTime.getTime() + 3600000)
                }).subscribe(function (paths) {
                    if (paths.length) {
                        _this.paths = paths;
                        var lastLat_1 = paths[0].beginPathLatitude;
                        var lastlng_1 = paths[0].beginPathLongitude;
                        var i_1 = 0;
                        _this.paths.forEach(function (path) {
                            var startHour = path.beginPathTime;
                            var startTime = startHour + __WEBPACK_IMPORTED_MODULE_13__providers_global_config__["d" /* time_difference */];
                            path.displayBeginPathTime = startTime;
                            if (path.endPathTime != null) {
                                var endHour = path.endPathTime;
                                var endTime = endHour + __WEBPACK_IMPORTED_MODULE_13__providers_global_config__["d" /* time_difference */];
                                path.displayEndPathTime = endTime;
                            }
                            path.beginPathGeocodingDetails = _this.dataManagementService.getRelativePosition(path.beginPathLatitude, path.beginPathLongitude);
                            path.beginPathGeocoding = path.beginPathGeocodingDetails;
                            if (path.beginPathGeocodingDetails == null) {
                                _this.geocodingService.inverseGeoconding(path.beginPathLatitude, path.beginPathLongitude, 17).subscribe(function (adress) {
                                    path.beginPathGeocodingDetails = adress.display_name;
                                    if (adress.address.road != null && adress.address.neighbsourhood != null && adress.address.city != null) {
                                        path.beginPathGeocoding = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                                        path.beginPathGeocodingDetails = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                                    }
                                    else {
                                        var truncatedDisplayName = adress.display_name;
                                        var countCommas = 0;
                                        for (var i = 0, len = adress.display_name.length; i < len; i++) {
                                            if (adress.display_name[i] == ',') {
                                                countCommas = countCommas + 1;
                                            }
                                            else if (countCommas >= 5) {
                                                truncatedDisplayName = adress.display_name.substring(0, i - 1);
                                                path.beginPathGeocoding = truncatedDisplayName;
                                                path.beginPathGeocodingDetails = path.beginPathGeocoding;
                                                break;
                                            }
                                        }
                                    }
                                }, function (err) {
                                    path.beginPathGeocodingDetails = null;
                                    path.beginPathGeocoding = null;
                                });
                            }
                            path.endPathGeocodingDetails = _this.dataManagementService.getRelativePosition(path.endPathLatitude, path.endPathLongitude);
                            path.endPathGeocoding = path.endPathGeocodingDetails;
                            if (path.endPathGeocodingDetails == null) {
                                _this.geocodingService.inverseGeoconding(path.endPathLatitude, path.endPathLongitude, 17).subscribe(function (adress) {
                                    path.endPathGeocodingDetails = adress.display_name;
                                    if (adress.address.road != null && adress.address.neighbsourhood != null && adress.address.city != null) {
                                        path.endPathGeocoding = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                                        path.endPathGeocodingDetails = path.endPathGeocoding;
                                    }
                                    else {
                                        var truncatedDisplayName = adress.display_name;
                                        var countCommas = 0;
                                        for (var i = 0, len = adress.display_name.length; i < len; i++) {
                                            if (adress.display_name[i] == ',') {
                                                countCommas = countCommas + 1;
                                            }
                                            else if (countCommas >= 5) {
                                                truncatedDisplayName = adress.display_name.substring(0, i - 1);
                                                path.endPathGeocoding = truncatedDisplayName;
                                                path.endPathGeocodingDetails = path.endPathGeocoding;
                                                break;
                                            }
                                        }
                                    }
                                }, function (err) {
                                    path.endPathGeocodingDetails = null;
                                    path.endPathGeocoding = null;
                                });
                            }
                            i_1++;
                            lastLat_1 = path.beginPathLatitude;
                            lastlng_1 = path.beginPathLongitude;
                        });
                    }
                    _this.loader.dismiss();
                    _this.openResultsModal();
                }, function (err) {
                });
            }
            //historique des arret
            if (form.endDate != "" && form.startDate != "" && form.list == "arret") {
                var firstDateTime = new Date(form.startDate);
                var lastDateTime = new Date(form.endDate);
                _this.loader = _this.loadingCtrl.create({
                    content: "Veuillez attendre..."
                });
                _this.loader.present();
                if (form.startDate == null && form.endDate == null) {
                    _this.loader.dismiss();
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Informations erronées',
                        buttons: ['Ok']
                    });
                    alert_4.present();
                }
                _this.allPaths = _this.historicalService.getAllStops(_this.selectedDevice, {
                    startDate: firstDateTime,
                    endDate: new Date(lastDateTime.getTime() + 3600000)
                }).subscribe(function (stops) {
                    if (stops && stops.length) {
                        _this.stops = stops;
                        _this.stops.forEach(function (stop) {
                            stop.geocodingDetails = _this.dataManagementService.getRelativePosition(stop.stopLatitude, stop.stopLongitude);
                            stop.geocoding = stop.geocodingDetails;
                            stop.beginStopTime = stop.beginStopTime + 2 * __WEBPACK_IMPORTED_MODULE_13__providers_global_config__["d" /* time_difference */];
                            if (stop.geocodingDetails == null) {
                                _this.geocodingService.inverseGeoconding(stop.stopLatitude, stop.stopLongitude, 17).subscribe(function (adress) {
                                    stop.geocodingDetails = adress.display_name;
                                    if (adress.address.road != null && adress.address.neighbourhood != null && adress.address.city != null) {
                                        stop.geocoding = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                                        stop.geocodingDetails = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                                    }
                                    else {
                                        var truncatedDisplayName = adress.display_name;
                                        var countCommas = 0;
                                        for (var i = 0, len = adress.display_name.length; i < len; i++) {
                                            if (adress.display_name[i] == ',') {
                                                countCommas = countCommas + 1;
                                            }
                                            else if (countCommas >= 5) {
                                                truncatedDisplayName = adress.display_name.substring(0, i - 1);
                                                stop.geocoding = truncatedDisplayName;
                                                stop.geocodingDetails = stop.geocoding;
                                                break;
                                            }
                                        }
                                    }
                                }, function (err) {
                                    stop.geocodingDetails = null;
                                    stop.geocoding = null;
                                });
                            }
                        });
                    }
                    _this.loader.dismiss();
                    _this.openStopsResultsModal();
                }, function (err) {
                });
            }
            //historique kilometrage
            if (form.endDate != "" && form.startDate != "" && form.list == "kilo") {
                var firstDateTime = new Date(form.startDate);
                var startHour = new Date(form.startDate);
                var lastDateTime = new Date(form.endDate);
                _this.loader = _this.loadingCtrl.create({
                    content: "Veuillez attendre..."
                });
                _this.loader.present();
                if (form.startDate == null && form.endDate == null) {
                    _this.loader.dismiss();
                    var alert_5 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Informations erronées',
                        buttons: ['Ok']
                    });
                    alert_5.present();
                }
                _this.AllPaths = _this.historicalService.getAllMileages(_this.selectedDevice, {
                    startDate: startHour - (24 * 60 * 60 * 1000),
                    endDate: new Date(lastDateTime.getTime() + 3600000)
                }).subscribe(function (mileages) {
                    _this.mileages = mileages;
                    _this.mileages.forEach(function (mileage) {
                        var startHour = mileage.startHour;
                        mileage.startHour = startHour + (60 * 60 * 1000);
                    });
                    _this.totalMileage = _this.mileages[_this.mileages.length - 1];
                    _this.mileages.splice(_this.mileages.length - 1);
                    _this.loader.dismiss();
                    _this.openMileageResultModal();
                }, function (err) {
                });
            }
        });
    };
    //draw arret
    Historical.prototype.drawStop = function (stop) {
        var _this = this;
        if (this.stopClicked == null || this.stopClicked.beginStopTime != stop.beginStopTime) {
            this.stopClicked = new __WEBPACK_IMPORTED_MODULE_19__objects_real_time__["c" /* Stop */]();
            this.stopClicked.beginStopTime = stop.beginStopTime;
            this.stopClicked.endStopTime = stop.endStopTime;
        }
        this.mapService.removeMarkersFromMap();
        var marker = L.marker({ lat: stop.stopLatitude, lng: stop.stopLongitude });
        var date = new Date(stop.beginStopTime);
        var beginStopTime = stop.beginStopTime;
        var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](beginStopTime);
        var popup = "<b>Date debut d'arrêt: </b>" + pointDatePipe.transform(stop.beginStopTime, 'dd/MM/yyyy HH:mm:ss') + "<br><b>Durée d'arrêt: </b>" + stop.stopDurationStr + "<br><hr><b>" + stop.geocodingDetails + "</b>";
        marker.setIcon(new Icon({
            iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "endMarker.png",
            iconAnchor: [-2, 30],
            popupAnchor: [10, -25]
        }));
        marker.bindPopup(popup);
        marker.on('click', function () {
            _this.mapService.map.setView({ lat: stop.stopLatitude, lng: stop.stopLongitude }, 17);
        });
        marker.on('add', function () {
            marker.openPopup();
        });
        this.mapService.addMarker(marker);
        this.mapService.map.setView({ lat: stop.stopLatitude, lng: stop.stopLongitude }, 15);
    };
    // open modal "historique de kilometrage" result
    Historical.prototype.openMileageResultModal = function () {
        var _this = this;
        this.mapService.removePolylinesFromMap();
        this.mapService.removeMarkersFromMap();
        var mileageListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_24__mileage_mileage__["a" /* MileageComponent */], { mileages: this.mileages, totalMileage: this.totalMileage });
        if (this.mileages == null) {
            var alert_6 = this.alertCtrl.create({
                title: 'Historique',
                subTitle: 'Aucune informations',
                buttons: ['Ok']
            });
            alert_6.present();
        }
        else {
            mileageListModal.present();
            mileageListModal.onDidDismiss(function (mileageClicked) {
                if (mileageClicked != null)
                    _this.drawMileage(mileageClicked);
            });
        }
        this.resultopened = false;
        this.openStopResult = false;
        this.openMileageResult = true;
    };
    // draw Kilometrage
    Historical.prototype.drawMileage = function (mileage) {
        var _this = this;
        if (this.mileageClicked == null || this.mileageClicked.startHour != mileage.startHour) {
            this.mileageClicked = new __WEBPACK_IMPORTED_MODULE_2__objects_real_time__["a" /* Mileage */]();
            this.mileageClicked.startHour = mileage.startHour;
            this.mileageClicked.endHour = mileage.endHour;
        }
        var startHour = mileage.startHour - (2 * 60 * 60 * 1000);
        this.historicalService.getMileageDetails(this.selectedDevice, {
            startDate: startHour,
            endDate: mileage.endHour
        }).subscribe(function (mileage) {
            var points = mileage.points;
            var stops = mileage.stops;
            var polyline = L.polyline(points, { color: '#0031D9', weight: 3 });
            points.forEach(function (coordinate, i) {
                var marker = L.marker(coordinate);
                if (i != 0 && i != points.length - 1) {
                    marker.setIcon(new Icon({
                        iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                        iconAnchor: [2, 2]
                    }));
                    var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](coordinate.date);
                    var popup = '<b>Heure:</b> ' + pointDatePipe.transform(coordinate.date, 'dd/MM/yyyy HH:mm:ss') + '<b><br>vitesse:</b> ' + coordinate.speed + ' Km/h';
                    marker.bindPopup(popup);
                    marker.on('click', function () {
                        _this.mapService.map.setView(coordinate, 17);
                    });
                    _this.mapService.addMarker(marker);
                }
            });
            stops.forEach(function (stop, i) {
                var marker = L.marker({ lat: stop.stopLatitude, lng: stop.stopLongitude });
                var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](stop.beginStopTime);
                var popup = "<b>Date debut d'arrêt: </b>" + pointDatePipe.transform(stop.beginStopTime, 'dd/MM/yyyy HH:mm:ss') + "<br><b>Durée d'arrêt: </b>" + stop.stopDurationStr;
                marker.setIcon(new Icon({
                    iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "stop_smal.png",
                    iconAnchor: [-2, 30],
                    popupAnchor: [10, -25]
                }));
                marker.bindPopup(popup);
                marker.on('click', function () {
                    _this.mapService.map.setView({ lat: stop.stopLatitude, lng: stop.stopLongitude }, 17);
                });
                _this.mapService.addMarker(marker);
            });
            _this.mapService.addPolyline(polyline);
            var middle = points[Math.round((points.length - 1) / 2)];
            //map center offset(axis y)
            // this.mapService.offsetMap(middle, 12, 0, -120);
        });
    };
    // open resultat des arrets
    Historical.prototype.openStopsResultsModal = function () {
        var _this = this;
        this.mapService.removePolylinesFromMap();
        this.mapService.removeMarkersFromMap();
        var stopListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__stop_list_stop_list__["a" /* StopList */], { stops: this.stops });
        if (this.stops == null) {
            var alert_7 = this.alertCtrl.create({
                title: 'Historique',
                subTitle: 'Aucune informations',
                buttons: ['Ok']
            });
            alert_7.present();
        }
        else {
            stopListModal.present();
            stopListModal.onDidDismiss(function (stopClicked) {
                if (stopClicked != null)
                    _this.drawStop(stopClicked);
            });
        }
        this.resultopened = false;
        this.openStopResult = true;
    };
    return Historical;
}());
Historical = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-historical',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical\historical.html"*/'<ion-header style=" height:48px">\n\n     <ion-fab top left outline class="ion-fab1" #fab style="margin-top:-7px;margin-left:0px">\n\n      <button ion-fab mini outline style="margin-top:0px;background-color:rgba(0,0,0,0.6);align-items:center;align-content: center;" (click)="openmenu()" ><i class="fa fa-list" aria-hidden="true"></i></button>\n\n  </ion-fab> \n\n  <ion-fab top right class="ion-fab2" style="margin-top:-7px">\n\n    <button ion-fab mini round outline strong  style="margin-top:0px;margin-right:60px;background-color:rgba(0,0,0,0.6)" (click)="openGroupsModal()"><ion-icon name="arrow-up"></ion-icon></button>\n\n  </ion-fab>\n\n  <ion-fab top right style="margin-top:-7px">\n\n    <button  ion-fab mini round outline strong (click)="calldriver(driverphone)" color="primary" style="margin-top:0px;background-color:rgb(70, 238, 14)" ><ion-icon name="call"></ion-icon></button>\n\n  </ion-fab>\n\n  <ion-fab top left outline class="ion-fab1" #fab style="margin-top:-7px;margin-left:50px;">\n\n    <button ion-fab mini outline style="margin-top:0px;background-color:rgba(0,0,0,0.6);align-content: center;align-items:center;" ><i class="fa fa-history" aria-hidden="true"></i></button>\n\n    <ion-fab-list side="bottom"  >\n\n      <button ion-button round outline strong (click)="openFormModal(fab)" color="light"style="background-color:rgba(0,0,0,0.4);width:80%"><ion-icon name="list"></ion-icon> Historique </button>\n\n      <button ion-button round outline strong (click)="AlertLancementMoteur(selectedDevice)" color="secondary" style="width:80%;background-color:rgba(70, 238, 14, 0.4);color:#FFF" >Lancement</button>\n\n      <button ion-button round outline strong (click)="AlertArretMoteur(selectedDevice)" color="danger" style="width:80%;background-color:rgba(242, 11, 11, 0.4);color:#FFF" >Arrêt (Moteur)</button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <ion-title><a>RimTelecom</a></ion-title>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- Right Side button+result button -->\n\n  <ion-fab bottom left *ngIf="pathDrawn == true">\n\n    <button ion-fab mini (click)="clearPolylines()" color="danger">\n\n      <ion-icon name="close"></ion-icon>\n\n    </button>\n\n  </ion-fab>    \n\n  <ion-fab bottom left *ngIf="pathDrawn == false && previousPathdrawn==true && DeviceId!==null">\n\n    <button ion-fab mini (click)="displayCurrentPath(DeviceId)"  [ngStyle]="{\'background-color\': \'rgb(70, 238, 14)\'}">\n\n      <ion-icon name="arrow-forward" ></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab bottom left *ngIf="resultopened==true">\n\n    <button ion-fab mini (click)="openResultsModal()">\n\n      <ion-icon name="search" ></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab bottom left *ngIf="openStopResult==true">\n\n    <button ion-fab mini (click)="openStopsResultsModal()">\n\n      <ion-icon name="search" ></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab bottom left *ngIf="openMileageResult==true">\n\n    <button ion-fab mini (click)="openMileageResultModal()">\n\n      <ion-icon name="search" ></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <div class="pois-toggle leaflet-bottom leaflet-right" (click)="drawPointInterests()"> \n\n    <div class=" leaflet-bar leaflet-control" style=" margin-bottom:450px !important;margin-right:12px;" >\n\n        <button  class="fa fa-eye-slash leaflet-bar-part" title="Afficher/Cacher Poi" style="outline: none;height:30px;width:30px;background-color:white;"></button>\n\n    </div>\n\n  </div>\n\n <div class="pois-toggle leaflet-bottom leaflet-right" (click)="openPoiModal()"> \n\n    <div class=" leaflet-bar leaflet-control" style=" margin-bottom:415px !important;margin-right:12px;" >\n\n        <button *ngIf="pathpoirealtime == true" title="Afficher/Cacher Poi" style="outline: none;height:30px;width:30px;background-color:white;">  <ion-icon ios="ios-add" md="md-add"></ion-icon></button>\n\n    </div>\n\n  </div>\n\n  <div class="pois-toggle leaflet-bottom leaflet-right" (click)="drawpath()"> \n\n    <div class=" leaflet-bar leaflet-control" style=" margin-bottom:380px !important;margin-right:12px;" >\n\n        <button *ngIf="pathpoirealtime == true" class="fa fa-road" title="Afficher/Cacher Poi" style="outline: none;height:30px;width:30px;background-color:white;"> </button>\n\n    </div>\n\n  </div>\n\n      <!-- Leaflet Map -->\n\n  <div id="historicalMap" class="leaflet-pseudo-fullscreen leaflet-fullscreen-on" style="height: 93%!important; top: 7.5% !important;"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical\historical.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DecimalPipe */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_16__providers_real_time_service__["a" /* RealTimeService */], __WEBPACK_IMPORTED_MODULE_14__utils_geocoding_service__["a" /* GeocodingService */], __WEBPACK_IMPORTED_MODULE_10__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9__providers_historical_service__["a" /* HistoricalService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__utils_map_service__["a" /* MapService */]])
], Historical);

//# sourceMappingURL=historical.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RealTimeRecord; });
/* unused harmony export Group */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Vehicule; });
/* unused harmony export User */
/* unused harmony export Authority */
/* unused harmony export Credentials */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mileage; });
var RealTimeRecord = (function () {
    function RealTimeRecord() {
        this.vehicule = null;
        this.geocoding = "Chargement..";
        this.geocodingDetails = 'Chargement..';
        this.speed = 0;
        this.recordTime = new Date();
        this.coordinate = { lat: 0, lng: 0 };
        this.realTimeRecordStatus = '';
        this.rotationAngle = 0;
    }
    return RealTimeRecord;
}());

var Group = (function () {
    function Group() {
    }
    return Group;
}());

var Vehicule = (function () {
    function Vehicule() {
        this.realTimeRecord = new RealTimeRecord();
    }
    return Vehicule;
}());

var User = (function () {
    function User() {
        this.username = '';
        this.email = '';
        this.authorities = [];
        this.groups = [];
        this.enabled = true;
        this.isRoot = false;
    }
    return User;
}());

var Authority = (function () {
    function Authority() {
    }
    return Authority;
}());

var Credentials = (function () {
    function Credentials() {
        this.username = '';
        this.password = '';
    }
    return Credentials;
}());

var Stop = (function () {
    function Stop() {
    }
    return Stop;
}());

var Mileage = (function () {
    function Mileage() {
        this.drivingDistance = 0;
        this.drivingDurationStr = '';
    }
    return Mileage;
}());

//# sourceMappingURL=real-time.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiculeForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_index__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vehicule_service__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehiculeForm = (function () {
    function VehiculeForm(navParams, vehiculeService, viewCtrl, toastCtrl) {
        this.navParams = navParams;
        this.vehiculeService = vehiculeService;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.idDevice = 0;
        this.idDriver = 0;
        this.groupsofVehicule = null;
        this.devicesToSelect = [];
        this.email1 = "";
        this.email2 = "";
        this.email3 = "";
        this.email4 = "";
        this.email5 = "";
        this.vehiculeInfo = null;
        this.groupLabels = [];
        this.groupsToSelect = [];
        this.value = {};
        this.showGroup = false;
        this.idGroups = [];
        this.showDriver = false;
        this.idtest = [];
        this.groupName = null;
        this.driverLabels = [];
        this.driverName = null;
        this.deviceLabels = [];
        this.request = false;
        this.driversToSelect = [];
        this.adding = false;
        this.updating = false;
        this.detaills = false;
        this.affecting = false;
        this.mode = 0;
        this.vehicule = navParams.get('vehicule');
    }
    VehiculeForm.prototype.ngOnInit = function () {
        var _this = this;
        this.groupLabels = this.vehiculeService.groupLabels;
        this.driverLabels = this.vehiculeService.driverLabels;
        if (this.deviceLabels.length == 0) {
            this.request = true;
            this.vehiculeService.getDevicesLabel().subscribe(function (response) {
                _this.deviceLabels = response;
                _this.vehiculeService.deviceLabels = response;
                _this.customInfoToSelectDevice();
            });
            this.vehiculeService.getGroupsLabel().subscribe(function (response) {
                _this.groupLabels = response;
                _this.vehiculeService.groupLabels = response;
                _this.customInfoToSelectGroup(_this.groupLabels, _this.groupsToSelect, true);
            });
            this.vehiculeService.getDriversLabel().subscribe(function (response) {
                _this.driverLabels = response;
                _this.vehiculeService.driverLabels = response;
                _this.customInfoToSelectDriver();
            });
        }
        this.vehicule.emails = "";
        var params = this.vehicule.idVehicule;
        this.mode = +params;
        if (!this.request) {
            this.customInfoToSelectGroup(this.groupLabels, this.groupsToSelect, true);
            this.customInfoToSelectDriver();
            this.customInfoToSelectDevice();
            this.showAffecting();
            this.manipulationData(this.mode);
        }
        else {
            this.showDetaills();
            this.manipulationData(-this.mode);
        }
    };
    VehiculeForm.prototype.selectGroup = function () {
        for (var i = 0; i < this.groupLabels.length; i++) {
            for (var j = 0; j < this.idtest.length; j++) {
                if (this.idtest[j] == this.groupsToSelect[i].text) {
                    this.idGroups[j] = this.groupsToSelect[i].id;
                }
            }
        }
    };
    VehiculeForm.prototype.refreshValueGroups = function (value) {
        this.value = value;
        this.selectedItems = value;
    };
    VehiculeForm.prototype.selectedGroup = function (value) {
        if (value.id == -1) {
            this.showGroup = true;
            this.showDriver = false;
        }
        else {
            this.idGroups.push(value.id);
        }
    };
    VehiculeForm.prototype.removedGroup = function (value) {
        this.idGroups = this.idGroups.filter(function (id) { return id !== value.id; });
    };
    VehiculeForm.prototype.customInfoToSelectGroup = function (list, listPush, addOption) {
        for (var i = 0; i < list.length; i++) {
            var group = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](list[i].nom, list[i].idGroupe);
            listPush.push(group);
        }
        if (addOption) {
            var group = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */]("Autres", -1);
            this.groupsToSelect.push(group);
        }
    };
    VehiculeForm.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    VehiculeForm.prototype.customInfoToSelectDevice = function () {
        for (var i = 0; i < this.deviceLabels.length; i++) {
            var device = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](this.deviceLabels[i].idDevice.toString(), this.deviceLabels[i].idDevice);
            this.devicesToSelect.push(device);
        }
    };
    VehiculeForm.prototype.customInfoToSelectDriver = function () {
        for (var i = 0; i < this.driverLabels.length; i++) {
            var driver_1 = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](this.driverLabels[i].firstName, this.driverLabels[i].idDriver);
            this.driversToSelect.push(driver_1);
        }
        var driver = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */]("Autres", -1);
        this.driversToSelect.push(driver);
    };
    VehiculeForm.prototype.showAdd = function () {
        this.adding = true;
        this.updating = false;
        this.detaills = false;
        this.affecting = false;
    };
    VehiculeForm.prototype.showUpdate = function () {
        this.adding = false;
        this.updating = true;
        this.detaills = false;
        this.affecting = false;
    };
    VehiculeForm.prototype.showDetaills = function () {
        this.adding = false;
        this.updating = false;
        this.detaills = true;
        this.affecting = false;
    };
    VehiculeForm.prototype.showAffecting = function () {
        this.adding = false;
        this.updating = false;
        this.detaills = false;
        this.affecting = true;
    };
    VehiculeForm.prototype.manipulationData = function (id) {
        var _this = this;
        this.vehiculeInfo = this.vehicule;
        if (this.vehiculeInfo == null)
            this.vehiculeService.getOne(id)
                .subscribe(function (response) {
                _this.vehiculeInfo = response;
                _this.config(_this.vehicule, _this.vehiculeInfo);
                _this.deviceNumber = _this.vehiculeInfo.device.deviceNumber;
                console.log(_this.deviceNumber);
                _this.formatEmails(_this.vehiculeInfo);
                if (_this.vehiculeInfo.idDriver > 0)
                    _this.driver = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](_this.vehiculeInfo.lastName, _this.vehiculeInfo.idDriver);
                _this.device = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](_this.vehiculeInfo.device.deviceNumber.toString(), _this.vehiculeInfo.device.idDevice);
                _this.idDevice = response.device.idDevice;
                _this.idDriver = response.idDriver;
            });
        this.vehiculeService.getGroupsVehicule(id)
            .subscribe(function (response) {
            _this.groupsofVehicule = [];
            _this.customInfoToSelectGroup(response, _this.groupsofVehicule, false);
            for (var i = 0; i < response.length; i++) {
                if (response[i].idGroupe != 1) {
                    _this.idGroups.push(response[i].idGroupe);
                }
            }
        });
        if (this.vehiculeInfo != null) {
            this.formatEmails(this.vehiculeInfo);
            if (this.vehiculeInfo.idDriver > 0)
                this.driver = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](this.vehiculeInfo.lastName, this.vehiculeInfo.idDriver);
            this.device = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](this.vehiculeInfo.device.deviceNumber.toString(), this.vehiculeInfo.device.idDevice);
            this.config(this.vehicule, this.vehiculeInfo);
        }
    };
    VehiculeForm.prototype.config = function (vehicule, vehiculeInfo) {
        this.idDevice = vehiculeInfo.device.idDevice;
        this.idDriver = vehiculeInfo.idDriver;
        vehicule.idVehicule = vehiculeInfo.idVehicule;
        vehicule.matricule = vehiculeInfo.matricule;
        vehicule.mark = vehiculeInfo.mark;
        vehicule.alias = vehiculeInfo.alias;
        vehicule.maxSpeed = vehiculeInfo.maxSpeed;
        this.deviceNumber = vehiculeInfo.device.deviceNumber;
    };
    VehiculeForm.prototype.formatEmails = function (vehiculeInfo) {
        var emails = vehiculeInfo.emails;
        if (emails.length > 0)
            this.email1 = emails.slice(0, emails.indexOf(";"));
        emails = emails.substr(emails.indexOf(";") + 1);
        if (emails.length > 0)
            this.email2 = emails.slice(0, emails.indexOf(";"));
        emails = emails.substr(emails.indexOf(";") + 1);
        if (emails.length > 0)
            this.email3 = emails.slice(0, emails.indexOf(";"));
        emails = emails.substr(emails.indexOf(";") + 1);
        if (emails.length > 0)
            this.email4 = emails.slice(0, emails.indexOf(";"));
        emails = emails.substr(emails.indexOf(";") + 1);
        if (emails.length > 0)
            this.email5 = emails.slice(0, emails.indexOf(";") + 1);
    };
    VehiculeForm.prototype.update = function () {
        var _this = this;
        this.selectGroup();
        if (this.deviceNumber == null)
            this.deviceNumber = 0;
        if (this.vehicule.maxSpeed >= 0 || this.vehicule.maxSpeed == null) {
            if (this.idDevice != 0) {
                this.vehiculeService.update(this.vehicule, this.idGroups.toString(), this.idDriver, this.deviceNumber).subscribe(function (response) {
                    _this.vehiculeService.toastyUpdate = true;
                    var toast = _this.toastCtrl.create({
                        message: '' + _this.vehicule.matricule + ' est modifié avec succés',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                    _this.viewCtrl.dismiss(null);
                }, function () {
                    var toast = _this.toastCtrl.create({
                        message: 'Opération échouée',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                });
            }
            else {
                var toast = this.toastCtrl.create({
                    message: ' Veuillez selectionnée un boitier',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Vitesse max doit-etre supérieure  à 0',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    VehiculeForm.prototype.ionViewWillLeave = function () {
    };
    return VehiculeForm;
}());
VehiculeForm = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'app-vehicule-form',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\vehicules\vehicule-form\vehicule-form.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <ion-title style="text-align: center"><a> Ajouter POI</a> </ion-title>\n\n          <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" >\n\n            <ion-icon name="arrow-down"></ion-icon>\n\n          </button>\n\n          </ion-buttons>\n\n        </ion-navbar>\n\n </ion-header>\n\n <ion-content padding text-center style="background-color: rgba(194, 190, 190, 0.446) ;">\n\n        <ion-list style="margin-top:40px;" >\n\n                <ion-item  style=" background-color:rgba(0,0,0,0.2)!important;" >\n\n                  <ion-input disabled="true" [(ngModel)]="vehicule.device.idDevice"></ion-input>\n\n                </ion-item>\n\n                <ion-item style=" background-color:rgba(0,0,0,0.2)!important;width:100%!important">\n\n                 \n\n                    <ion-label>Groupes</ion-label> \n\n                <ion-select  *ngIf="groupsToSelect.length >0" [(ngModel)]="idtest"  [multiple]="true" (selected)="selectedGroup($event)" (removed)="removedGroup($event)" style="width:100%!important"> \n\n                    <ion-label>Groupes</ion-label> \n\n                  <ion-option  *ngFor="let groupToSelect of groupsToSelect">{{groupToSelect.text}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                    <ion-label>Matricule</ion-label>  \n\n                    <ion-input  placeholder="Matricule" [(ngModel)]="vehicule.matricule" ></ion-input>\n\n                </ion-item>\n\n                <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                    <ion-label>Surnom</ion-label>  \n\n                  <ion-input  placeholder="Surnom" [(ngModel)]="vehicule.alias" ></ion-input>\n\n              </ion-item>\n\n              <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                  <ion-label>Marque</ion-label>  \n\n                <ion-input  placeholder="Marque" [(ngModel)]="vehicule.mark" ></ion-input>\n\n            </ion-item>\n\n            <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                <ion-label>Vitesse Max</ion-label>  \n\n              <ion-input type="number" placeholder="Vitesse Max" [(ngModel)]="vehicule.maxSpeed" ></ion-input>\n\n          </ion-item>\n\n          <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n              <ion-label>N° SIM</ion-label>  \n\n            <ion-input type="number" placeholder="N° SIM" [(ngModel)]="deviceNumber" ></ion-input>\n\n        </ion-item>\n\n        \n\n       </ion-list>\n\n     \n\n          <button ion-button center round (click)="update()">Modifier</button>\n\n          <button ion-button center round (click)="closeModal()">Annuler</button>\n\n     \n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\vehicules\vehicule-form\vehicule-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_vehicule_service__["a" /* VehiculeService */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ToastController */]])
], VehiculeForm);

//# sourceMappingURL=vehicule-form.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestPoi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_config__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_management_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GestPoi = (function () {
    function GestPoi(navCtrl, alertCtrl, toastCtrl, menu, dataManagementService, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.dataManagementService = dataManagementService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.MARKER = "MARKER";
        this.POLYGON = "POLYGON";
        this.pointInterests = null;
        this.imagesDir = __WEBPACK_IMPORTED_MODULE_0__providers_global_config__["b" /* imagesDir */];
        this.navCtrl.swipeBackEnabled = false;
    }
    GestPoi.prototype.openmenu = function () {
        this.menu.open();
    };
    GestPoi.prototype.ngOnInit = function () {
        this.loadPoi();
        console.log(this.pointInterests);
    };
    GestPoi.prototype.loadPoi = function () {
        var _this = this;
        this.dataManagementService.getAllPointInterests().subscribe(function (pointInterests) {
            _this.dataManagementService.pointInterests = pointInterests;
            _this.pointInterests = pointInterests;
        });
    };
    GestPoi.prototype.delete = function (point) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Voulez vous vraiment supprimer :' + point.name + '?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.deletepoi(point);
                    }
                }
            ]
        });
        alert.present();
    };
    GestPoi.prototype.deletepoi = function (point) {
        var _this = this;
        this.dataManagementService.deletePointInterest(point.idPointInterest).subscribe(function (suprimed) {
            if (suprimed) {
                if (point.type == "MARKER") {
                    _this.pointInterests.splice(_this.pointInterests.indexOf(point), 1);
                }
                if (point.type == "POLYGON") {
                    _this.pointInterests.splice(_this.pointInterests.indexOf(point), 1);
                }
                var toast = _this.toastCtrl.create({
                    message: '' + point.name + ' est supprimé avec succés',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
            }
        }, function () { });
    };
    return GestPoi;
}());
GestPoi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-gest-poi',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\gestpoi\gestpoi.html"*/'<ion-header>\n\n          <ion-navbar>\n\n            <ion-title>Points d\'intérêt</ion-title>\n\n          </ion-navbar>\n\n          <ion-fab top left outline class="ion-fab1" #fab style="margin-top:-7px;margin-left:0px">\n\n                <button ion-fab mini outline style="margin-top:0px;background-color:rgba(0,0,0,0.6)" (click)="openmenu()" ><i class="fa fa-list" aria-hidden="true"></i></button>\n\n         </ion-fab>\n\n    </ion-header>\n\n    <ion-content>\n\n            <ion-list-header>Points</ion-list-header>\n\n            <ion-list  *ngFor="let pointInterest of pointInterests">\n\n                    <ion-item-sliding #item *ngIf="pointInterest.type==MARKER">\n\n                     \n\n                    <ion-item>\n\n                            <ion-avatar item-start>\n\n                                <img src="{{imagesDir}}{{pointInterest.imageUri}}" style="width:25px;height:25px;">\n\n                            </ion-avatar>\n\n                            \n\n                                    <h2>{{pointInterest.name}} </h2> \n\n                                    <button ion-button float-right clear color="danger" (click)="delete(pointInterest)" style="width:20px;"><ion-icon ios="ios-trash" md="md-trash"></ion-icon></button>\n\n                           \n\n                            \n\n                            <p>{{pointInterest.coordinate.lat}} ; {{pointInterest.coordinate.lng}}</p>\n\n                           <p style="font-size:15px">{{pointInterest.address}}</p> \n\n                        \n\n                    </ion-item>\n\n                     <ion-item-options side="right">\n\n                            <button ion-button color="danger" (click)="delete(pointInterest)" >Supprimer</button>\n\n                    </ion-item-options>\n\n                    \n\n                    </ion-item-sliding>\n\n                    </ion-list>\n\n                    <ion-list-header>Zones</ion-list-header>\n\n            <ion-list *ngFor="let pointInterest of pointInterests">\n\n                <ion-item-sliding *ngIf="pointInterest.type==POLYGON">\n\n                        <ion-item>\n\n                                <ion-avatar item-start>\n\n                                    <img src="{{imagesDir}}{{pointInterest.imageUri}}" style="width:25px;height:25px;">\n\n                                </ion-avatar>\n\n                                \n\n                                        <h2>{{pointInterest.name}} </h2> \n\n                                        <button ion-button float-right clear color="danger" (click)="delete(pointInterest)" style="width:20px;"><ion-icon ios="ios-trash" md="md-trash"></ion-icon></button>\n\n                               \n\n                                \n\n                                <p>{{pointInterest.coordinate.lat}} ; {{pointInterest.coordinate.lng}}</p>\n\n                               <p style="font-size:15px">{{pointInterest.address}}</p> \n\n                            \n\n                        </ion-item>\n\n                         <ion-item-options side="right">\n\n                                <button ion-button color="danger" (click)="delete(pointInterest)" >Supprimer</button>\n\n                        </ion-item-options>\n\n                </ion-item-sliding>\n\n            </ion-list>      \n\n                   \n\n              \n\n    </ion-content>\n\n   '/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\gestpoi\gestpoi.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], GestPoi);

//# sourceMappingURL=gestpoi.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_map_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_data_management__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poi_poi__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StopList = (function () {
    function StopList(navCtrl, datamanagementService, mapService, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.datamanagementService = datamanagementService;
        this.mapService = mapService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.StopArray = [];
        this.stops = navParams.get('stops');
    }
    //Dessiner stop
    StopList.prototype.drawStop = function (stop) {
        this.viewCtrl.dismiss(stop);
    };
    //fermer modal
    StopList.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    //ouvrir modal poi 
    StopList.prototype.openPoiModal = function (stop) {
        var _this = this;
        this.viewCtrl.dismiss(null);
        var pointInterest = new __WEBPACK_IMPORTED_MODULE_2__objects_data_management__["a" /* PointInterest */]();
        pointInterest.address = stop.geocodingDetails;
        pointInterest.coordinate.lat = stop.stopLatitude;
        pointInterest.coordinate.lng = stop.stopLongitude;
        var PoiModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__poi_poi__["a" /* Poi */], { pointInterest: pointInterest });
        PoiModal.present();
        PoiModal.onDidDismiss(function (form) {
            _this.datamanagementService.addPointInterest(form.pointinterest).subscribe(function (pointInterest) {
                if (pointInterest.type == "MARKER") {
                    var circle = L.circle(pointInterest.coordinate, {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.1,
                        radius: pointInterest.ray
                    });
                    _this.mapService.addCircle(circle);
                    _this.mapService.map.setView({ lat: stop.stopLatitude, lng: stop.stopLongitude }, 15);
                    setTimeout(function () {
                        _this.mapService.removeCirclesFromMap();
                    }, 3000);
                }
                _this.datamanagementService.pointInterests.push(pointInterest);
                _this.drawStop(stop);
            }, function (err) {
            });
        });
    };
    return StopList;
}());
StopList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-stop-list',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\stop-list\stop-list.html"*/'<ion-header>\n\n    \n\n      <ion-navbar>\n\n        <ion-title>Liste des arrêts</ion-title>\n\n        <ion-buttons end>\n\n                <button ion-button icon-only  (click)="closeModal()" >\n\n            <ion-icon name="arrow-down"></ion-icon>\n\n          </button>\n\n            </ion-buttons>\n\n      </ion-navbar>\n\n    \n\n</ion-header>\n\n<ion-content padding style="background-color: rgba(255, 255, 255, 0.69) !important;">\n\n    <div style = "overflow: auto ; height: auto;">\n\n            <table class="table table-striped" style="font-size: 15px;font-weight: bold" width="100%">\n\n                    <thead>\n\n                    <tr  style="background-color: #F5F5F5;opacity: 0.65">\n\n                        <th width="25%" style="text-align: center"><i class="fa fa-clock-o" aria-hidden="true"></i> Date\n\n                            Arrêt\n\n                        </th>\n\n                        <th width="45%" style="text-align: center">Lieu Arrêt</th>\n\n                        <th width="30%" style="text-align: center">Durée Arrêt</th>\n\n                    </tr>\n\n                    </thead>\n\n                    <tbody style="background-color: #FFFAFA;opacity: 0.5;font: bolder;">\n\n    \n\n                   \n\n    \n\n                        <tr  *ngFor="let stop of stops" style="border-top: solid black 1px;">\n\n    \n\n                            <td width="15%" data-toggle="tooltip"  (click)="drawStop(stop)"  title="{{stop.beginStopTime | date:\'dd-MM-y HH:mm\'}}">\n\n                                {{stop.beginStopTime | date:\'dd-MM HH:mm\'}}\n\n                            </td>\n\n                            <td width="55%" data-toggle="tooltip"  (click)="drawStop(stop)"  title="{{stop.geocodingDetails}}">\n\n                                {{stop.geocoding }}\n\n                            </td>\n\n                            <td width="30%" data-toggle="tooltip"  (click)="drawStop(stop)"  title="{{stop.stopDurationStr}}">\n\n                                {{stop.stopDurationStr}}\n\n                            </td>\n\n                           \n\n                                    <td  colspan="3" style="text-align: center">\n\n            \n\n                                        <button type="button" (click)="openPoiModal(stop)" class="btn btn-success btn-xs">\n\n                                            <i class="fa fa-map-marker" aria-hidden="true"></i> \n\n                                           \n\n                                        </button>\n\n            \n\n                                    </td>\n\n                    \n\n                        </tr>\n\n                \n\n                   \n\n    \n\n    \n\n                    </tbody>\n\n                </table>\n\n    \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\stop-list\stop-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_0__utils_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */]])
], StopList);

//# sourceMappingURL=stop-list.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historical_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoricalForm = (function () {
    function HistoricalForm(historicalService, viewCtrl, navCtrl, navParams, loadingCtrl) {
        this.historicalService = historicalService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.startDate1 = new Date();
        this.endDate1 = new Date();
        this.list = "trajet";
        this.startDate1.setTime(this.startDate1.getTime() - 3 * 86400000);
        this.startDate = this.startDate1.toISOString();
        this.endDate = this.endDate1.toISOString();
    }
    HistoricalForm.prototype.getAllPaths = function () {
        this.viewCtrl.dismiss({ startDate: this.startDate, endDate: this.endDate, list: this.list });
    };
    HistoricalForm.prototype.closeModal = function () {
        this.viewCtrl.dismiss({ startDate: "", endDate: "", list: "" });
    };
    return HistoricalForm;
}());
HistoricalForm = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historical-form',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical-form\historical-form.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title style="width:100%"><a>Selectionner le véhicule</a> </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="closeModal()">\n\n      <ion-icon name="arrow-down"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center style="background-color: rgba(255, 255, 255, 0.69) !important;">\n\n    <ion-item>\n\n        <ion-label>Historique :</ion-label>\n\n        <ion-select [(ngModel)]="list" interface="select" style="width:300px;">\n\n          <ion-option value="trajet">Historique des trajets</ion-option>\n\n          <ion-option value="arret">Historique des arrêts</ion-option>\n\n          <ion-option value="kilo">Historique de Kilométrage</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item style="margin-top: 200px">\n\n        <ion-label>Date début</ion-label>\n\n        <ion-datetime name="startDate" displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="startDate"></ion-datetime>\n\n      </ion-item>\n\n  \n\n      <ion-item style="margin-bottom: 20px">\n\n          <ion-label>Date fin</ion-label>\n\n          <ion-datetime name="endDate" displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="endDate"> </ion-datetime>\n\n        </ion-item>\n\n  <!--<ion-item>\n\n    <ion-label>Date de début</ion-label>\n\n    <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="firstDate"></ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Date de fin</ion-label>\n\n    <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="lastDate"></ion-datetime>\n\n  </ion-item>-->\n\n  \n\n  <button ion-button center round (click)="getAllPaths()">Chercher  \n\n      <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n  </button>\n\n  <button ion-button center round (click)="closeModal()">Annuler  \n\n      <!--<ion-icon style="margin-left: 5px" name="close"></ion-icon>-->\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical-form\historical-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_historical_service__["a" /* HistoricalService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], HistoricalForm);

//# sourceMappingURL=historical-form.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PathsList = (function () {
    function PathsList(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.paths = navParams.get('paths');
    }
    PathsList.prototype.drawPath = function (path) {
        this.viewCtrl.dismiss(path);
    };
    PathsList.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    return PathsList;
}());
PathsList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paths-list',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\paths-list\paths-list.html"*/'<!--\n  Generated template for the PathsList page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Liste des trajets</ion-title>\n    <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="arrow-down"></ion-icon>\n      </button>\n        </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: rgba(255, 255, 255, 0.69) !important;">\n  <div style = "overflow: auto ; height: auto;">\n  <table style="font-size: 15px;" >\n    <thead>\n      <tr style="background-color: #F5F5F5;opacity: 0.65">\n        <th  style="text-align: center;width:1px;"><i class="fa fa-clock-o" aria-hidden="true"></i> Date Départ\n        </th>\n        <th  style="text-align: center;padding-left: 15px;padding-right: 15px;">Lieu Départ</th>\n        <th  style="text-align: center;padding-left: 15px;padding-right: 15px"><i class="fa fa-clock-o" aria-hidden="true"></i> Date Arrivée\n        </th>\n        <th style="text-align: center;padding-left: 15px;padding-right: 15px">Lieu Arrivée</th>\n        <th style="text-align: center; padding-right: 15px;padding-left: 15px">KM</th>\n        <th style="text-align: center; padding-right: 15px; padding-left: 15px">V Max</th>\n        <th style="text-align: center;padding-right: 15px; padding-left: 15px">Durée Trajet</th>\n        <th style="text-align: center;padding-right: 15px; padding-left: 15px">Durée Arrêt</th>\n      </tr>\n    </thead>\n    <tbody style="background-color: #FFFAFA;opacity: 0.5;font: bolder;">\n      <tr *ngFor="let path of paths" (click)="drawPath(path)" style="border-top: solid black 1px;">\n        <td style="text-align: center" data-toggle="tooltip" title="{{path.beginPathTime}};">\n            {{path.displayBeginPathTime | date:\'dd-MM HH:mm\'}}\n        </td>\n        <td style="text-align: center;padding-left: 10px;padding-right: 10px" data-toggle="tooltip" title="{{path.beginPathGeocodingDetails}}">\n          {{path.beginPathGeocoding }}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.endPathTime}}">\n          {{path.displayEndPathTime  | date:\'dd-MM HH:mm\'}}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.endPathGeocodingDetails}}">\n          {{path.endPathGeocoding}}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.distanceDriven">{{path.distanceDriven | number:\'1.2-2\'}}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.maxSpeed}}">\n          {{path.maxSpeed}}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.pathDurationStr}}">\n          {{path.pathDurationStr}}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.nextStopDurationStr}}">\n          {{path.nextStopDurationStr}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\paths-list\paths-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], PathsList);

//# sourceMappingURL=paths-list.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contentHeaders; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createAuthorizationHeader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(39);

var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
function createAuthorizationHeader(headers) {
    headers.append('Authorization', localStorage.getItem('id_token'));
}
//# sourceMappingURL=headers.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return imagesDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return nominatim_dns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return time_difference; });
//export var dns: string = "http://79.137.75.178:8080/ws_rimtrack_all_dev/";
//export var dns: string = "http://localhost:8080/rimtrack-all-v2/";
var dns = "http://37.187.171.84/ws_rimtrack_all/";
var imagesDir = "http://37.187.171.84/images/";
var nominatim_dns = "http://37.187.171.84/nominatim";
var time_difference = -3600000;
//# sourceMappingURL=global.config.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_real_time_service__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupsPage = (function () {
    function GroupsPage(alertCtrl, navCtrl, navParams, viewCtrl, realTimeService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.realTimeService = realTimeService;
        this.iconCall = false;
        this.groups = navParams.get('groups');
        //this.groups = this.processGroups(this.groups);
    }
    /* processGroups(groups: any){
       groups.forEach(group => {
         
       });
       return groups;
     }*/
    GroupsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(this.selectedDevice);
    };
    GroupsPage.prototype.ionViewDidLoad = function () {
    };
    GroupsPage.prototype.searchGroup = function () {
        var _this = this;
        this.allGroups = this.realTimeService.getAllGroups(this.searchWord).subscribe(function (groupes) {
            _this.groups = groupes;
        });
    };
    GroupsPage.prototype.goToRealTimeRecord = function (deviceId) {
        this.selectedDevice = deviceId;
        this.viewCtrl.dismiss(this.selectedDevice);
    };
    GroupsPage.prototype.AlertLancementMoteur = function (deviceId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Êtes-vous sûr ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Start',
                    handler: function () {
                        _this.startEngine(deviceId);
                    }
                }
            ]
        });
        alert.present();
    };
    GroupsPage.prototype.startEngine = function (deviceId) {
        this.realTimeService.startEngine(deviceId).subscribe(function (cmdSended) {
            alert("commande Lancement moteur envoyé !");
        });
    };
    GroupsPage.prototype.AlertArretMoteur = function (deviceId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Êtes-vous sûr ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Start',
                    handler: function () {
                        _this.stopEngine(deviceId);
                    }
                }
            ]
        });
        alert.present();
    };
    GroupsPage.prototype.stopEngine = function (deviceId) {
        this.realTimeService.stopEngine(deviceId).subscribe(function (cmdSended) {
            alert("commande Arrêt moteur envoyé !");
        });
    };
    GroupsPage.prototype.displayTodaysMileage = function () {
    };
    GroupsPage.prototype.displayCurrentPath = function () {
    };
    return GroupsPage;
}());
GroupsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-groups-page',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\groups-page\groups-page.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title><a>Groupes et véhicules</a></ion-title>\n        \n    </ion-navbar>\n    \n\n</ion-header>\n\n<ion-content style="background-color: rgba(255, 255, 255, 0.69) !important; padding: auto;">\n    <div style="font-size: 15px;border-radius:0px; margin-top: 0%;">\n       <!-- <div style="text-align: center;padding-bottom: 20px">\n            <input style="text-align: center;" type="text" name="table_search" placeholder="Recherche ..." [(ngModel)]="searchWord"/>\n            <button ion-button icon-only clear color="dark"  (click)="searchGroup()">\n            <ion-icon name="search" ></ion-icon>\n                </button>\n        </div> -->\n    <div style="width: 500%">\n        <table class="table" style="width: 20%">\n            <tbody>\n                <ng-template ngFor let-item [ngForOf]="groups" >\n                    <tr style="color: black">\n                        <td style="font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: #B0C4DE;opacity: 0.75;">{{item.nom}}</td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <div style="overflow:auto">\n                                <table class="table" frame="hsides" rules="cols" style="width: 100%;">\n                                    <thead frame="hsides" border="1">\n                                        <!-- <tr>\n                                            <th style="width: 10%;"> Etat</th>\n                                            <th colspan="3" style="width: 10%;">Véhicule</th>\n                                            <!-- <th style="width: 10%">Chauffeur</th> \n                                            <th style="width: 30%">Position</th> \n                                            <th style="width: 15%;">V(Km/h)</th>\n                                            <th style="width: 25%;">Date & heure</th>\n                                        </tr> -->\n                                    </thead>\n                                    <tbody style="border :colspan; text-align: center;" frame="hsides" frame="hsides" rules="all">\n                                        <ng-container *ngFor="let vehicule of item.vehicules">\n                                            <tr  [ngClass]="{\'activeRT\': selectedDevice == vehicule.idDevice}" style="border-bottom:1pt solid black;">\n                                                <td width="10%" (click)="goToRealTimeRecord(vehicule.idDevice)">\n                                                    <img width="30 px" src="{{vehicule?.realTimeRecord?.icon}}">\n                                                </td> \n                                                <td width="30%" (click)="goToRealTimeRecord(vehicule.idDevice)">\n                                                    <div><b>\n                                                {{vehicule.matricule}} <br>\n                                                {{vehicule?.driver?.firstName}} {{vehicule?.driver?.lastName}}\n                                                    </b></div>\n                                                </td>\n                                                <td width="40%" (click)="goToRealTimeRecord(vehicule.idDevice)">\n                                                    <div\n                                                *ngIf="!vehicule.realTimeRecord.relativePosition"><b>\n                                                    {{vehicule?.realTimeRecord?.geocoding}}\n                                                </b></div> \n                                                <div *ngIf="vehicule.realTimeRecord.relativePosition"><b>\n                                                    {{vehicule?.realTimeRecord?.relativePosition}}\n                                                </b></div> <div><b>\n                                                    {{vehicule?.realTimeRecord?.recordTime| date:\'d-M HH:mm\'}}\n                                                </b></div>\n                                                <div><b>\n                                                    {{vehicule?.realTimeRecord?.speed}} KM/H \n                                                </b></div>\n                                                \n                                                </td>\n                                                \n                                            </tr>\n                                        </ng-container>\n                                    </tbody>\n                                </table>\n\n                             </div>\n                             </td>\n                        </tr>\n                    </ng-template>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\groups-page\groups-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_real_time_service__["a" /* RealTimeService */]])
], GroupsPage);

//# sourceMappingURL=groups-page.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MileageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_map_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MileageComponent = (function () {
    function MileageComponent(navCtrl, datamanagementService, mapService, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.datamanagementService = datamanagementService;
        this.mapService = mapService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.MileageArray = [];
        this.mileages = navParams.get('mileages');
        this.totalMileage = navParams.get('totalMileage');
    }
    MileageComponent.prototype.addMileageToArray = function (mileage, event) {
        if (!event.ctrlKey) {
            this.MileageArray = [];
            this.mapService.removePolylinesFromMap();
            this.mapService.removeMarkersFromMap();
        }
        this.MileageArray.push(mileage);
        this.viewCtrl.dismiss(mileage);
    };
    MileageComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    return MileageComponent;
}());
MileageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-mileage-list',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\mileage\mileage.html"*/'<ion-header>\n\n    \n\n      <ion-navbar>\n\n        <ion-title>Kilométrage</ion-title>\n\n        <ion-buttons end>\n\n                <button ion-button icon-only  (click)="closeModal()" >\n\n            <ion-icon name="arrow-down"></ion-icon>\n\n          </button>\n\n            </ion-buttons>\n\n      </ion-navbar>\n\n    \n\n</ion-header>\n\n<ion-content padding style="background-color: rgba(255, 255, 255, 0.69) !important;">\n\n    <table class="table table-striped"  style="font-size: 15px;font-weight: bold" width="100%">\n\n        <thead  style="background-color: #F5F5F5;opacity: 0.65">\n\n        <tr>\n\n            <th width="33%" style="text-align: center"><i class="fa fa-clock-o"\n\n                                                          aria-hidden="true"></i> Date début\n\n            </th>\n\n            <th width="33%" style="text-align: center">Kilométrage</th>\n\n            <th width="33%" style="text-align: center">Durée circulation</th>\n\n        </tr>\n\n        </thead>\n\n        <tbody class="datatable-body"  style="background-color: #F5F5F5;opacity: 0.65">\n\n        <tr *ngFor="let mileage of mileages " (click)="addMileageToArray(mileage, $event)" style="border-top: solid black 1px;" >\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{mileage.startHour | date:\'dd-MM-y HH:mm\'}}">\n\n                {{mileage.startHour | date:\'dd-MM-yyyy HH:mm\'}}\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{mileage.drivingDistance}} Km">\n\n                {{mileage.drivingDistance | number:\'1.2-2\'}}\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{mileage.drivingDurationStr}}">\n\n                {{mileage.drivingDurationStr}}\n\n            </td>\n\n        </tr>\n\n         <tr style="font-weight: 900;color: green">\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip">\n\n                Total:\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{totalMileage.drivingDistance}} Km">\n\n                {{totalMileage.drivingDistance | number:\'1.2-2\'}}\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{totalMileage.drivingDurationStr}}">\n\n                {{totalMileage.drivingDurationStr}}\n\n            </td>\n\n        </tr>\n\n        </tbody>\n\n    </table>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\mileage\mileage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_0__utils_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */]])
], MileageComponent);

//# sourceMappingURL=mileage.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__historical_historical__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_historical_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_management_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(storage, historicalService, app, loadingCtrl, realTimeService, dataManagementService, navCtrl, signinService, toastController) {
        this.storage = storage;
        this.historicalService = historicalService;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.realTimeService = realTimeService;
        this.dataManagementService = dataManagementService;
        this.navCtrl = navCtrl;
        this.signinService = signinService;
        this.toastController = toastController;
        this.buttonColor = '#c42e36';
        this.login = null;
        this.mdp = null;
        this.newRealTimeRecords = null;
        this.oldRealTimeRecords = null;
        this.searchWord = '';
        this.loginTest = null;
        this.mdpTest = null;
        //recuperation current user
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
        if (this.currentuser) {
            this.login = this.currentuser.username;
            this.mdp = this.currentuser.password;
            this.Signing();
        }
    }
    //Signing method
    HomePage.prototype.Signing = function () {
        var _this = this;
        this.buttonColor = '#345465';
        this.signinService.login({ "username": this.login, "password": this.mdp }).subscribe(function (currentUser) {
            currentUser.password = _this.mdp;
            _this.realTimeService.currentuser = currentUser;
            _this.realTimeService.currentuser = currentUser;
            _this.historicalService.currentuser = currentUser;
            _this.dataManagementService.currentuser = currentUser;
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            _this.goToRt();
        }, function () {
            var toast = _this.toastController.create({
                message: 'Authentification Echouée!',
                duration: 2000
            });
            _this.buttonColor = '#c42e36';
            toast.present();
        });
    };
    //GO to Historical
    HomePage.prototype.goToRt = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__historical_historical__["a" /* Historical */], { token: this.token }).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title > <a>Bienvenue</a></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="page-login">\n \n  <ion-card class="login-card">\n    <ion-card-content>\n      <ion-list no-line>\n       <ion-item>\n          <ion-input type="text" [(ngModel)]="login" name="login" placeholder="Identifiant"></ion-input>\n        </ion-item>\n\n        <ion-item>\n         \n          <ion-input type="password" [(ngModel)]="mdp" name="mdp" placeholder="Mot de passe"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button  margin-top ion-button margin-right block (click)=Signing() [ngStyle]="{\'background-color\': buttonColor}">\n      Connexion\n      </button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n       <ion-title> <img src="assets/img/logorim.jpg" height="60" /></ion-title>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_historical_service__["a" /* HistoricalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_historical_service__["a" /* HistoricalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__["a" /* RealTimeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__["a" /* RealTimeService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_data_management_service__["a" /* DataManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_data_management_service__["a" /* DataManagementService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__providers_login__["a" /* SigningService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_login__["a" /* SigningService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]) === "function" && _j || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigningService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_headers__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigningService = (function () {
    function SigningService(http) {
        this.http = http;
    }
    SigningService.prototype.login = function (credentials) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'signin', credentials, { headers: __WEBPACK_IMPORTED_MODULE_4__utils_headers__["a" /* contentHeaders */] }).map(function (res) { return res.json(); });
    };
    SigningService.prototype.logout = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_headers__["b" /* createAuthorizationHeader */])(headers);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'signout', {}, { headers: headers }).map(function (res) { return res.json(); });
    };
    return SigningService;
}());
SigningService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], SigningService);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vehicules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vehicule_form_vehicule_form__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_vehicule_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Vehicules = (function () {
    function Vehicules(menu, toastCtrl, modalCtrl, alertCtrl, navctrl, vehiculeService) {
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navctrl = navctrl;
        this.vehiculeService = vehiculeService;
        this.bigCurrentPage = 1;
        this.itemsPerPage = 25;
        this.vehicules = [];
        this.bigTotalItems = 175;
        this.deviceLabels = [];
    }
    Vehicules.prototype.ngOnInit = function () {
        var _this = this;
        this.getListVehicules(this.bigCurrentPage - 1, this.itemsPerPage);
        this.vehiculeService.getGroupsLabel().subscribe(function (response) {
            _this.vehiculeService.groupLabels = response;
        });
        this.vehiculeService.getDriversLabel().subscribe(function (response) {
            _this.vehiculeService.driverLabels = response;
        });
        this.vehiculeService.getDevicesLabel().subscribe(function (response) {
            _this.vehiculeService.deviceLabels = response;
            _this.deviceLabels = response;
            _this.numberDeviceFree = _this.deviceLabels.length;
        });
    };
    Vehicules.prototype.openmenu = function () {
        this.menu.open();
    };
    Vehicules.prototype.getListVehicules = function (page, size) {
        var _this = this;
        this.vehiculeService.bigCurrentPage = this.bigCurrentPage;
        this.vehiculeService.getListVehicules(this.bigCurrentPage - 1, this.itemsPerPage).subscribe(function (response) {
            _this.vehicules = response.content;
            console.log(_this.vehicules);
            _this.vehicules = _this.vehicules.sort(function (a, b) {
                if (a.device.idDevice < b.device.idDevice) {
                    return -1;
                }
                else if (a.device.idDevice > b.device.idDevice) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.vehiculeService.vehicules = _this.vehicules;
            _this.bigTotalItems = response.totalElements;
        });
    };
    Vehicules.prototype.presentConfirm = function (vehicule) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Informations',
            message: 'Equipement:' + vehicule.device.idDevice + '<br> Vitesse Max :' + vehicule.maxSpeed + '<br> Chauffeur : ' + vehicule.lastName + '<br> Email :' + vehicule.emails + '',
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Modifier',
                    role: '',
                    handler: function () {
                        _this.openModifModal(vehicule);
                    }
                }
            ]
        });
        alert.present();
    };
    Vehicules.prototype.delete = function (vehicule) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Voulez vous vraiment supprimer :' + vehicule.matricule + '?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.deletevehicule(vehicule);
                    }
                }
            ]
        });
        alert.present();
    };
    Vehicules.prototype.deletevehicule = function (vehicule) {
        var _this = this;
        this.vehiculeService.delete(vehicule.idVehicule).subscribe(function (suprimed) {
            if (suprimed) {
                if (_this.vehicules.length == 1) {
                    _this.vehicules = [];
                }
                else {
                    _this.getListVehicules(_this.bigCurrentPage - 1, _this.itemsPerPage);
                }
                _this.numberDeviceFree = _this.numberDeviceFree + 1;
                var toast = _this.toastCtrl.create({
                    message: '' + vehicule.matricule + ' est supprimé avec succés',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'suppresion échoué',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function () {
            var toast = _this.toastCtrl.create({
                message: 'suppresion échoué',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    Vehicules.prototype.openModifModal = function (vehicule) {
        var PoiModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__vehicule_form_vehicule_form__["a" /* VehiculeForm */], { vehicule: vehicule });
        PoiModal.present();
        PoiModal.onDidDismiss(function (form) {
        });
    };
    return Vehicules;
}());
Vehicules = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-vehicules',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\vehicules\vehicules.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Véhicules</ion-title>\n\n  </ion-navbar>\n\n  <ion-fab top left outline class="ion-fab1" #fab style="margin-top:-7px;margin-left:0px">\n\n        <button ion-fab mini outline style="margin-top:0px;background-color:rgba(0,0,0,0.6)" (click)="openmenu()" ><i class="fa fa-list" aria-hidden="true"></i></button>\n\n  </ion-fab>\n\n</ion-header>\n\n  <ion-content>\n\n      <table style="font-size: 15px;" >\n\n          <thead>\n\n            <tr style="background-color: #F5F5F5;opacity: 0.65;height:50px;font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: rgb(115, 144, 182);opacity: 0.75;">\n\n              <th  style="text-align: center;">Equipement</th>\n\n              <th  style="text-align: center;padding-left:9px;padding-right:9px;">Immatricule</th>\n\n              <th  style="text-align: center;padding-left: 9px;padding-right: 9px"> Surnom</th>\n\n              <th style="text-align: center;padding-left: 9px;padding-right: 9px">Mark</th>\n\n            </tr>\n\n          </thead>\n\n          <tbody style="background-color: #FFFAFA;opacity: 0.5;font: bolder;font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: #B0C4DE;opacity: 0.75;">\n\n            \n\n               <tr *ngFor="let vehicule of vehicules" style="border-top: solid black 1px;height:50px;">\n\n                <td style="text-align: center"  (click)="presentConfirm(vehicule)">\n\n                   {{vehicule.device.idDevice}}\n\n                </td>\n\n                <td style="text-align: center;" data-toggle="tooltip"  (click)="presentConfirm(vehicule)">\n\n                    {{vehicule.matricule}}\n\n                </td>\n\n                <td style="text-align: center;" data-toggle="tooltip"  (click)="presentConfirm(vehicule)">\n\n                  {{vehicule.alias}}\n\n                </td>\n\n                <td style="text-align: center;" data-toggle="tooltip"  (click)="presentConfirm(vehicule)">\n\n                   {{vehicule.mark}}\n\n                </td>\n\n              </tr>\n\n            </tbody>\n\n        </table>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\vehicules\vehicules.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_vehicule_service__["a" /* VehiculeService */]])
], Vehicules);

//# sourceMappingURL=vehicules.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(281);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_datamana_vehicules_vehicule_form_vehicule_form__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_gestpoi_gestpoi__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_poi_poi__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_login__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_historical_historical__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_groups_page_groups_page__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_historical_form_historical_form__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_paths_list_paths_list__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_geocoding_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__utils_map_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_real_time_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_historical_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_data_management_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_stop_list_stop_list__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_mileage_mileage__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_datamana_vehicules_vehicules__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_datamana_groupes_groupes__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_vehicule_service__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_poi_poi__["a" /* Poi */],
            __WEBPACK_IMPORTED_MODULE_15__pages_historical_historical__["a" /* Historical */],
            __WEBPACK_IMPORTED_MODULE_16__pages_groups_page_groups_page__["a" /* GroupsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_historical_form_historical_form__["a" /* HistoricalForm */],
            __WEBPACK_IMPORTED_MODULE_18__pages_paths_list_paths_list__["a" /* PathsList */],
            __WEBPACK_IMPORTED_MODULE_25__pages_stop_list_stop_list__["a" /* StopList */],
            __WEBPACK_IMPORTED_MODULE_26__pages_mileage_mileage__["a" /* MileageComponent */],
            __WEBPACK_IMPORTED_MODULE_1__pages_gestpoi_gestpoi__["a" /* GestPoi */],
            __WEBPACK_IMPORTED_MODULE_27__pages_datamana_vehicules_vehicules__["a" /* Vehicules */],
            __WEBPACK_IMPORTED_MODULE_28__pages_datamana_groupes_groupes__["a" /* Groupes */],
            __WEBPACK_IMPORTED_MODULE_0__pages_datamana_vehicules_vehicule_form_vehicule_form__["a" /* VehiculeForm */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {
                swipeBackEnabled: 'false'
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_historical_historical__["a" /* Historical */],
            __WEBPACK_IMPORTED_MODULE_16__pages_groups_page_groups_page__["a" /* GroupsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_historical_form_historical_form__["a" /* HistoricalForm */],
            __WEBPACK_IMPORTED_MODULE_18__pages_paths_list_paths_list__["a" /* PathsList */],
            __WEBPACK_IMPORTED_MODULE_4__pages_poi_poi__["a" /* Poi */],
            __WEBPACK_IMPORTED_MODULE_25__pages_stop_list_stop_list__["a" /* StopList */],
            __WEBPACK_IMPORTED_MODULE_26__pages_mileage_mileage__["a" /* MileageComponent */],
            __WEBPACK_IMPORTED_MODULE_1__pages_gestpoi_gestpoi__["a" /* GestPoi */],
            __WEBPACK_IMPORTED_MODULE_27__pages_datamana_vehicules_vehicules__["a" /* Vehicules */],
            __WEBPACK_IMPORTED_MODULE_28__pages_datamana_groupes_groupes__["a" /* Groupes */],
            __WEBPACK_IMPORTED_MODULE_0__pages_datamana_vehicules_vehicule_form_vehicule_form__["a" /* VehiculeForm */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_29__providers_vehicule_service__["a" /* VehiculeService */],
            __WEBPACK_IMPORTED_MODULE_14__providers_login__["a" /* SigningService */],
            __WEBPACK_IMPORTED_MODULE_19__utils_geocoding_service__["a" /* GeocodingService */],
            __WEBPACK_IMPORTED_MODULE_20__utils_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_21__providers_real_time_service__["a" /* RealTimeService */],
            __WEBPACK_IMPORTED_MODULE_23__providers_data_management_service__["a" /* DataManagementService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_22__providers_historical_service__["a" /* HistoricalService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DecimalPipe */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__driver__ = __webpack_require__(319);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group__ = __webpack_require__(320);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicule__ = __webpack_require__(321);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__vehicule__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Driver */
/* unused harmony export VehiculeApparence */
/* unused harmony export DriverLabel */
var Driver = (function () {
    function Driver() {
    }
    return Driver;
}());

var VehiculeApparence = (function () {
    function VehiculeApparence(text, id) {
        this.text = text;
        this.id = id;
    }
    return VehiculeApparence;
}());

var DriverLabel = (function () {
    function DriverLabel(idDriver, firstName) {
        this.idDriver = idDriver;
        this.firstName = firstName;
    }
    return DriverLabel;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Groupe */
/* unused harmony export VehiculeGetDTO */
/* unused harmony export GroupAddDTO */
var Groupe = (function () {
    function Groupe(groupeId, nom, imageUrl, vehicules) {
        this.vehicules = [];
        this.idGroupe = groupeId;
        this.nom = nom;
        this.imageUrl = imageUrl;
        this.vehicules = vehicules;
    }
    return Groupe;
}());

var VehiculeGetDTO = (function () {
    function VehiculeGetDTO(idVehicule, matricule) {
        this.idVehicule = idVehicule;
        this.matricule = matricule;
    }
    return VehiculeGetDTO;
}());

var GroupAddDTO = (function () {
    function GroupAddDTO() {
    }
    return GroupAddDTO;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VehiculeInfo */
/* unused harmony export DeviceLabel */
/* unused harmony export GroupLabel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSelectInfo; });
/* unused harmony export Vehicule */
var VehiculeInfo = (function () {
    function VehiculeInfo() {
        this.emails = "";
    }
    return VehiculeInfo;
}());

var DeviceLabel = (function () {
    function DeviceLabel(idDevice, deviceNumber) {
        this.idDevice = idDevice;
        this.deviceNumber = deviceNumber;
    }
    return DeviceLabel;
}());

var GroupLabel = (function () {
    function GroupLabel(idGroupe, nom) {
        this.idGroupe = idGroupe;
        this.nom = nom;
    }
    return GroupLabel;
}());

var CustomSelectInfo = (function () {
    function CustomSelectInfo(text, id) {
        this.text = text;
        this.id = id;
    }
    return CustomSelectInfo;
}());

var Vehicule = (function () {
    function Vehicule() {
    }
    return Vehicule;
}());

//# sourceMappingURL=vehicule.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_historical_historical__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_gestpoi_gestpoi__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_datamana_vehicules_vehicules__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, _app, actionSheetCtrl, menuCtrl, alertCtrl, storage, splashScreen, toastCtrl) {
        var _this = this;
        this._app = _app;
        this.actionSheetCtrl = actionSheetCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.listhide = true;
        platform.ready().then(function () {
            //alert de confirmation de quitter l'application
            platform.registerBackButtonAction(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Attention',
                    message: 'Voulez vous vraiment quitter ?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                            }
                        },
                        {
                            text: 'Quitter',
                            handler: function () {
                                platform.exitApp();
                            }
                        }
                    ]
                });
                alert.present();
            });
            //check previous signing
            _this.checkPreviousAuthorization();
            splashScreen.hide();
            statusBar.show();
            statusBar.styleDefault();
        });
    }
    // fermer menu
    MyApp.prototype.menuclose = function () {
        this.menuCtrl.close();
        this.listhide = true;
    };
    //list getion de donnée
    MyApp.prototype.hidelist = function () {
        this.listhide = !this.listhide;
    };
    //navigation to gestion Poi
    MyApp.prototype.GotoGestpoi = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_gestpoi_gestpoi__["a" /* GestPoi */]);
        this.menuclose();
    };
    //navigation to  temps reel et historique
    MyApp.prototype.GotoTempsRealandHistorique = function () {
        this._app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_historical_historical__["a" /* Historical */]);
        this.menuclose();
    };
    //navigation to gestion de vehicule
    MyApp.prototype.GoToGestVehi = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_datamana_vehicules_vehicules__["a" /* Vehicules */]);
        this.menuclose();
    };
    //verification d'authentification
    MyApp.prototype.checkPreviousAuthorization = function () {
        if ((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
            (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_historical_historical__["a" /* Historical */];
        }
    };
    //alert deconnexion
    MyApp.prototype.logoutconfirm = function () {
        var _this = this;
        this.menuclose();
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Souhaitez-vous vraiment vous déconnecter?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                    }
                }, {
                    text: 'Déconnexion',
                    handler: function () {
                        _this.logout();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    //deconnexion
    MyApp.prototype.logout = function () {
        localStorage.removeItem('currentuser');
        this._app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])('mycontent'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\app\app.html"*/'<ion-menu [content]="mycontent" style="background-color:rgba(0,0,0,0);">\n\n  <ion-header style="height:48px;">\n\n    <ion-title style="color:white"> Menu </ion-title>\n\n  </ion-header>\n\n  <ion-content style="background-color:white">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/logorim.jpg">\n\n      </ion-avatar>\n\n      <h2>Rim Télécom</h2>\n\n      <p>Online</p>\n\n    </ion-item>\n\n    <button ion-button color="light" (click)="GotoTempsRealandHistorique()" style="width:90%">Temps réel & Historique</button>\n\n    <button ion-button color="light" (click)="hidelist()" style="width:90%">Gestion de données</button>\n\n    <ion-list [hidden]="listhide">\n\n      <ion-card>\n\n        <ion-list>\n\n          <button ion-item (click)="GoToGestVehi()">\n\n            <i class="fa fa-car" aria-hidden="true" ></i>\n\n              Véhicules\n\n          </button>\n\n          <button ion-item>\n\n            <i class="fa fa-users" aria-hidden="true"></i>\n\n              Groupes\n\n          </button>\n\n          <button ion-item>\n\n            <i class="fa fa-user" aria-hidden="true"></i>\n\n            Conducteurs  \n\n          </button>\n\n          <button ion-item (click)="GotoGestpoi()">\n\n            <i class="fa fa-flag" aria-hidden="true"></i>\n\n            Points d\'intérêt\n\n          </button>\n\n        </ion-list>\n\n      </ion-card>\n\n    </ion-list>  \n\n  </ion-content>\n\n  <ion-footer>\n\n    <button ion-button outline full color="danger" (click)="logoutconfirm()">Déconnexion</button>\n\n  </ion-footer>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataManagementService = (function () {
    function DataManagementService(_http) {
        this._http = _http;
        this.pointInterests = null;
        this.groups = null;
        this.selectedGroup = null;
        this.selectedVehiculeId = null;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    DataManagementService.prototype.inverseGeoconding = function (latitude, longitude, zoom) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["c" /* nominatim_dns */] + '/reverse.php?format=json&lat=' + latitude + '&lon=' + longitude + '&zoom=' + zoom + '&accept-language=fr&addressdetails=1').map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.getAllPointInterests = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'pointInterests', { headers: headers }).map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.deletePointInterest = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'pointInterests/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.addPointInterest = function (pointInterest) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'pointInterests', pointInterest, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.getAllGroups = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/minify', { headers: headers }).map(function (res) { return res.json(); });
    };
    // must exe only if pointInterests not NULL !!!
    DataManagementService.prototype.getRelativePosition = function (lat, lng) {
        var _this = this;
        var relativePosition = null;
        this.pointInterests.forEach(function (pointInterest) {
            var distance = _this.distance(lat, lng, pointInterest.coordinate.lat, pointInterest.coordinate.lng);
            if (distance < pointInterest.ray / 1000) {
                relativePosition = pointInterest.name;
            }
            /*if (distance > pointInterest.ray / 1000 && distance < 0.1) {
                relativePosition = Math.round(distance * 1000) + " metre de " + pointInterest.name;
            }*/
            if (distance > pointInterest.ray / 1000 && distance < 0.2) {
                var distanceStr = distance.toString().substr(0, 4);
                relativePosition = "à " + distanceStr + " Km de " + pointInterest.name;
            }
        });
        return relativePosition;
    };
    DataManagementService.prototype.distance = function (lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
                (1 - c((lon2 - lon1) * p)) / 2;
        var distance = 12742 * Math.asin(Math.sqrt(a));
        return distance;
    };
    DataManagementService.prototype.getDriverName = function (driver) {
        if (driver) {
            if (driver.firstName && driver.lastName) {
                return driver.firstName + ' ' + driver.lastName;
            }
            else if (driver.firstName) {
                return driver.firstName;
            }
            else if (driver.lastName) {
                return driver.lastName;
            }
            else
                return "anonyme";
        }
        else
            return "pas de chauffeur";
    };
    DataManagementService.prototype.getDriverPhonenumber = function (driver) {
        if (driver) {
            if (driver.telephone)
                return driver.telephone;
        }
    };
    return DataManagementService;
}());
DataManagementService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], DataManagementService);

//# sourceMappingURL=data-management.service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_config__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Marker = L.Marker;
var Icon = L.Icon;

var MapService = (function () {
    function MapService() {
        this.mapLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.markerWasAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.markerWasEdited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.polygons = [];
        this.markers = [];
        this.polylines = [];
        this.circles = [];
        this.newRtMarkers = [];
        this.rtMarkers = [];
        this.markersPoi = [];
        this.polygonsPoi = [];
        this.baseMaps = {
            RimTelecom: L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            googlestreet: L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                id: 'Google Streets',
                maxZoom: 20,
                maxNativeZoom: 17,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            googlehybride: L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            googleSat: L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            'Google Terrain': L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            OpenStreetMap: L.tileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
                maxZoom: 20,
                maxNativeZoom: 17,
                attribution: '&copy; <a href="rimtelecom.ma">Rim telecom</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
            }),
            Esri: L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
                attribution: 'Rimtelecom'
            }),
            CartoDB: L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                maxZoom: 20,
                maxNativeZoom: 17,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            }),
            Esri_WorldImagery: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                maxZoom: 20,
                maxNativeZoom: 17,
                attribution: 'Rimtelecom'
            })
        };
    }
    MapService.prototype.addRtMarker = function (rtMarker) {
        rtMarker.value.setIcon(rtMarker.icon);
        this.rtMarkers.push(rtMarker);
        rtMarker.value.addTo(this.map);
    };
    MapService.prototype.updateRtMarkertest = function (coordinate, popup, icon, id, isCurrentPathClicked) {
        //tester si la liste est vide
        //si oui 
        var _this = this;
        if (this.newRtMarkers == null || this.newRtMarkers.length == 0) {
            var marker = L.marker(L.latLng(coordinate.lat, coordinate.lng));
            marker.addTo(this.map);
            marker.bindPopup(popup);
            marker.setIcon(icon);
            marker.on('click', function () { _this.map.setView(coordinate, 14); });
            this.newRtMarkers.push({ id: id, marker: marker });
        }
        else {
            this.newRtMarkers.map(function (rt) {
                if (rt.id == id) {
                    //rt.marker.remove();
                    _this.newRtMarkers.splice(_this.newRtMarkers.indexOf(rt), 1);
                    rt.marker.setLatLng(coordinate);
                    rt.marker.setIcon(icon);
                    rt.marker.getPopup().setContent(popup);
                    if (isCurrentPathClicked == true) {
                        var marker = L.marker(L.latLng(coordinate.lat, coordinate.lng));
                        marker.setIcon(new Icon({
                            iconUrl: __WEBPACK_IMPORTED_MODULE_2__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                            iconAnchor: [2, 2]
                        }));
                        _this.addMarker(marker);
                        var points = [];
                        points.push(rt.marker.getLatLng());
                        points.push(coordinate.value.getLatLng());
                        var polyline = L.polyline(points, { color: '#0031D9', weight: 3 });
                        _this.addPolyline(polyline);
                    }
                }
            });
        }
    };
    MapService.prototype.updateRtMarker = function (rtMarker, isCurrentPathClicked) {
        var _this = this;
        var ok = false;
        this.rtMarkers.map(function (rt) {
            if (rt.id == rtMarker.id) {
                if (isCurrentPathClicked == true) {
                    var marker = new Marker(rt.value.getLatLng());
                    marker.setIcon(new Icon({
                        iconUrl: __WEBPACK_IMPORTED_MODULE_2__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                        iconAnchor: [2, 2]
                    }));
                    /*marker.on('click', () => {
                        this.map.setView(rt.value.getLatLng(), 17);
                    });*/
                    _this.addMarker(marker);
                    var points = [];
                    points.push(rt.value.getLatLng());
                    points.push(rtMarker.value.getLatLng());
                    var polyline = L.polyline(points, { color: '#0031D9', weight: 3 });
                    _this.addPolyline(polyline);
                }
                rt.value.setLatLng(rtMarker.value.getLatLng());
                //rt.value.getPopup().setContent(rtMarker.value.getPopup().getContent());
                /*rt.value.on('click', () => {
                    this.map.setView(rtMarker.value.getLatLng(), 16);
                });*/
                rt.value.options.rotationAngle = rtMarker.angle;
                /*rt.value.setIcon(rtMarker.icon);*/
                ok = true;
            }
        });
        if (!ok) {
            rtMarker.value.setIcon(rtMarker.icon);
            this.rtMarkers.push(rtMarker);
            rtMarker.value.addTo(this.map);
        }
    };
    MapService.prototype.removeAllRtMarkers = function () {
        var _this = this;
        this.newRtMarkers.forEach(function (m) {
            _this.map.removeLayer(m.marker);
        });
        this.newRtMarkers = [];
    };
    MapService.prototype.setView = function (coordinate) {
        this.map.setView(coordinate, 15);
    };
    MapService.prototype.addCircle = function (circle) {
        this.circles.push(circle);
        circle.addTo(this.map);
    };
    MapService.prototype.removeCirclesFromMap = function () {
        var _this = this;
        this.circles.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.circles = [];
    };
    MapService.prototype.addMarker = function (marker) {
        this.markers.push(marker);
        marker.addTo(this.map);
    };
    MapService.prototype.addMarkerPoi = function (marker) {
        this.markersPoi.push(marker);
        marker.addTo(this.map);
    };
    MapService.prototype.removeMarkersPoiFromMap = function () {
        var _this = this;
        this.markersPoi.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.markersPoi = [];
    };
    MapService.prototype.removeMarker = function (index) {
        this.map.removeLayer(this.markers[index]);
        delete this.markers[index];
    };
    MapService.prototype.addMarkersToMap = function () {
        var _this = this;
        this.markers.forEach(function (marker) {
            marker.addTo(_this.map);
        });
    };
    MapService.prototype.removeMarkersFromMap = function () {
        var _this = this;
        this.markers.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.markers = [];
    };
    MapService.prototype.addPolyline = function (polyline) {
        this.polylines.push(polyline);
        polyline.addTo(this.map);
    };
    MapService.prototype.removePolylinesFromMap = function () {
        var _this = this;
        this.polylines.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.polylines = [];
    };
    MapService.prototype.addPolygon = function (polygon) {
        this.polygons.push(polygon);
        polygon.addTo(this.map);
    };
    MapService.prototype.addPolygonPoi = function (polygon) {
        this.polygonsPoi.push(polygon);
        polygon.addTo(this.map);
    };
    MapService.prototype.removePolygon = function (index) {
        //this.map.removeLayer(this.polygons[index]);
        delete this.polygons[index];
    };
    MapService.prototype.addPolygonsToMap = function () {
        var _this = this;
        this.polygons.forEach(function (Polygon) {
            Polygon.addTo(_this.map);
        });
    };
    MapService.prototype.removePolygonsFromMap = function () {
        var _this = this;
        this.polygons.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.polygons = [];
    };
    MapService.prototype.removePolygonsPoiFromMap = function () {
        var _this = this;
        this.polygonsPoi.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.polygonsPoi = [];
    };
    MapService.prototype.resetMap = function () {
        this.removeMarkersFromMap();
        this.removePolygonsFromMap();
        this.removePolylinesFromMap();
    };
    MapService.prototype.disableMouseEvent = function (elementId) {
        var element = document.getElementById(elementId);
        L.DomEvent.disableClickPropagation(element);
        L.DomEvent.disableScrollPropagation(element);
    };
    ;
    return MapService;
}());
MapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MapService);

//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Groupes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Groupes = (function () {
    function Groupes(menu) {
        this.menu = menu;
    }
    Groupes.prototype.openmenu = function () {
        this.menu.open();
    };
    return Groupes;
}());
Groupes = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-groupes',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\groupes\groupes.html"*/''/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\groupes\groupes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* MenuController */]])
], Groupes);

//# sourceMappingURL=groupes.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoricalService = (function () {
    function HistoricalService(_http) {
        this._http = _http;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    HistoricalService.prototype.getMileageDetails = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'mileage/details/' + deviceId, dateInterval, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getAllMileages = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'mileage/' + deviceId, dateInterval, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getAllGroups = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/minify', { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getAllPaths = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'paths/' + deviceId, dateInterval, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getAllStops = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'stops/' + deviceId, dateInterval, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getCurrentPath = function (deviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'paths/currentPath/' + deviceId, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getPathDetails = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'paths/details/' + deviceId, dateInterval, { headers: headers }).map(function (res) { return res.json(); });
    };
    return HistoricalService;
}());
HistoricalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], HistoricalService);

//# sourceMappingURL=historical.service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTimeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_config__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_headers__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RealTimeService = (function () {
    function RealTimeService(_http, storage) {
        this._http = _http;
        this.storage = storage;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    RealTimeService.prototype.getRealTimeRecord = function (deviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        // ici il faut recuperer utilisateur courant !!!!
        // il faut dabord lors de authen => tu gard utilisteur sur le storage pour que tu puise le recuperer ici
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'realTimeRecords/' + deviceId, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getAllPois = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'pointInterests/dtos', { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getAllRealTimeRecords = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var parms = "";
        headers.append('Authorization', this.currentuser.token);
        if (!this.currentuser.isRoot) {
            parms = '?id=' + this.currentuser.id;
        }
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'realTimeRecords' + parms, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getAllGroups = function (keyword) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var parms = "";
        if (!this.currentuser.isRoot) {
            parms = '&id=' + this.currentuser.id;
        }
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'groupes/details?keyword=' + keyword + parms, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getCurrentPath = function (deviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'paths/currentPath/' + deviceId, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.startEngine = function (idBoitier) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_headers__["b" /* createAuthorizationHeader */])(headers);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'engine/start/' + idBoitier, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.stopEngine = function (idBoitier) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_headers__["b" /* createAuthorizationHeader */])(headers);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'engine/stop/' + idBoitier, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    return RealTimeService;
}());
RealTimeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], RealTimeService);

//# sourceMappingURL=real-time.service.js.map

/***/ })

},[276]);
//# sourceMappingURL=main.js.map