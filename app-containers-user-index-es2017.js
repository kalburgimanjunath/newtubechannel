(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-containers-user-index"], {
        /***/ "./src/app/containers/user/index.ts": 
        /*!******************************************!*\
          !*** ./src/app/containers/user/index.ts ***!
          \******************************************/
        /*! exports provided: UserModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function () { return UserModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/index */ "./src/app/shared/index.ts");
            /* harmony import */ var _app_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-navbar */ "./src/app/containers/app-navbar/index.ts");
            /* harmony import */ var _playlist_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../playlist-view */ "./src/app/containers/playlist-view/index.ts");
            /* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./src/app/containers/user/user.component.ts");
            /* harmony import */ var _playlists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playlists */ "./src/app/containers/user/playlists/index.ts");
            /* harmony import */ var _user_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.guard */ "./src/app/containers/user/user.guard.ts");
            /* harmony import */ var _user_player_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-player.service */ "./src/app/containers/user/user-player.service.ts");
            /* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.routing */ "./src/app/containers/user/user.routing.ts");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            // import { PlaylistViewComponent, PlaylistResolver, PlaylistVideosResolver } from '@shared/components/playlist-view';
            var UserModule = /** @class */ (function () {
                function UserModule() {
                }
                return UserModule;
            }());
            UserModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
                    imports: [
                        _shared_index__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                        _app_navbar__WEBPACK_IMPORTED_MODULE_2__["AppNavbarModule"],
                        _playlist_view__WEBPACK_IMPORTED_MODULE_3__["PlaylistViewModule"],
                        _user_routing__WEBPACK_IMPORTED_MODULE_8__["routing"]
                    ],
                    declarations: [
                        _user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                        _playlists__WEBPACK_IMPORTED_MODULE_5__["PlaylistsComponent"]
                    ],
                    exports: [
                        _user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
                    ],
                    providers: [
                        _user_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                        _user_player_service__WEBPACK_IMPORTED_MODULE_7__["UserPlayerService"],
                    ]
                })
            ], UserModule);
            /***/ 
        }),
        /***/ "./src/app/containers/user/playlists/index.ts": 
        /*!****************************************************!*\
          !*** ./src/app/containers/user/playlists/index.ts ***!
          \****************************************************/
        /*! exports provided: PlaylistsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _playlists_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlists.component */ "./src/app/containers/user/playlists/playlists.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaylistsComponent", function () { return _playlists_component__WEBPACK_IMPORTED_MODULE_0__["PlaylistsComponent"]; });
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            /***/ 
        }),
        /***/ "./src/app/containers/user/playlists/playlists.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/containers/user/playlists/playlists.component.ts ***!
          \******************************************************************/
        /*! exports provided: PlaylistsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsComponent", function () { return PlaylistsComponent; });
            /* harmony import */ var _user_player_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-player.service */ "./src/app/containers/user/user-player.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var PlaylistsComponent = /** @class */ (function () {
                function PlaylistsComponent(store, userPlayerService) {
                    this.store = store;
                    this.userPlayerService = userPlayerService;
                    this.playlists$ = this.store.select(function (state) { return state.user.playlists; });
                }
                PlaylistsComponent.prototype.ngOnInit = function () { };
                PlaylistsComponent.prototype.playSelectedPlaylist = function (playlist) {
                    this.userPlayerService.playSelectedPlaylist(playlist);
                };
                PlaylistsComponent.prototype.queueSelectedPlaylist = function (playlist) {
                    this.userPlayerService.queuePlaylist(playlist);
                };
                return PlaylistsComponent;
            }());
            PlaylistsComponent.ctorParameters = function () { return [
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
                { type: _user_player_service__WEBPACK_IMPORTED_MODULE_0__["UserPlayerService"] }
            ]; };
            PlaylistsComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'playlists',
                    template: "\n  <section class=\"videos-list\">\n    <div class=\"list-unstyled ux-maker youtube-items-container clearfix\">\n      <youtube-playlist\n        *ngFor=\"let playlist of playlists$ | async\"\n        [media]=\"playlist\"\n        link=\"/user/\"\n        (play)=\"playSelectedPlaylist(playlist)\"\n        (queue)=\"queueSelectedPlaylist(playlist)\">\n      </youtube-playlist>\n    </div>\n  </section>\n  "
                }),
                __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
                    _user_player_service__WEBPACK_IMPORTED_MODULE_0__["UserPlayerService"]])
            ], PlaylistsComponent);
            /***/ 
        }),
        /***/ "./src/app/containers/user/user-player.service.ts": 
        /*!********************************************************!*\
          !*** ./src/app/containers/user/user-player.service.ts ***!
          \********************************************************/
        /*! exports provided: UserPlayerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPlayerService", function () { return UserPlayerService; });
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
            /* harmony import */ var _core_store_now_playlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/store/now-playlist */ "./src/app/core/store/now-playlist/index.ts");
            /* harmony import */ var _core_store_app_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/store/app-player */ "./src/app/core/store/app-player/index.ts");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var UserPlayerService = /** @class */ (function () {
                function UserPlayerService(nowPlaylistService, userProfile, store) {
                    this.nowPlaylistService = nowPlaylistService;
                    this.userProfile = userProfile;
                    this.store = store;
                }
                UserPlayerService.prototype.playSelectedPlaylist = function (playlist) {
                    var _this = this;
                    this.userProfile
                        .fetchPlaylistItems(playlist.id, '')
                        .subscribe(function (items) {
                        _this.store.dispatch(new _core_store_now_playlist__WEBPACK_IMPORTED_MODULE_3__["QueueVideos"](items));
                        _this.nowPlaylistService.updateIndexByMedia(items[0].id);
                        _this.store.dispatch(new _core_store_app_player__WEBPACK_IMPORTED_MODULE_4__["LoadAndPlay"](items[0]));
                    });
                };
                UserPlayerService.prototype.queuePlaylist = function (playlist) {
                    var _this = this;
                    this.userProfile
                        .fetchPlaylistItems(playlist.id, '')
                        .subscribe(function (items) {
                        _this.store.dispatch(new _core_store_now_playlist__WEBPACK_IMPORTED_MODULE_3__["QueueVideos"](items));
                        return items;
                    });
                };
                UserPlayerService.prototype.queueVideo = function (media) {
                    this.store.dispatch(new _core_store_now_playlist__WEBPACK_IMPORTED_MODULE_3__["QueueVideo"](media));
                };
                UserPlayerService.prototype.playVideo = function (media) {
                    this.store.dispatch(new _core_store_app_player__WEBPACK_IMPORTED_MODULE_4__["LoadAndPlay"](media));
                    this.store.dispatch(new _core_store_now_playlist__WEBPACK_IMPORTED_MODULE_3__["QueueVideo"](media));
                    this.store.dispatch(new _core_store_now_playlist__WEBPACK_IMPORTED_MODULE_3__["SelectVideo"](media));
                };
                return UserPlayerService;
            }());
            UserPlayerService.ctorParameters = function () { return [
                { type: _core_services__WEBPACK_IMPORTED_MODULE_2__["NowPlaylistService"] },
                { type: _core_services__WEBPACK_IMPORTED_MODULE_2__["UserProfile"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] }
            ]; };
            UserPlayerService = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["NowPlaylistService"],
                    _core_services__WEBPACK_IMPORTED_MODULE_2__["UserProfile"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]])
            ], UserPlayerService);
            /***/ 
        }),
        /***/ "./src/app/containers/user/user.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/containers/user/user.component.ts ***!
          \***************************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _core_store_user_profile_user_profile_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/store/user-profile/user-profile.selectors */ "./src/app/core/store/user-profile/user-profile.selectors.ts");
            /* harmony import */ var _api_app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/app.api */ "./src/app/core/api/app.api.ts");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var UserComponent = /** @class */ (function () {
                function UserComponent(appApi, store) {
                    this.appApi = appApi;
                    this.store = store;
                    this.playlists$ = this.store.select(_core_store_user_profile_user_profile_selectors__WEBPACK_IMPORTED_MODULE_2__["getUserPlaylists"]);
                    this.currentPlaylist$ = this.store.select(_core_store_user_profile_user_profile_selectors__WEBPACK_IMPORTED_MODULE_2__["getUserViewPlaylist"]);
                    this.isSignedIn$ = this.store.select(_core_store_user_profile_user_profile_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsUserSignedIn"]);
                }
                UserComponent.prototype.ngOnInit = function () { };
                UserComponent.prototype.signInUser = function () {
                    this.appApi.signinUser();
                };
                return UserComponent;
            }());
            UserComponent.ctorParameters = function () { return [
                { type: _api_app_api__WEBPACK_IMPORTED_MODULE_3__["AppApi"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
            ]; };
            UserComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-user',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    template: "\n  <article>\n    <app-navbar\n      [header]=\"'My Profile - My Playlists'\"\n      [headerIcon]=\"'heart-o'\"\n    ></app-navbar>\n    <p *ngIf=\"!(isSignedIn$ | async)\" class=\"well lead\">\n      To view your playlists in youtube, you need to sign in.\n      <button class=\"btn btn-lg btn-primary\"\n        (click)=\"signInUser()\">\n        <icon name=\"google\"></icon> Sign In\n      </button>\n    </p>\n    <router-outlet></router-outlet>\n  </article>\n  ",
                    styles: [__importDefault(__webpack_require__(/*! ./user.scss */ "./src/app/containers/user/user.scss")).default]
                }),
                __metadata("design:paramtypes", [_api_app_api__WEBPACK_IMPORTED_MODULE_3__["AppApi"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
            ], UserComponent);
            /***/ 
        }),
        /***/ "./src/app/containers/user/user.guard.ts": 
        /*!***********************************************!*\
          !*** ./src/app/containers/user/user.guard.ts ***!
          \***********************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(authorization, router) {
                    this.authorization = authorization;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    // console.log('AuthGuard#canActivate called', { state });
                    var url = state.url;
                    return this.checkLogin(url);
                };
                AuthGuard.prototype.canActivateChild = function (route, state) {
                    return this.canActivate(route, state);
                };
                AuthGuard.prototype.checkLogin = function (url) {
                    if (this.authorization.isSignIn()) {
                        return true;
                    }
                    // Store the attempted URL for redirecting
                    // this.authService.redirectUrl = url;
                    // Navigate to the login page with extras
                    this.router.navigate(['/user']);
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _core_services__WEBPACK_IMPORTED_MODULE_2__["Authorization"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
            ]; };
            AuthGuard = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
                __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["Authorization"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/containers/user/user.routing.ts": 
        /*!*************************************************!*\
          !*** ./src/app/containers/user/user.routing.ts ***!
          \*************************************************/
        /*! exports provided: routing */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function () { return routing; });
            /* harmony import */ var _core_resolvers_playlist_videos_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/resolvers/playlist-videos.resolver */ "./src/app/core/resolvers/playlist-videos.resolver.ts");
            /* harmony import */ var _core_resolvers_playlist_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/resolvers/playlist.resolver */ "./src/app/core/resolvers/playlist.resolver.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/containers/user/user.component.ts");
            /* harmony import */ var _playlists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playlists */ "./src/app/containers/user/playlists/index.ts");
            /* harmony import */ var _playlist_view_playlist_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../playlist-view/playlist-view.component */ "./src/app/containers/playlist-view/playlist-view.component.ts");
            /* harmony import */ var _user_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.guard */ "./src/app/containers/user/user.guard.ts");
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '', component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
                    children: [
                        { path: '', redirectTo: 'playlists', pathMatch: 'full' },
                        { path: 'playlists', component: _playlists__WEBPACK_IMPORTED_MODULE_4__["PlaylistsComponent"] },
                        {
                            path: 'playlist/:id', component: _playlist_view_playlist_view_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistViewComponent"],
                            canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], canActivateChild: [_user_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                            resolve: {
                                videos: _core_resolvers_playlist_videos_resolver__WEBPACK_IMPORTED_MODULE_0__["PlaylistVideosResolver"],
                                playlist: _core_resolvers_playlist_resolver__WEBPACK_IMPORTED_MODULE_1__["PlaylistResolver"]
                            }
                        }
                    ]
                },
            ]);
            /***/ 
        }),
        /***/ "./src/app/containers/user/user.scss": 
        /*!*******************************************!*\
          !*** ./src/app/containers/user/user.scss ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("app-user article {\n  padding-bottom: 5rem;\n  padding-top: 7rem; }\n\napp-user h2 small {\n  color: gray; }\n\napp-user .youtube-items-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy91c2VyL0M6XFxVc2Vyc1xcbWFuanVuYXRoXFxEb2N1bWVudHNcXG15d29ya1xceW91dHViZVxcZWNob2VzLXBsYXllci9zcmNcXGFwcFxcY29udGFpbmVyc1xcdXNlclxcdXNlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQW9CO0VBQ3BCLGlCQUFnQixFQUFBOztBQUhwQjtFQU9NLFdBQVcsRUFBQTs7QUFQakI7RUFXSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvdXNlci91c2VyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdXNlciB7XHJcbiAgYXJ0aWNsZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOjdyZW07XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIHNtYWxsIHtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC55b3V0dWJlLWl0ZW1zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */");
            /***/ 
        })
    }]);
//# sourceMappingURL=app-containers-user-index-es2017.js.map
//# sourceMappingURL=app-containers-user-index-es2017.js.map
//# sourceMappingURL=app-containers-user-index-es2017.js.map