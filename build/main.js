webpackJsonp([0],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Historical; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_map_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_historical_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_management_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__historical_form_historical_form__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__paths_list_paths_list__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_config__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_geocoding_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_leaflet__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_real_time_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__groups_page_groups_page__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__objects_real_time__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__poi_poi__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Polygon = L.Polygon;
var Marker = L.Marker;
var Icon = L.Icon;









/*import { Geolocation } from '@ionic-native/geolocation';*/
var Historical = (function () {
    function Historical(alertCtrl /*, private geolocation: Geolocation*/, actionSheetCtrl, viewCtrl, callNumber, storage, pipe, toastController, realTimeService, geocodingService, dataManagementService, _app, historicalService, loadingCtrl, modalCtrl, navCtrl, navParams, mapService) {
        this.alertCtrl = alertCtrl; /*, private geolocation: Geolocation*/
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
        this.username = window.localStorage.getItem('username');
    }
    Historical.prototype.ngOnInit = function () {
        this.initMap();
        this.init();
        /*  this.geolocation.getCurrentPosition().then((resp) => {
            this.currentlocationlat=resp.coords.latitude;
            this.currentlocationlng=resp.coords.longitude;
            this.coords=resp.coords;
          
           }).catch((error) => {
             console.log('Error getting location', error);
           });
           */
    };
    /* getIntineraire(){
       let polyline = L.polyline(this.coords, {color: '#0031D9', weight: 3});
      
     }*/
    //Disable swipe back
    Historical.prototype.ionViewWillEnter = function () {
        this.navCtrl.swipeBackEnabled = false;
    };
    //Loading groups and all real time records
    Historical.prototype.init = function () {
        var _this = this;
        this.mapService.removeAllRtMarkers();
        this.loadGroups();
        __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__["Observable"].interval(1000 * 60).subscribe(function (x) {
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
                    vehicule.realTimeRecord = new __WEBPACK_IMPORTED_MODULE_15__objects_real_time__["a" /* RealTimeRecord */]();
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
        L.control.zoom({ position: 'topright' }).addTo(map);
        this.mapService.map = map;
    };
    // (open modal) liste des groupes et véhicules (temps réel) 
    Historical.prototype.openGroupsModal = function () {
        var _this = this;
        var groupModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__groups_page_groups_page__["a" /* GroupsPage */], { groups: this.groups });
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
        var PoiModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_16__poi_poi__["a" /* Poi */], { addresspoi: this.addresspoi, latpoi: this.latpoi, lngpoi: this.lngpoi });
        PoiModal.present();
        PoiModal.onDidDismiss(function (form) {
            _this.dataManagementService.addPointInterest(form.pointInterest).subscribe(function (pointInterest) {
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
        });
    };
    //remove polylines and markers from map
    Historical.prototype.clearPolylines = function () {
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
        var foundVehicule = new __WEBPACK_IMPORTED_MODULE_15__objects_real_time__["b" /* Vehicule */]();
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
    //
    Historical.prototype.trackRealTimeRecord = function (realTimeRecord) {
        var _this = this;
        var angle = 0;
        var date = new Date(realTimeRecord.recordTime);
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
        // marker.bindPopup("salut")
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition == true) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -10]
            });
            imageUri = __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed > 0) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            imageUri = __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition == false) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            imageUri = __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'NON_VALID' || realTimeRecord.realTimeRecordStatus == 'TECHNICAL_ISSUE') {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            imageUri = __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
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
            // L.marker(L.latLng(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng)).addTo(this.mapService.map).bindPopup(popup).setIcon(icon).on('click', () => {this.mapService.map.setView(realTimeRecord.coordinate, 8);
            //});
            /*this.mapService.updateRtMarker({
              id: realTimeRecord.idRealTimeRecord,
              value: marker,
              icon: icon,
              angle: angle
              }, displaycurrentPath);*/
        }, function (err) {
            var displaycurrentPath = false;
            if (_this.currentPathClickedDeviceIds != null && _this.currentPathClickedDeviceIds.indexOf(realTimeRecord.idRealTimeRecord) != -1) {
                displaycurrentPath = true;
            }
            if (realTimeRecord.idRealTimeRecord == _this.selectedDevice) {
                marker.bindPopup(popup);
                /*this.mapService.updateRtMarker({
                id: realTimeRecord.idRealTimeRecord,
                value: marker,
                icon: icon,
                angle: angle
                }, displaycurrentPath);*/
                _this.mapService.updateRtMarkertest(realTimeRecord.coordinate, popup, icon, realTimeRecord.idRealTimeRecord, displaycurrentPath);
            }
        });
    };
    //
    Historical.prototype.PipeLngLat = function (value) {
        return this.pipe.transform(value, '2.2-6');
    };
    //
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
    //
    Historical.prototype.startEngine = function (deviceId) {
        this.realTimeService.startEngine(deviceId).subscribe(function (cmdSended) {
            alert("commande Lancement moteur envoyé !");
        });
    };
    //
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
    //
    Historical.prototype.stopEngine = function (deviceId) {
        this.realTimeService.stopEngine(deviceId).subscribe(function (cmdSended) {
            alert("commande Arrêt moteur envoyé !");
        });
    };
    //
    Historical.prototype.openResultsModal = function () {
        var _this = this;
        this.mapService.removePolylinesFromMap();
        this.mapService.removeMarkersFromMap();
        var pathsListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__paths_list_paths_list__["a" /* PathsList */], { paths: this.paths });
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
            });
        }
    };
    //
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
                var popup = "<img src='" + __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "stop_smal.png" + "'/> Durée d'arrêt : " + stop.stopDurationStr;
                /*let stopMarker = new Marker({
                  lat: stop.stopLatitude,
                  lng: stop.stopLongitude
                });*/
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
                    iconUrl: __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "stop_smal.png",
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
                        iconUrl: __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                        iconAnchor: [2, 2]
                    }));
                    var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */](coordinate.date);
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
            var startDatePipe = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */](startTime);
            startMarker.bindPopup('<b> Lieu de début: </b>' + path.beginPathGeocoding + '<b></i><br>Temps de début du trajet : </b>' + startDatePipe.transform(startTime, 'dd/MM/yyyy HH:mm:ss'));
            startMarker.setIcon(new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "startMarker.png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            }));
            _this.mapService.addMarker(startMarker);
            if (path.endPathLatitude != null && path.endPathLongitude != null && path.endPathTime != null) {
                var endMarker = L.marker({ lat: path.endPathLatitude, lng: path.endPathLongitude });
                var endTime = path.endPathTime;
                var endDatePipe = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */](endTime);
                endMarker.bindPopup('<b> Lieu de fin: </b>' + path.endPathGeocoding + '<br><b>Temps de fin du trajet : </b>' + endDatePipe.transform(endTime, 'dd/MM/yyyy HH:mm:ss')
                    + '<br><b> Durée du trajet : </b>' + path.pathDurationStr + "<br><b> Durée d'arrêt : </b>" + path.nextStopDurationStr + "<br><b> Vitesse maximum : </b>"
                    + path.maxSpeed + " Km/h <br><b> Kilometrage parcouru : </b>" + path.distanceDriven.toFixed(2) + ' Km');
                endMarker.setIcon(new Icon({
                    iconUrl: __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "endMarker.png",
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
    //
    Historical.prototype.displayCurrentPath = function (deviceId) {
        var _this = this;
        this.realTimeService.getCurrentPath(deviceId).subscribe(function (currentPath) {
            if (currentPath != null) {
                var polyline = L.polyline(currentPath.coordinates, { color: '#0031D9', weight: 3 });
                currentPath.coordinates.forEach(function (coordinate, i) {
                    var marker = new Marker(coordinate);
                    if (i != 0 && i != currentPath.coordinates.length - 1) {
                        marker.setIcon(new Icon({
                            iconUrl: __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                            iconAnchor: [2, 2]
                        }));
                        _this.mapService.addMarker(marker);
                    }
                });
                var startMarker = L.marker({ lat: currentPath.beginPathLatitude, lng: currentPath.beginPathLongitude });
                startMarker.setIcon(new Icon({
                    iconUrl: __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["b" /* imagesDir */] + "startMarker.png",
                    iconAnchor: [-2, 30],
                    popupAnchor: [10, -25]
                }));
                startMarker.on('click', function () { _this.mapService.map.setView({ lat: currentPath.beginPathLatitude, lng: currentPath.beginPathLongitude }, 14); });
                _this.mapService.addMarker(startMarker);
                _this.mapService.addPolyline(polyline);
                _this.pathDrawn = true;
            }
            _this.previousPathdrawn = true;
            _this.loader.dismiss();
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
    //
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
    Historical.prototype.drawPointInterest = function (pointInterest) {
        var _this = this;
        var popup = "<span class='leaflet-pelias-layer-icon-container'><div class='leaflet-pelias-layer-icon leaflet-pelias-layer-icon-point' title='layer: venue'></div></span> Nom : <strong>" + pointInterest.name + "</strong><br><hr><b>Adresse : " + pointInterest.address + "</b>";
        var marker = null;
        if (pointInterest.type == "POLYGON") {
            var polygon = new Polygon(pointInterest.decode);
            //this.mapService.addPolygon(polygon);
            this.mapService.addPolygonPoi(polygon);
        }
        marker = new Marker(pointInterest.coordinate);
        marker.on("click", function () {
            _this.mapService.map.setView(pointInterest.coordinate, 17);
        });
        marker.on("mouseover", function () {
            marker.openPopup();
        });
        marker.setIcon(new Icon({
            iconUrl: pointInterest.imageUri,
            iconAnchor: [-2, 10],
            popupAnchor: [10, -25]
        }));
        marker.bindPopup(popup);
        this.mapService.addMarkerPoi(marker);
    };
    /* Gethistorique(){
     
         let alert = this.alertCtrl.create({
           title: 'Historique des trajets',
           inputs: [
             {
               name: 'datedebut',
               placeholder: 'Date debut',
               type: 'date'
              
             },
             {
               name: 'timedebut',
               placeholder: 'Date debut',
               type: 'time'
             },
             {
               name: 'datefin',
               placeholder: 'Date fin',
               type: 'date'
            
             },{
               name: 'timefin',
               placeholder: 'Date debut',
               type: 'time'
             }
           ],
           buttons: [
             {
               text: 'Cancel',
               role: 'cancel',
               handler: data => {
                 console.log('Cancel clicked');
               }
             },
             {
               text: 'Chercher',
               handler: data => {
                 var date = new Date();
                 this.firstDate = new Date(data.datedebut,data.timedebut);
                 this.lastDate = new Date(data.datefin,data.timefin);
                
                   var firstDateTime = new Date(data.datedebut+''+data.timedebut+':00');
                   firstDateTime=firstDateTime;
                   let lastDateTime =this.lastDate;
                   console.log(firstDateTime)
                   this.allPaths = this.historicalService.getAllPaths(this.selectedDevice, {
                     startDate: firstDateTime,
                     endDate: lastDateTime
                   }).subscribe(paths => {
                     this.paths = paths;
                     
                     if(this.paths != null)
                     this.paths.forEach(path => {
             
                       var date = new Date(path.beginPathTime-3600000);
                       var hours = date.getHours();
                       var minutes = "0" + date.getMinutes();
                       path.displayBeginPathTime = hours + ':' + minutes.substr(-2);
             
                       date = new Date(path.endPathTime-3600000);
                       hours = date.getHours();
                       minutes = "0" + date.getMinutes();
                       path.displayEndPathTime = hours + ':' + minutes.substr(-2);
             
                       path.beginPathGeocodingDetails = this.dataManagementService.getRelativePosition(path.beginPathLatitude, path.beginPathLongitude);
                       path.beginPathGeocoding = path.beginPathGeocodingDetails;
                       if (path.beginPathGeocodingDetails == null) {
                         this.dataManagementService.inverseGeoconding(path.beginPathLatitude, path.beginPathLongitude, 17).subscribe(adress => {
                           path.beginPathGeocoding = this.processGeocoding(adress.display_name);
                           if (adress.address.road != null && adress.address.neighbsourhood != null && adress.address.city != null) {
                             path.beginPathGeocoding = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                             path.beginPathGeocodingDetails = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                           }
                         }, (err) => {
                           path.beginPathGeocodingDetails = null;
                           path.beginPathGeocoding = null;
                         });
                       }
                       path.endPathGeocodingDetails = this.dataManagementService.getRelativePosition(path.endPathLatitude, path.endPathLongitude);
                       path.endPathGeocoding = path.endPathGeocodingDetails;
                       if (path.endPathGeocodingDetails == null) {
                         this.dataManagementService.inverseGeoconding(path.endPathLatitude, path.endPathLongitude, 17).subscribe(adress => {
                           path.endPathGeocoding = this.processGeocoding(adress.display_name);
                           if (adress.address.road != null && adress.address.neighbsourhood != null && adress.address.city != null) {
                             path.endPathGeocoding = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                             path.endPathGeocodingDetails = path.endPathGeocoding;
                           }
                          
                         }, (err) => {
                           path.endPathGeocodingDetails = null;
                           path.endPathGeocoding = null;
                         });
                       }
                     
                     });
                    
                 
                   });
               }
             }
           ]
         });
         alert.present();
       }*/
    Historical.prototype.openFormModal = function () {
        var _this = this;
        this.mapService.removeAllRtMarkers();
        var formModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__historical_form_historical_form__["a" /* HistoricalForm */]);
        formModal.present();
        formModal.onDidDismiss(function (form) {
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
                        var startTime = startHour + __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["d" /* time_difference */];
                        path.displayBeginPathTime = startTime;
                        if (path.endPathTime != null) {
                            var endHour = path.endPathTime;
                            var endTime = endHour + __WEBPACK_IMPORTED_MODULE_8__providers_global_config__["d" /* time_difference */];
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
        });
    };
    Historical.prototype.presentConfirm = function () {
        var _this = this;
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
    //
    Historical.prototype.logout = function () {
        this.storage.set('username', null);
        this.storage.set('password', null);
        this._app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_13__home_home__["a" /* HomePage */]);
    };
    return Historical;
}());
Historical = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historical',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical\historical.html"*/'<ion-header style="margin-top:25px;height:65px;">\n  <ion-fab top right class="ion-fab2">\n    <button ion-fab mini round outline strong  style="margin-top:0px;margin-right:60px;background-color:rgba(0,0,0,0.6)" (click)="openGroupsModal()"><ion-icon name="arrow-up"></ion-icon></button>\n  </ion-fab>\n  <ion-fab top right>\n      <button  ion-fab mini round outline strong (click)="calldriver(driverphone)" color="primary" style="margin-top:0px;background-color:rgb(70, 238, 14)" ><ion-icon name="call"></ion-icon></button>\n  </ion-fab>\n  <ion-fab top left outline class="ion-fab1">\n    <button ion-fab mini outline style="margin-top:0px;background-color:rgba(0,0,0,0.6)"  ><ion-icon name="list"></ion-icon></button>\n    <ion-fab-list side="bottom" >\n      <button ion-button round outline strong (click)="openFormModal()" color="light"style="background-color:rgba(0,0,0,0.4);width:80%"><ion-icon name="list"></ion-icon> Historique </button>\n      <button ion-button round outline strong (click)="AlertLancementMoteur(selectedDevice)" color="secondary" style="width:80%;background-color:rgba(70, 238, 14, 0.4);color:#FFF" >Lancement</button>\n      <button ion-button round outline strong (click)="AlertArretMoteur(selectedDevice)" color="danger" style="width:80%;background-color:rgba(242, 11, 11, 0.4);color:#FFF" >Arrêt (Moteur)</button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-navbar hideBackButton="true"> </ion-navbar>\n  <ion-title><button style="background-color:rgba(0,0,0,0)" (click)="presentConfirm()"><a>RimTelecom</a></button></ion-title>\n</ion-header>\n\n<ion-content>\n  <ion-fab bottom left *ngIf="pathDrawn == true">\n    <button ion-fab mini (click)="clearPolylines()" color="danger">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-fab>    \n  <ion-fab bottom left *ngIf="pathDrawn == false && previousPathdrawn==true && DeviceId!==null">\n    <button ion-fab mini (click)="displayCurrentPath(DeviceId)"  [ngStyle]="{\'background-color\': \'rgb(70, 238, 14)\'}">\n      <ion-icon name="arrow-forward" ></ion-icon>\n    </button>\n  </ion-fab>\n  \n  <div class="pois-toggle leaflet-bottom leaflet-right" (click)="drawPointInterests()"> \n    <div class=" leaflet-bar leaflet-control" style="margin-bottom:500px;margin-right:12px;" >\n        <button  class="fa fa-eye-slash leaflet-bar-part" title="Afficher/Cacher Poi" style="outline: none;height:30px;width:30px;background-color:white;">  <ion-icon ios="ios-eye-off" md="md-eye-off"></ion-icon></button>\n    </div>\n  </div>\n  \n  \n\n  <!--================== /Leaflet Draw plugin ======================-->\n  \n  \n \n  <div id="historicalMap" class="leaflet-pseudo-fullscreen leaflet-fullscreen-on" style="height: 93%!important; top: 7.5% !important;"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical\historical.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] /*, private geolocation: Geolocation*/, __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DecimalPipe */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_11__providers_real_time_service__["a" /* RealTimeService */], __WEBPACK_IMPORTED_MODULE_9__utils_geocoding_service__["a" /* GeocodingService */], __WEBPACK_IMPORTED_MODULE_5__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_historical_service__["a" /* HistoricalService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__utils_map_service__["a" /* MapService */]])
], Historical);

