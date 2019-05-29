"use strict";
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var WebApi_1 = require("azure-devops-node-api/WebApi");
var pipeline_1 = require("./pipeline");
var AzureApi = /** @class */ (function () {
    function AzureApi(teamFoundationUri, accessKey) {
        this.connection = this.createConnection(teamFoundationUri, accessKey);
    }
    AzureApi.prototype.postNewCommentThread = function (thread, pullRequestId, repositoryId, projectName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.getGitApi()];
                    case 1:
                        (_a.sent()).createThread(thread, repositoryId, pullRequestId, projectName);
                        return [2 /*return*/];
                }
            });
        });
    };
    AzureApi.prototype.getBuild = function (project, buildId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = pipeline_1.Build.bind;
                        return [4 /*yield*/, this.getBuildData(project, buildId)];
                    case 1:
                        _b = [void 0, _c.sent()];
                        return [4 /*yield*/, this.getBuildTimeline(project, buildId)];
                    case 2: 
                    //return (await this.connection.getBuildApi()).getBuild(project, buildId);
                    return [2 /*return*/, new (_a.apply(pipeline_1.Build, _b.concat([_c.sent()])))()];
                }
            });
        });
    };
    AzureApi.prototype.getBuilds = function (project, definitions, reason, status, maxNumber, branchName) {
        return __awaiter(this, void 0, void 0, function () {
            var builds, rawBuildsData, numberBuild, id, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        builds = [];
                        return [4 /*yield*/, this.connection.getBuildApi()];
                    case 1: return [4 /*yield*/, (_e.sent()).getBuilds(project, definitions, undefined, undefined, undefined, undefined, undefined, reason, status, undefined, undefined, undefined, maxNumber, undefined, undefined, undefined, undefined, branchName)];
                    case 2:
                        rawBuildsData = _e.sent();
                        numberBuild = 0;
                        _e.label = 3;
                    case 3:
                        if (!(numberBuild < rawBuildsData.length)) return [3 /*break*/, 7];
                        id = Number(rawBuildsData[numberBuild].id);
                        _a = builds;
                        _b = numberBuild;
                        _c = pipeline_1.Build.bind;
                        return [4 /*yield*/, this.getBuildData(project, id)];
                    case 4:
                        _d = [void 0, _e.sent()];
                        return [4 /*yield*/, this.getBuildTimeline(project, id)];
                    case 5:
                        _a[_b] = new (_c.apply(pipeline_1.Build, _d.concat([_e.sent()])))();
                        _e.label = 6;
                    case 6:
                        numberBuild++;
                        return [3 /*break*/, 3];
                    case 7: return [2 /*return*/, builds];
                }
            });
        });
    };
    AzureApi.prototype.getBuildData = function (project, buildId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.getBuildApi()];
                    case 1: return [2 /*return*/, (_a.sent()).getBuild(project, buildId)];
                }
            });
        });
    };
    AzureApi.prototype.getBuildTimeline = function (project, buildId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.getBuildApi()];
                    case 1: return [2 /*return*/, (_a.sent()).getBuildTimeline(project, buildId)];
                }
            });
        });
    };
    AzureApi.prototype.getRelease = function (project, releaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.getReleaseApi()];
                    case 1: return [2 /*return*/, (_a.sent()).getRelease(project, releaseId)];
                }
            });
        });
    };
    AzureApi.prototype.createConnection = function (teamFoundationUri, accessToken) {
        var creds = WebApi_1.getPersonalAccessTokenHandler(accessToken);
        return new WebApi_1.WebApi(teamFoundationUri, creds);
    };
    return AzureApi;
}());
exports.AzureApi = AzureApi;
