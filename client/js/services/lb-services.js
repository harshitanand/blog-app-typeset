// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.BlogPost
 * @header lbServices.BlogPost
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BlogPost` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "BlogPost",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/BlogPosts/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use BlogPost.postContents.findById() instead.
            "prototype$__findById__postContents": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/BlogPosts/:id/postContents/:fk",
              method: "GET",
            },

            // INTERNAL. Use BlogPost.postContents.destroyById() instead.
            "prototype$__destroyById__postContents": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/BlogPosts/:id/postContents/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BlogPost.postContents.updateById() instead.
            "prototype$__updateById__postContents": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/BlogPosts/:id/postContents/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BlogPost.postContents() instead.
            "prototype$__get__postContents": {
              isArray: true,
              url: urlBase + "/BlogPosts/:id/postContents",
              method: "GET",
            },

            // INTERNAL. Use BlogPost.postContents.create() instead.
            "prototype$__create__postContents": {
              url: urlBase + "/BlogPosts/:id/postContents",
              method: "POST",
            },

            // INTERNAL. Use BlogPost.postContents.destroyAll() instead.
            "prototype$__delete__postContents": {
              url: urlBase + "/BlogPosts/:id/postContents",
              method: "DELETE",
            },

            // INTERNAL. Use BlogPost.postContents.count() instead.
            "prototype$__count__postContents": {
              url: urlBase + "/BlogPosts/:id/postContents/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#create
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/BlogPosts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#createMany
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/BlogPosts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#patchOrCreate
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/BlogPosts",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#replaceOrCreate
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/BlogPosts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#upsertWithWhere
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/BlogPosts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#exists
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/BlogPosts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#findById
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/BlogPosts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#replaceById
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/BlogPosts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#find
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/BlogPosts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#findOne
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/BlogPosts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#updateAll
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/BlogPosts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#deleteById
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/BlogPosts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#count
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/BlogPosts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#prototype$patchAttributes
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BlogPost id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/BlogPosts/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#createChangeStream
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/BlogPosts/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#getPostById
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{number}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "getPostById": {
              url: urlBase + "/BlogPosts/getPostById/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#getAllPosts
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `skip` – `{number}` -
             *
             *  - `limit` – `{number}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
            "getAllPosts": {
              isArray: true,
              url: urlBase + "/BlogPosts/getAllPosts",
              method: "GET",
            },

            // INTERNAL. Use PostContent.blogPost() instead.
            "::get::PostContent::blogPost": {
              url: urlBase + "/PostContents/:id/blogPost",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.BlogPost#upsert
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#updateOrCreate
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#patchOrCreateWithWhere
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#update
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#destroyById
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#removeById
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BlogPost#updateAttributes
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BlogPost id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.BlogPost#modelName
        * @propertyOf lbServices.BlogPost
        * @description
        * The name of the model represented by this $resource,
        * i.e. `BlogPost`.
        */
        R.modelName = "BlogPost";

    /**
     * @ngdoc object
     * @name lbServices.BlogPost.postContents
     * @header lbServices.BlogPost.postContents
     * @object
     * @description
     *
     * The object `BlogPost.postContents` groups methods
     * manipulating `PostContent` instances related to `BlogPost`.
     *
     * Call {@link lbServices.BlogPost#postContents BlogPost.postContents()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.BlogPost#postContents
             * @methodOf lbServices.BlogPost
             *
             * @description
             *
             * Queries postContents of BlogPost.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BlogPost id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R.postContents = function() {
          var TargetResource = $injector.get("PostContent");
          var action = TargetResource["::get::BlogPost::postContents"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BlogPost.postContents#count
             * @methodOf lbServices.BlogPost.postContents
             *
             * @description
             *
             * Counts postContents of BlogPost.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BlogPost id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.postContents.count = function() {
          var TargetResource = $injector.get("PostContent");
          var action = TargetResource["::count::BlogPost::postContents"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BlogPost.postContents#create
             * @methodOf lbServices.BlogPost.postContents
             *
             * @description
             *
             * Creates a new instance in postContents of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BlogPost id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R.postContents.create = function() {
          var TargetResource = $injector.get("PostContent");
          var action = TargetResource["::create::BlogPost::postContents"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BlogPost.postContents#createMany
             * @methodOf lbServices.BlogPost.postContents
             *
             * @description
             *
             * Creates a new instance in postContents of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BlogPost id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R.postContents.createMany = function() {
          var TargetResource = $injector.get("PostContent");
          var action = TargetResource["::createMany::BlogPost::postContents"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BlogPost.postContents#destroyAll
             * @methodOf lbServices.BlogPost.postContents
             *
             * @description
             *
             * Deletes all postContents of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BlogPost id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.postContents.destroyAll = function() {
          var TargetResource = $injector.get("PostContent");
          var action = TargetResource["::delete::BlogPost::postContents"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BlogPost.postContents#destroyById
             * @methodOf lbServices.BlogPost.postContents
             *
             * @description
             *
             * Delete a related item by id for postContents.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BlogPost id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for postContents
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.postContents.destroyById = function() {
          var TargetResource = $injector.get("PostContent");
          var action = TargetResource["::destroyById::BlogPost::postContents"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BlogPost.postContents#findById
             * @methodOf lbServices.BlogPost.postContents
             *
             * @description
             *
             * Find a related item by id for postContents.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BlogPost id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for postContents
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R.postContents.findById = function() {
          var TargetResource = $injector.get("PostContent");
          var action = TargetResource["::findById::BlogPost::postContents"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.BlogPost.postContents#updateById
             * @methodOf lbServices.BlogPost.postContents
             *
             * @description
             *
             * Update a related item by id for postContents.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - BlogPost id
             *
             *  - `fk` – `{*}` - Foreign key for postContents
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R.postContents.updateById = function() {
          var TargetResource = $injector.get("PostContent");
          var action = TargetResource["::updateById::BlogPost::postContents"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.PostContent
 * @header lbServices.PostContent
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PostContent` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "PostContent",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/PostContents/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use PostContent.blogPost() instead.
            "prototype$__get__blogPost": {
              url: urlBase + "/PostContents/:id/blogPost",
              method: "GET",
            },

            // INTERNAL. Use PostContent.contentComments.findById() instead.
            "prototype$__findById__contentComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PostContents/:id/contentComments/:fk",
              method: "GET",
            },

            // INTERNAL. Use PostContent.contentComments.destroyById() instead.
            "prototype$__destroyById__contentComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PostContents/:id/contentComments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use PostContent.contentComments.updateById() instead.
            "prototype$__updateById__contentComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PostContents/:id/contentComments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use PostContent.contentComments() instead.
            "prototype$__get__contentComments": {
              isArray: true,
              url: urlBase + "/PostContents/:id/contentComments",
              method: "GET",
            },

            // INTERNAL. Use PostContent.contentComments.create() instead.
            "prototype$__create__contentComments": {
              url: urlBase + "/PostContents/:id/contentComments",
              method: "POST",
            },

            // INTERNAL. Use PostContent.contentComments.destroyAll() instead.
            "prototype$__delete__contentComments": {
              url: urlBase + "/PostContents/:id/contentComments",
              method: "DELETE",
            },

            // INTERNAL. Use PostContent.contentComments.count() instead.
            "prototype$__count__contentComments": {
              url: urlBase + "/PostContents/:id/contentComments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#create
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/PostContents",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#createMany
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/PostContents",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#patchOrCreate
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/PostContents",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#replaceOrCreate
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/PostContents/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#upsertWithWhere
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/PostContents/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#exists
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/PostContents/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#findById
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/PostContents/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#replaceById
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/PostContents/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#find
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/PostContents",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#findOne
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/PostContents/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#updateAll
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/PostContents/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#deleteById
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/PostContents/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#count
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/PostContents/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#prototype$patchAttributes
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostContent id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/PostContents/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.PostContent#createChangeStream
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/PostContents/change-stream",
              method: "POST",
            },

            // INTERNAL. Use BlogPost.postContents.findById() instead.
            "::findById::BlogPost::postContents": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/BlogPosts/:id/postContents/:fk",
              method: "GET",
            },

            // INTERNAL. Use BlogPost.postContents.destroyById() instead.
            "::destroyById::BlogPost::postContents": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/BlogPosts/:id/postContents/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use BlogPost.postContents.updateById() instead.
            "::updateById::BlogPost::postContents": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/BlogPosts/:id/postContents/:fk",
              method: "PUT",
            },

            // INTERNAL. Use BlogPost.postContents() instead.
            "::get::BlogPost::postContents": {
              isArray: true,
              url: urlBase + "/BlogPosts/:id/postContents",
              method: "GET",
            },

            // INTERNAL. Use BlogPost.postContents.create() instead.
            "::create::BlogPost::postContents": {
              url: urlBase + "/BlogPosts/:id/postContents",
              method: "POST",
            },

            // INTERNAL. Use BlogPost.postContents.createMany() instead.
            "::createMany::BlogPost::postContents": {
              isArray: true,
              url: urlBase + "/BlogPosts/:id/postContents",
              method: "POST",
            },

            // INTERNAL. Use BlogPost.postContents.destroyAll() instead.
            "::delete::BlogPost::postContents": {
              url: urlBase + "/BlogPosts/:id/postContents",
              method: "DELETE",
            },

            // INTERNAL. Use BlogPost.postContents.count() instead.
            "::count::BlogPost::postContents": {
              url: urlBase + "/BlogPosts/:id/postContents/count",
              method: "GET",
            },

            // INTERNAL. Use ContentComment.postContent() instead.
            "::get::ContentComment::postContent": {
              url: urlBase + "/ContentComments/:id/postContent",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.PostContent#upsert
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.PostContent#updateOrCreate
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.PostContent#patchOrCreateWithWhere
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.PostContent#update
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.PostContent#destroyById
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.PostContent#removeById
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.PostContent#updateAttributes
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostContent id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.PostContent#modelName
        * @propertyOf lbServices.PostContent
        * @description
        * The name of the model represented by this $resource,
        * i.e. `PostContent`.
        */
        R.modelName = "PostContent";


            /**
             * @ngdoc method
             * @name lbServices.PostContent#blogPost
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Fetches belongsTo relation blogPost.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostContent id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BlogPost` object.)
             * </em>
             */
        R.blogPost = function() {
          var TargetResource = $injector.get("BlogPost");
          var action = TargetResource["::get::PostContent::blogPost"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.PostContent.contentComments
     * @header lbServices.PostContent.contentComments
     * @object
     * @description
     *
     * The object `PostContent.contentComments` groups methods
     * manipulating `ContentComment` instances related to `PostContent`.
     *
     * Call {@link lbServices.PostContent#contentComments PostContent.contentComments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.PostContent#contentComments
             * @methodOf lbServices.PostContent
             *
             * @description
             *
             * Queries contentComments of PostContent.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostContent id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
        R.contentComments = function() {
          var TargetResource = $injector.get("ContentComment");
          var action = TargetResource["::get::PostContent::contentComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PostContent.contentComments#count
             * @methodOf lbServices.PostContent.contentComments
             *
             * @description
             *
             * Counts contentComments of PostContent.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostContent id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.contentComments.count = function() {
          var TargetResource = $injector.get("ContentComment");
          var action = TargetResource["::count::PostContent::contentComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PostContent.contentComments#create
             * @methodOf lbServices.PostContent.contentComments
             *
             * @description
             *
             * Creates a new instance in contentComments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostContent id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
        R.contentComments.create = function() {
          var TargetResource = $injector.get("ContentComment");
          var action = TargetResource["::create::PostContent::contentComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PostContent.contentComments#createMany
             * @methodOf lbServices.PostContent.contentComments
             *
             * @description
             *
             * Creates a new instance in contentComments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostContent id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
        R.contentComments.createMany = function() {
          var TargetResource = $injector.get("ContentComment");
          var action = TargetResource["::createMany::PostContent::contentComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PostContent.contentComments#destroyAll
             * @methodOf lbServices.PostContent.contentComments
             *
             * @description
             *
             * Deletes all contentComments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostContent id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.contentComments.destroyAll = function() {
          var TargetResource = $injector.get("ContentComment");
          var action = TargetResource["::delete::PostContent::contentComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PostContent.contentComments#destroyById
             * @methodOf lbServices.PostContent.contentComments
             *
             * @description
             *
             * Delete a related item by id for contentComments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostContent id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for contentComments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.contentComments.destroyById = function() {
          var TargetResource = $injector.get("ContentComment");
          var action = TargetResource["::destroyById::PostContent::contentComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PostContent.contentComments#findById
             * @methodOf lbServices.PostContent.contentComments
             *
             * @description
             *
             * Find a related item by id for contentComments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostContent id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for contentComments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
        R.contentComments.findById = function() {
          var TargetResource = $injector.get("ContentComment");
          var action = TargetResource["::findById::PostContent::contentComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.PostContent.contentComments#updateById
             * @methodOf lbServices.PostContent.contentComments
             *
             * @description
             *
             * Update a related item by id for contentComments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PostContent id
             *
             *  - `fk` – `{*}` - Foreign key for contentComments
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
        R.contentComments.updateById = function() {
          var TargetResource = $injector.get("ContentComment");
          var action = TargetResource["::updateById::PostContent::contentComments"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ContentComment
 * @header lbServices.ContentComment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ContentComment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ContentComment",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/ContentComments/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use ContentComment.postContent() instead.
            "prototype$__get__postContent": {
              url: urlBase + "/ContentComments/:id/postContent",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#create
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/ContentComments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#createMany
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/ContentComments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#patchOrCreate
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/ContentComments",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#replaceOrCreate
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/ContentComments/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#upsertWithWhere
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/ContentComments/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#exists
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/ContentComments/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#findById
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/ContentComments/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#replaceById
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/ContentComments/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#find
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/ContentComments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#findOne
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/ContentComments/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#updateAll
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/ContentComments/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#deleteById
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/ContentComments/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#count
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/ContentComments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#prototype$patchAttributes
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ContentComment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/ContentComments/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#createChangeStream
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/ContentComments/change-stream",
              method: "POST",
            },

            // INTERNAL. Use PostContent.contentComments.findById() instead.
            "::findById::PostContent::contentComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PostContents/:id/contentComments/:fk",
              method: "GET",
            },

            // INTERNAL. Use PostContent.contentComments.destroyById() instead.
            "::destroyById::PostContent::contentComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PostContents/:id/contentComments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use PostContent.contentComments.updateById() instead.
            "::updateById::PostContent::contentComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/PostContents/:id/contentComments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use PostContent.contentComments() instead.
            "::get::PostContent::contentComments": {
              isArray: true,
              url: urlBase + "/PostContents/:id/contentComments",
              method: "GET",
            },

            // INTERNAL. Use PostContent.contentComments.create() instead.
            "::create::PostContent::contentComments": {
              url: urlBase + "/PostContents/:id/contentComments",
              method: "POST",
            },

            // INTERNAL. Use PostContent.contentComments.createMany() instead.
            "::createMany::PostContent::contentComments": {
              isArray: true,
              url: urlBase + "/PostContents/:id/contentComments",
              method: "POST",
            },

            // INTERNAL. Use PostContent.contentComments.destroyAll() instead.
            "::delete::PostContent::contentComments": {
              url: urlBase + "/PostContents/:id/contentComments",
              method: "DELETE",
            },

            // INTERNAL. Use PostContent.contentComments.count() instead.
            "::count::PostContent::contentComments": {
              url: urlBase + "/PostContents/:id/contentComments/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ContentComment#upsert
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#updateOrCreate
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#patchOrCreateWithWhere
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#update
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#destroyById
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#removeById
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ContentComment#updateAttributes
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ContentComment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ContentComment` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ContentComment#modelName
        * @propertyOf lbServices.ContentComment
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ContentComment`.
        */
        R.modelName = "ContentComment";


            /**
             * @ngdoc method
             * @name lbServices.ContentComment#postContent
             * @methodOf lbServices.ContentComment
             *
             * @description
             *
             * Fetches belongsTo relation postContent.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ContentComment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PostContent` object.)
             * </em>
             */
        R.postContent = function() {
          var TargetResource = $injector.get("PostContent");
          var action = TargetResource["::get::ContentComment::postContent"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