//# sourceMappingURL=historical.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__historical_historical__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_historical_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_management_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(83);
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
        var _this = this;
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
        this.storage.get('username').then(function (data) {
            if (data != null) {
                _this.login = data;
            }
            _this.storage.get('password').then(function (data) {
                if (data != null) {
                    _this.mdp = data;
                }
                if (_this.login != null && _this.mdp != null) {
                    _this.loginTest = _this.login;
                    _this.mdpTest = _this.mdp;
                    _this.onSubmit();
                }
            });
        });
    }
    HomePage.prototype.onSubmit = function () {
        var _this = this;
        this.buttonColor = '#345465';
        this.signinService.login({ "username": this.login, "password": this.mdp }).subscribe(function (token) {
            _this.goToRt();
            _this.signinService.token = token.token;
            _this.realTimeService.token = token.token;
            _this.historicalService.token = token.token;
            _this.dataManagementService.token = token.token;
            _this.storage.set('username', _this.login);
            _this.storage.set('password', _this.mdp);
        }, function () {
            var toast = _this.toastController.create({
                message: 'Authentification Echouée!',
                duration: 2000
            });
            _this.buttonColor = '#c42e36';
            toast.present();
        });
    };
    HomePage.prototype.ionViewWillLeave = function () {
    };
    HomePage.prototype.goToRt = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__historical_historical__["a" /* Historical */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title > <a>Bienvenue</a></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="page-login">\n \n  <ion-card class="login-card">\n    <ion-card-content>\n      <ion-list no-line>\n       <ion-item>\n          <ion-input type="text" [(ngModel)]="login" name="login" placeholder="Identifiant"></ion-input>\n        </ion-item>\n\n        <ion-item>\n         \n          <ion-input type="password" [(ngModel)]="mdp" name="mdp" placeholder="Mot de passe"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button  margin-top ion-button margin-right block (click)=onSubmit() [ngStyle]="{\'background-color\': buttonColor}">\n      Connexion\n      </button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n       <ion-title> <img src="assets/img/logorim.jpg" height="100" /></ion-title>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_historical_service__["a" /* HistoricalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_historical_service__["a" /* HistoricalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__["a" /* RealTimeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__["a" /* RealTimeService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_data_management_service__["a" /* DataManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_data_management_service__["a" /* DataManagementService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__providers_login__["a" /* Login */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_login__["a" /* Login */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]) === "function" && _j || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Poi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_map_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_data_management__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_config__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Polygon = L.Polygon;
var Marker = L.Marker;
var Icon = L.Icon;

var Poi = (function () {
    function Poi(navParams, mapService, toastr, dataManagementService, viewCtrl, geocodingService) {
        this.navParams = navParams;
        this.mapService = mapService;
        this.toastr = toastr;
        this.dataManagementService = dataManagementService;
        this.viewCtrl = viewCtrl;
        this.geocodingService = geocodingService;
        this.mode = 'ADD';
        this.pointInterest = new __WEBPACK_IMPORTED_MODULE_3__objects_data_management__["a" /* PointInterest */]();
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
        this.selectedImage = this.images[0];
        this.addresspoi = this.navParams.get('addresspoi');
        this.latpoi = this.navParams.get('latpoi');
        this.lngpoi = this.navParams.get('lngpoi');
        console.log(this.latpoi);
    }
    Poi.prototype.ngOnInit = function () {
        this.loadPOI();
    };
    //GET list of Points and Polygons
    Poi.prototype.loadPOI = function () {
        var _this = this;
        if (this.dataManagementService.pointInterests) {
            this.dataManagementService.pointInterests.forEach(function (data) {
                if (data.type == "MARKER") {
                    _this.pointInterestsPoint.push(data);
                }
                else if (data.type == "POLYGON") {
                    _this.pointInterestsPolygon.push(data);
                }
            });
        }
        else {
            this.dataManagementService.getAllPointInterests().subscribe(function (response) {
                response.forEach(function (data) {
                    if (data.type == "MARKER") {
                        _this.pointInterestsPoint.push(data);
                    }
                    else if (data.type == "POLYGON") {
                        _this.pointInterestsPolygon.push(data);
                    }
                });
                _this.dataManagementService.pointInterests = response;
            });
        }
    };
    Poi.prototype.displayPointPolygon = function (pointInterest) {
        var _this = this;
        this.mapService.removeMarkersFromMap();
        this.mapService.removeMarkersPoiFromMap();
        this.mapService.removePolygonsPoiFromMap();
        var popup = '<b>Nom : ' + pointInterest.name + '</b> <br> <b>Adresse:' + pointInterest.address + '</b>';
        var marker = null;
        if (pointInterest.type == "POLYGON") {
            var polygon = new Polygon(pointInterest.decode);
            //this.mapService.addPolygon(polygon);
            this.mapService.addPolygonPoi(polygon);
        }
        marker = new Marker(pointInterest.coordinate);
        marker.on("click", function () {
            _this.mapService.map.setView(pointInterest.coordinate, 17);
        });
        //Edit Marker 
        marker.options.draggable = true;
        this.pointInterest = pointInterest;
        marker.on("dragend", function (e) {
            _this.pointInterest.coordinate = e.target._latlng;
            _this.geocodingService.inverseGeoconding(_this.pointInterest.coordinate.lat, _this.pointInterest.coordinate.lng, 17).subscribe(function (adress) {
                _this.pointInterest.address = adress.display_name;
            });
        });
        marker.bindPopup(popup);
        marker.setIcon(new Icon({
            iconUrl: pointInterest.imageUri,
            iconAnchor: [-2, 10],
            popupAnchor: [10, -25]
        }));
        this.mapService.addMarkerPoi(marker);
        this.mapService.map.setView(pointInterest.coordinate, 12);
        this.closeModal();
    };
    Poi.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    Poi.prototype.drawPointInterest = function (pointInterest) {
        var _this = this;
        var popup = "<span class='leaflet-pelias-layer-icon-container'><div class='leaflet-pelias-layer-icon leaflet-pelias-layer-icon-point' title='layer: venue'></div></span> Nom : <strong>" + pointInterest.name + "</strong><br><hr><b>Adresse : " + pointInterest.address + "</b>";
        var marker = null;
        if (pointInterest.type == "POLYGON") {
            var polygon = new Polygon(pointInterest.decode);
            //this.mapService.addPolygon(polygon);
            this.mapService.addPolygonPoi(polygon);
        }
        marker = new Marker(pointInterest.coordinate);
        marker.on("click", function () {
            _this.mapService.map.setView(pointInterest.coordinate, 17);
        });
        marker.on("mouseover", function () {
            marker.openPopup();
        });
        marker.setIcon(new Icon({
            iconUrl: pointInterest.imageUri,
            iconAnchor: [-2, 10],
            popupAnchor: [10, -25]
        }));
        marker.bindPopup(popup);
        this.mapService.addMarkerPoi(marker);
    };
    Poi.prototype.addpoi = function () {
        var pointInterest = new __WEBPACK_IMPORTED_MODULE_3__objects_data_management__["a" /* PointInterest */]();
        pointInterest.address = this.addresspoi;
        pointInterest.name = this.nompoi;
        pointInterest.ray = this.rayonpoi;
        pointInterest.coordinate = { lat: this.latpoi, lng: this.lngpoi };
        console.log(pointInterest.coordinate.lat);
        pointInterest.type = 'MARKER';
        pointInterest.imageUri = this.selectedImage.uri;
        console.log(pointInterest);
        this.viewCtrl.dismiss({ pointInterest: pointInterest });
    };
    Poi.prototype.addPointInterest = function () {
        var _this = this;
        this.viewCtrl.dismiss(null);
        this.pointInterest.imageUri = this.selectedImage.uri;
        this.dataManagementService.addPointInterest(this.pointInterest).subscribe(function (pointInterest) {
            _this.drawPointInterest(pointInterest);
            if (pointInterest.type == "MARKER") {
                var circle = L.circle(_this.pointInterest.coordinate, {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.1,
                    radius: _this.pointInterest.ray
                });
                _this.mapService.addCircle(circle);
                setTimeout(function () {
                    _this.mapService.removeCirclesFromMap();
                }, 3000);
            }
            _this.dataManagementService.pointInterests.push(pointInterest);
        }, function (err) {
        });
    };
    Poi.prototype.drawPointInterests = function () {
        var _this = this;
        this.mapService.removeMarkersPoiFromMap();
        this.mapService.removePolygonsPoiFromMap();
        this.mapService.removeCirclesFromMap();
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
    };
    return Poi;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__objects_data_management__["a" /* PointInterest */])
], Poi.prototype, "pointInterest", void 0);
Poi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'app-poi',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\poi\poi.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title style="text-align: center"><a> Ajouter comme POI</a> </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="closeModal()">\n\n        <ion-icon name="arrow-down"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n  <ion-content padding text-center style="background-color: rgba(255, 255, 255, 0.69) !important;">\n\n        <ion-list style="margin-top:40px;" >\n\n                <ion-item  >\n\n               \n\n                  <ion-input placeholder="Nom..."[(ngModel)]="nompoi" ></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    \n\n                    <ion-input   [(ngModel)]="addresspoi"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                        <ion-input type="number" placeholder="Rayon" [(ngModel)]="rayonpoi"></ion-input>\n\n                </ion-item>\n\n       </ion-list>\n\n       <p>[lat],[lng]\n\n       \n\n        {{latpoi}},{{lngpoi}}\n\n       </p>\n\n       \n\n                <div class="form-group">\n\n        <div class="dropdown">\n\n            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"\n\n                    data-toggle="dropdown" aria-haspopup="true"\n\n                    aria-expanded="true" style="border-radius: 0px;">\n\n                <img src="{{selectedImage.uri}}" width="17px"/> {{selectedImage.text}}\n\n                <span class="caret"></span>\n\n            </button>\n\n            <ul class="dropdown-menu" style="border-radius: 0px;">\n\n                <li *ngFor="let image of images" (click)="selectedImage = image;">\n\n                    <a>\n\n                        <img src="{{image.uri}}" width="30px"/> {{image.text}}\n\n                    </a>\n\n                </li>\n\n            </ul>\n\n        </div>\n\n    </div>\n\n                \n\n                       \n\n                      \n\n                       \n\n       <button ion-button center round (click)="addpoi()">Add POI\n\n            <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n        </button>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\poi\poi.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__utils_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__["a" /* GeocodingService */]])
], Poi);

