"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** QueryBundleRequest constants */
var BUNDLE_MASK_QUERY_RESULTS = exports.BUNDLE_MASK_QUERY_RESULTS = 1;
var BUNDLE_MASK_QUERY_COUNT = exports.BUNDLE_MASK_QUERY_COUNT = 2;
var BUNDLE_MASK_QUERY_SELECT_COLUMNS = exports.BUNDLE_MASK_QUERY_SELECT_COLUMNS = 4;
var BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE = exports.BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE = 8;
var BUNDLE_MASK_QUERY_COLUMN_MODELS = exports.BUNDLE_MASK_QUERY_COLUMN_MODELS = 16;
var BUNDLE_MASK_QUERY_FACETS = exports.BUNDLE_MASK_QUERY_FACETS = 32;

/** EntityBundle constants */
var ENTITY_BUNDLE_MASK_ENTITY = exports.ENTITY_BUNDLE_MASK_ENTITY = 1;
var ENTITY_BUNDLE_MASK_ANNOTATIONS = exports.ENTITY_BUNDLE_MASK_ANNOTATIONS = 2;
var ENTITY_BUNDLE_MASK_PERMISSIONS = exports.ENTITY_BUNDLE_MASK_PERMISSIONS = 4;
var ENTITY_BUNDLE_MASK_ENTITY_PATH = exports.ENTITY_BUNDLE_MASK_ENTITY_PATH = 8;
var ENTITY_BUNDLE_MASK_HAS_CHILDREN = exports.ENTITY_BUNDLE_MASK_HAS_CHILDREN = 32;
var ENTITY_BUNDLE_MASK_ACL = exports.ENTITY_BUNDLE_MASK_ACL = 64;
var ENTITY_BUNDLE_MASK_FILE_HANDLES = exports.ENTITY_BUNDLE_MASK_FILE_HANDLES = 2048;
var ENTITY_BUNDLE_MASK_TABLE_DATA = exports.ENTITY_BUNDLE_MASK_TABLE_DATA = 4096;
var ENTITY_BUNDLE_MASK_ROOT_WIKI_ID = exports.ENTITY_BUNDLE_MASK_ROOT_WIKI_ID = 8192;
var ENTITY_BUNDLE_MASK_BENEFACTOR_ACL = exports.ENTITY_BUNDLE_MASK_BENEFACTOR_ACL = 16384;
var ENTITY_BUNDLE_MASK_DOI = exports.ENTITY_BUNDLE_MASK_DOI = 32768;
var ENTITY_BUNDLE_MASK_FILE_NAME = exports.ENTITY_BUNDLE_MASK_FILE_NAME = 65536;
var ENTITY_BUNDLE_MASK_THREAD_COUNT = exports.ENTITY_BUNDLE_MASK_THREAD_COUNT = 131072;
var ENTITY_BUNDLE_MASK_RESTRICTION_INFORMATION = exports.ENTITY_BUNDLE_MASK_RESTRICTION_INFORMATION = 262144;