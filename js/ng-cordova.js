/*!
 * ngCordova
 * v0.1.17-alpha
 * Copyright 2014 Drifty Co. http://drifty.com/
 * See LICENSE in this repository for license information
 */
! function() {
    angular.module("ngCordova", ["ngCordova.plugins"]), angular.module("ngCordova.plugins.actionSheet", []).factory("$cordovaActionSheet", ["$q", "$window", function(e, n) {
        return {
            show: function(r) {
                var t = e.defer();
                return n.plugins.actionsheet.show(r, function(e) {
                    t.resolve(e)
                }), t.promise
            },
            hide: function() {
                return n.plugins.actionsheet.hide()
            }
        }
    }]), angular.module("ngCordova.plugins.adMob", []).factory("$cordovaAdMob", ["$q", "$window", function(e, n) {
        return {
            createBannerView: function(r) {
                var t = e.defer();
                return n.plugins.AdMob.createBannerView(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            createInterstitialView: function(r) {
                var t = e.defer();
                return n.plugins.AdMob.createInterstitialView(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            requestAd: function(r) {
                var t = e.defer();
                return n.plugins.AdMob.requestAd(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showAd: function(r) {
                var t = e.defer();
                return n.plugins.AdMob.showAd(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            requestInterstitialAd: function(r) {
                var t = e.defer();
                return n.plugins.AdMob.requestInterstitialAd(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.appAvailability", []).factory("$cordovaAppAvailability", ["$q", function(e) {
        return {
            check: function(n) {
                var r = e.defer();
                return appAvailability.check(n, function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.appRate", []).provider("$cordovaAppRate", [function() {
        this.setPreferences = function(e) {
            e && angular.isObject(e) && (AppRate.preferences.useLanguage = e.language || null, AppRate.preferences.displayAppName = e.appName || "", AppRate.preferences.promptAgainForEachNewVersion = e.promptForNewVersion || !0, AppRate.preferences.openStoreInApp = e.openStoreInApp || !1, AppRate.preferences.usesUntilPrompt = e.usesUntilPrompt || 3, AppRate.preferences.useCustomRateDialog = e.useCustomRateDialog || !1, AppRate.preferences.storeAppURL.ios = e.iosURL || null, AppRate.preferences.storeAppURL.android = e.androidURL || null, AppRate.preferences.storeAppURL.blackberry = e.blackberryURL || null, AppRate.preferences.storeAppURL.windows8 = e.windowsURL || null)
        }, this.setCustomLocale = function(e) {
            var n = {
                title: "Rate %@",
                message: "If you enjoy using %@, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!",
                cancelButtonLabel: "No, Thanks",
                laterButtonLabel: "Remind Me Later",
                rateButtonLabel: "Rate It Now"
            };
            n = angular.extend(n, e), AppRate.preferences.customLocale = n
        }, this.$get = ["$q", function(e) {
            return {
                promptForRating: function(n) {
                    var r = e.defer(),
                        t = AppRate.promptForRating(n);
                    return r.resolve(t), r.promise
                },
                navigateToAppStore: function() {
                    var n = e.defer(),
                        r = AppRate.navigateToAppStore();
                    return n.resolve(r), n.promise
                },
                onButtonClicked: function(e) {
                    AppRate.onButtonClicked = function(n) {
                        e.call(this, n)
                    }
                },
                onRateDialogShow: function(e) {
                    AppRate.onRateDialogShow = e()
                }
            }
        }]
    }]), angular.module("ngCordova.plugins.appVersion", []).factory("$cordovaAppVersion", ["$q", function(e) {
        return {
            getAppVersion: function() {
                var n = e.defer();
                return cordova.getAppVersion(function(e) {
                    n.resolve(e)
                }), n.promise
            }
        }
    }]), angular.module("ngCordova.plugins.backgroundGeolocation", []).factory("$cordovaBackgroundGeolocation", ["$q", "$window", function(e, n) {
        return {
            init: function() {
                n.navigator.geolocation.getCurrentPosition(function(e) {
                    return e
                })
            },
            configure: function(r) {
                this.init();
                var t = e.defer();
                return n.plugins.backgroundGeoLocation.configure(function(e) {
                    t.notify(e), n.plugins.backgroundGeoLocation.finish()
                }, function(e) {
                    t.reject(e)
                }, r), this.start(), t.promise
            },
            start: function() {
                var r = e.defer();
                return n.plugins.backgroundGeoLocation.start(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            stop: function() {
                var r = e.defer();
                return n.plugins.backgroundGeoLocation.stop(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.badge", []).factory("$cordovaBadge", ["$q", function(e) {
        return {
            hasPermission: function() {
                var n = e.defer();
                return cordova.plugins.notification.badge.hasPermission(function(e) {
                    e ? n.resolve(!0) : n.reject("You do not have permission")
                }), n.promise
            },
            promptForPermission: function() {
                return cordova.plugins.notification.badge.promptForPermission()
            },
            set: function(n) {
                var r = e.defer();
                return cordova.plugins.notification.badge.hasPermission(function(e) {
                    e ? r.resolve(cordova.plugins.notification.badge.set(n)) : r.reject("You do not have permission to set Badge")
                }), r.promise
            },
            get: function() {
                var n = e.defer();
                return cordova.plugins.notification.badge.hasPermission(function(e) {
                    e ? cordova.plugins.notification.badge.get(function(e) {
                        n.resolve(e)
                    }) : n.reject("You do not have permission to get Badge")
                }), n.promise
            },
            clear: function() {
                var n = e.defer();
                return cordova.plugins.notification.badge.hasPermission(function(e) {
                    e ? n.resolve(cordova.plugins.notification.badge.clear()) : n.reject("You do not have permission to clear Badge")
                }), n.promise
            },
            configure: function(e) {
                return cordova.plugins.notification.badge.configure(e)
            }
        }
    }]), angular.module("ngCordova.plugins.barcodeScanner", []).factory("$cordovaBarcodeScanner", ["$q", function(e) {
        return {
            scan: function(n) {
                var r = e.defer();
                return cordova.plugins.barcodeScanner.scan(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }, n), r.promise
            },
            encode: function(n, r) {
                var t = e.defer();
                return n = n || "TEXT_TYPE", cordova.plugins.barcodeScanner.encode(n, r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.batteryStatus", []).factory("$cordovaBatteryStatus", ["$rootScope", "$window", "$timeout", function(e, n, r) {
        var t = function(n) {
                r(function() {
                    e.$broadcast("$cordovaBatteryStatus:status", n)
                })
            },
            o = function(n) {
                r(function() {
                    e.$broadcast("$cordovaBatteryStatus:critical", n)
                })
            },
            i = function(n) {
                r(function() {
                    e.$broadcast("$cordovaBatteryStatus:low", n)
                })
            };
        return document.addEventListener("deviceready", function() {
            navigator.battery && (n.addEventListener("batterystatus", t, !1), n.addEventListener("batterycritical", o, !1), n.addEventListener("batterylow", i, !1))
        }, !1), !0
    }]).run(["$cordovaBatteryStatus", function(e) {}]), angular.module("ngCordova.plugins.ble", []).factory("$cordovaBLE", ["$q", function(e) {
        return {
            scan: function(n, r) {
                var t = e.defer();
                return ble.scan(n, r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            connect: function(n) {
                var r = e.defer();
                return ble.connect(n, function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            disconnect: function(n) {
                var r = e.defer();
                return ble.disconnect(n, function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            read: function(n, r, t) {
                var o = e.defer();
                return ble.read(n, r, t, function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            },
            write: function(n, r, t, o) {
                var i = e.defer();
                return ble.write(n, r, t, o, function(e) {
                    i.resolve(e)
                }, function(e) {
                    i.reject(e)
                }), i.promise
            },
            writeCommand: function(n, r, t, o) {
                var i = e.defer();
                return ble.writeCommand(n, r, t, o, function(e) {
                    i.resolve(e)
                }, function(e) {
                    i.reject(e)
                }), i.promise
            },
            startNotification: function(n, r, t) {
                var o = e.defer();
                return ble.startNotification(n, r, t, function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            },
            stopNotification: function(n, r, t) {
                var o = e.defer();
                return ble.stopNotification(n, r, t, function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            },
            isConnected: function(n) {
                var r = e.defer();
                return ble.isConnected(n, function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            isEnabled: function() {
                var n = e.defer();
                return ble.isEnabled(function(e) {
                    n.resolve(e)
                }, function(e) {
                    n.reject(e)
                }), n.promise
            }
        }
    }]), angular.module("ngCordova.plugins.bluetoothSerial", []).factory("$cordovaBluetoothSerial", ["$q", "$window", function(e, n) {
        return {
            connect: function(r) {
                var t = e.defer();
                return n.bluetoothSerial.connect(r, function() {
                    t.resolve()
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            connectInsecure: function(r) {
                var t = e.defer();
                return n.bluetoothSerial.connectInsecure(r, function() {
                    t.resolve()
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            disconnect: function() {
                var r = e.defer();
                return n.bluetoothSerial.disconnect(function() {
                    r.resolve()
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            list: function() {
                var r = e.defer();
                return n.bluetoothSerial.list(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            discoverUnpaired: function() {
                var r = e.defer();
                return n.bluetoothSerial.discoverUnpaired(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            setDeviceDiscoveredListener: function() {
                var r = e.defer();
                return n.bluetoothSerial.setDeviceDiscoveredListener(function(e) {
                    r.notify(e)
                }), r.promise
            },
            clearDeviceDiscoveredListener: function() {
                n.bluetoothSerial.clearDeviceDiscoveredListener()
            },
            showBluetoothSettings: function() {
                var r = e.defer();
                return n.bluetoothSerial.showBluetoothSettings(function() {
                    r.resolve()
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            isEnabled: function() {
                var r = e.defer();
                return n.bluetoothSerial.isEnabled(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            enable: function() {
                var r = e.defer();
                return n.bluetoothSerial.enable(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            isConnected: function() {
                var r = e.defer();
                return n.bluetoothSerial.isConnected(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            available: function() {
                var r = e.defer();
                return n.bluetoothSerial.available(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            read: function() {
                var r = e.defer();
                return n.bluetoothSerial.read(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            readUntil: function(r) {
                var t = e.defer();
                return n.bluetoothSerial.readUntil(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            write: function(r) {
                var t = e.defer();
                return n.bluetoothSerial.write(r, function() {
                    t.resolve()
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            subscribe: function(r) {
                var t = e.defer();
                return n.bluetoothSerial.subscribe(r, function(e) {
                    t.notify(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            subscribeRawData: function() {
                var r = e.defer();
                return n.bluetoothSerial.subscribeRawData(function(e) {
                    r.notify(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            unsubscribe: function() {
                var r = e.defer();
                return n.bluetoothSerial.unsubscribe(function() {
                    r.resolve()
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            unsubscribeRawData: function() {
                var r = e.defer();
                return n.bluetoothSerial.unsubscribeRawData(function() {
                    r.resolve()
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            clear: function() {
                var r = e.defer();
                return n.bluetoothSerial.clear(function() {
                    r.resolve()
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            readRSSI: function() {
                var r = e.defer();
                return n.bluetoothSerial.readRSSI(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.brightness", []).factory("$cordovaBrightness", ["$q", "$window", function(e, n) {
        return {
            get: function() {
                var r = e.defer();
                return n.cordova.plugins.brightness.getBrightness(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            set: function(r) {
                var t = e.defer();
                return n.cordova.plugins.brightness.setBrightness(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            setKeepScreenOn: function(r) {
                var t = e.defer();
                return n.cordova.plugins.brightness.setKeepScreenOn(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.calendar", []).factory("$cordovaCalendar", ["$q", "$window", function(e, n) {
        return {
            createCalendar: function(r) {
                var t = e.defer(),
                    o = n.plugins.calendar.getCreateCalendarOptions();
                return "string" == typeof r ? o.calendarName = r : o = angular.extend(o, r), n.plugins.calendar.createCalendar(o, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            deleteCalendar: function(r) {
                var t = e.defer();
                return n.plugins.calendar.deleteCalendar(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            createEvent: function(r) {
                var t = e.defer(),
                    o = {
                        title: null,
                        location: null,
                        notes: null,
                        startDate: null,
                        endDate: null
                    };
                return o = angular.extend(o, r), n.plugins.calendar.createEvent(o.title, o.location, o.notes, new Date(o.startDate), new Date(o.endDate), function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            createEventWithOptions: function(r) {
                var t = e.defer(),
                    o = [],
                    i = window.plugins.calendar.getCalendarOptions(),
                    a = {
                        title: null,
                        location: null,
                        notes: null,
                        startDate: null,
                        endDate: null
                    };
                o = Object.keys(a);
                for (var c in r) - 1 === o.indexOf(c) ? i[c] = r[c] : a[c] = r[c];
                return n.plugins.calendar.createEventWithOptions(a.title, a.location, a.notes, new Date(a.startDate), new Date(a.endDate), i, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            createEventInteractively: function(r) {
                var t = e.defer(),
                    o = {
                        title: null,
                        location: null,
                        notes: null,
                        startDate: null,
                        endDate: null
                    };
                return o = angular.extend(o, r), n.plugins.calendar.createEventInteractively(o.title, o.location, o.notes, new Date(o.startDate), new Date(o.endDate), function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            createEventInNamedCalendar: function(r) {
                var t = e.defer(),
                    o = {
                        title: null,
                        location: null,
                        notes: null,
                        startDate: null,
                        endDate: null,
                        calendarName: null
                    };
                return o = angular.extend(o, r), n.plugins.calendar.createEventInNamedCalendar(o.title, o.location, o.notes, new Date(o.startDate), new Date(o.endDate), o.calendarName, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            findEvent: function(r) {
                var t = e.defer(),
                    o = {
                        title: null,
                        location: null,
                        notes: null,
                        startDate: null,
                        endDate: null
                    };
                return o = angular.extend(o, r), n.plugins.calendar.findEvent(o.title, o.location, o.notes, new Date(o.startDate), new Date(o.endDate), function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            listEventsInRange: function(r, t) {
                var o = e.defer();
                return n.plugins.calendar.listEventsInRange(r, t, function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            },
            listCalendars: function() {
                var r = e.defer();
                return n.plugins.calendar.listCalendars(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            findAllEventsInNamedCalendar: function(r) {
                var t = e.defer();
                return n.plugins.calendar.findAllEventsInNamedCalendar(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            modifyEvent: function(r) {
                var t = e.defer(),
                    o = {
                        title: null,
                        location: null,
                        notes: null,
                        startDate: null,
                        endDate: null,
                        newTitle: null,
                        newLocation: null,
                        newNotes: null,
                        newStartDate: null,
                        newEndDate: null
                    };
                return o = angular.extend(o, r), n.plugins.calendar.modifyEvent(o.title, o.location, o.notes, new Date(o.startDate), new Date(o.endDate), o.newTitle, o.newLocation, o.newNotes, new Date(o.newStartDate), new Date(o.newEndDate), function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            deleteEvent: function(r) {
                var t = e.defer(),
                    o = {
                        newTitle: null,
                        location: null,
                        notes: null,
                        startDate: null,
                        endDate: null
                    };
                return o = angular.extend(o, r), n.plugins.calendar.deleteEvent(o.newTitle, o.location, o.notes, new Date(o.startDate), new Date(o.endDate), function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.camera", []).factory("$cordovaCamera", ["$q", function(e) {
        return {
            getPicture: function(n) {
                var r = e.defer();
                return navigator.camera ? (navigator.camera.getPicture(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }, n), r.promise) : (r.resolve(null), r.promise)
            },
            cleanup: function() {
                var n = e.defer();
                return navigator.camera.cleanup(function() {
                    n.resolve()
                }, function(e) {
                    n.reject(e)
                }), n.promise
            }
        }
    }]), angular.module("ngCordova.plugins.capture", []).factory("$cordovaCapture", ["$q", function(e) {
        return {
            captureAudio: function(n) {
                var r = e.defer();
                return navigator.device.capture ? (navigator.device.capture.captureAudio(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }, n), r.promise) : (r.resolve(null), r.promise)
            },
            captureImage: function(n) {
                var r = e.defer();
                return navigator.device.capture ? (navigator.device.capture.captureImage(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }, n), r.promise) : (r.resolve(null), r.promise)
            },
            captureVideo: function(n) {
                var r = e.defer();
                return navigator.device.capture ? (navigator.device.capture.captureVideo(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }, n), r.promise) : (r.resolve(null), r.promise)
            }
        }
    }]), angular.module("ngCordova.plugins.clipboard", []).factory("$cordovaClipboard", ["$q", "$window", function(e, n) {
        return {
            copy: function(r) {
                var t = e.defer();
                return n.cordova.plugins.clipboard.copy(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            paste: function() {
                var r = e.defer();
                return n.cordova.plugins.clipboard.paste(function(e) {
                    r.resolve(e)
                }, function() {
                    r.reject()
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.contacts", []).factory("$cordovaContacts", ["$q", function(e) {
        return {
            save: function(n) {
                var r = e.defer(),
                    t = navigator.contacts.create(n);
                return t.save(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            remove: function(n) {
                var r = e.defer(),
                    t = navigator.contacts.create(n);
                return t.remove(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            clone: function(e) {
                var n = navigator.contacts.create(e);
                return n.clone(e)
            },
            find: function(n) {
                var r = e.defer(),
                    t = n.fields || ["id", "displayName"];
                return delete n.fields, navigator.contacts.find(t, function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }, n), r.promise
            },
            pickContact: function() {
                var n = e.defer();
                return navigator.contacts.pickContact(function(e) {
                    n.resolve(e)
                }, function(e) {
                    n.reject(e)
                }), n.promise
            }
        }
    }]), angular.module("ngCordova.plugins.datePicker", []).factory("$cordovaDatePicker", ["$window", "$q", function(e, n) {
        return {
            show: function(r) {
                var t = n.defer();
                return r = r || {
                    date: new Date,
                    mode: "date"
                }, e.datePicker.show(r, function(e) {
                    t.resolve(e)
                }), t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.device", []).factory("$cordovaDevice", [function() {
        return {
            getDevice: function() {
                return device
            },
            getCordova: function() {
                return device.cordova
            },
            getModel: function() {
                return device.model
            },
            getName: function() {
                return device.name
            },
            getPlatform: function() {
                return device.platform
            },
            getUUID: function() {
                return device.uuid
            },
            getVersion: function() {
                return device.version
            }
        }
    }]), angular.module("ngCordova.plugins.deviceMotion", []).factory("$cordovaDeviceMotion", ["$q", function(e) {
        return {
            getCurrentAcceleration: function() {
                var n = e.defer();
                return navigator.accelerometer.getCurrentAcceleration(function(e) {
                    n.resolve(e)
                }, function(e) {
                    n.reject(e)
                }), n.promise
            },
            watchAcceleration: function(n) {
                var r = e.defer(),
                    t = navigator.accelerometer.watchAcceleration(function(e) {
                        r.notify(e)
                    }, function(e) {
                        r.reject(e)
                    }, n);
                return r.promise.cancel = function() {
                    navigator.accelerometer.clearWatch(t)
                }, r.promise.clearWatch = function(e) {
                    navigator.accelerometer.clearWatch(e || t)
                }, r.promise.watchID = t, r.promise
            },
            clearWatch: function(e) {
                return navigator.accelerometer.clearWatch(e)
            }
        }
    }]), angular.module("ngCordova.plugins.deviceOrientation", []).factory("$cordovaDeviceOrientation", ["$q", function(e) {
        var n = {
            frequency: 3e3
        };
        return {
            getCurrentHeading: function() {
                var n = e.defer();
                return navigator.compass.getCurrentHeading(function(e) {
                    n.resolve(e)
                }, function(e) {
                    n.reject(e)
                }), n.promise
            },
            watchHeading: function(r) {
                var t = e.defer(),
                    o = angular.extend(n, r),
                    i = navigator.compass.watchHeading(function(e) {
                        t.notify(e)
                    }, function(e) {
                        t.reject(e)
                    }, o);
                return t.promise.cancel = function() {
                    navigator.compass.clearWatch(i)
                }, t.promise.clearWatch = function(e) {
                    navigator.compass.clearWatch(e || i)
                }, t.promise.watchID = i, t.promise
            },
            clearWatch: function(e) {
                return navigator.compass.clearWatch(e)
            }
        }
    }]), angular.module("ngCordova.plugins.dialogs", []).factory("$cordovaDialogs", ["$q", "$window", function(e, n) {
        return {
            alert: function(r, t, o) {
                var i = e.defer();
                return n.navigator.notification ? navigator.notification.alert(r, function() {
                    i.resolve()
                }, t, o) : (n.alert(r), i.resolve()), i.promise
            },
            confirm: function(r, t, o) {
                var i = e.defer();
                return n.navigator.notification ? navigator.notification.confirm(r, function(e) {
                    i.resolve(e)
                }, t, o) : n.confirm(r) ? i.resolve(1) : i.resolve(2), i.promise
            },
            prompt: function(r, t, o, i) {
                var a = e.defer();
                if (n.navigator.notification) navigator.notification.prompt(r, function(e) {
                    a.resolve(e)
                }, t, o, i);
                else {
                    var c = n.prompt(r, i);
                    null !== c ? a.resolve({
                        input1: c,
                        buttonIndex: 1
                    }) : a.resolve({
                        input1: c,
                        buttonIndex: 2
                    })
                }
                return a.promise
            },
            beep: function(e) {
                return navigator.notification.beep(e)
            }
        }
    }]), angular.module("ngCordova.plugins.emailComposer", []).factory("$cordovaEmailComposer", ["$q", function(e) {
        return {
            isAvailable: function() {
                var n = e.defer();
                return cordova.plugins.email.isAvailable(function(e) {
                    e ? n.resolve() : n.reject()
                }), n.promise
            },
            open: function(n) {
                var r = e.defer();
                return cordova.plugins.email.open(n, function() {
                    r.reject()
                }), r.promise
            },
            addAlias: function(e, n) {
                cordova.plugins.email.addAlias(e, n)
            }
        }
    }]), angular.module("ngCordova.plugins.facebook", []).provider("$cordovaFacebook", [function() {
        this.browserInit = function(e, n) {
            this.appID = e, this.appVersion = n || "v2.0", facebookConnectPlugin.browserInit(this.appID, this.appVersion)
        }, this.$get = ["$q", function(e) {
            return {
                login: function(n) {
                    var r = e.defer();
                    return facebookConnectPlugin.login(n, function(e) {
                        r.resolve(e)
                    }, function(e) {
                        r.reject(e)
                    }), r.promise
                },
                showDialog: function(n) {
                    var r = e.defer();
                    return facebookConnectPlugin.showDialog(n, function(e) {
                        r.resolve(e)
                    }, function(e) {
                        r.reject(e)
                    }), r.promise
                },
                api: function(n, r) {
                    var t = e.defer();
                    return facebookConnectPlugin.api(n, r, function(e) {
                        t.resolve(e)
                    }, function(e) {
                        t.reject(e)
                    }), t.promise
                },
                getAccessToken: function() {
                    var n = e.defer();
                    return facebookConnectPlugin.getAccessToken(function(e) {
                        n.resolve(e)
                    }, function(e) {
                        n.reject(e)
                    }), n.promise
                },
                getLoginStatus: function() {
                    var n = e.defer();
                    return facebookConnectPlugin.getLoginStatus(function(e) {
                        n.resolve(e)
                    }, function(e) {
                        n.reject(e)
                    }), n.promise
                },
                logout: function() {
                    var n = e.defer();
                    return facebookConnectPlugin.logout(function(e) {
                        n.resolve(e)
                    }, function(e) {
                        n.reject(e)
                    }), n.promise
                }
            }
        }]
    }]), angular.module("ngCordova.plugins.facebookAds", []).factory("$cordovaFacebookAds", ["$q", "$window", function(e, n) {
        return {
            setOptions: function(r) {
                var t = e.defer();
                return n.FacebookAds.setOptions(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            createBanner: function(r) {
                var t = e.defer();
                return n.FacebookAds.createBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            removeBanner: function() {
                var r = e.defer();
                return n.FacebookAds.removeBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            showBanner: function(r) {
                var t = e.defer();
                return n.FacebookAds.showBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showBannerAtXY: function(r, t) {
                var o = e.defer();
                return n.FacebookAds.showBannerAtXY(r, t, function() {
                    o.resolve()
                }, function() {
                    o.reject()
                }), o.promise
            },
            hideBanner: function() {
                var r = e.defer();
                return n.FacebookAds.hideBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            prepareInterstitial: function(r) {
                var t = e.defer();
                return n.FacebookAds.prepareInterstitial(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showInterstitial: function() {
                var r = e.defer();
                return n.FacebookAds.showInterstitial(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.file", []).constant("$cordovaFileError", {
        1: "NOT_FOUND_ERR",
        2: "SECURITY_ERR",
        3: "ABORT_ERR",
        4: "NOT_READABLE_ERR",
        5: "ENCODING_ERR",
        6: "NO_MODIFICATION_ALLOWED_ERR",
        7: "INVALID_STATE_ERR",
        8: "SYNTAX_ERR",
        9: "INVALID_MODIFICATION_ERR",
        10: "QUOTA_EXCEEDED_ERR",
        11: "TYPE_MISMATCH_ERR",
        12: "PATH_EXISTS_ERR"
    }).provider("$cordovaFile", [function() {
        this.$get = ["$q", "$window", "$cordovaFileError", function(e, n, r) {
            return {
                getFreeDiskSpace: function() {
                    var n = e.defer();
                    return cordova.exec(function(e) {
                        n.resolve(e)
                    }, function(e) {
                        n.reject(e)
                    }, "File", "getFreeDiskSpace", []), n.promise
                },
                checkDir: function(t, o) {
                    var i = e.defer();
                    /^\//.test(o) && i.reject("directory cannot start with /");
                    try {
                        var a = t + o;
                        n.resolveLocalFileSystemURL(a, function(e) {
                            e.isDirectory === !0 ? i.resolve(e) : i.reject({
                                code: 13,
                                message: "input is not a directory"
                            })
                        }, function(e) {
                            e.message = r[e.code], i.reject(e)
                        })
                    } catch (c) {
                        c.message = r[c.code], i.reject(c)
                    }
                    return i.promise
                },
                checkFile: function(t, o) {
                    var i = e.defer();
                    /^\//.test(o) && i.reject("directory cannot start with /");
                    try {
                        var a = t + o;
                        n.resolveLocalFileSystemURL(a, function(e) {
                            e.isFile === !0 ? i.resolve(e) : i.reject({
                                code: 13,
                                message: "input is not a file"
                            })
                        }, function(e) {
                            e.message = r[e.code], i.reject(e)
                        })
                    } catch (c) {
                        c.message = r[c.code], i.reject(c)
                    }
                    return i.promise
                },
                createDir: function(t, o, i) {
                    var a = e.defer();
                    /^\//.test(o) && a.reject("directory cannot start with /"), i = i ? !1 : !0;
                    var c = {
                        create: !0,
                        exclusive: i
                    };
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getDirectory(o, c, function(e) {
                                a.resolve(e)
                            }, function(e) {
                                e.message = r[e.code], a.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], a.reject(e)
                        })
                    } catch (s) {
                        s.message = r[s.code], a.reject(s)
                    }
                    return a.promise
                },
                createFile: function(t, o, i) {
                    var a = e.defer();
                    /^\//.test(o) && a.reject("file-name cannot start with /"), i = i ? !1 : !0;
                    var c = {
                        create: !0,
                        exclusive: i
                    };
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getFile(o, c, function(e) {
                                a.resolve(e)
                            }, function(e) {
                                e.message = r[e.code], a.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], a.reject(e)
                        })
                    } catch (s) {
                        s.message = r[s.code], a.reject(s)
                    }
                    return a.promise
                },
                removeDir: function(t, o) {
                    var i = e.defer();
                    /^\//.test(o) && i.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getDirectory(o, {
                                create: !1
                            }, function(e) {
                                e.remove(function() {
                                    i.resolve({
                                        success: !0,
                                        fileRemoved: e
                                    })
                                }, function(e) {
                                    e.message = r[e.code], i.reject(e)
                                })
                            }, function(e) {
                                e.message = r[e.code], i.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], i.reject(e)
                        })
                    } catch (a) {
                        a.message = r[a.code], i.reject(a)
                    }
                    return i.promise
                },
                removeFile: function(t, o) {
                    var i = e.defer();
                    /^\//.test(o) && i.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getFile(o, {
                                create: !1
                            }, function(e) {
                                e.remove(function() {
                                    i.resolve({
                                        success: !0,
                                        fileRemoved: e
                                    })
                                }, function(e) {
                                    e.message = r[e.code], i.reject(e)
                                })
                            }, function(e) {
                                e.message = r[e.code], i.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], i.reject(e)
                        })
                    } catch (a) {
                        a.message = r[a.code], i.reject(a)
                    }
                    return i.promise
                },
                removeRecursively: function(t, o) {
                    var i = e.defer();
                    /^\//.test(o) && i.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getDirectory(o, {
                                create: !1
                            }, function(e) {
                                e.removeRecursively(function() {
                                    i.resolve({
                                        success: !0,
                                        fileRemoved: e
                                    })
                                }, function(e) {
                                    e.message = r[e.code], i.reject(e)
                                })
                            }, function(e) {
                                e.message = r[e.code], i.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], i.reject(e)
                        })
                    } catch (a) {
                        a.message = r[a.code], i.reject(a)
                    }
                    return i.promise
                },
                writeFile: function(t, o, i, a) {
                    var c = e.defer();
                    /^\//.test(o) && c.reject("file-name cannot start with /"), a = a ? !1 : !0;
                    var s = {
                        create: !0,
                        exclusive: a
                    };
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getFile(o, s, function(e) {
                                e.createWriter(function(e) {
                                    s.append === !0 && e.seek(e.length), s.truncate && e.truncate(s.truncate), e.onwriteend = function(e) {
                                        this.error ? c.reject(this.error) : c.resolve(e)
                                    }, e.write(i), c.promise.abort = function() {
                                        e.abort()
                                    }
                                })
                            }, function(e) {
                                e.message = r[e.code], c.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], c.reject(e)
                        })
                    } catch (u) {
                        u.message = r[u.code], c.reject(u)
                    }
                    return c.promise
                },
                writeExistingFile: function(t, o, i) {
                    var a = e.defer();
                    /^\//.test(o) && a.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getFile(o, {
                                create: !1
                            }, function(e) {
                                e.createWriter(function(e) {
                                    e.seek(e.length), e.onwriteend = function(e) {
                                        this.error ? a.reject(this.error) : a.resolve(e)
                                    }, e.write(i), a.promise.abort = function() {
                                        e.abort()
                                    }
                                })
                            }, function(e) {
                                e.message = r[e.code], a.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], a.reject(e)
                        })
                    } catch (c) {
                        c.message = r[c.code], a.reject(c)
                    }
                    return a.promise
                },
                readAsText: function(t, o) {
                    var i = e.defer();
                    /^\//.test(o) && i.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getFile(o, {
                                create: !1
                            }, function(e) {
                                e.file(function(e) {
                                    var n = new FileReader;
                                    n.onloadend = function(e) {
                                        void 0 !== e.target.result || null !== e.target.result ? i.resolve(e.target.result) : void 0 !== e.target.error || null !== e.target.error ? i.reject(e.target.error) : i.reject({
                                            code: null,
                                            message: "READER_ONLOADEND_ERR"
                                        })
                                    }, n.readAsText(e)
                                })
                            }, function(e) {
                                e.message = r[e.code], i.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], i.reject(e)
                        })
                    } catch (a) {
                        a.message = r[a.code], i.reject(a)
                    }
                    return i.promise
                },
                readAsDataURL: function(t, o) {
                    var i = e.defer();
                    /^\//.test(o) && i.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getFile(o, {
                                create: !1
                            }, function(e) {
                                e.file(function(e) {
                                    var n = new FileReader;
                                    n.onloadend = function(e) {
                                        void 0 !== e.target.result || null !== e.target.result ? i.resolve(e.target.result) : void 0 !== e.target.error || null !== e.target.error ? i.reject(e.target.error) : i.reject({
                                            code: null,
                                            message: "READER_ONLOADEND_ERR"
                                        })
                                    }, n.readAsDataURL(e)
                                })
                            }, function(e) {
                                e.message = r[e.code], i.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], i.reject(e)
                        })
                    } catch (a) {
                        a.message = r[a.code], i.reject(a)
                    }
                    return i.promise
                },
                readAsBinaryString: function(t, o) {
                    var i = e.defer();
                    /^\//.test(o) && i.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getFile(o, {
                                create: !1
                            }, function(e) {
                                e.file(function(e) {
                                    var n = new FileReader;
                                    n.onloadend = function(e) {
                                        void 0 !== e.target.result || null !== e.target.result ? i.resolve(e.target.result) : void 0 !== e.target.error || null !== e.target.error ? i.reject(e.target.error) : i.reject({
                                            code: null,
                                            message: "READER_ONLOADEND_ERR"
                                        })
                                    }, n.readAsBinaryString(e)
                                })
                            }, function(e) {
                                e.message = r[e.code], i.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], i.reject(e)
                        })
                    } catch (a) {
                        a.message = r[a.code], i.reject(a)
                    }
                    return i.promise
                },
                readAsArrayBuffer: function(t, o) {
                    var i = e.defer();
                    /^\//.test(o) && i.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getFile(o, {
                                create: !1
                            }, function(e) {
                                e.file(function(e) {
                                    var n = new FileReader;
                                    n.onloadend = function(e) {
                                        void 0 !== e.target.result || null !== e.target.result ? i.resolve(e.target.result) : void 0 !== e.target.error || null !== e.target.error ? i.reject(e.target.error) : i.reject({
                                            code: null,
                                            message: "READER_ONLOADEND_ERR"
                                        })
                                    }, n.readAsArrayBuffer(e)
                                })
                            }, function(e) {
                                e.message = r[e.code], i.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], i.reject(e)
                        })
                    } catch (a) {
                        a.message = r[a.code], i.reject(a)
                    }
                    return i.promise
                },
                moveFile: function(r, t, o, i) {
                    var a = e.defer();
                    i = i || t, (/^\//.test(t) || /^\//.test(i)) && a.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(r, function(e) {
                            e.getFile(t, {
                                create: !1
                            }, function(e) {
                                n.resolveLocalFileSystemURL(o, function(n) {
                                    e.moveTo(n, i, function(e) {
                                        a.resolve(e)
                                    }, function(e) {
                                        a.reject(e)
                                    })
                                }, function(e) {
                                    a.reject(e)
                                })
                            }, function(e) {
                                a.reject(e)
                            })
                        }, function(e) {
                            a.reject(e)
                        })
                    } catch (c) {
                        a.reject(c)
                    }
                    return a.promise
                },
                moveDir: function(r, t, o, i) {
                    var a = e.defer();
                    i = i || t, (/^\//.test(t) || /^\//.test(i)) && a.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(r, function(e) {
                            e.getDirectory(t, {
                                create: !1
                            }, function(e) {
                                n.resolveLocalFileSystemURL(o, function(n) {
                                    e.moveTo(n, i, function(e) {
                                        a.resolve(e)
                                    }, function(e) {
                                        a.reject(e)
                                    })
                                }, function(e) {
                                    a.reject(e)
                                })
                            }, function(e) {
                                a.reject(e)
                            })
                        }, function(e) {
                            a.reject(e)
                        })
                    } catch (c) {
                        a.reject(c)
                    }
                    return a.promise
                },
                copyDir: function(t, o, i, a) {
                    var c = e.defer();
                    a = a || o, (/^\//.test(o) || /^\//.test(a)) && c.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getDirectory(o, {
                                create: !1,
                                exclusive: !1
                            }, function(e) {
                                n.resolveLocalFileSystemURL(i, function(n) {
                                    e.copyTo(n, a, function(e) {
                                        c.resolve(e)
                                    }, function(e) {
                                        e.message = r[e.code], c.reject(e)
                                    })
                                }, function(e) {
                                    e.message = r[e.code], c.reject(e)
                                })
                            }, function(e) {
                                e.message = r[e.code], c.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], c.reject(e)
                        })
                    } catch (s) {
                        s.message = r[s.code], c.reject(s)
                    }
                    return c.promise
                },
                copyFile: function(t, o, i, a) {
                    var c = e.defer();
                    a = a || o, /^\//.test(o) && c.reject("file-name cannot start with /");
                    try {
                        n.resolveLocalFileSystemURL(t, function(e) {
                            e.getFile(o, {
                                create: !1,
                                exclusive: !1
                            }, function(e) {
                                n.resolveLocalFileSystemURL(i, function(n) {
                                    e.copyTo(n, a, function(e) {
                                        c.resolve(e)
                                    }, function(e) {
                                        e.message = r[e.code], c.reject(e)
                                    })
                                }, function(e) {
                                    e.message = r[e.code], c.reject(e)
                                })
                            }, function(e) {
                                e.message = r[e.code], c.reject(e)
                            })
                        }, function(e) {
                            e.message = r[e.code], c.reject(e)
                        })
                    } catch (s) {
                        s.message = r[s.code], c.reject(s)
                    }
                    return c.promise
                }
            }
        }]
    }]), angular.module("ngCordova.plugins.fileOpener2", []).factory("$cordovaFileOpener2", ["$q", function(e) {
        return {
            open: function(n, r) {
                var t = e.defer();
                return cordova.plugins.fileOpener2.open(n, r, {
                    error: function(e) {
                        t.reject(e)
                    },
                    success: function() {
                        t.resolve()
                    }
                }), t.promise
            },
            uninstall: function(n) {
                var r = e.defer();
                return cordova.plugins.fileOpener2.uninstall(n, {
                    error: function(e) {
                        r.reject(e)
                    },
                    success: function() {
                        r.resolve()
                    }
                }), r.promise
            },
            appIsInstalled: function(n) {
                var r = e.defer();
                return cordova.plugins.fileOpener2.appIsInstalled(n, {
                    success: function(e) {
                        r.resolve(e)
                    }
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.fileTransfer", []).factory("$cordovaFileTransfer", ["$q", "$timeout", function(e, n) {
        return {
            download: function(r, t, o, i) {
                var a = e.defer(),
                    c = new FileTransfer,
                    s = o && o.encodeURI === !1 ? r : encodeURI(r);
                return o && void 0 !== o.timeout && null !== o.timeout && (n(function() {
                        c.abort()
                    }, o.timeout), o.timeout = null),
                    c.onprogress = function(e) {
                        a.notify(e)
                    }, a.promise.abort = function() {
                        c.abort()
                    }, c.download(s, t, a.resolve, a.reject, i, o), a.promise
            },
            upload: function(r, t, o, i) {
                var a = e.defer(),
                    c = new FileTransfer,
                    s = o && o.encodeURI === !1 ? r : encodeURI(r);
                return o && void 0 !== o.timeout && null !== o.timeout && (n(function() {
                    c.abort()
                }, o.timeout), o.timeout = null), c.onprogress = function(e) {
                    a.notify(e)
                }, a.promise.abort = function() {
                    c.abort()
                }, c.upload(t, s, a.resolve, a.reject, o, i), a.promise
            }
        }
    }]), angular.module("ngCordova.plugins.flashlight", []).factory("$cordovaFlashlight", ["$q", "$window", function(e, n) {
        return {
            available: function() {
                var r = e.defer();
                return n.plugins.flashlight.available(function(e) {
                    r.resolve(e)
                }), r.promise
            },
            switchOn: function() {
                var r = e.defer();
                return n.plugins.flashlight.switchOn(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            switchOff: function() {
                var r = e.defer();
                return n.plugins.flashlight.switchOff(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            toggle: function() {
                var r = e.defer();
                return n.plugins.flashlight.toggle(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.flurryAds", []).factory("$cordovaFlurryAds", ["$q", "$window", function(e, n) {
        return {
            setOptions: function(r) {
                var t = e.defer();
                return n.FlurryAds.setOptions(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            createBanner: function(r) {
                var t = e.defer();
                return n.FlurryAds.createBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            removeBanner: function() {
                var r = e.defer();
                return n.FlurryAds.removeBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            showBanner: function(r) {
                var t = e.defer();
                return n.FlurryAds.showBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showBannerAtXY: function(r, t) {
                var o = e.defer();
                return n.FlurryAds.showBannerAtXY(r, t, function() {
                    o.resolve()
                }, function() {
                    o.reject()
                }), o.promise
            },
            hideBanner: function() {
                var r = e.defer();
                return n.FlurryAds.hideBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            prepareInterstitial: function(r) {
                var t = e.defer();
                return n.FlurryAds.prepareInterstitial(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showInterstitial: function() {
                var r = e.defer();
                return n.FlurryAds.showInterstitial(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.ga", []).factory("$cordovaGA", ["$q", "$window", function(e, n) {
        return {
            init: function(r, t) {
                var o = e.defer();
                return t = t >= 0 ? t : 10, n.plugins.gaPlugin.init(function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }, r, t), o.promise
            },
            trackEvent: function(r, t, o, i, a, c) {
                var s = e.defer();
                return n.plugins.gaPlugin.trackEvent(function(e) {
                    s.resolve(e)
                }, function(e) {
                    s.reject(e)
                }, o, i, a, c), s.promise
            },
            trackPage: function(r, t, o) {
                var i = e.defer();
                return n.plugins.gaPlugin.trackPage(function(e) {
                    i.resolve(e)
                }, function(e) {
                    i.reject(e)
                }, o), i.promise
            },
            setVariable: function(r, t, o, i) {
                var a = e.defer();
                return n.plugins.gaPlugin.setVariable(function(e) {
                    a.resolve(e)
                }, function(e) {
                    a.reject(e)
                }, o, i), a.promise
            },
            exit: function(r, t) {
                var o = e.defer();
                return n.plugins.gaPlugin.exit(function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            }
        }
    }]), angular.module("ngCordova.plugins.geolocation", []).factory("$cordovaGeolocation", ["$q", function(e) {
        return {
            getCurrentPosition: function(n) {
                var r = e.defer();
                return navigator.geolocation.getCurrentPosition(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }, n), r.promise
            },
            watchPosition: function(n) {
                var r = e.defer(),
                    t = navigator.geolocation.watchPosition(function(e) {
                        r.notify(e)
                    }, function(e) {
                        r.reject(e)
                    }, n);
                return r.promise.cancel = function() {
                    navigator.geolocation.clearWatch(t)
                }, r.promise.clearWatch = function(e) {
                    navigator.geolocation.clearWatch(e || t)
                }, r.promise.watchID = t, r.promise
            },
            clearWatch: function(e) {
                return navigator.geolocation.clearWatch(e)
            }
        }
    }]), angular.module("ngCordova.plugins.globalization", []).factory("$cordovaGlobalization", ["$q", function(e) {
        return {
            getPreferredLanguage: function() {
                var n = e.defer();
                return navigator.globalization.getPreferredLanguage(function(e) {
                    n.resolve(e)
                }, function(e) {
                    n.reject(e)
                }), n.promise
            },
            getLocaleName: function() {
                var n = e.defer();
                return navigator.globalization.getLocaleName(function(e) {
                    n.resolve(e)
                }, function(e) {
                    n.reject(e)
                }), n.promise
            },
            getFirstDayOfWeek: function() {
                var n = e.defer();
                return navigator.globalization.getFirstDayOfWeek(function(e) {
                    n.resolve(e)
                }, function(e) {
                    n.reject(e)
                }), n.promise
            },
            dateToString: function(n, r) {
                var t = e.defer();
                return navigator.globalization.dateToString(n, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }, r), t.promise
            },
            stringToDate: function(n, r) {
                var t = e.defer();
                return navigator.globalization.stringToDate(n, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }, r), t.promise
            },
            getDatePattern: function(n) {
                var r = e.defer();
                return navigator.globalization.getDatePattern(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }, n), r.promise
            },
            getDateNames: function(n) {
                var r = e.defer();
                return navigator.globalization.getDateNames(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }, n), r.promise
            },
            isDayLightSavingsTime: function(n) {
                var r = e.defer();
                return navigator.globalization.isDayLightSavingsTime(n, function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            numberToString: function(n, r) {
                var t = e.defer();
                return navigator.globalization.numberToString(n, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }, r), t.promise
            },
            stringToNumber: function(n, r) {
                var t = e.defer();
                return navigator.globalization.stringToNumber(n, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }, r), t.promise
            },
            getNumberPattern: function(n) {
                var r = e.defer();
                return navigator.globalization.getNumberPattern(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }, n), r.promise
            },
            getCurrencyPattern: function(n) {
                var r = e.defer();
                return navigator.globalization.getCurrencyPattern(n, function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.googleAds", []).factory("$cordovaGoogleAds", ["$q", "$window", function(e, n) {
        return {
            setOptions: function(r) {
                var t = e.defer();
                return n.AdMob.setOptions(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            createBanner: function(r) {
                var t = e.defer();
                return n.AdMob.createBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            removeBanner: function() {
                var r = e.defer();
                return n.AdMob.removeBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            showBanner: function(r) {
                var t = e.defer();
                return n.AdMob.showBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showBannerAtXY: function(r, t) {
                var o = e.defer();
                return n.AdMob.showBannerAtXY(r, t, function() {
                    o.resolve()
                }, function() {
                    o.reject()
                }), o.promise
            },
            hideBanner: function() {
                var r = e.defer();
                return n.AdMob.hideBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            prepareInterstitial: function(r) {
                var t = e.defer();
                return n.AdMob.prepareInterstitial(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showInterstitial: function() {
                var r = e.defer();
                return n.AdMob.showInterstitial(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.googleAnalytics", []).factory("$cordovaGoogleAnalytics", ["$q", "$window", function(e, n) {
        return {
            startTrackerWithId: function(r) {
                var t = e.defer();
                return n.analytics.startTrackerWithId(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            setUserId: function(r) {
                var t = e.defer();
                return n.analytics.setUserId(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            debugMode: function() {
                var r = e.defer();
                return n.analytics.debugMode(function(e) {
                    r.resolve(e)
                }, function() {
                    r.reject()
                }), r.promise
            },
            trackView: function(r) {
                var t = e.defer();
                return n.analytics.trackView(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            addCustomDimension: function(r, t) {
                var o = e.defer();
                return n.analytics.addCustomDimension(r, t, function() {
                    o.resolve()
                }, function(e) {
                    o.reject(e)
                }), o.promise
            },
            trackEvent: function(r, t, o, i) {
                var a = e.defer();
                return n.analytics.trackEvent(r, t, o, i, function(e) {
                    a.resolve(e)
                }, function(e) {
                    a.reject(e)
                }), a.promise
            },
            trackException: function(r, t) {
                var o = e.defer();
                return n.analytics.trackException(r, t, function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            },
            trackTiming: function(r, t, o, i) {
                var a = e.defer();
                return n.analytics.trackTiming(r, t, o, i, function(e) {
                    a.resolve(e)
                }, function(e) {
                    a.reject(e)
                }), a.promise
            },
            addTransaction: function(r, t, o, i, a, c) {
                var s = e.defer();
                return n.analytics.addTransaction(r, t, o, i, a, c, function(e) {
                    s.resolve(e)
                }, function(e) {
                    s.reject(e)
                }), s.promise
            },
            addTransactionItem: function(r, t, o, i, a, c, s) {
                var u = e.defer();
                return n.analytics.addTransactionItem(r, t, o, i, a, c, s, function(e) {
                    u.resolve(e)
                }, function(e) {
                    u.reject(e)
                }), u.promise
            }
        }
    }]), angular.module("ngCordova.plugins.googleMap", []).factory("$cordovaGoogleMap", ["$q", "$window", function(e, n) {
        var r = null;
        return {
            getMap: function(t) {
                var o = e.defer();
                if (n.plugin.google.maps) {
                    var i = document.getElementById("map_canvas");
                    r = n.plugin.google.maps.Map.getMap(t), r.setDiv(i), o.resolve(r)
                } else o.reject(null);
                return o.promise
            },
            isMapLoaded: function() {
                return !!r
            },
            addMarker: function(n) {
                var t = e.defer();
                return r.addMarker(n, function(e) {
                    t.resolve(e)
                }), t.promise
            },
            getMapTypeIds: function() {
                return n.plugin.google.maps.mapTypeId
            },
            setVisible: function(n) {
                var t = e.defer();
                return r.setVisible(n), t.promise
            },
            cleanup: function() {
                r = null
            }
        }
    }]), angular.module("ngCordova.plugins.googlePlayGame", []).factory("$cordovaGooglePlayGame", ["$q", function(e) {
        return {
            auth: function() {
                var n = e.defer();
                return googleplaygame.auth(function(e) {
                    return n.resolve(e)
                }, function(e) {
                    return n.reject(e)
                }), n.promise
            },
            signout: function() {
                var n = e.defer();
                return googleplaygame.signout(function(e) {
                    return n.resolve(e)
                }, function(e) {
                    return n.reject(e)
                }), n.promise
            },
            isSignedIn: function() {
                var n = e.defer();
                return googleplaygame.isSignedIn(function(e) {
                    return n.resolve(e)
                }, function(e) {
                    return n.reject(e)
                }), n.promise
            },
            showPlayer: function() {
                var n = e.defer();
                return googleplaygame.showPlayer(function(e) {
                    return n.resolve(e)
                }, function(e) {
                    return n.reject(e)
                }), n.promise
            },
            submitScore: function(n) {
                var r = e.defer();
                return googleplaygame.submitScore(n, function(e) {
                    return r.resolve(e)
                }, function(e) {
                    return r.reject(e)
                }), r.promise
            },
            showAllLeaderboards: function() {
                var n = e.defer();
                return googleplaygame.showAllLeaderboards(function(e) {
                    return n.resolve(e)
                }, function(e) {
                    return n.reject(e)
                }), n.promise
            },
            showLeaderboard: function(n) {
                var r = e.defer();
                return googleplaygame.showLeaderboard(n, function(e) {
                    return r.resolve(e)
                }, function(e) {
                    return r.reject(e)
                }), r.promise
            },
            unlockAchievement: function(n) {
                var r = e.defer();
                return googleplaygame.unlockAchievement(n, function(e) {
                    return r.resolve(e)
                }, function(e) {
                    return r.reject(e)
                }), r.promise
            },
            incrementAchievement: function(n) {
                var r = e.defer();
                return googleplaygame.incrementAchievement(n, function(e) {
                    return r.resolve(e)
                }, function(e) {
                    return r.reject(e)
                }), r.promise
            },
            showAchievements: function() {
                var n = e.defer();
                return googleplaygame.showAchievements(function(e) {
                    return n.resolve(e)
                }, function(e) {
                    return n.reject(e)
                }), n.promise
            }
        }
    }]), angular.module("ngCordova.plugins.googleplus", []).factory("$cordovaGooglePlus", ["$q", "$window", function(e, n) {
        return {
            login: function(r) {
                var t = e.defer();
                return void 0 === r && (r = {}), n.plugins.googleplus.login({
                    iOSApiKey: r
                }, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            silentLogin: function(r) {
                var t = e.defer();
                return void 0 === r && (r = {}), n.plugins.googleplus.trySilentLogin({
                    iOSApiKey: r
                }, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            logout: function() {
                var r = e.defer();
                n.plugins.googleplus.logout(function(e) {
                    r.resolve(e)
                })
            },
            disconnect: function() {
                var r = e.defer();
                n.plugins.googleplus.disconnect(function(e) {
                    r.resolve(e)
                })
            }
        }
    }]), angular.module("ngCordova.plugins.healthKit", []).factory("$cordovaHealthKit", ["$q", "$window", function(e, n) {
        return {
            isAvailable: function() {
                var r = e.defer();
                return n.plugins.healthkit.available(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }), r.promise
            },
            checkAuthStatus: function(r) {
                var t = e.defer();
                return r = r || "HKQuantityTypeIdentifierHeight", n.plugins.healthkit.checkAuthStatus({
                    type: r
                }, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            requestAuthorization: function(r, t) {
                var o = e.defer();
                return r = r || ["HKCharacteristicTypeIdentifierDateOfBirth", "HKQuantityTypeIdentifierActiveEnergyBurned", "HKQuantityTypeIdentifierHeight"], t = t || ["HKQuantityTypeIdentifierActiveEnergyBurned", "HKQuantityTypeIdentifierHeight", "HKQuantityTypeIdentifierDistanceCycling"], n.plugins.healthkit.requestAuthorization({
                    readTypes: r,
                    writeTypes: t
                }, function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            },
            readDateOfBirth: function() {
                var r = e.defer();
                return n.plugins.healthkit.readDateOfBirth(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.resolve(e)
                }), r.promise
            },
            readGender: function() {
                var r = e.defer();
                return n.plugins.healthkit.readGender(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.resolve(e)
                }), r.promise
            },
            saveWeight: function(r, t, o) {
                var i = e.defer();
                return n.plugins.healthkit.saveWeight({
                    unit: t || "lb",
                    amount: r,
                    date: o || new Date
                }, function(e) {
                    i.resolve(e)
                }, function(e) {
                    i.resolve(e)
                }), i.promise
            },
            readWeight: function(r) {
                var t = e.defer();
                return n.plugins.healthkit.readWeight({
                    unit: r || "lb"
                }, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.resolve(e)
                }), t.promise
            },
            saveHeight: function(r, t, o) {
                var i = e.defer();
                return n.plugins.healthkit.saveHeight({
                    unit: t || "in",
                    amount: r,
                    date: o || new Date
                }, function(e) {
                    i.resolve(e)
                }, function(e) {
                    i.resolve(e)
                }), i.promise
            },
            readHeight: function(r) {
                var t = e.defer();
                return n.plugins.healthkit.readHeight({
                    unit: r || "in"
                }, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.resolve(e)
                }), t.promise
            },
            findWorkouts: function() {
                var r = e.defer();
                return n.plugins.healthkit.findWorkouts({}, function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.resolve(e)
                }), r.promise
            },
            saveWorkout: function(r) {
                var t = e.defer();
                return n.plugins.healthkit.saveWorkout(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.resolve(e)
                }), t.promise
            },
            querySampleType: function(r) {
                var t = e.defer();
                return n.plugins.healthkit.querySampleType(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.resolve(e)
                }), t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.httpd", []).factory("$cordovaHttpd", ["$q", function(e) {
        return {
            startServer: function(n) {
                var r = e.defer();
                return cordova.plugins.CorHttpd.startServer(n, function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            stopServer: function() {
                var n = e.defer();
                return cordova.plugins.CorHttpd.stopServer(function() {
                    n.resolve()
                }, function() {
                    n.reject()
                }), n.promise
            },
            getURL: function() {
                var n = e.defer();
                return cordova.plugins.CorHttpd.getURL(function(e) {
                    n.resolve(e)
                }, function() {
                    n.reject()
                }), n.promise
            },
            getLocalPath: function() {
                var n = e.defer();
                return cordova.plugins.CorHttpd.getLocalPath(function(e) {
                    n.resolve(e)
                }, function() {
                    n.reject()
                }), n.promise
            }
        }
    }]), angular.module("ngCordova.plugins.iAd", []).factory("$cordovaiAd", ["$q", "$window", function(e, n) {
        return {
            setOptions: function(r) {
                var t = e.defer();
                return n.iAd.setOptions(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            createBanner: function(r) {
                var t = e.defer();
                return n.iAd.createBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            removeBanner: function() {
                var r = e.defer();
                return n.iAd.removeBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            showBanner: function(r) {
                var t = e.defer();
                return n.iAd.showBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showBannerAtXY: function(r, t) {
                var o = e.defer();
                return n.iAd.showBannerAtXY(r, t, function() {
                    o.resolve()
                }, function() {
                    o.reject()
                }), o.promise
            },
            hideBanner: function() {
                var r = e.defer();
                return n.iAd.hideBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            prepareInterstitial: function(r) {
                var t = e.defer();
                return n.iAd.prepareInterstitial(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showInterstitial: function() {
                var r = e.defer();
                return n.iAd.showInterstitial(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.imagePicker", []).factory("$cordovaImagePicker", ["$q", "$window", function(e, n) {
        return {
            getPictures: function(r) {
                var t = e.defer();
                return n.imagePicker.getPictures(function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }, r), t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.inAppBrowser", []).provider("$cordovaInAppBrowser", [function() {
        var e, n = this.defaultOptions = {};
        this.setDefaultOptions = function(e) {
            n = angular.extend(n, e)
        }, this.$get = ["$rootScope", "$q", "$window", "$timeout", function(r, t, o, i) {
            return {
                open: function(a, c, s) {
                    var u = t.defer();
                    if (s && !angular.isObject(s)) return u.reject("options must be an object"), u.promise;
                    var l = angular.extend({}, n, s),
                        d = [];
                    angular.forEach(l, function(e, n) {
                        d.push(n + "=" + e)
                    });
                    var f = d.join();
                    return e = o.open(a, c, f), e.addEventListener("loadstart", function(e) {
                        i(function() {
                            r.$broadcast("$cordovaInAppBrowser:loadstart", e)
                        })
                    }, !1), e.addEventListener("loadstop", function(e) {
                        u.resolve(e), i(function() {
                            r.$broadcast("$cordovaInAppBrowser:loadstop", e)
                        })
                    }, !1), e.addEventListener("loaderror", function(e) {
                        u.reject(e), i(function() {
                            r.$broadcast("$cordovaInAppBrowser:loaderror", e)
                        })
                    }, !1), e.addEventListener("exit", function(e) {
                        i(function() {
                            r.$broadcast("$cordovaInAppBrowser:exit", e)
                        })
                    }, !1), u.promise
                },
                close: function() {
                    e.close(), e = null
                },
                show: function() {
                    e.show()
                },
                executeScript: function(n) {
                    var r = t.defer();
                    return e.executeScript(n, function(e) {
                        r.resolve(e)
                    }), r.promise
                },
                insertCSS: function(n) {
                    var r = t.defer();
                    return e.insertCSS(n, function(e) {
                        r.resolve(e)
                    }), r.promise
                }
            }
        }]
    }]), angular.module("ngCordova.plugins.insomnia", []).factory("$cordovaInsomnia", ["$window", function(e) {
        return {
            keepAwake: function() {
                return e.plugins.insomnia.keepAwake()
            },
            allowSleepAgain: function() {
                return e.plugins.insomnia.allowSleepAgain()
            }
        }
    }]), angular.module("ngCordova.plugins.instagram", []).factory("$cordovaInstagram", ["$q", function(e) {
        return {
            share: function(n) {
                var r = e.defer();
                return window.Instagram ? (Instagram.share(n.image, n.caption, function(e) {
                    e ? r.reject(e) : r.resolve(!0)
                }), r.promise) : (console.error("Tried to call Instagram.share but the Instagram plugin isn't installed!"), r.resolve(null), r.promise)
            },
            isInstalled: function() {
                var n = e.defer();
                return window.Instagram ? (Instagram.isInstalled(function(e, r) {
                    e ? n.reject(e) : n.resolve(r || !0)
                }), n.promise) : (console.error("Tried to call Instagram.isInstalled but the Instagram plugin isn't installed!"), n.resolve(null), n.promise)
            }
        }
    }]), angular.module("ngCordova.plugins.keyboard", []).factory("$cordovaKeyboard", ["$rootScope", function(e) {
        var n = function() {
                e.$evalAsync(function() {
                    e.$broadcast("$cordovaKeyboard:show")
                })
            },
            r = function() {
                e.$evalAsync(function() {
                    e.$broadcast("$cordovaKeyboard:hide")
                })
            };
        return document.addEventListener("deviceready", function() {
            cordova.plugins.Keyboard && (window.addEventListener("native.keyboardshow", n, !1), window.addEventListener("native.keyboardhide", r, !1))
        }), {
            hideAccessoryBar: function(e) {
                return cordova.plugins.Keyboard.hideKeyboardAccessoryBar(e)
            },
            close: function() {
                return cordova.plugins.Keyboard.close()
            },
            show: function() {
                return cordova.plugins.Keyboard.show()
            },
            disableScroll: function(e) {
                return cordova.plugins.Keyboard.disableScroll(e)
            },
            isVisible: function() {
                return cordova.plugins.Keyboard.isVisible
            },
            clearShowWatch: function() {
                document.removeEventListener("native.keyboardshow", n), e.$$listeners["$cordovaKeyboard:show"] = []
            },
            clearHideWatch: function() {
                document.removeEventListener("native.keyboardhide", r), e.$$listeners["$cordovaKeyboard:hide"] = []
            }
        }
    }]), angular.module("ngCordova.plugins.keychain", []).factory("$cordovaKeychain", ["$q", function(e) {
        return {
            getForKey: function(n, r) {
                var t = e.defer(),
                    o = new Keychain;
                return o.getForKey(t.resolve, t.reject, n, r), t.promise
            },
            setForKey: function(n, r, t) {
                var o = e.defer(),
                    i = new Keychain;
                return i.setForKey(o.resolve, o.reject, n, r, t), o.promise
            },
            removeForKey: function(n, r) {
                var t = e.defer(),
                    o = new Keychain;
                return o.removeForKey(t.resolve, t.reject, n, r), t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.localNotification", []).factory("$cordovaLocalNotification", ["$q", "$window", "$rootScope", "$timeout", function(e, n, r, t) {
        return document.addEventListener("deviceready", function() {
            n.cordova && n.cordova.plugins && n.cordova.plugins.notification && n.cordova.plugins.notification.local && (n.cordova.plugins.notification.local.on("schedule", function(e, n) {
                t(function() {
                    r.$broadcast("$cordovaLocalNotification:schedule", e, n)
                })
            }), n.cordova.plugins.notification.local.on("trigger", function(e, n) {
                t(function() {
                    r.$broadcast("$cordovaLocalNotification:trigger", e, n)
                })
            }), n.cordova.plugins.notification.local.on("update", function(e, n) {
                t(function() {
                    r.$broadcast("$cordovaLocalNotification:update", e, n)
                })
            }), n.cordova.plugins.notification.local.on("clear", function(e, n) {
                t(function() {
                    r.$broadcast("$cordovaLocalNotification:clear", e, n)
                })
            }), n.cordova.plugins.notification.local.on("clearall", function(e) {
                t(function() {
                    r.$broadcast("$cordovaLocalNotification:clearall", e)
                })
            }), n.cordova.plugins.notification.local.on("cancel", function(e, n) {
                t(function() {
                    r.$broadcast("$cordovaLocalNotification:cancel", e, n)
                })
            }), n.cordova.plugins.notification.local.on("cancelall", function(e) {
                t(function() {
                    r.$broadcast("$cordovaLocalNotification:cancelall", e)
                })
            }), n.cordova.plugins.notification.local.on("click", function(e, n) {
                t(function() {
                    r.$broadcast("$cordovaLocalNotification:click", e, n)
                })
            }))
        }, !1), {
            schedule: function(r, t) {
                var o = e.defer();
                return t = t || null, n.cordova.plugins.notification.local.schedule(r, function(e) {
                    o.resolve(e)
                }, t), o.promise
            },
            add: function(r, t) {
                console.warn('Deprecated: use "schedule" instead.');
                var o = e.defer();
                return t = t || null, n.cordova.plugins.notification.local.schedule(r, function(e) {
                    o.resolve(e)
                }, t), o.promise
            },
            update: function(r, t) {
                var o = e.defer();
                return t = t || null, n.cordova.plugins.notification.local.update(r, function(e) {
                    o.resolve(e)
                }, t), o.promise
            },
            clear: function(r, t) {
                var o = e.defer();
                return t = t || null, n.cordova.plugins.notification.local.clear(r, function(e) {
                    o.resolve(e)
                }, t), o.promise
            },
            clearAll: function(r) {
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.clearAll(function(e) {
                    t.resolve(e)
                }, r), t.promise
            },
            cancel: function(r, t) {
                var o = e.defer();
                return t = t || null, n.cordova.plugins.notification.local.cancel(r, function(e) {
                    o.resolve(e)
                }, t), o.promise
            },
            cancelAll: function(r) {
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.cancelAll(function(e) {
                    t.resolve(e)
                }, r), t.promise
            },
            isPresent: function(r, t) {
                var o = e.defer();
                return t = t || null, n.cordova.plugins.notification.local.isPresent(r, function(e) {
                    o.resolve(e)
                }, t), o.promise
            },
            isScheduled: function(r, t) {
                var o = e.defer();
                return t = t || null, n.cordova.plugins.notification.local.isScheduled(r, function(e) {
                    o.resolve(e)
                }, t), o.promise
            },
            isTriggered: function(r, t) {
                var o = e.defer();
                return t = t || null, n.cordova.plugins.notification.local.isTriggered(r, function(e) {
                    o.resolve(e)
                }, t), o.promise
            },
            hasPermission: function(r) {
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.hasPermission(function(e) {
                    e ? t.resolve(e) : t.reject(e)
                }, r), t.promise
            },
            registerPermission: function(r) {
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.registerPermission(function(e) {
                    e ? t.resolve(e) : t.reject(e)
                }, r), t.promise
            },
            promptForPermission: function(r) {
                console.warn('Deprecated: use "registerPermission" instead.');
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.registerPermission(function(e) {
                    e ? t.resolve(e) : t.reject(e)
                }, r), t.promise
            },
            getAllIds: function(r) {
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.getAllIds(function(e) {
                    t.resolve(e)
                }, r), t.promise
            },
            getIds: function(r) {
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.getIds(function(e) {
                    t.resolve(e)
                }, r), t.promise
            },
            getScheduledIds: function(r) {
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.getScheduledIds(function(e) {
                    t.resolve(e)
                }, r), t.promise
            },
            getTriggeredIds: function(r) {
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.getTriggeredIds(function(e) {
                    t.resolve(e)
                }, r), t.promise
            },
            get: function(r, t) {
                var o = e.defer();
                return t = t || null, n.cordova.plugins.notification.local.get(r, function(e) {
                    o.resolve(e)
                }, t), o.promise
            },
            getAll: function(r) {
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.getAll(function(e) {
                    t.resolve(e)
                }, r), t.promise
            },
            getScheduled: function(r, t) {
                var o = e.defer();
                return t = t || null, n.cordova.plugins.notification.local.getScheduled(r, function(e) {
                    o.resolve(e)
                }, t), o.promise
            },
            getAllScheduled: function(r) {
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.getAllScheduled(function(e) {
                    t.resolve(e)
                }, r), t.promise
            },
            getTriggered: function(r, t) {
                var o = e.defer();
                return t = t || null, n.cordova.plugins.notification.local.getTriggered(r, function(e) {
                    o.resolve(e)
                }, t), o.promise
            },
            getAllTriggered: function(r) {
                var t = e.defer();
                return r = r || null, n.cordova.plugins.notification.local.getAllTriggered(function(e) {
                    t.resolve(e)
                }, r), t.promise
            },
            getDefaults: function() {
                return n.cordova.plugins.notification.local.getDefaults()
            },
            setDefaults: function(e) {
                n.cordova.plugins.notification.local.setDefaults(e)
            }
        }
    }]), angular.module("ngCordova.plugins.mMediaAds", []).factory("$cordovaMMediaAds", ["$q", "$window", function(e, n) {
        return {
            setOptions: function(r) {
                var t = e.defer();
                return n.mMedia.setOptions(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            createBanner: function(r) {
                var t = e.defer();
                return n.mMedia.createBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            removeBanner: function() {
                var r = e.defer();
                return n.mMedia.removeBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            showBanner: function(r) {
                var t = e.defer();
                return n.mMedia.showBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showBannerAtXY: function(r, t) {
                var o = e.defer();
                return n.mMedia.showBannerAtXY(r, t, function() {
                    o.resolve()
                }, function() {
                    o.reject()
                }), o.promise
            },
            hideBanner: function() {
                var r = e.defer();
                return n.mMedia.hideBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            prepareInterstitial: function(r) {
                var t = e.defer();
                return n.mMedia.prepareInterstitial(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showInterstitial: function() {
                var r = e.defer();
                return n.mMedia.showInterstitial(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.media", []).factory("$cordovaMedia", ["$q", function(e) {
        return {
            newMedia: function(n) {
                var r, t = e.defer(),
                    o = null;
                return r = new Media(n, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }, function(e) {
                    o = e
                }), t.promise.getCurrentPosition = function() {
                    r.getCurrentPosition(function(e) {}, function(e) {})
                }, t.promise.getDuration = function() {
                    r.getDuration()
                }, t.promise.play = function(e) {
                    "object" != typeof e && (e = {}), r.play(e)
                }, t.promise.pause = function() {
                    r.pause()
                }, t.promise.stop = function() {
                    r.stop()
                }, t.promise.release = function() {
                    r.release()
                }, t.promise.seekTo = function(e) {
                    r.seekTo(e)
                }, t.promise.setVolume = function(e) {
                    r.setVolume(e)
                }, t.promise.startRecord = function() {
                    r.startRecord()
                }, t.promise.stopRecord = function() {
                    r.stopRecord()
                }, t.promise.media = r, t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.mobfoxAds", []).factory("$cordovaMobFoxAds", ["$q", "$window", function(e, n) {
        return {
            setOptions: function(r) {
                var t = e.defer();
                return n.MobFox.setOptions(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            createBanner: function(r) {
                var t = e.defer();
                return n.MobFox.createBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            removeBanner: function() {
                var r = e.defer();
                return n.MobFox.removeBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            showBanner: function(r) {
                var t = e.defer();
                return n.MobFox.showBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showBannerAtXY: function(r, t) {
                var o = e.defer();
                return n.MobFox.showBannerAtXY(r, t, function() {
                    o.resolve()
                }, function() {
                    o.reject()
                }), o.promise
            },
            hideBanner: function() {
                var r = e.defer();
                return n.MobFox.hideBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            prepareInterstitial: function(r) {
                var t = e.defer();
                return n.MobFox.prepareInterstitial(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showInterstitial: function() {
                var r = e.defer();
                return n.MobFox.showInterstitial(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins", ["ngCordova.plugins.actionSheet", "ngCordova.plugins.adMob", "ngCordova.plugins.appAvailability", "ngCordova.plugins.appRate", "ngCordova.plugins.appVersion", "ngCordova.plugins.backgroundGeolocation", "ngCordova.plugins.badge", "ngCordova.plugins.barcodeScanner", "ngCordova.plugins.batteryStatus", "ngCordova.plugins.ble", "ngCordova.plugins.bluetoothSerial", "ngCordova.plugins.brightness", "ngCordova.plugins.calendar", "ngCordova.plugins.camera", "ngCordova.plugins.capture", "ngCordova.plugins.clipboard", "ngCordova.plugins.contacts", "ngCordova.plugins.datePicker", "ngCordova.plugins.device", "ngCordova.plugins.deviceMotion", "ngCordova.plugins.deviceOrientation", "ngCordova.plugins.dialogs", "ngCordova.plugins.emailComposer", "ngCordova.plugins.facebook", "ngCordova.plugins.facebookAds", "ngCordova.plugins.file", "ngCordova.plugins.fileTransfer", "ngCordova.plugins.fileOpener2", "ngCordova.plugins.flashlight", "ngCordova.plugins.flurryAds", "ngCordova.plugins.ga", "ngCordova.plugins.geolocation", "ngCordova.plugins.globalization", "ngCordova.plugins.googleAds", "ngCordova.plugins.googleAnalytics", "ngCordova.plugins.googleMap", "ngCordova.plugins.googlePlayGame", "ngCordova.plugins.healthKit", "ngCordova.plugins.httpd", "ngCordova.plugins.iAd", "ngCordova.plugins.imagePicker", "ngCordova.plugins.inAppBrowser", "ngCordova.plugins.keyboard", "ngCordova.plugins.keychain", "ngCordova.plugins.localNotification", "ngCordova.plugins.media", "ngCordova.plugins.mMediaAds", "ngCordova.plugins.mobfoxAds", "ngCordova.plugins.mopubAds", "ngCordova.plugins.nativeAudio", "ngCordova.plugins.network", "ngCordova.plugins.oauth", "ngCordova.plugins.oauthUtility", "ngCordova.plugins.pinDialog", "ngCordova.plugins.prefs", "ngCordova.plugins.printer", "ngCordova.plugins.progressIndicator", "ngCordova.plugins.push", "ngCordova.plugins.sms", "ngCordova.plugins.socialSharing", "ngCordova.plugins.spinnerDialog", "ngCordova.plugins.splashscreen", "ngCordova.plugins.sqlite", "ngCordova.plugins.statusbar", "ngCordova.plugins.toast", "ngCordova.plugins.touchid", "ngCordova.plugins.vibration", "ngCordova.plugins.videoCapturePlus", "ngCordova.plugins.zip", "ngCordova.plugins.insomnia"]), angular.module("ngCordova.plugins.mopubAds", []).factory("$cordovaMoPubAds", ["$q", "$window", function(e, n) {
        return {
            setOptions: function(r) {
                var t = e.defer();
                return n.MoPub.setOptions(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            createBanner: function(r) {
                var t = e.defer();
                return n.MoPub.createBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            removeBanner: function() {
                var r = e.defer();
                return n.MoPub.removeBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            showBanner: function(r) {
                var t = e.defer();
                return n.MoPub.showBanner(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showBannerAtXY: function(r, t) {
                var o = e.defer();
                return n.MoPub.showBannerAtXY(r, t, function() {
                    o.resolve()
                }, function() {
                    o.reject()
                }), o.promise
            },
            hideBanner: function() {
                var r = e.defer();
                return n.MoPub.hideBanner(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            },
            prepareInterstitial: function(r) {
                var t = e.defer();
                return n.MoPub.prepareInterstitial(r, function() {
                    t.resolve()
                }, function() {
                    t.reject()
                }), t.promise
            },
            showInterstitial: function() {
                var r = e.defer();
                return n.MoPub.showInterstitial(function() {
                    r.resolve()
                }, function() {
                    r.reject()
                }), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.nativeAudio", []).factory("$cordovaNativeAudio", ["$q", "$window", function(e, n) {
        return {
            preloadSimple: function(r, t) {
                var o = e.defer();
                return n.plugins.NativeAudio.preloadSimple(r, t, function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            },
            preloadComplex: function(r, t, o, i) {
                var a = e.defer();
                return n.plugins.NativeAudio.preloadComplex(r, t, o, i, function(e) {
                    a.resolve(e)
                }, function(e) {
                    a.reject(e)
                }), a.promise
            },
            play: function(r, t) {
                var o = e.defer();
                return n.plugins.NativeAudio.play(r, t, function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            },
            stop: function(r) {
                var t = e.defer();
                return n.plugins.NativeAudio.stop(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            loop: function(r) {
                var t = e.defer();
                return n.plugins.NativeAudio.loop(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            unload: function(r) {
                var t = e.defer();
                return n.plugins.NativeAudio.unload(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            setVolumeForComplexAsset: function(r, t) {
                var o = e.defer();
                return n.plugins.NativeAudio.setVolumeForComplexAsset(r, t, function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            }
        }
    }]), angular.module("ngCordova.plugins.network", []).factory("$cordovaNetwork", ["$rootScope", "$timeout", function(e, n) {
        var r = function() {
                var r = navigator.connection.type;
                n(function() {
                    e.$broadcast("$cordovaNetwork:offline", r)
                })
            },
            t = function() {
                var r = navigator.connection.type;
                n(function() {
                    e.$broadcast("$cordovaNetwork:online", r)
                })
            };
        return document.addEventListener("deviceready", function() {
            navigator.connection && (document.addEventListener("offline", r, !1), document.addEventListener("online", t, !1))
        }), {
            getNetwork: function() {
                return navigator.connection.type
            },
            isOnline: function() {
                var e = navigator.connection.type;
                return e !== Connection.UNKNOWN && e !== Connection.NONE
            },
            isOffline: function() {
                var e = navigator.connection.type;
                return e === Connection.UNKNOWN || e === Connection.NONE
            },
            clearOfflineWatch: function() {
                document.removeEventListener("offline", r), e.$$listeners["$cordovaNetwork:offline"] = []
            },
            clearOnlineWatch: function() {
                document.removeEventListener("online", r), e.$$listeners["$cordovaNetwork:online"] = []
            }
        }
    }]).run(["$cordovaNetwork", function(e) {}]), angular.module("ngCordova.plugins.oauth", ["ngCordova.plugins.oauthUtility"]).factory("$cordovaOauth", ["$q", "$http", "$cordovaOauthUtility", function(e, n, r) {
        return {
            adfs: function(r, t, o) {
                var i = e.defer();
                if (window.cordova) {
                    var a = cordova.require("cordova/plugin_list").metadata;
                    if (a.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || a.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var c = window.open(t + "/adfs/oauth2/authorize?response_type=code&client_id=" + r + "&redirect_uri=http://localhost/callback&resource=" + o, "_blank", "location=no");
                        c.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf("http://localhost/callback")) {
                                var o = e.url.split("code=")[1];
                                n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n({
                                    method: "post",
                                    url: t + "/adfs/oauth2/token",
                                    data: "client_id=" + r + "&code=" + o + "&redirect_uri=http://localhost/callback&grant_type=authorization_code"
                                }).success(function(e) {
                                    i.resolve(e)
                                }).error(function(e, n) {
                                    i.reject("Problem authenticating")
                                })["finally"](function() {
                                    setTimeout(function() {
                                        c.close()
                                    }, 10)
                                })
                            }
                        }), c.addEventListener("exit", function(e) {
                            i.reject("The sign in flow was canceled")
                        })
                    } else i.reject("Could not find InAppBrowser plugin")
                } else i.reject("Cannot authenticate via a web browser");
                return i.promise
            },
            dropbox: function(n, r) {
                var t = e.defer();
                if (window.cordova) {
                    var o = cordova.require("cordova/plugin_list").metadata;
                    if (o.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || o.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var i = "http://localhost/callback";
                        void 0 !== r && r.hasOwnProperty("redirect_uri") && (i = r.redirect_uri);
                        var a = window.open("https://www.dropbox.com/1/oauth2/authorize?client_id=" + n + "&redirect_uri=" + i + "&response_type=token", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        a.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(i)) {
                                a.removeEventListener("exit", function(e) {}), a.close();
                                for (var n = e.url.split("#")[1], r = n.split("&"), o = [], c = 0; c < r.length; c++) o[r[c].split("=")[0]] = r[c].split("=")[1];
                                void 0 !== o.access_token && null !== o.access_token ? t.resolve({
                                    access_token: o.access_token,
                                    token_type: o.token_type,
                                    uid: o.uid
                                }) : t.reject("Problem authenticating")
                            }
                        }), a.addEventListener("exit", function(e) {
                            t.reject("The sign in flow was canceled")
                        })
                    } else t.reject("Could not find InAppBrowser plugin")
                } else t.reject("Cannot authenticate via a web browser");
                return t.promise
            },
            digitalOcean: function(r, t) {
                var o = e.defer();
                if (window.cordova) {
                    var i = cordova.require("cordova/plugin_list").metadata;
                    if (i.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || i.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var a = window.open("https://cloud.digitalocean.com/v1/oauth/authorize?client_id=" + r + "&redirect_uri=http://localhost/callback&response_type=code&scope=read%20write", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        a.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf("http://localhost/callback")) {
                                var i = e.url.split("code=")[1];
                                n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n({
                                    method: "post",
                                    url: "https://cloud.digitalocean.com/v1/oauth/token",
                                    data: "client_id=" + r + "&client_secret=" + t + "&redirect_uri=http://localhost/callback&grant_type=authorization_code&code=" + i
                                }).success(function(e) {
                                    o.resolve(e)
                                }).error(function(e, n) {
                                    o.reject("Problem authenticating")
                                })["finally"](function() {
                                    setTimeout(function() {
                                        a.close()
                                    }, 10)
                                })
                            }
                        }), a.addEventListener("exit", function(e) {
                            o.reject("The sign in flow was canceled")
                        })
                    } else o.reject("Could not find InAppBrowser plugin")
                } else o.reject("Cannot authenticate via a web browser");
                return o.promise
            },
            google: function(n, r, t) {
                var o = e.defer();
                if (window.cordova) {
                    var i = cordova.require("cordova/plugin_list").metadata;
                    if (i.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || i.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var a = "http://localhost/callback";
                        void 0 !== t && t.hasOwnProperty("redirect_uri") && (a = t.redirect_uri);
                        var c = window.open("https://accounts.google.com/o/oauth2/auth?client_id=" + n + "&redirect_uri=" + a + "&scope=" + r.join(" ") + "&approval_prompt=force&response_type=token", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        c.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(a)) {
                                c.removeEventListener("exit", function(e) {}), c.close();
                                for (var n = e.url.split("#")[1], r = n.split("&"), t = [], i = 0; i < r.length; i++) t[r[i].split("=")[0]] = r[i].split("=")[1];
                                void 0 !== t.access_token && null !== t.access_token ? o.resolve({
                                    access_token: t.access_token,
                                    token_type: t.token_type,
                                    expires_in: t.expires_in
                                }) : o.reject("Problem authenticating")
                            }
                        }), c.addEventListener("exit", function(e) {
                            o.reject("The sign in flow was canceled")
                        })
                    } else o.reject("Could not find InAppBrowser plugin")
                } else o.reject("Cannot authenticate via a web browser");
                return o.promise
            },
            github: function(r, t, o) {
                var i = e.defer();
                if (window.cordova) {
                    var a = cordova.require("cordova/plugin_list").metadata;
                    if (a.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || a.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var c = window.open("https://github.com/login/oauth/authorize?client_id=" + r + "&redirect_uri=http://localhost/callback&scope=" + o.join(","), "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        c.addEventListener("loadstart", function(e) {
                            0 === e.url.indexOf("http://localhost/callback") && (requestToken = e.url.split("code=")[1], n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n.defaults.headers.post.accept = "application/json", n({
                                method: "post",
                                url: "https://github.com/login/oauth/access_token",
                                data: "client_id=" + r + "&client_secret=" + t + "&redirect_uri=http://localhost/callback&code=" + requestToken
                            }).success(function(e) {
                                i.resolve(e)
                            }).error(function(e, n) {
                                i.reject("Problem authenticating")
                            })["finally"](function() {
                                setTimeout(function() {
                                    c.close()
                                }, 10)
                            }))
                        }), c.addEventListener("exit", function(e) {
                            i.reject("The sign in flow was canceled")
                        })
                    } else i.reject("Could not find InAppBrowser plugin")
                } else i.reject("Cannot authenticate via a web browser");
                return i.promise
            },
            facebook: function(n, r, t) {
                var o = e.defer();
                if (window.cordova) {
                    var i = cordova.require("cordova/plugin_list").metadata;
                    if (i.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || i.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var a = "http://localhost/callback";
                        void 0 !== t && t.hasOwnProperty("redirect_uri") && (a = t.redirect_uri);
                        var c = window.open("https://www.facebook.com/v2.0/dialog/oauth?client_id=" + n + "&redirect_uri=" + a + "&response_type=token&scope=" + r.join(","), "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        c.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(a)) {
                                c.removeEventListener("exit", function(e) {}), c.close();
                                for (var n = e.url.split("#")[1], r = n.split("&"), t = [], i = 0; i < r.length; i++) t[r[i].split("=")[0]] = r[i].split("=")[1];
                                void 0 !== t.access_token && null !== t.access_token ? o.resolve({
                                    access_token: t.access_token,
                                    expires_in: t.expires_in
                                }) : 0 !== e.url.indexOf("error_code=100") ? o.reject("Facebook returned error_code=100: Invalid permissions") : o.reject("Problem authenticating")
                            }
                        }), c.addEventListener("exit", function(e) {
                            o.reject("The sign in flow was canceled")
                        })
                    } else o.reject("Could not find InAppBrowser plugin")
                } else o.reject("Cannot authenticate via a web browser");
                return o.promise
            },
            linkedin: function(r, t, o, i) {
                var a = e.defer();
                if (window.cordova) {
                    var c = cordova.require("cordova/plugin_list").metadata;
                    if (c.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || c.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var s = window.open("https://www.linkedin.com/uas/oauth2/authorization?client_id=" + r + "&redirect_uri=http://localhost/callback&scope=" + o.join(" ") + "&response_type=code&state=" + i, "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        s.addEventListener("loadstart", function(e) {
                            0 === e.url.indexOf("http://localhost/callback") && (requestToken = e.url.split("code=")[1], n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n({
                                method: "post",
                                url: "https://www.linkedin.com/uas/oauth2/accessToken",
                                data: "client_id=" + r + "&client_secret=" + t + "&redirect_uri=http://localhost/callback&grant_type=authorization_code&code=" + requestToken
                            }).success(function(e) {
                                a.resolve(e)
                            }).error(function(e, n) {
                                a.reject("Problem authenticating")
                            })["finally"](function() {
                                setTimeout(function() {
                                    s.close()
                                }, 10)
                            }))
                        }), s.addEventListener("exit", function(e) {
                            a.reject("The sign in flow was canceled")
                        })
                    } else a.reject("Could not find InAppBrowser plugin")
                } else a.reject("Cannot authenticate via a web browser");
                return a.promise
            },
            instagram: function(n, t, o) {
                var i = e.defer(),
                    a = {
                        code: "?",
                        token: "#"
                    };
                if (window.cordova) {
                    var c = cordova.require("cordova/plugin_list").metadata;
                    if (c.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || c.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var s = "http://localhost/callback",
                            u = "token";
                        void 0 !== o && (o.hasOwnProperty("redirect_uri") && (s = o.redirect_uri), o.hasOwnProperty("response_type") && (u = o.response_type));
                        var l = window.open("https://api.instagram.com/oauth/authorize/?client_id=" + n + "&redirect_uri=" + s + "&scope=" + t.join(" ") + "&response_type=" + u, "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        l.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(s)) {
                                l.removeEventListener("exit", function(e) {}), l.close();
                                var n = e.url.split(a[u])[1],
                                    t = r.parseResponseParameters(n);
                                void 0 !== t.access_token && null !== t.access_token ? i.resolve({
                                    access_token: t.access_token
                                }) : void 0 !== t.code && null !== t.code ? i.resolve({
                                    code: t.code
                                }) : i.reject("Problem authenticating")
                            }
                        }), l.addEventListener("exit", function(e) {
                            i.reject("The sign in flow was canceled")
                        })
                    } else i.reject("Could not find InAppBrowser plugin")
                } else i.reject("Cannot authenticate via a web browser");
                return i.promise
            },
            box: function(r, t, o) {
                var i = e.defer();
                if (window.cordova) {
                    var a = cordova.require("cordova/plugin_list").metadata;
                    if (a.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || a.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var c = window.open("https://app.box.com/api/oauth2/authorize/?client_id=" + r + "&redirect_uri=http://localhost/callback&state=" + o + "&response_type=code", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        c.addEventListener("loadstart", function(e) {
                            0 === e.url.indexOf("http://localhost/callback") && (requestToken = e.url.split("code=")[1], n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n({
                                method: "post",
                                url: "https://app.box.com/api/oauth2/token",
                                data: "client_id=" + r + "&client_secret=" + t + "&redirect_uri=http://localhost/callback&grant_type=authorization_code&code=" + requestToken
                            }).success(function(e) {
                                i.resolve(e)
                            }).error(function(e, n) {
                                i.reject("Problem authenticating")
                            })["finally"](function() {
                                setTimeout(function() {
                                    c.close()
                                }, 10)
                            }))
                        }), c.addEventListener("exit", function(e) {
                            i.reject("The sign in flow was canceled")
                        })
                    } else i.reject("Could not find InAppBrowser plugin")
                } else i.reject("Cannot authenticate via a web browser");
                return i.promise
            },
            reddit: function(r, t, o) {
                var i = e.defer();
                if (window.cordova) {
                    var a = cordova.require("cordova/plugin_list").metadata;
                    if (a.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || a.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var c = window.open("https://ssl.reddit.com/api/v1/authorize?client_id=" + r + "&redirect_uri=http://localhost/callback&duration=permanent&state=ngcordovaoauth&scope=" + o.join(",") + "&response_type=code", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        c.addEventListener("loadstart", function(e) {
                            0 === e.url.indexOf("http://localhost/callback") && (requestToken = e.url.split("code=")[1], n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n.defaults.headers.post.Authorization = "Basic " + btoa(r + ":" + t), n({
                                method: "post",
                                url: "https://ssl.reddit.com/api/v1/access_token",
                                data: "redirect_uri=http://localhost/callback&grant_type=authorization_code&code=" + requestToken
                            }).success(function(e) {
                                i.resolve(e)
                            }).error(function(e, n) {
                                i.reject("Problem authenticating")
                            })["finally"](function() {
                                setTimeout(function() {
                                    c.close()
                                }, 10)
                            }))
                        }), c.addEventListener("exit", function(e) {
                            i.reject("The sign in flow was canceled")
                        })
                    } else i.reject("Could not find InAppBrowser plugin")
                } else i.reject("Cannot authenticate via a web browser");
                return i.promise
            },
            twitter: function(t, o, i) {
                var a = e.defer();
                if (window.cordova) {
                    var c = cordova.require("cordova/plugin_list").metadata;
                    if (c.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || c.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var s = "http://localhost/callback";
                        if (void 0 !== i && i.hasOwnProperty("redirect_uri") && (s = i.redirect_uri), "undefined" != typeof jsSHA) {
                            var u = {
                                    oauth_consumer_key: t,
                                    oauth_nonce: r.createNonce(10),
                                    oauth_signature_method: "HMAC-SHA1",
                                    oauth_timestamp: Math.round((new Date).getTime() / 1e3),
                                    oauth_version: "1.0"
                                },
                                l = r.createSignature("POST", "https://api.twitter.com/oauth/request_token", u, {
                                    oauth_callback: s
                                }, o);
                            n({
                                method: "post",
                                url: "https://api.twitter.com/oauth/request_token",
                                headers: {
                                    Authorization: l.authorization_header,
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                data: "oauth_callback=" + encodeURIComponent(s)
                            }).success(function(e) {
                                for (var t = e.split("&"), i = {}, c = 0; c < t.length; c++) i[t[c].split("=")[0]] = t[c].split("=")[1];
                                i.hasOwnProperty("oauth_token") === !1 && a.reject("Oauth request token was not received");
                                var l = window.open("https://api.twitter.com/oauth/authenticate?oauth_token=" + i.oauth_token, "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                                l.addEventListener("loadstart", function(e) {
                                    if (0 === e.url.indexOf(s)) {
                                        for (var t = e.url.split("?")[1], i = t.split("&"), c = {}, d = 0; d < i.length; d++) c[i[d].split("=")[0]] = i[d].split("=")[1];
                                        c.hasOwnProperty("oauth_verifier") === !1 && a.reject("Browser authentication failed to complete.  No oauth_verifier was returned"), delete u.oauth_signature, u.oauth_token = c.oauth_token;
                                        var f = r.createSignature("POST", "https://api.twitter.com/oauth/access_token", u, {
                                            oauth_verifier: c.oauth_verifier
                                        }, o);
                                        n({
                                            method: "post",
                                            url: "https://api.twitter.com/oauth/access_token",
                                            headers: {
                                                Authorization: f.authorization_header
                                            },
                                            params: {
                                                oauth_verifier: c.oauth_verifier
                                            }
                                        }).success(function(e) {
                                            for (var n = e.split("&"), r = {}, t = 0; t < n.length; t++) r[n[t].split("=")[0]] = n[t].split("=")[1];
                                            r.hasOwnProperty("oauth_token_secret") === !1 && a.reject("Oauth access token was not received"), a.resolve(r)
                                        }).error(function(e) {
                                            a.reject(e)
                                        })["finally"](function() {
                                            setTimeout(function() {
                                                l.close()
                                            }, 10)
                                        })
                                    }
                                }), l.addEventListener("exit", function(e) {
                                    a.reject("The sign in flow was canceled")
                                })
                            }).error(function(e) {
                                a.reject(e)
                            })
                        } else a.reject("Missing jsSHA JavaScript library")
                    } else a.reject("Could not find InAppBrowser plugin")
                } else a.reject("Cannot authenticate via a web browser");
                return a.promise
            },
            meetup: function(n, r) {
                var t = e.defer();
                if (window.cordova) {
                    var o = cordova.require("cordova/plugin_list").metadata;
                    if (o.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || o.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var i = "http://localhost/callback";
                        void 0 !== r && r.hasOwnProperty("redirect_uri") && (i = r.redirect_uri);
                        var a = window.open("https://secure.meetup.com/oauth2/authorize/?client_id=" + n + "&redirect_uri=" + i + "&response_type=token", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        a.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(i)) {
                                a.removeEventListener("exit", function(e) {}), a.close();
                                for (var n = e.url.split("#")[1], r = n.split("&"), o = {}, c = 0; c < r.length; c++) o[r[c].split("=")[0]] = r[c].split("=")[1];
                                void 0 !== o.access_token && null !== o.access_token ? t.resolve(o) : t.reject("Problem authenticating")
                            }
                        }), a.addEventListener("exit", function(e) {
                            t.reject("The sign in flow was canceled")
                        })
                    } else t.reject("Could not find InAppBrowser plugin")
                } else t.reject("Cannot authenticate via a web browser");
                return t.promise
            },
            salesforce: function(n, r) {
                var t = "http://localhost/callback",
                    o = function(e, n, r) {
                        return e + "services/oauth2/authorize?display=touch&response_type=token&client_id=" + escape(n) + "&redirect_uri=" + escape(r)
                    },
                    i = function(e, n) {
                        return e.substr(0, n.length) === n
                    },
                    a = e.defer();
                if (window.cordova) {
                    var c = cordova.require("cordova/plugin_list").metadata;
                    if (c.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || c.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var s = window.open(o(n, r, t), "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        s.addEventListener("loadstart", function(e) {
                            if (i(e.url, t)) {
                                var n = {},
                                    r = e.url.split("#")[1];
                                if (r) {
                                    var o = r.split("&");
                                    for (var c in o) {
                                        var u = o[c].split("=");
                                        n[u[0]] = unescape(u[1])
                                    }
                                }
                                "undefined" == typeof n || "undefined" == typeof n.access_token ? a.reject("Problem authenticating") : a.resolve(n), setTimeout(function() {
                                    s.close()
                                }, 10)
                            }
                        }), s.addEventListener("exit", function(e) {
                            a.reject("The sign in flow was canceled")
                        })
                    } else a.reject("Could not find InAppBrowser plugin")
                } else a.reject("Cannot authenticate via a web browser");
                return a.promise
            },
            strava: function(r, t, o) {
                var i = e.defer();
                if (window.cordova) {
                    var a = cordova.require("cordova/plugin_list").metadata;
                    if (a.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || a.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var c = window.open("https://www.strava.com/oauth/authorize?client_id=" + r + "&redirect_uri=http://localhost/callback&scope=" + o.join(",") + "&response_type=code&approval_prompt=force", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        c.addEventListener("loadstart", function(e) {
                            0 === e.url.indexOf("http://localhost/callback") && (requestToken = e.url.split("code=")[1], n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n({
                                method: "post",
                                url: "https://www.strava.com/oauth/token",
                                data: "client_id=" + r + "&client_secret=" + t + "&code=" + requestToken
                            }).success(function(e) {
                                i.resolve(e)
                            }).error(function(e, n) {
                                i.reject("Problem authenticating")
                            })["finally"](function() {
                                setTimeout(function() {
                                    c.close()
                                }, 10)
                            }))
                        }), c.addEventListener("exit", function(e) {
                            i.reject("The sign in flow was canceled")
                        })
                    } else i.reject("Could not find InAppBrowser plugin")
                } else i.reject("Cannot authenticate via a web browser");
                return i.promise
            },
            withings: function(t, o) {
                var i = e.defer();
                if (window.cordova) {
                    var a = cordova.require("cordova/plugin_list").metadata;
                    if (a.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || a.hasOwnProperty("org.apache.cordova.inappbrowser") === !0)
                        if ("undefined" != typeof jsSHA) {
                            var c = r.generateOauthParametersInstance(t);
                            c.oauth_callback = "http://localhost/callback";
                            var s = "https://oauth.withings.com/account/request_token",
                                u = r.createSignature("GET", s, {}, c, o);
                            c.oauth_signature = u.signature;
                            var l = r.generateUrlParameters(c);
                            n({
                                method: "get",
                                url: s + "?" + l
                            }).success(function(e) {
                                var a = r.parseResponseParameters(e);
                                a.hasOwnProperty("oauth_token") === !1 && i.reject("Oauth request token was not received");
                                var c = r.generateOauthParametersInstance(t);
                                c.oauth_token = a.oauth_token;
                                var s = a.oauth_token_secret,
                                    u = "https://oauth.withings.com/account/authorize",
                                    l = r.createSignature("GET", u, {}, c, o);
                                c.oauth_signature = l.signature;
                                var d = r.generateUrlParameters(c),
                                    f = window.open(u + "?" + d, "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                                f.addEventListener("loadstart", function(e) {
                                    if (0 === e.url.indexOf("http://localhost/callback")) {
                                        var c = e.url.split("?")[1];
                                        a = r.parseResponseParameters(c), a.hasOwnProperty("oauth_verifier") === !1 && i.reject("Browser authentication failed to complete.  No oauth_verifier was returned");
                                        var u = r.generateOauthParametersInstance(t);
                                        u.oauth_token = a.oauth_token;
                                        var l = "https://oauth.withings.com/account/access_token",
                                            d = r.createSignature("GET", l, {}, u, o, s);
                                        u.oauth_signature = d.signature;
                                        var p = r.generateUrlParameters(u);
                                        n({
                                            method: "get",
                                            url: l + "?" + p
                                        }).success(function(e) {
                                            var n = r.parseResponseParameters(e);
                                            n.hasOwnProperty("oauth_token_secret") === !1 && i.reject("Oauth access token was not received"), i.resolve(n)
                                        }).error(function(e) {
                                            i.reject(e)
                                        })["finally"](function() {
                                            setTimeout(function() {
                                                f.close()
                                            }, 10)
                                        })
                                    }
                                }), f.addEventListener("exit", function(e) {
                                    i.reject("The sign in flow was canceled")
                                })
                            }).error(function(e) {
                                i.reject(e)
                            })
                        } else i.reject("Missing jsSHA JavaScript library");
                    else i.reject("Could not find InAppBrowser plugin")
                } else i.reject("Cannot authenticate via a web browser");
                return i.promise
            },
            foursquare: function(n, r) {
                var t = e.defer();
                if (window.cordova) {
                    var o = cordova.require("cordova/plugin_list").metadata;
                    if (o.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || o.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var i = "http://localhost/callback";
                        void 0 !== r && r.hasOwnProperty("redirect_uri") && (i = r.redirect_uri);
                        var a = window.open("https://foursquare.com/oauth2/authenticate?client_id=" + n + "&redirect_uri=" + i + "&response_type=token", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        a.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(i)) {
                                a.removeEventListener("exit", function(e) {}), a.close();
                                for (var n = e.url.split("#")[1], r = n.split("&"), o = [], c = 0; c < r.length; c++) o[r[c].split("=")[0]] = r[c].split("=")[1];
                                if (void 0 !== o.access_token && null !== o.access_token) {
                                    var s = {
                                        access_token: o.access_token,
                                        expires_in: o.expires_in
                                    };
                                    t.resolve(s)
                                } else t.reject("Problem authenticating")
                            }
                        }), a.addEventListener("exit", function(e) {
                            t.reject("The sign in flow was canceled")
                        })
                    } else t.reject("Could not find InAppBrowser plugin")
                } else t.reject("Cannot authenticate via a web browser");
                return t.promise
            },
            magento: function(t, o, i) {
                var a = e.defer();
                if (window.cordova) {
                    var c = cordova.require("cordova/plugin_list").metadata;
                    if (c.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || c.hasOwnProperty("org.apache.cordova.inappbrowser") === !0)
                        if ("undefined" != typeof jsSHA) {
                            var s = {
                                    oauth_callback: "http://localhost/callback",
                                    oauth_consumer_key: o,
                                    oauth_nonce: r.createNonce(5),
                                    oauth_signature_method: "HMAC-SHA1",
                                    oauth_timestamp: Math.round((new Date).getTime() / 1e3),
                                    oauth_version: "1.0"
                                },
                                u = r.createSignature("POST", t + "/oauth/initiate", s, {
                                    oauth_callback: "http://localhost/callback"
                                }, i);
                            n.defaults.headers.post.Authorization = u.authorization_header, n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n({
                                method: "post",
                                url: t + "/oauth/initiate",
                                data: "oauth_callback=http://localhost/callback"
                            }).success(function(e) {
                                for (var o = e.split("&"), c = {}, u = 0; u < o.length; u++) c[o[u].split("=")[0]] = o[u].split("=")[1];
                                c.hasOwnProperty("oauth_token") === !1 && a.reject("Oauth request token was not received");
                                var l = c.oauth_token_secret,
                                    d = window.open(t + "/oauth/authorize?oauth_token=" + c.oauth_token, "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                                d.addEventListener("loadstart", function(e) {
                                    if (0 === e.url.indexOf("http://localhost/callback")) {
                                        for (var o = e.url.split("?")[1], c = o.split("&"), u = {}, f = 0; f < c.length; f++) u[c[f].split("=")[0]] = c[f].split("=")[1];
                                        u.hasOwnProperty("oauth_verifier") === !1 && a.reject("Browser authentication failed to complete.  No oauth_verifier was returned"), delete s.oauth_signature, delete s.oauth_callback, s.oauth_token = u.oauth_token, s.oauth_nonce = r.createNonce(5), s.oauth_verifier = u.oauth_verifier;
                                        var p = r.createSignature("POST", t + "/oauth/token", s, {}, i, l);
                                        n.defaults.headers.post.Authorization = p.authorization_header, n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n({
                                            method: "post",
                                            url: t + "/oauth/token"
                                        }).success(function(e) {
                                            for (var n = e.split("&"), r = {}, t = 0; t < n.length; t++) r[n[t].split("=")[0]] = n[t].split("=")[1];
                                            r.hasOwnProperty("oauth_token_secret") === !1 && a.reject("Oauth access token was not received"), a.resolve(r)
                                        }).error(function(e) {
                                            a.reject(e)
                                        })["finally"](function() {
                                            setTimeout(function() {
                                                d.close()
                                            }, 10)
                                        })
                                    }
                                }), d.addEventListener("exit", function(e) {
                                    a.reject("The sign in flow was canceled")
                                })
                            }).error(function(e) {
                                a.reject(e)
                            })
                        } else a.reject("Missing jsSHA JavaScript library");
                    else a.reject("Could not find InAppBrowser plugin")
                } else a.reject("Cannot authenticate via a web browser");
                return a.promise
            },
            vkontakte: function(n, r) {
                var t = e.defer();
                if (window.cordova) {
                    var o = cordova.require("cordova/plugin_list").metadata;
                    if (o.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || o.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var i = window.open("https://oauth.vk.com/authorize?client_id=" + n + "&redirect_uri=http://oauth.vk.com/blank.html&response_type=token&scope=" + r.join(",") + "&display=touch&response_type=token", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        i.addEventListener("loadstart", function(e) {
                            var n = e.url.split("#");
                            if ("https://oauth.vk.com/blank.html" == n[0] || "http://oauth.vk.com/blank.html" == n[0]) {
                                i.removeEventListener("exit", function(e) {}), i.close();
                                for (var r = e.url.split("#")[1], o = r.split("&"), a = [], c = 0; c < o.length; c++) a[o[c].split("=")[0]] = o[c].split("=")[1];
                                if (void 0 !== a.access_token && null !== a.access_token) {
                                    var s = {
                                        access_token: a.access_token,
                                        expires_in: a.expires_in
                                    };
                                    void 0 !== a.email && null !== a.email && (s.email = a.email), t.resolve(s)
                                } else t.reject("Problem authenticating")
                            }
                        }), i.addEventListener("exit", function(e) {
                            t.reject("The sign in flow was canceled")
                        })
                    } else t.reject("Could not find InAppBrowser plugin")
                } else t.reject("Cannot authenticate via a web browser");
                return t.promise
            },
            odnoklassniki: function(n, r) {
                var t = e.defer();
                if (window.cordova) {
                    var o = cordova.require("cordova/plugin_list").metadata;
                    if (o.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || o.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var i = window.open("http://www.odnoklassniki.ru/oauth/authorize?client_id=" + n + "&scope=" + r.join(",") + "&response_type=token&redirect_uri=http://localhost/callback&layout=m", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        i.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf("http://localhost/callback")) {
                                for (var n = e.url.split("#")[1], r = n.split("&"), o = [], a = 0; a < r.length; a++) o[r[a].split("=")[0]] = r[a].split("=")[1];
                                void 0 !== o.access_token && null !== o.access_token ? t.resolve({
                                    access_token: o.access_token,
                                    session_secret_key: o.session_secret_key
                                }) : t.reject("Problem authenticating"), setTimeout(function() {
                                    i.close()
                                }, 10)
                            }
                        }), i.addEventListener("exit", function(e) {
                            t.reject("The sign in flow was canceled")
                        })
                    } else t.reject("Could not find InAppBrowser plugin")
                } else t.reject("Cannot authenticate via a web browser");
                return t.promise
            },
            imgur: function(n, r) {
                var t = e.defer();
                if (window.cordova) {
                    var o = cordova.require("cordova/plugin_list").metadata;
                    if (o.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || o.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var i = "http://localhost/callback";
                        void 0 !== r && r.hasOwnProperty("redirect_uri") && (i = r.redirect_uri);
                        var a = window.open("https://api.imgur.com/oauth2/authorize?client_id=" + n + "&response_type=token", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        a.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(i)) {
                                a.removeEventListener("exit", function(e) {}), a.close();
                                for (var n = e.url.split("#")[1], r = n.split("&"), o = [], c = 0; c < r.length; c++) o[r[c].split("=")[0]] = r[c].split("=")[1];
                                void 0 !== o.access_token && null !== o.access_token ? t.resolve({
                                    access_token: o.access_token,
                                    expires_in: o.expires_in,
                                    account_username: o.account_username
                                }) : t.reject("Problem authenticating")
                            }
                        }), a.addEventListener("exit", function(e) {
                            t.reject("The sign in flow was canceled")
                        })
                    } else t.reject("Could not find InAppBrowser plugin")
                } else t.reject("Cannot authenticate via a web browser");
                return t.promise
            },
            spotify: function(n, r, t) {
                var o = e.defer();
                if (window.cordova) {
                    var i = cordova.require("cordova/plugin_list").metadata;
                    if (i.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || i.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var a = "http://localhost/callback";
                        void 0 !== t && t.hasOwnProperty("redirect_uri") && (a = t.redirect_uri);
                        var c = window.open("https://accounts.spotify.com/authorize?client_id=" + n + "&redirect_uri=" + a + "&response_type=token&scope=" + r.join(" "), "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        c.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(a)) {
                                c.removeEventListener("exit", function(e) {}), c.close();
                                for (var n = e.url.split("#")[1], r = n.split("&"), t = [], i = 0; i < r.length; i++) t[r[i].split("=")[0]] = r[i].split("=")[1];
                                void 0 !== t.access_token && null !== t.access_token ? o.resolve({
                                    access_token: t.access_token,
                                    expires_in: t.expires_in,
                                    account_username: t.account_username
                                }) : o.reject("Problem authenticating")
                            }
                        }), c.addEventListener("exit", function(e) {
                            o.reject("The sign in flow was canceled")
                        })
                    } else o.reject("Could not find InAppBrowser plugin")
                } else o.reject("Cannot authenticate via a web browser");
                return o.promise
            },
            uber: function(n, r, t) {
                var o = e.defer();
                if (window.cordova) {
                    var i = cordova.require("cordova/plugin_list").metadata;
                    if (i.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || i.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var a = "http://localhost/callback";
                        void 0 !== t && t.hasOwnProperty("redirect_uri") && (a = t.redirect_uri);
                        var c = window.open("https://login.uber.com/oauth/authorize?client_id=" + n + "&redirect_uri=" + a + "&response_type=token&scope=" + r.join(" "), "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        c.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(a)) {
                                c.removeEventListener("exit", function(e) {}), c.close();
                                for (var n = e.url.split("#")[1], r = n.split("&"), t = [], i = 0; i < r.length; i++) t[r[i].split("=")[0]] = r[i].split("=")[1];
                                void 0 !== t.access_token && null !== t.access_token ? o.resolve({
                                    access_token: t.access_token,
                                    token_type: t.token_type,
                                    expires_in: t.expires_in,
                                    scope: t.scope
                                }) : o.reject("Problem authenticating")
                            }
                        }), c.addEventListener("exit", function(e) {
                            o.reject("The sign in flow was canceled")
                        })
                    } else o.reject("Could not find InAppBrowser plugin")
                } else o.reject("Cannot authenticate via a web browser");
                return o.promise
            },
            windowsLive: function(n, r, t) {
                var o = e.defer();
                if (window.cordova) {
                    var i = cordova.require("cordova/plugin_list").metadata;
                    if (i.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || i.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var a = "https://login.live.com/oauth20_desktop.srf";
                        void 0 !== t && t.hasOwnProperty("redirect_uri") && (a = t.redirect_uri);
                        var c = window.open("https://login.live.com/oauth20_authorize.srf?client_id=" + n + "&scope=" + r.join(",") + "&response_type=token&display=touch&redirect_uri=" + a, "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        c.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(a)) {
                                c.removeEventListener("exit", function(e) {}), c.close();
                                for (var n = e.url.split("#")[1], r = n.split("&"), t = [], i = 0; i < r.length; i++) t[r[i].split("=")[0]] = r[i].split("=")[1];
                                void 0 !== t.access_token && null !== t.access_token ? o.resolve({
                                    access_token: t.access_token,
                                    expires_in: t.expires_in
                                }) : o.reject("Problem authenticating")
                            }
                        }), c.addEventListener("exit", function(e) {
                            o.reject("The sign in flow was canceled")
                        })
                    } else o.reject("Could not find InAppBrowser plugin")
                } else o.reject("Cannot authenticate via a web browser");
                return o.promise
            },
            yammer: function(n, r) {
                var t = e.defer();
                if (window.cordova) {
                    var o = cordova.require("cordova/plugin_list").metadata;
                    if (o.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || o.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var i = "http://localhost/callback";
                        void 0 !== r && r.hasOwnProperty("redirect_uri") && (i = r.redirect_uri);
                        var a = window.open("https://www.yammer.com/dialog/oauth?client_id=" + n + "&redirect_uri=" + i + "&response_type=token", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        a.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(i)) {
                                a.removeEventListener("exit", function(e) {}), a.close();
                                for (var n = e.url.split("#")[1], r = n.split("&"), o = [], c = 0; c < r.length; c++) o[r[c].split("=")[0]] = r[c].split("=")[1];
                                void 0 !== o.access_token && null !== o.access_token ? t.resolve({
                                    access_token: o.access_token
                                }) : t.reject("Problem authenticating")
                            }
                        }), a.addEventListener("exit", function(e) {
                            t.reject("The sign in flow was canceled")
                        })
                    } else t.reject("Could not find InAppBrowser plugin")
                } else t.reject("Cannot authenticate via a web browser");
                return t.promise
            },
            venmo: function(n, r, t) {
                var o = e.defer();
                if (window.cordova) {
                    var i = cordova.require("cordova/plugin_list").metadata;
                    if (i.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || i.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var a = "http://localhost/callback";
                        void 0 !== t && t.hasOwnProperty("redirect_uri") && (a = t.redirect_uri);
                        var c = window.open("https://api.venmo.com/v1/oauth/authorize?client_id=" + n + "&redirect_uri=" + a + "&response_type=token&scope=" + r.join(" "), "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        c.addEventListener("loadstart", function(e) {
                            if (0 === e.url.indexOf(a)) {
                                c.removeEventListener("exit", function(e) {}), c.close();
                                for (var n = e.url.split("#")[1], r = n.split("&"), t = [], i = 0; i < r.length; i++) t[r[i].split("=")[0]] = r[i].split("=")[1];
                                void 0 !== t.access_token && null !== t.access_token ? o.resolve({
                                    access_token: t.access_token,
                                    expires_in: t.expires_in
                                }) : o.reject("Problem authenticating")
                            }
                        }), c.addEventListener("exit", function(e) {
                            o.reject("The sign in flow was canceled")
                        })
                    } else o.reject("Could not find InAppBrowser plugin")
                } else o.reject("Cannot authenticate via a web browser");
                return o.promise
            },
            stripe: function(r, t, o, i) {
                var a = e.defer();
                if (window.cordova) {
                    var c = cordova.require("cordova/plugin_list").metadata;
                    if (c.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || c.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var s = "http://localhost/callback";
                        void 0 !== i && i.hasOwnProperty("redirect_uri") && (s = i.redirect_uri);
                        var u = window.open("https://connect.stripe.com/oauth/authorize?client_id=" + r + "&redirect_uri=" + s + "&scope=" + o + "&response_type=code", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        u.addEventListener("loadstart", function(e) {
                            0 === e.url.indexOf("http://localhost/callback") && (requestToken = e.url.split("code=")[1], n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n({
                                method: "post",
                                url: "https://connect.stripe.com/oauth/token",
                                data: "client_id=" + r + "&client_secret=" + t + "&redirect_uri=" + s + "&grant_type=authorization_code&code=" + requestToken
                            }).success(function(e) {
                                a.resolve(e)
                            }).error(function(e, n) {
                                a.reject("Problem authenticating")
                            })["finally"](function() {
                                setTimeout(function() {
                                    u.close()
                                }, 10)
                            }))
                        }), u.addEventListener("exit", function(e) {
                            a.reject("The sign in flow was canceled")
                        })
                    } else a.reject("Could not find InAppBrowser plugin")
                } else a.reject("Cannot authenticate via a web browser");
                return a.promise
            },
            rally: function(r, t, o, i) {
                var a = e.defer();
                if (window.cordova) {
                    var c = cordova.require("cordova/plugin_list").metadata;
                    if (c.hasOwnProperty("cordova-plugin-inappbrowser") === !0 || c.hasOwnProperty("org.apache.cordova.inappbrowser") === !0) {
                        var s = "http://localhost/callback";
                        void 0 !== i && i.hasOwnProperty("redirect_uri") && (s = i.redirect_uri);
                        var u = window.open("https://rally1.rallydev.com/login/oauth2/auth?client_id=" + r + "&redirect_uri=" + s + "&scope=" + o + "&response_type=code", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
                        u.addEventListener("loadstart", function(e) {
                            0 === e.url.indexOf("http://localhost/callback") && (requestToken = e.url.split("code=")[1], n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n({
                                method: "post",
                                url: "https://rally1.rallydev.com/login/oauth2/auth",
                                data: "client_id=" + r + "&client_secret=" + t + "&redirect_uri=" + s + "&grant_type=authorization_code&code=" + requestToken
                            }).success(function(e) {
                                a.resolve(e)
                            }).error(function(e, n) {
                                a.reject("Problem authenticating")
                            })["finally"](function() {
                                setTimeout(function() {
                                    u.close()
                                }, 10)
                            }))
                        }), u.addEventListener("exit", function(e) {
                            a.reject("The sign in flow was canceled")
                        })
                    } else a.reject("Could not find InAppBrowser plugin")
                } else a.reject("Cannot authenticate via a web browser");
                return a.promise
            }
        }
    }]), angular.module("ngCordova.plugins.oauthUtility", []).factory("$cordovaOauthUtility", ["$q", function(e) {
        return {
            createSignature: function(e, n, r, t, o, i) {
                if ("undefined" != typeof jsSHA) {
                    for (var a = angular.copy(r), c = Object.keys(t), s = 0; s < c.length; s++) a[c[s]] = encodeURIComponent(t[c[s]]);
                    var u = e + "&" + encodeURIComponent(n) + "&",
                        l = Object.keys(a).sort();
                    for (s = 0; s < l.length; s++) u += s == l.length - 1 ? encodeURIComponent(l[s] + "=" + a[l[s]]) : encodeURIComponent(l[s] + "=" + a[l[s]] + "&");
                    var d = new jsSHA(u, "TEXT"),
                        f = "";
                    i && (f = encodeURIComponent(i)), r.oauth_signature = encodeURIComponent(d.getHMAC(encodeURIComponent(o) + "&" + f, "TEXT", "SHA-1", "B64"));
                    var p = Object.keys(r),
                        v = "OAuth ";
                    for (s = 0; s < p.length; s++) v += s == p.length - 1 ? p[s] + '="' + r[p[s]] + '"' : p[s] + '="' + r[p[s]] + '",';
                    return {
                        signature_base_string: u,
                        authorization_header: v,
                        signature: r.oauth_signature
                    }
                }
                return "Missing jsSHA JavaScript library"
            },
            createNonce: function(e) {
                for (var n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = 0; e > t; t++) n += r.charAt(Math.floor(Math.random() * r.length));
                return n
            },
            generateUrlParameters: function(e) {
                var n = Object.keys(e);
                n.sort();
                for (var r = "", t = "", o = 0; o < n.length; o++) r += t + n[o] + "=" + e[n[o]], t = "&";
                return r
            },
            parseResponseParameters: function(e) {
                if (e.split) {
                    for (var n = e.split("&"), r = {}, t = 0; t < n.length; t++) r[n[t].split("=")[0]] = n[t].split("=")[1];
                    return r
                }
                return {}
            },
            generateOauthParametersInstance: function(e) {
                var n = new jsSHA(Math.round((new Date).getTime() / 1e3), "TEXT"),
                    r = {
                        oauth_consumer_key: e,
                        oauth_nonce: n.getHash("SHA-1", "HEX"),
                        oauth_signature_method: "HMAC-SHA1",
                        oauth_timestamp: Math.round((new Date).getTime() / 1e3),
                        oauth_version: "1.0"
                    };
                return r
            }
        }
    }]), angular.module("ngCordova.plugins.pinDialog", []).factory("$cordovaPinDialog", ["$q", "$window", function(e, n) {
        return {
            prompt: function(r, t, o) {
                var i = e.defer();
                return n.plugins.pinDialog.prompt(r, function(e) {
                    i.resolve(e)
                }, t, o), i.promise
            }
        }
    }]), angular.module("ngCordova.plugins.prefs", []).factory("$cordovaPreferences", ["$window", "$q", function(e, n) {
        return {
            set: function(r, t) {
                var o = n.defer();
                return e.appgiraffe.plugins.applicationPreferences.set(r, t, function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            },
            get: function(r) {
                var t = n.defer();
                return e.appgiraffe.plugins.applicationPreferences.get(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.printer", []).factory("$cordovaPrinter", ["$q", "$window", function(e, n) {
        return {
            isAvailable: function() {
                var r = e.defer();
                return n.plugin.printer.isAvailable(function(e) {
                    r.resolve(e)
                }), r.promise
            },
            print: function(r, t) {
                var o = e.defer();
                return n.plugin.printer.print(r, t, function() {
                    o.resolve()
                }), o.promise
            }
        }
    }]), angular.module("ngCordova.plugins.progressIndicator", []).factory("$cordovaProgress", ["$q", function(e) {
        return {
            show: function(e) {
                var n = e || "Please wait...";
                return ProgressIndicator.show(n)
            },
            showSimple: function(e) {
                var n = e || !1;
                return ProgressIndicator.showSimple(n)
            },
            showSimpleWithLabel: function(e, n) {
                var r = e || !1,
                    t = n || "Loading...";
                return ProgressIndicator.showSimpleWithLabel(r, t)
            },
            showSimpleWithLabelDetail: function(e, n, r) {
                var t = e || !1,
                    o = n || "Loading...",
                    i = r || "Please wait";
                return ProgressIndicator.showSimpleWithLabelDetail(t, o, i)
            },
            showDeterminate: function(e, n) {
                var r = e || !1,
                    t = n || 5e4;
                return ProgressIndicator.showDeterminate(r, t)
            },
            showDeterminateWithLabel: function(e, n, r) {
                var t = e || !1,
                    o = n || 5e4,
                    i = r || "Loading...";
                return ProgressIndicator.showDeterminateWithLabel(t, o, i)
            },
            showAnnular: function(e, n) {
                var r = e || !1,
                    t = n || 5e4;
                return ProgressIndicator.showAnnular(r, t)
            },
            showAnnularWithLabel: function(e, n, r) {
                var t = e || !1,
                    o = n || 5e4,
                    i = r || "Loading...";
                return ProgressIndicator.showAnnularWithLabel(t, o, i)
            },
            showBar: function(e, n) {
                var r = e || !1,
                    t = n || 5e4;
                return ProgressIndicator.showBar(r, t)
            },
            showBarWithLabel: function(e, n, r) {
                var t = e || !1,
                    o = n || 5e4,
                    i = r || "Loading...";
                return ProgressIndicator.showBarWithLabel(t, o, i)
            },
            showSuccess: function(e, n) {
                var r = e || !1,
                    t = n || "Success";
                return ProgressIndicator.showSuccess(r, t)
            },
            showText: function(e, n, r) {
                var t = e || !1,
                    o = n || "Warning",
                    i = r || "center";
                return ProgressIndicator.showText(t, o, i)
            },
            hide: function() {
                return ProgressIndicator.hide()
            }
        }
    }]), angular.module("ngCordova.plugins.push", []).factory("$cordovaPush", ["$q", "$window", "$rootScope", "$timeout", function(e, n, r, t) {
        return {
            onNotification: function(e) {
                t(function() {
                    r.$broadcast("$cordovaPush:notificationReceived", e)
                })
            },
            register: function(r) {
                var t, o = e.defer();
                return void 0 !== r && void 0 === r.ecb && (t = null === document.querySelector("[ng-app]") ? "document.body" : "document.querySelector('[ng-app]')", r.ecb = "angular.element(" + t + ").injector().get('$cordovaPush').onNotification"), n.plugins.pushNotification.register(function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }, r), o.promise
            },
            unregister: function(r) {
                var t = e.defer();
                return n.plugins.pushNotification.unregister(function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }, r), t.promise
            },
            setBadgeNumber: function(r) {
                var t = e.defer();
                return n.plugins.pushNotification.setApplicationIconBadgeNumber(function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }, r), t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.sms", []).factory("$cordovaSms", ["$q", function(e) {
        return {
            send: function(n, r, t) {
                var o = e.defer();
                return sms.send(n, r, t, function(e) {
                    o.resolve(e)
                }, function(e) {
                    o.reject(e)
                }), o.promise
            }
        }
    }]), angular.module("ngCordova.plugins.socialSharing", []).factory("$cordovaSocialSharing", ["$q", "$window", function(e, n) {
        return {
            share: function(r, t, o, i) {
                var a = e.defer();
                return t = t || null, o = o || null, i = i || null, n.plugins.socialsharing.share(r, t, o, i, function() {
                    a.resolve(!0)
                }, function() {
                    a.reject(!1)
                }), a.promise
            },
            shareViaTwitter: function(r, t, o) {
                var i = e.defer();
                return t = t || null, o = o || null, n.plugins.socialsharing.shareViaTwitter(r, t, o, function() {
                    i.resolve(!0)
                }, function() {
                    i.reject(!1)
                }), i.promise
            },
            shareViaWhatsApp: function(r, t, o) {
                var i = e.defer();
                return t = t || null, o = o || null, n.plugins.socialsharing.shareViaWhatsApp(r, t, o, function() {
                    i.resolve(!0)
                }, function() {
                    i.reject(!1)
                }), i.promise
            },
            shareViaFacebook: function(r, t, o) {
                var i = e.defer();
                return r = r || null, t = t || null, o = o || null, n.plugins.socialsharing.shareViaFacebook(r, t, o, function() {
                    i.resolve(!0)
                }, function() {
                    i.reject(!1)
                }), i.promise
            },
            shareViaFacebookWithPasteMessageHint: function(r, t, o, i) {
                var a = e.defer();
                return t = t || null, o = o || null, n.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(r, t, o, i, function() {
                    a.resolve(!0)
                }, function() {
                    a.reject(!1)
                }), a.promise
            },
            shareViaSMS: function(r, t) {
                var o = e.defer();
                return n.plugins.socialsharing.shareViaSMS(r, t, function() {
                    o.resolve(!0)
                }, function() {
                    o.reject(!1)
                }), o.promise
            },
            shareViaEmail: function(r, t, o, i, a, c) {
                var s = e.defer();
                return o = o || null, i = i || null, a = a || null, c = c || null, n.plugins.socialsharing.shareViaEmail(r, t, o, i, a, c, function() {
                    s.resolve(!0)
                }, function() {
                    s.reject(!1)
                }), s.promise
            },
            shareVia: function(r, t, o, i, a) {
                var c = e.defer();
                return t = t || null, o = o || null, i = i || null, a = a || null, n.plugins.socialsharing.shareVia(r, t, o, i, a, function() {
                    c.resolve(!0)
                }, function() {
                    c.reject(!1)
                }), c.promise
            },
            canShareViaEmail: function() {
                var r = e.defer();
                return n.plugins.socialsharing.canShareViaEmail(function() {
                    r.resolve(!0)
                }, function() {
                    r.reject(!1)
                }), r.promise
            },
            canShareVia: function(r, t, o, i, a) {
                var c = e.defer();
                return n.plugins.socialsharing.canShareVia(r, t, o, i, a, function(e) {
                    c.resolve(e)
                }, function(e) {
                    c.reject(e)
                }), c.promise
            },
            available: function() {
                var n = e.defer();
                window.plugins.socialsharing.available(function(e) {
                    e ? n.resolve() : n.reject()
                })
            }
        }
    }]), angular.module("ngCordova.plugins.spinnerDialog", []).factory("$cordovaSpinnerDialog", ["$window", function(e) {
        return {
            show: function(n, r, t) {
                return t = t || !1, e.plugins.spinnerDialog.show(n, r, t)
            },
            hide: function() {
                return e.plugins.spinnerDialog.hide()
            }
        }
    }]), angular.module("ngCordova.plugins.splashscreen", []).factory("$cordovaSplashscreen", [function() {
        return {
            hide: function() {
                return navigator.splashscreen.hide()
            },
            show: function() {
                return navigator.splashscreen.show()
            }
        }
    }]), angular.module("ngCordova.plugins.sqlite", []).factory("$cordovaSQLite", ["$q", "$window", function(e, n) {
        return {
            openDB: function(e, r) {
                return "undefined" == typeof r && (r = 0), n.sqlitePlugin.openDatabase({
                    name: e,
                    bgType: r
                })
            },
            execute: function(n, r, t) {
                var o = e.defer();
                return n.transaction(function(e) {
                    e.executeSql(r, t, function(e, n) {
                        o.resolve(n)
                    }, function(e, n) {
                        o.reject(n)
                    })
                }), o.promise
            },
            insertCollection: function(n, r, t) {
                var o = e.defer(),
                    i = t.slice(0);
                return n.transaction(function(e) {
                    ! function n() {
                        var t = i.splice(0, 1)[0];
                        try {
                            e.executeSql(r, t, function(e, r) {
                                0 === i.length ? o.resolve(r) : n()
                            }, function(e, n) {
                                o.reject(n)
                            })
                        } catch (a) {
                            o.reject(a)
                        }
                    }()
                }), o.promise
            },
            nestedExecute: function(n, r, t, o, i) {
                var a = e.defer();
                return n.transaction(function(e) {
                    e.executeSql(r, o, function(e, n) {
                        a.resolve(n), e.executeSql(t, i, function(e, n) {
                            a.resolve(n)
                        })
                    })
                }, function(e, n) {
                    a.reject(n)
                }), a.promise
            },
            deleteDB: function(r) {
                var t = e.defer();
                return n.sqlitePlugin.deleteDatabase(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            }
        }
    }]), angular.module("ngCordova.plugins.statusbar", []).factory("$cordovaStatusbar", [function() {
        return {
            overlaysWebView: function(e) {
                return StatusBar.overlaysWebView(!!e)
            },
            STYLES: {
                DEFAULT: 0,
                LIGHT_CONTENT: 1,
                BLACK_TRANSLUCENT: 2,
                BLACK_OPAQUE: 3
            },
            style: function(e) {
                switch (e) {
                    case 0:
                        return StatusBar.styleDefault();
                    case 1:
                        return StatusBar.styleLightContent();
                    case 2:
                        return StatusBar.styleBlackTranslucent();
                    case 3:
                        return StatusBar.styleBlackOpaque();
                    default:
                        return StatusBar.styleDefault()
                }
            },
            styleColor: function(e) {
                return StatusBar.backgroundColorByName(e)
            },
            styleHex: function(e) {
                return StatusBar.backgroundColorByHexString(e)
            },
            hide: function() {
                return StatusBar.hide()
            },
            show: function() {
                return StatusBar.show()
            },
            isVisible: function() {
                return StatusBar.isVisible
            }
        }
    }]), angular.module("ngCordova.plugins.toast", []).factory("$cordovaToast", ["$q", "$window", function(e, n) {
        return {
            showShortTop: function(r) {
                var t = e.defer();
                return n.plugins.toast.showShortTop(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            showShortCenter: function(r) {
                var t = e.defer();
                return n.plugins.toast.showShortCenter(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            showShortBottom: function(r) {
                var t = e.defer();
                return n.plugins.toast.showShortBottom(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            showLongTop: function(r) {
                var t = e.defer();
                return n.plugins.toast.showLongTop(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            showLongCenter: function(r) {
                var t = e.defer();
                return n.plugins.toast.showLongCenter(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            showLongBottom: function(r) {
                var t = e.defer();
                return n.plugins.toast.showLongBottom(r, function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            },
            show: function(r, t, o) {
                var i = e.defer();
                return n.plugins.toast.show(r, t, o, function(e) {
                    i.resolve(e)
                }, function(e) {
                    i.reject(e)
                }), i.promise
            }
        }
    }]), angular.module("ngCordova.plugins.touchid", []).factory("$cordovaTouchID", ["$q", function(e) {
        return {
            checkSupport: function() {
                var n = e.defer();
                return window.cordova ? touchid.checkSupport(function(e) {
                    n.resolve(e)
                }, function(e) {
                    n.reject(e)
                }) : n.reject("Not supported without cordova.js"), n.promise
            },
            authenticate: function(n) {
                var r = e.defer();
                return window.cordova ? touchid.authenticate(function(e) {
                    r.resolve(e)
                }, function(e) {
                    r.reject(e)
                }, n) : r.reject("Not supported without cordova.js"), r.promise
            }
        }
    }]), angular.module("ngCordova.plugins.vibration", []).factory("$cordovaVibration", [function() {
        return {
            vibrate: function(e) {
                return navigator.notification.vibrate(e)
            },
            vibrateWithPattern: function(e, n) {
                return navigator.notification.vibrateWithPattern(e, n)
            },
            cancelVibration: function() {
                return navigator.notification.cancelVibration()
            }
        }
    }]), angular.module("ngCordova.plugins.videoCapturePlus", []).provider("$cordovaVideoCapturePlus", [function() {
        var e = {};
        this.setLimit = function(n) {
            e.limit = n
        }, this.setMaxDuration = function(n) {
            e.duration = n
        }, this.setHighQuality = function(n) {
            e.highquality = n
        }, this.useFrontCamera = function(n) {
            e.frontcamera = n
        }, this.setPortraitOverlay = function(n) {
            e.portraitOverlay = n
        }, this.setLandscapeOverlay = function(n) {
            e.landscapeOverlay = n
        }, this.setOverlayText = function(n) {
            e.overlayText = n
        }, this.$get = ["$q", "$window", function(n, r) {
            return {
                captureVideo: function(t) {
                    var o = n.defer();
                    return r.plugins.videocaptureplus ? (r.plugins.videocaptureplus.captureVideo(o.resolve, o.reject, angular.extend({}, e, t)), o.promise) : (o.resolve(null), o.promise)
                }
            }
        }]
    }]), angular.module("ngCordova.plugins.zip", []).factory("$cordovaZip", ["$q", "$window", function(e, n) {
        return {
            unzip: function(r, t) {
                var o = e.defer();
                return n.zip.unzip(r, t, function(e) {
                    0 === e ? o.resolve() : o.reject()
                }, function(e) {
                    o.notify(e)
                }), o.promise
            }
        }
    }])
}();