//# sourceMappingURL=poi.js.map

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

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historical_service__ = __webpack_require__(76);
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
        this.init();
        this.startDate1.setTime(this.startDate1.getTime() - 3 * 86400000);
        this.startDate = this.startDate1.toISOString();
        this.endDate = this.endDate1.toISOString();
    }
    HistoricalForm.prototype.ionViewWillEnter = function () {
    };
    HistoricalForm.prototype.init = function () {
    };
    HistoricalForm.prototype.ionViewDidLoad = function () {
    };
    HistoricalForm.prototype.getAllPaths = function () {
        var date = new Date();
        this.viewCtrl.dismiss({ startDate: this.startDate, endDate: this.endDate });
    };
    HistoricalForm.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    return HistoricalForm;
}());
HistoricalForm = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historical-form',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical-form\historical-form.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center"><a>Selectionner le véhicule</a> </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="closeModal()">\n      <ion-icon name="arrow-down"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding text-center style="background-color: rgba(255, 255, 255, 0.69) !important;">\n    \n  <ion-item style="margin-top: 200px">\n        <ion-label>Date début</ion-label>\n        <ion-datetime name="startDate" displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="startDate"></ion-datetime>\n      </ion-item>\n  \n      <ion-item style="margin-bottom: 20px">\n          <ion-label>Date fin</ion-label>\n          <ion-datetime name="endDate" displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="endDate"> </ion-datetime>\n        </ion-item>\n  <!--<ion-item>\n    <ion-label>Date de début</ion-label>\n    <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="firstDate"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>Date de fin</ion-label>\n    <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="lastDate"></ion-datetime>\n  </ion-item>-->\n  \n  <button ion-button center round (click)="getAllPaths()">Chercher  \n      <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n  </button>\n  <button ion-button center round (click)="closeModal()">Annuler  \n      <!--<ion-icon style="margin-left: 5px" name="close"></ion-icon>-->\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical-form\historical-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_historical_service__["a" /* HistoricalService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], HistoricalForm);

//# sourceMappingURL=historical-form.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
    PathsList.prototype.ionViewDidLoad = function () {
    };
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], PathsList);

//# sourceMappingURL=paths-list.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contentHeaders; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createAuthorizationHeader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(41);

var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
function createAuthorizationHeader(headers) {
    headers.append('Authorization', localStorage.getItem('id_token'));
}
//# sourceMappingURL=headers.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_headers__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Login = (function () {
    function Login(http) {
        this.http = http;
    }
    Login.prototype.login = function (credentials) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'signin', credentials, { headers: __WEBPACK_IMPORTED_MODULE_4__utils_headers__["a" /* contentHeaders */] }).map(function (res) { return res.json(); });
    };
    Login.prototype.logout = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_headers__["b" /* createAuthorizationHeader */])(headers);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'signout', {}, { headers: headers }).map(function (res) { return res.json(); });
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_real_time_service__ = __webpack_require__(77);
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
        selector: 'page-groups-page',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\groups-page\groups-page.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title><a>Groupes et véhicules</a></ion-title>\n       \n    </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background-color: rgba(255, 255, 255, 0.69) !important; padding: auto;">\n    <div style="font-size: 15px;border-radius:0px; margin-top: 0%;">\n       <!-- <div style="text-align: center;padding-bottom: 20px">\n            <input style="text-align: center;" type="text" name="table_search" placeholder="Recherche ..." [(ngModel)]="searchWord"/>\n            <button ion-button icon-only clear color="dark"  (click)="searchGroup()">\n            <ion-icon name="search" ></ion-icon>\n                </button>\n        </div> -->\n    <div style="width: 500%">\n        <table class="table" style="width: 20%">\n            <tbody>\n                <ng-template ngFor let-item [ngForOf]="groups" >\n                    <tr style="color: black">\n                        <td style="font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: #B0C4DE;opacity: 0.75;">{{item.nom}}</td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <div style="overflow:auto">\n                                <table class="table" frame="hsides" rules="cols" style="width: 100%;">\n                                    <thead frame="hsides" border="1">\n                                        <!-- <tr>\n                                            <th style="width: 10%;"> Etat</th>\n                                            <th colspan="3" style="width: 10%;">Véhicule</th>\n                                            <!-- <th style="width: 10%">Chauffeur</th> \n                                            <th style="width: 30%">Position</th> \n                                            <th style="width: 15%;">V(Km/h)</th>\n                                            <th style="width: 25%;">Date & heure</th>\n                                        </tr> -->\n                                    </thead>\n                                    <tbody style="border :colspan; text-align: center;" frame="hsides" frame="hsides" rules="all">\n                                        <ng-container *ngFor="let vehicule of item.vehicules">\n                                            <tr  [ngClass]="{\'activeRT\': selectedDevice == vehicule.idDevice}" style="border-bottom:1pt solid black;">\n                                                <td width="10%" (click)="goToRealTimeRecord(vehicule.idDevice)">\n                                                    <img width="30 px" src="{{vehicule?.realTimeRecord?.icon}}">\n                                                </td> \n                                                <td width="30%" (click)="goToRealTimeRecord(vehicule.idDevice)">\n                                                    <div><b>\n                                                {{vehicule.matricule}} <br>\n                                                {{vehicule?.driver?.firstName}} {{vehicule?.driver?.lastName}}\n                                                    </b></div>\n                                                </td>\n                                                <td width="40%" (click)="goToRealTimeRecord(vehicule.idDevice)">\n                                                    <div\n                                                *ngIf="!vehicule.realTimeRecord.relativePosition"><b>\n                                                    {{vehicule?.realTimeRecord?.geocoding}}\n                                                </b></div> \n                                                <div *ngIf="vehicule.realTimeRecord.relativePosition"><b>\n                                                    {{vehicule?.realTimeRecord?.relativePosition}}\n                                                </b></div> <div><b>\n                                                    {{vehicule?.realTimeRecord?.recordTime| date:\'d-M HH:mm\'}}\n                                                </b></div>\n                                                <div><b>\n                                                    {{vehicule?.realTimeRecord?.speed}} KM/H \n                                                </b></div>\n                                                \n                                                </td>\n                                                \n                                            </tr>\n                                        </ng-container>\n                                    </tbody>\n                                </table>\n\n                             </div>\n                             </td>\n                        </tr>\n                    </ng-template>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\groups-page\groups-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_real_time_service__["a" /* RealTimeService */]])
], GroupsPage);

//# sourceMappingURL=groups-page.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(272);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_call_number__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_poi_poi__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_login__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_historical_historical__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_groups_page_groups_page__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_historical_form_historical_form__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_paths_list_paths_list__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_geocoding_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__utils_map_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_real_time_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_historical_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_data_management_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(83);
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
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_poi_poi__["a" /* Poi */],
            __WEBPACK_IMPORTED_MODULE_13__pages_historical_historical__["a" /* Historical */],
            __WEBPACK_IMPORTED_MODULE_14__pages_groups_page_groups_page__["a" /* GroupsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_historical_form_historical_form__["a" /* HistoricalForm */],
            __WEBPACK_IMPORTED_MODULE_16__pages_paths_list_paths_list__["a" /* PathsList */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                swipeBackEnabled: 'false'
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_historical_historical__["a" /* Historical */],
            __WEBPACK_IMPORTED_MODULE_14__pages_groups_page_groups_page__["a" /* GroupsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_historical_form_historical_form__["a" /* HistoricalForm */],
            __WEBPACK_IMPORTED_MODULE_16__pages_paths_list_paths_list__["a" /* PathsList */],
            __WEBPACK_IMPORTED_MODULE_2__pages_poi_poi__["a" /* Poi */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__providers_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_17__utils_geocoding_service__["a" /* GeocodingService */],
            __WEBPACK_IMPORTED_MODULE_18__utils_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_19__providers_real_time_service__["a" /* RealTimeService */],
            __WEBPACK_IMPORTED_MODULE_21__providers_data_management_service__["a" /* DataManagementService */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_20__providers_historical_service__["a" /* HistoricalService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DecimalPipe */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointInterest; });
/* unused harmony export GroupMinifyDto */
/* unused harmony export VehiculesMinifyDto */
/* unused harmony export GroupsVehicules */
/* unused harmony export GroupDto */
/* unused harmony export VehiculesDto */
/* unused harmony export Driver */
var PointInterest = (function () {
    function PointInterest() {
        this.ray = 100;
        this.decode = [];
    }
    return PointInterest;
}());

var GroupMinifyDto = (function () {
    function GroupMinifyDto() {
        this.idGroupe = 0;
        this.nom = "";
    }
    return GroupMinifyDto;
}());

var VehiculesMinifyDto = (function () {
    function VehiculesMinifyDto() {
        this.idVehicule = 0;
        this.matricule = "";
        this.mark = "";
    }
    return VehiculesMinifyDto;
}());

var GroupsVehicules = (function () {
    function GroupsVehicules() {
        this.vehicules = [];
        this.groups = [];
    }
    return GroupsVehicules;
}());

var GroupDto = (function () {
    function GroupDto() {
        this.vehicules = [];
    }
    return GroupDto;
}());

var VehiculesDto = (function () {
    function VehiculesDto() {
    }
    return VehiculesDto;
}());

var Driver = (function () {
    function Driver() {
    }
    return Driver;
}());

//# sourceMappingURL=data-management.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_historical_historical__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(83);
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
    function MyApp(platform, statusBar, storage, splashScreen, toastCtrl) {
        var _this = this;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
            _this.checkPreviousAuthorization();
            statusBar.styleDefault();
            splashScreen.hide();
            statusBar.backgroundColorByHexString('#c42e36');
        });
    }
    MyApp.prototype.myHandlerFunction = function () {
        navigator['app'].exitApp();
    };
    MyApp.prototype.checkPreviousAuthorization = function () {
        if ((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
            (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_historical_historical__["a" /* Historical */];
        }
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return imagesDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return nominatim_dns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return time_difference; });
//export var dns: string = "http://79.137.75.178:8080/ws_rimtrack_all_dev/";
//export var dns: string = "http://localhost:8080/rimtrack-all-v2/";
var dns = "http://37.187.171.84:8080/ws_rimtrack_all/";
var imagesDir = "http://37.187.171.84/images/";
var nominatim_dns = "http://37.187.171.84/nominatim";
var time_difference = -3600000;
//# sourceMappingURL=global.config.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTimeRecord; });
/* unused harmony export Group */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Vehicule; });
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

//# sourceMappingURL=real-time.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(33);
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
    }
    DataManagementService.prototype.inverseGeoconding = function (latitude, longitude, zoom) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["c" /* nominatim_dns */] + '/reverse.php?format=json&lat=' + latitude + '&lon=' + longitude + '&zoom=' + zoom + '&accept-language=fr&addressdetails=1').map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.getAllPointInterests = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'pointInterests', { headers: headers }).map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.addPointInterest = function (pointInterest) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'pointInterests', pointInterest, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.getAllGroups = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(33);
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
    }
    HistoricalService.prototype.getAllGroups = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/minify', { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getAllPaths = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'paths/' + deviceId, dateInterval, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getCurrentPath = function (deviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'paths/currentPath/' + deviceId, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getPathDetails = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
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

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTimeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_headers__ = __webpack_require__(242);
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
    function RealTimeService(_http) {
        this._http = _http;
    }
    RealTimeService.prototype.getRealTimeRecord = function (deviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'realTimeRecords/' + deviceId, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getAllPois = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'pointInterests/dtos', { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getAllRealTimeRecords = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'realTimeRecords', { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getAllGroups = function (keyword) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/details?keyword=' + keyword, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getCurrentPath = function (deviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'paths/currentPath/' + deviceId, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.startEngine = function (idBoitier) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_headers__["b" /* createAuthorizationHeader */])(headers);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'engine/start/' + idBoitier, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.stopEngine = function (idBoitier) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_headers__["b" /* createAuthorizationHeader */])(headers);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'engine/stop/' + idBoitier, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    return RealTimeService;
}());
RealTimeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], RealTimeService);

//# sourceMappingURL=real-time.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_config__ = __webpack_require__(33);
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

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_config__ = __webpack_require__(33);
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
            /*
            RimTelecom: L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
                }),
   
            googlestreet: L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                id:'Google Streets',
                maxZoom: 20,
                maxNativeZoom:17,
                sub/*domains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),*/
            googlehybride: L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }) /*
            googleSat: L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            'Google Terrain': L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            /*
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
            })*/
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

/***/ })

},[267]);
//# sourceMappingURL=main.js.map